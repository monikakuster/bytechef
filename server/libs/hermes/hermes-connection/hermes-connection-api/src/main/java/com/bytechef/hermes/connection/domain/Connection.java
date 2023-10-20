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

package com.bytechef.hermes.connection.domain;

import com.bytechef.commons.data.jdbc.wrapper.EncryptedMapWrapper;
import edu.umd.cs.findbugs.annotations.SuppressFBWarnings;
import java.time.LocalDateTime;
import java.util.Collections;
import java.util.Map;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.LastModifiedBy;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.domain.Persistable;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

/**
 * @author Ivica Cardic
 */
@Table
public final class Connection implements Persistable<String> {

    @Column("authorization_name")
    private String authorizationName;

    @Column("component_name")
    private String componentName;

    @Column("component_version")
    private int componentVersion;

    @CreatedBy
    @Column("created_by")
    private String createdBy;

    @Column("created_date")
    @CreatedDate
    private LocalDateTime createdDate;

    @Id
    private String id;

    @Column("last_modified_by")
    @LastModifiedBy
    private String lastModifiedBy;

    @Column("last_modified_date")
    @LastModifiedDate
    private LocalDateTime lastModifiedDate;

    @Column
    private String name;

    @Column("parameters")
    private EncryptedMapWrapper parameters;

    // TODO Add version
    // @Version
    @SuppressFBWarnings("UuF")
    private int version;

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }

        if (o == null || getClass() != o.getClass()) {
            return false;
        }

        Connection that = (Connection) o;

        return id.equals(that.id);
    }

    @Override
    public int hashCode() {
        return getClass().hashCode();
    }

    /**
     * Return the name of an authorization it is used with this connection.
     */
    public String getAuthorizationName() {
        return authorizationName;
    }

    /**
     * Return the name of a component.
     */
    public String getComponentName() {
        return componentName;
    }

    public int getComponentVersion() {
        return componentVersion;
    }

    public String getCreatedBy() {
        return createdBy;
    }

    /**
     * Return the time when the connection was originally created.
     *
     * @return {@link LocalDateTime}
     */
    public LocalDateTime getCreatedDate() {
        return createdDate;
    }

    /**
     * Return the ID of the connection.
     */
    public String getId() {
        return id;
    }

    public String getLastModifiedBy() {
        return lastModifiedBy;
    }

    /**
     * Return the time when the connection was updated.
     *
     * @return {@link LocalDateTime}
     */
    public LocalDateTime getLastModifiedDate() {
        return lastModifiedDate;
    }

    /**
     * Return the connection name.
     */
    public String getName() {
        return name;
    }

    /**
     * Return the connection parameters.
     */
    public Map<String, Object> getParameters() {
        return Collections.unmodifiableMap(parameters.getMap());
    }

    @Override
    public boolean isNew() {
        return id == null;
    }

    public void setAuthorizationName(String authorizationName) {
        this.authorizationName = authorizationName;
    }

    public void setComponentName(String componentName) {
        this.componentName = componentName;
    }

    public void setComponentVersion(int componentVersion) {
        this.componentVersion = componentVersion;
    }

    public void setCreatedBy(String createdBy) {
        this.createdBy = createdBy;
    }

    public void setCreatedDate(LocalDateTime createdDate) {
        this.createdDate = createdDate;
    }

    public void setId(String id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setParameters(Map<String, Object> parameters) {
        this.parameters = new EncryptedMapWrapper(parameters);
    }

    public void setLastModifiedBy(String lastModifiedBy) {
        this.lastModifiedBy = lastModifiedBy;
    }

    public void setLastModifiedDate(LocalDateTime lastModifiedDate) {
        this.lastModifiedDate = lastModifiedDate;
    }

    @Override
    public String toString() {
        return "Connection{" + "authorizationName='"
                + authorizationName + '\'' + ", componentName='"
                + componentName + '\'' + ", componentVersion="
                + componentVersion + ", createdBy='"
                + createdBy + '\'' + ", createdDate="
                + createdDate + ", id='"
                + id + '\'' + ", lastModifiedBy='"
                + lastModifiedBy + '\'' + ", lastModifiedDate="
                + lastModifiedDate + ", name='"
                + name + '\'' + ", parameters="
                + parameters + ", version="
                + version + '}';
    }
}
