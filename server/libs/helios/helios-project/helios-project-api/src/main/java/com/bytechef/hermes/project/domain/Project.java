
/*
 * Copyright 2021 <your company/name>.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.bytechef.hermes.project.domain;

import com.bytechef.category.domain.Category;
import com.bytechef.tag.domain.Tag;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Objects;
import java.util.Set;

import edu.umd.cs.findbugs.annotations.SuppressFBWarnings;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.LastModifiedBy;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.annotation.PersistenceCreator;
import org.springframework.data.annotation.Transient;
import org.springframework.data.annotation.Version;
import org.springframework.data.domain.Persistable;
import org.springframework.data.jdbc.core.mapping.AggregateReference;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.MappedCollection;
import org.springframework.data.relational.core.mapping.Table;
import org.springframework.util.CollectionUtils;

/**
 * @author Ivica Cardic
 */
@Table
public final class Project implements Persistable<Long> {

    public enum Status {
        PUBLISHED, UNPUBLISHED
    }

    @Transient
    private Category category;

    @Column("category_id")
    private AggregateReference<Category, Long> categoryId;

    @CreatedBy
    @Column("created_by")
    private String createdBy;

    @Column("created_date")
    @CreatedDate
    private LocalDateTime createdDate;

    @Column
    private String description;

    @Id
    private Long id;

    @Column
    private String name;

    @Column("last_modified_by")
    @LastModifiedBy
    private String lastModifiedBy;

    @Column("last_modified_date")
    @LastModifiedDate
    private LocalDateTime lastModifiedDate;

    @Column("published_date")
    private LocalDateTime publishedDate;

    @MappedCollection(idColumn = "project_id")
    private Set<ProjectTag> projectTags = new HashSet<>();

    @Column
    private int projectVersion;

    @MappedCollection(idColumn = "project_id")
    private Set<ProjectWorkflow> projectWorkflows = new HashSet<>();

    @Column
    private Status status;

    @Transient
    private List<Tag> tags = new ArrayList<>();

    @Version
    private int version;

    public Project() {
    }

    @PersistenceCreator
    public Project(
        String name, String description, Set<ProjectTag> projectTags,
        Set<ProjectWorkflow> projectWorkflows) {

        this.name = name;
        this.description = description;
        this.projectTags.addAll(projectTags);
        this.projectWorkflows.addAll(projectWorkflows);
    }

    public void addTag(Tag tag) {
        if (tag.getId() != null) {
            projectTags.add(new ProjectTag(tag));
        }

        tags.add(tag);
    }

    public void addWorkflow(String workflowId) {
        projectWorkflows.add(new ProjectWorkflow(workflowId));
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }

        if (o == null || getClass() != o.getClass()) {
            return false;
        }

        Project project = (Project) o;

        return Objects.equals(id, project.id);
    }

    @Override
    public int hashCode() {
        return getClass().hashCode();
    }

    public Long getCategoryId() {
        return categoryId == null ? null : categoryId.getId();
    }

    @SuppressFBWarnings("EI")
    public Category getCategory() {
        return category;
    }

    public String getCreatedBy() {
        return createdBy;
    }

    public LocalDateTime getCreatedDate() {
        return createdDate;
    }

    public String getDescription() {
        return description;
    }

    @Override
    public Long getId() {
        return id;
    }

    public LocalDateTime getPublishedDate() {
        return publishedDate;
    }

    public String getName() {
        return name;
    }

    public String getLastModifiedBy() {
        return lastModifiedBy;
    }

    public LocalDateTime getLastModifiedDate() {
        return lastModifiedDate;
    }

    public int getProjectVersion() {
        return projectVersion;
    }

    public Status getStatus() {
        return status;
    }

    public List<Long> getTagIds() {
        return projectTags
            .stream()
            .map(ProjectTag::getTagId)
            .toList();
    }

    public List<Tag> getTags() {
        return List.copyOf(tags);
    }

    public List<String> getWorkflowIds() {
        return projectWorkflows.stream()
            .map(ProjectWorkflow::getWorkflowId)
            .toList();
    }

    public int getVersion() {
        return version;
    }

    @Override
    public boolean isNew() {
        return id == null;
    }

    public void removeWorkflow(String workflowId) {
        projectWorkflows.stream()
            .filter(projectWorkflow -> Objects.equals(projectWorkflow.getWorkflowId(), workflowId))
            .findFirst()
            .ifPresent(projectWorkflows::remove);
    }

    @SuppressFBWarnings({
        "EI", "NP"
    })
    public void setCategory(Category category) {
        this.category = category;

        if (category != null && !category.isNew()) {
            this.categoryId = AggregateReference.to(category.getId());
        }
    }

    public void setCategoryId(Long categoryId) {
        this.categoryId = AggregateReference.to(categoryId);
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setPublishedDate(LocalDateTime publishedDate) {
        this.publishedDate = publishedDate;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setProjectVersion(int projectVersion) {
        this.projectVersion = projectVersion;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    public void setTags(List<Tag> tags) {
        this.projectTags = new HashSet<>();
        this.tags = new ArrayList<>();

        if (!CollectionUtils.isEmpty(tags)) {
            for (Tag tag : tags) {
                addTag(tag);
            }
        }
    }

    public void setVersion(int version) {
        this.version = version;
    }

    public void setWorkflowIds(List<String> workflowIds) {
        projectWorkflows = new HashSet<>();

        for (String workflowId : workflowIds) {
            addWorkflow(workflowId);
        }
    }

    @Override
    public String toString() {
        return "Project{" +
            "id=" + id +
            ", name='" + name + '\'' +
            ", projectVersion='" + projectVersion + '\'' +
            ", status='" + status + '\'' +
            ", lastPublishedDate='" + publishedDate + '\'' +
            ", categoryId=" + getCategoryId() +
            ", description='" + description + '\'' +
            ", projectTags=" + projectTags +
            ", projectWorkflows=" + projectWorkflows +
            ", version=" + version +
            ", createdBy='" + createdBy + '\'' +
            ", createdDate=" + createdDate +
            ", lastModifiedBy='" + lastModifiedBy + '\'' +
            ", lastModifiedDate=" + lastModifiedDate +
            '}';
    }

    public Project update(Project project) {
        this.category = project.category;
        this.categoryId = project.categoryId;
        this.description = project.description;
        this.id = project.id;
        this.name = project.name;
        this.projectTags = project.projectTags;
        this.projectWorkflows = project.projectWorkflows;
        this.tags = project.tags;

        return this;
    }

    @SuppressFBWarnings("EI")
    public static final class Builder {
        private Category category;
        private String description;
        private Long id;
        private String name;
        private LocalDateTime publishedDate;
        private int projectVersion;
        private Status status;
        private List<Tag> tags;
        private List<String> workflowIds;

        private Builder() {
        }

        public static Builder builder() {
            return new Builder();
        }

        public Builder category(Category category) {
            this.category = category;
            return this;
        }

        public Builder description(String description) {
            this.description = description;
            return this;
        }

        public Builder id(Long id) {
            this.id = id;
            return this;
        }

        public Builder name(String name) {
            this.name = name;
            return this;
        }

        public Builder publishedDate(LocalDateTime publishedDate) {
            this.publishedDate = publishedDate;
            return this;
        }

        public Builder projectVersion(int projectVersion) {
            this.projectVersion = projectVersion;
            return this;
        }

        public Builder status(Status status) {
            this.status = status;
            return this;
        }

        public Builder tags(List<Tag> tags) {
            this.tags = tags;
            return this;
        }

        public Builder workflowIds(List<String> workflowIds) {
            this.workflowIds = workflowIds;

            return this;
        }

        public Project build() {
            Project project = new Project();

            project.setCategory(category);
            project.setDescription(description);
            project.setId(id);
            project.setName(name);
            project.setPublishedDate(publishedDate);
            project.setProjectVersion(projectVersion);
            project.setStatus(status);
            project.setTags(tags);
            project.setWorkflowIds(workflowIds);

            return project;
        }
    }
}
