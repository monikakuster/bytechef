/*
 * Copyright 2023-present ByteChef Inc.
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

package com.bytechef.embedded.configuration.domain;

import java.util.Objects;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

/**
 * @author Ivica Cardic
 */
@Table("integration_workflow")
public final class IntegrationWorkflow {

    @Column("integration_version")
    private int integrationVersion;

    @Column("workflow_id")
    private String workflowId;

    public IntegrationWorkflow() {
    }

    public IntegrationWorkflow(String workflowId, int integrationVersion) {
        this.integrationVersion = integrationVersion;
        this.workflowId = workflowId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }

        if (o == null || getClass() != o.getClass()) {
            return false;
        }

        IntegrationWorkflow integrationWorkflow = (IntegrationWorkflow) o;

        return Objects.equals(integrationVersion, integrationWorkflow.integrationVersion) &&
            Objects.equals(workflowId, integrationWorkflow.workflowId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(integrationVersion, workflowId);
    }

    public int getIntegrationVersion() {
        return integrationVersion;
    }

    public String getWorkflowId() {
        return workflowId;
    }

    public void setIntegrationVersion(int integrationVersion) {
        this.integrationVersion = integrationVersion;
    }

    public void setWorkflowId(String workflowId) {
        this.workflowId = workflowId;
    }

    @Override
    public String toString() {
        return "IntegrationWorkflow{" +
            "integrationVersion=" + integrationVersion +
            ", workflowId='" + workflowId + '\'' +
            '}';
    }
}
