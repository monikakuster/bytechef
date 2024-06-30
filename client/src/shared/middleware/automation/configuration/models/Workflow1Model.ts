/* tslint:disable */
/* eslint-disable */
/**
 * The Automation Configuration Internal API
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
import type { WorkflowFormatModel } from './WorkflowFormatModel';
import {
    WorkflowFormatModelFromJSON,
    WorkflowFormatModelFromJSONTyped,
    WorkflowFormatModelToJSON,
} from './WorkflowFormatModel';
import type { WorkflowInputModel } from './WorkflowInputModel';
import {
    WorkflowInputModelFromJSON,
    WorkflowInputModelFromJSONTyped,
    WorkflowInputModelToJSON,
} from './WorkflowInputModel';
import type { WorkflowOutputModel } from './WorkflowOutputModel';
import {
    WorkflowOutputModelFromJSON,
    WorkflowOutputModelFromJSONTyped,
    WorkflowOutputModelToJSON,
} from './WorkflowOutputModel';
import type { WorkflowTaskModel } from './WorkflowTaskModel';
import {
    WorkflowTaskModelFromJSON,
    WorkflowTaskModelFromJSONTyped,
    WorkflowTaskModelToJSON,
} from './WorkflowTaskModel';
import type { WorkflowTriggerModel } from './WorkflowTriggerModel';
import {
    WorkflowTriggerModelFromJSON,
    WorkflowTriggerModelFromJSONTyped,
    WorkflowTriggerModelToJSON,
} from './WorkflowTriggerModel';

/**
 * The blueprint that describe the execution of a job.
 * @export
 * @interface Workflow1Model
 */
export interface Workflow1Model {
    /**
     * The created by.
     * @type {string}
     * @memberof Workflow1Model
     */
    readonly createdBy?: string;
    /**
     * The created date.
     * @type {Date}
     * @memberof Workflow1Model
     */
    readonly createdDate?: Date;
    /**
     * The number of workflow connections
     * @type {number}
     * @memberof Workflow1Model
     */
    readonly connectionsCount?: number;
    /**
     * The definition of a workflow.
     * @type {string}
     * @memberof Workflow1Model
     */
    definition?: string;
    /**
     * The description of a workflow.
     * @type {string}
     * @memberof Workflow1Model
     */
    description?: string;
    /**
     * 
     * @type {WorkflowFormatModel}
     * @memberof Workflow1Model
     */
    format?: WorkflowFormatModel;
    /**
     * The id of a workflow.
     * @type {string}
     * @memberof Workflow1Model
     */
    readonly id?: string;
    /**
     * The workflow's expected list of inputs.
     * @type {Array<WorkflowInputModel>}
     * @memberof Workflow1Model
     */
    readonly inputs?: Array<WorkflowInputModel>;
    /**
     * The number of workflow inputs
     * @type {number}
     * @memberof Workflow1Model
     */
    readonly inputsCount?: number;
    /**
     * The descriptive name for the workflow
     * @type {string}
     * @memberof Workflow1Model
     */
    readonly label?: string;
    /**
     * The last modified by.
     * @type {string}
     * @memberof Workflow1Model
     */
    readonly lastModifiedBy?: string;
    /**
     * The last modified date.
     * @type {Date}
     * @memberof Workflow1Model
     */
    readonly lastModifiedDate?: Date;
    /**
     * The workflow's list of expected outputs.
     * @type {Array<WorkflowOutputModel>}
     * @memberof Workflow1Model
     */
    readonly outputs?: Array<WorkflowOutputModel>;
    /**
     * The type of the source which stores the workflow definition.
     * @type {string}
     * @memberof Workflow1Model
     */
    sourceType?: Workflow1ModelSourceTypeEnum;
    /**
     * The maximum number of times a task may retry.
     * @type {number}
     * @memberof Workflow1Model
     */
    readonly maxRetries?: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof Workflow1Model
     */
    readonly workflowTaskComponentNames?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof Workflow1Model
     */
    readonly workflowTriggerComponentNames?: Array<string>;
    /**
     * The steps that make up the workflow.
     * @type {Array<WorkflowTaskModel>}
     * @memberof Workflow1Model
     */
    readonly tasks?: Array<WorkflowTaskModel>;
    /**
     * The steps that make up the workflow.
     * @type {Array<WorkflowTriggerModel>}
     * @memberof Workflow1Model
     */
    readonly triggers?: Array<WorkflowTriggerModel>;
    /**
     * 
     * @type {number}
     * @memberof Workflow1Model
     */
    version?: number;
}


/**
 * @export
 */
export const Workflow1ModelSourceTypeEnum = {
    Classpath: 'CLASSPATH',
    Filesystem: 'FILESYSTEM',
    Git: 'GIT',
    Jdbc: 'JDBC'
} as const;
export type Workflow1ModelSourceTypeEnum = typeof Workflow1ModelSourceTypeEnum[keyof typeof Workflow1ModelSourceTypeEnum];


/**
 * Check if a given object implements the Workflow1Model interface.
 */
export function instanceOfWorkflow1Model(value: object): boolean {
    return true;
}

export function Workflow1ModelFromJSON(json: any): Workflow1Model {
    return Workflow1ModelFromJSONTyped(json, false);
}

export function Workflow1ModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): Workflow1Model {
    if (json == null) {
        return json;
    }
    return {
        
        'createdBy': json['createdBy'] == null ? undefined : json['createdBy'],
        'createdDate': json['createdDate'] == null ? undefined : (new Date(json['createdDate'])),
        'connectionsCount': json['connectionsCount'] == null ? undefined : json['connectionsCount'],
        'definition': json['definition'] == null ? undefined : json['definition'],
        'description': json['description'] == null ? undefined : json['description'],
        'format': json['format'] == null ? undefined : WorkflowFormatModelFromJSON(json['format']),
        'id': json['id'] == null ? undefined : json['id'],
        'inputs': json['inputs'] == null ? undefined : ((json['inputs'] as Array<any>).map(WorkflowInputModelFromJSON)),
        'inputsCount': json['inputsCount'] == null ? undefined : json['inputsCount'],
        'label': json['label'] == null ? undefined : json['label'],
        'lastModifiedBy': json['lastModifiedBy'] == null ? undefined : json['lastModifiedBy'],
        'lastModifiedDate': json['lastModifiedDate'] == null ? undefined : (new Date(json['lastModifiedDate'])),
        'outputs': json['outputs'] == null ? undefined : ((json['outputs'] as Array<any>).map(WorkflowOutputModelFromJSON)),
        'sourceType': json['sourceType'] == null ? undefined : json['sourceType'],
        'maxRetries': json['maxRetries'] == null ? undefined : json['maxRetries'],
        'workflowTaskComponentNames': json['workflowTaskComponentNames'] == null ? undefined : json['workflowTaskComponentNames'],
        'workflowTriggerComponentNames': json['workflowTriggerComponentNames'] == null ? undefined : json['workflowTriggerComponentNames'],
        'tasks': json['tasks'] == null ? undefined : ((json['tasks'] as Array<any>).map(WorkflowTaskModelFromJSON)),
        'triggers': json['triggers'] == null ? undefined : ((json['triggers'] as Array<any>).map(WorkflowTriggerModelFromJSON)),
        'version': json['__version'] == null ? undefined : json['__version'],
    };
}

export function Workflow1ModelToJSON(value?: Omit<Workflow1Model, 'createdBy'|'createdDate'|'connectionsCount'|'id'|'inputs'|'inputsCount'|'label'|'lastModifiedBy'|'lastModifiedDate'|'outputs'|'maxRetries'|'workflowTaskComponentNames'|'workflowTriggerComponentNames'|'tasks'|'triggers'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'definition': value['definition'],
        'description': value['description'],
        'format': WorkflowFormatModelToJSON(value['format']),
        'sourceType': value['sourceType'],
        '__version': value['version'],
    };
}

