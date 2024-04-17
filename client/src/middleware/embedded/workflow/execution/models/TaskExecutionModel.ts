/* tslint:disable */
/* eslint-disable */
/**
 * Embedded Execution API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { ComponentDefinitionBasicModel } from './ComponentDefinitionBasicModel';
import {
    ComponentDefinitionBasicModelFromJSON,
    ComponentDefinitionBasicModelFromJSONTyped,
    ComponentDefinitionBasicModelToJSON,
} from './ComponentDefinitionBasicModel';
import type { ExecutionErrorModel } from './ExecutionErrorModel';
import {
    ExecutionErrorModelFromJSON,
    ExecutionErrorModelFromJSONTyped,
    ExecutionErrorModelToJSON,
} from './ExecutionErrorModel';
import type { WorkflowTaskModel } from './WorkflowTaskModel';
import {
    WorkflowTaskModelFromJSON,
    WorkflowTaskModelFromJSONTyped,
    WorkflowTaskModelToJSON,
} from './WorkflowTaskModel';

/**
 * Adds execution semantics to a task.
 * @export
 * @interface TaskExecutionModel
 */
export interface TaskExecutionModel {
    /**
     * 
     * @type {ComponentDefinitionBasicModel}
     * @memberof TaskExecutionModel
     */
    component?: ComponentDefinitionBasicModel;
    /**
     * The created by.
     * @type {string}
     * @memberof TaskExecutionModel
     */
    readonly createdBy?: string;
    /**
     * The created date.
     * @type {Date}
     * @memberof TaskExecutionModel
     */
    readonly createdDate?: Date;
    /**
     * The time when a task instance ended (CANCELLED, FAILED, COMPLETED).
     * @type {Date}
     * @memberof TaskExecutionModel
     */
    readonly endDate?: Date;
    /**
     * 
     * @type {ExecutionErrorModel}
     * @memberof TaskExecutionModel
     */
    error?: ExecutionErrorModel;
    /**
     * The total time in ms for a task to execute (excluding wait time of the task in transit). i.e. actual execution time on a worker node.
     * @type {number}
     * @memberof TaskExecutionModel
     */
    readonly executionTime?: number;
    /**
     * The id of a task execution.
     * @type {string}
     * @memberof TaskExecutionModel
     */
    readonly id?: string;
    /**
     * The input parameters for a task.
     * @type {{ [key: string]: any; }}
     * @memberof TaskExecutionModel
     */
    readonly input?: { [key: string]: any; };
    /**
     * The id of a job for which a task belongs to.
     * @type {string}
     * @memberof TaskExecutionModel
     */
    readonly jobId: string;
    /**
     * The last modified by.
     * @type {string}
     * @memberof TaskExecutionModel
     */
    readonly lastModifiedBy?: string;
    /**
     * The last modified date.
     * @type {Date}
     * @memberof TaskExecutionModel
     */
    readonly lastModifiedDate?: Date;
    /**
     * The maximum number of times that a task may retry.
     * @type {number}
     * @memberof TaskExecutionModel
     */
    readonly maxRetries?: number;
    /**
     * The result output generated by the task handler which executed a task.
     * @type {object}
     * @memberof TaskExecutionModel
     */
    readonly output?: object;
    /**
     * The id of the parent task, if this is a sub-task.
     * @type {string}
     * @memberof TaskExecutionModel
     */
    readonly parentId?: string;
    /**
     * The priority value.
     * @type {number}
     * @memberof TaskExecutionModel
     */
    readonly priority: number;
    /**
     * The current progress value, a number between 0 and 100.
     * @type {number}
     * @memberof TaskExecutionModel
     */
    readonly progress?: number;
    /**
     * The number of times that a task has been retried.
     * @type {number}
     * @memberof TaskExecutionModel
     */
    readonly retryAttempts?: number;
    /**
     * The delay to introduce between each retry. Values are to be specified using the ISO-8601 format (excluding the PT prefix). e.g. 10s (ten seconds), 1m (one minute) etc.
     * @type {string}
     * @memberof TaskExecutionModel
     */
    readonly retryDelay?: string;
    /**
     * The factor to use in order to calculate the actual delay time between each successive retry -- multiplying by the value of the retryDelay.
     * @type {number}
     * @memberof TaskExecutionModel
     */
    readonly retryDelayFactor?: number;
    /**
     * The time when a task instance was started.
     * @type {Date}
     * @memberof TaskExecutionModel
     */
    readonly startDate: Date;
    /**
     * The current status of a task.
     * @type {string}
     * @memberof TaskExecutionModel
     */
    readonly status: TaskExecutionModelStatusEnum;
    /**
     * The numeric order of the task in the workflow.
     * @type {number}
     * @memberof TaskExecutionModel
     */
    readonly taskNumber?: number;
    /**
     * The calculated retry delay. i.e. delay * retryAttempts * retryDelayFactor.
     * @type {number}
     * @memberof TaskExecutionModel
     */
    readonly retryDelayMillis?: number;
    /**
     * 
     * @type {WorkflowTaskModel}
     * @memberof TaskExecutionModel
     */
    workflowTask?: WorkflowTaskModel;
    /**
     * The type of the task.
     * @type {string}
     * @memberof TaskExecutionModel
     */
    readonly type?: string;
}


/**
 * @export
 */
export const TaskExecutionModelStatusEnum = {
    Created: 'CREATED',
    Started: 'STARTED',
    Failed: 'FAILED',
    Cancelled: 'CANCELLED',
    Completed: 'COMPLETED'
} as const;
export type TaskExecutionModelStatusEnum = typeof TaskExecutionModelStatusEnum[keyof typeof TaskExecutionModelStatusEnum];


/**
 * Check if a given object implements the TaskExecutionModel interface.
 */
export function instanceOfTaskExecutionModel(value: object): boolean {
    if (!('jobId' in value)) return false;
    if (!('priority' in value)) return false;
    if (!('startDate' in value)) return false;
    if (!('status' in value)) return false;
    return true;
}

export function TaskExecutionModelFromJSON(json: any): TaskExecutionModel {
    return TaskExecutionModelFromJSONTyped(json, false);
}

export function TaskExecutionModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): TaskExecutionModel {
    if (json == null) {
        return json;
    }
    return {
        
        'component': json['component'] == null ? undefined : ComponentDefinitionBasicModelFromJSON(json['component']),
        'createdBy': json['createdBy'] == null ? undefined : json['createdBy'],
        'createdDate': json['createdDate'] == null ? undefined : (new Date(json['createdDate'])),
        'endDate': json['endDate'] == null ? undefined : (new Date(json['endDate'])),
        'error': json['error'] == null ? undefined : ExecutionErrorModelFromJSON(json['error']),
        'executionTime': json['executionTime'] == null ? undefined : json['executionTime'],
        'id': json['id'] == null ? undefined : json['id'],
        'input': json['input'] == null ? undefined : json['input'],
        'jobId': json['jobId'],
        'lastModifiedBy': json['lastModifiedBy'] == null ? undefined : json['lastModifiedBy'],
        'lastModifiedDate': json['lastModifiedDate'] == null ? undefined : (new Date(json['lastModifiedDate'])),
        'maxRetries': json['maxRetries'] == null ? undefined : json['maxRetries'],
        'output': json['output'] == null ? undefined : json['output'],
        'parentId': json['parentId'] == null ? undefined : json['parentId'],
        'priority': json['priority'],
        'progress': json['progress'] == null ? undefined : json['progress'],
        'retryAttempts': json['retryAttempts'] == null ? undefined : json['retryAttempts'],
        'retryDelay': json['retryDelay'] == null ? undefined : json['retryDelay'],
        'retryDelayFactor': json['retryDelayFactor'] == null ? undefined : json['retryDelayFactor'],
        'startDate': (new Date(json['startDate'])),
        'status': json['status'],
        'taskNumber': json['taskNumber'] == null ? undefined : json['taskNumber'],
        'retryDelayMillis': json['retryDelayMillis'] == null ? undefined : json['retryDelayMillis'],
        'workflowTask': json['workflowTask'] == null ? undefined : WorkflowTaskModelFromJSON(json['workflowTask']),
        'type': json['type'] == null ? undefined : json['type'],
    };
}

export function TaskExecutionModelToJSON(value?: TaskExecutionModel | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'component': ComponentDefinitionBasicModelToJSON(value['component']),
        'error': ExecutionErrorModelToJSON(value['error']),
        'workflowTask': WorkflowTaskModelToJSON(value['workflowTask']),
    };
}

