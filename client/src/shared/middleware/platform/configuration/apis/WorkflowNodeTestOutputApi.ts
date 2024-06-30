/* tslint:disable */
/* eslint-disable */
/**
 * The Platform Configuration Internal API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  WorkflowNodeTestOutputModel,
} from '../models/index';
import {
    WorkflowNodeTestOutputModelFromJSON,
    WorkflowNodeTestOutputModelToJSON,
} from '../models/index';

export interface DeleteWorkflowNodeTestOutputRequest {
    id: string;
    workflowNodeName: string;
}

export interface SaveWorkflowNodeTestOutputRequest {
    id: string;
    workflowNodeName: string;
}

export interface UploadWorkflowNodeSampleOutputRequest {
    id: string;
    workflowNodeName: string;
    body: object;
}

/**
 * 
 */
export class WorkflowNodeTestOutputApi extends runtime.BaseAPI {

    /**
     * Delete existing workflow node test output.
     * Delete existing workflow node test output
     */
    async deleteWorkflowNodeTestOutputRaw(requestParameters: DeleteWorkflowNodeTestOutputRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling deleteWorkflowNodeTestOutput().'
            );
        }

        if (requestParameters['workflowNodeName'] == null) {
            throw new runtime.RequiredError(
                'workflowNodeName',
                'Required parameter "workflowNodeName" was null or undefined when calling deleteWorkflowNodeTestOutput().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/workflows/{id}/test-outputs/{workflowNodeName}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))).replace(`{${"workflowNodeName"}}`, encodeURIComponent(String(requestParameters['workflowNodeName']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete existing workflow node test output.
     * Delete existing workflow node test output
     */
    async deleteWorkflowNodeTestOutput(requestParameters: DeleteWorkflowNodeTestOutputRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteWorkflowNodeTestOutputRaw(requestParameters, initOverrides);
    }

    /**
     * Create a new or update existing workflow node test output.
     * Create a new or update existing workflow node test output
     */
    async saveWorkflowNodeTestOutputRaw(requestParameters: SaveWorkflowNodeTestOutputRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<WorkflowNodeTestOutputModel>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling saveWorkflowNodeTestOutput().'
            );
        }

        if (requestParameters['workflowNodeName'] == null) {
            throw new runtime.RequiredError(
                'workflowNodeName',
                'Required parameter "workflowNodeName" was null or undefined when calling saveWorkflowNodeTestOutput().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/workflows/{id}/test-outputs/{workflowNodeName}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))).replace(`{${"workflowNodeName"}}`, encodeURIComponent(String(requestParameters['workflowNodeName']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => WorkflowNodeTestOutputModelFromJSON(jsonValue));
    }

    /**
     * Create a new or update existing workflow node test output.
     * Create a new or update existing workflow node test output
     */
    async saveWorkflowNodeTestOutput(requestParameters: SaveWorkflowNodeTestOutputRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<WorkflowNodeTestOutputModel> {
        const response = await this.saveWorkflowNodeTestOutputRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Upload a sample output to create a new or update existing workflow node test output.
     * Upload a sample output to create a new or update existing workflow node test output
     */
    async uploadWorkflowNodeSampleOutputRaw(requestParameters: UploadWorkflowNodeSampleOutputRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<WorkflowNodeTestOutputModel>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling uploadWorkflowNodeSampleOutput().'
            );
        }

        if (requestParameters['workflowNodeName'] == null) {
            throw new runtime.RequiredError(
                'workflowNodeName',
                'Required parameter "workflowNodeName" was null or undefined when calling uploadWorkflowNodeSampleOutput().'
            );
        }

        if (requestParameters['body'] == null) {
            throw new runtime.RequiredError(
                'body',
                'Required parameter "body" was null or undefined when calling uploadWorkflowNodeSampleOutput().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/workflows/{id}/test-outputs/{workflowNodeName}/sample-output`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))).replace(`{${"workflowNodeName"}}`, encodeURIComponent(String(requestParameters['workflowNodeName']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['body'] as any,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => WorkflowNodeTestOutputModelFromJSON(jsonValue));
    }

    /**
     * Upload a sample output to create a new or update existing workflow node test output.
     * Upload a sample output to create a new or update existing workflow node test output
     */
    async uploadWorkflowNodeSampleOutput(requestParameters: UploadWorkflowNodeSampleOutputRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<WorkflowNodeTestOutputModel> {
        const response = await this.uploadWorkflowNodeSampleOutputRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
