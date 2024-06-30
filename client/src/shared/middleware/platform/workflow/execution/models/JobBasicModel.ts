/* tslint:disable */
/* eslint-disable */
/**
 * The Platform Workflow Execution Internal API
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
/**
 * Represents an execution of a workflow.
 * @export
 * @interface JobBasicModel
 */
export interface JobBasicModel {
    /**
     * The created by.
     * @type {string}
     * @memberof JobBasicModel
     */
    readonly createdBy?: string;
    /**
     * The created date.
     * @type {Date}
     * @memberof JobBasicModel
     */
    readonly createdDate?: Date;
    /**
     * The time execution entered end status COMPLETED, STOPPED, FAILED
     * @type {Date}
     * @memberof JobBasicModel
     */
    endDate?: Date;
    /**
     * The id of a job.
     * @type {string}
     * @memberof JobBasicModel
     */
    readonly id?: string;
    /**
     * The job's human-readable name.
     * @type {string}
     * @memberof JobBasicModel
     */
    readonly label?: string;
    /**
     * The last modified by.
     * @type {string}
     * @memberof JobBasicModel
     */
    readonly lastModifiedBy?: string;
    /**
     * The last modified date.
     * @type {Date}
     * @memberof JobBasicModel
     */
    readonly lastModifiedDate?: Date;
    /**
     * The priority value.
     * @type {number}
     * @memberof JobBasicModel
     */
    readonly priority: number;
    /**
     * The time of when the job began.
     * @type {Date}
     * @memberof JobBasicModel
     */
    readonly startDate: Date;
    /**
     * The job's status.
     * @type {string}
     * @memberof JobBasicModel
     */
    readonly status: JobBasicModelStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof JobBasicModel
     */
    readonly workflowId?: string;
}


/**
 * @export
 */
export const JobBasicModelStatusEnum = {
    Created: 'CREATED',
    Started: 'STARTED',
    Stopped: 'STOPPED',
    Failed: 'FAILED',
    Completed: 'COMPLETED'
} as const;
export type JobBasicModelStatusEnum = typeof JobBasicModelStatusEnum[keyof typeof JobBasicModelStatusEnum];


/**
 * Check if a given object implements the JobBasicModel interface.
 */
export function instanceOfJobBasicModel(value: object): boolean {
    if (!('priority' in value)) return false;
    if (!('startDate' in value)) return false;
    if (!('status' in value)) return false;
    return true;
}

export function JobBasicModelFromJSON(json: any): JobBasicModel {
    return JobBasicModelFromJSONTyped(json, false);
}

export function JobBasicModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): JobBasicModel {
    if (json == null) {
        return json;
    }
    return {
        
        'createdBy': json['createdBy'] == null ? undefined : json['createdBy'],
        'createdDate': json['createdDate'] == null ? undefined : (new Date(json['createdDate'])),
        'endDate': json['endDate'] == null ? undefined : (new Date(json['endDate'])),
        'id': json['id'] == null ? undefined : json['id'],
        'label': json['label'] == null ? undefined : json['label'],
        'lastModifiedBy': json['lastModifiedBy'] == null ? undefined : json['lastModifiedBy'],
        'lastModifiedDate': json['lastModifiedDate'] == null ? undefined : (new Date(json['lastModifiedDate'])),
        'priority': json['priority'],
        'startDate': (new Date(json['startDate'])),
        'status': json['status'],
        'workflowId': json['workflowId'] == null ? undefined : json['workflowId'],
    };
}

export function JobBasicModelToJSON(value?: Omit<JobBasicModel, 'createdBy'|'createdDate'|'id'|'label'|'lastModifiedBy'|'lastModifiedDate'|'priority'|'startDate'|'status'|'workflowId'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'endDate': value['endDate'] == null ? undefined : ((value['endDate']).toISOString()),
    };
}

