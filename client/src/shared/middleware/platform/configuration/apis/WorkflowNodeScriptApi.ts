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
  ScriptTestExecution,
} from '../models/index';
import {
    ScriptTestExecutionFromJSON,
    ScriptTestExecutionToJSON,
} from '../models/index';

export interface TestWorkflowNodeScriptRequest {
    id: string;
    workflowNodeName: string;
}

/**
 * 
 */
export class WorkflowNodeScriptApi extends runtime.BaseAPI {

    /**
     * Execute a script for testing purposes.
     * Execute a script for testing purposes
     */
    async testWorkflowNodeScriptRaw(requestParameters: TestWorkflowNodeScriptRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ScriptTestExecution>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling testWorkflowNodeScript().'
            );
        }

        if (requestParameters['workflowNodeName'] == null) {
            throw new runtime.RequiredError(
                'workflowNodeName',
                'Required parameter "workflowNodeName" was null or undefined when calling testWorkflowNodeScript().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/workflows/{id}/scripts/{workflowNodeName}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))).replace(`{${"workflowNodeName"}}`, encodeURIComponent(String(requestParameters['workflowNodeName']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ScriptTestExecutionFromJSON(jsonValue));
    }

    /**
     * Execute a script for testing purposes.
     * Execute a script for testing purposes
     */
    async testWorkflowNodeScript(requestParameters: TestWorkflowNodeScriptRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ScriptTestExecution> {
        const response = await this.testWorkflowNodeScriptRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
