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
 * The trigger output.
 * @export
 * @interface TriggerOutputModel
 */
export interface TriggerOutputModel {
    /**
     * The trigger output value
     * @type {object}
     * @memberof TriggerOutputModel
     */
    value?: object;
    /**
     * The task name to which a connection belongs.
     * @type {string}
     * @memberof TriggerOutputModel
     */
    triggerName?: string;
}

/**
 * Check if a given object implements the TriggerOutputModel interface.
 */
export function instanceOfTriggerOutputModel(value: object): boolean {
    return true;
}

export function TriggerOutputModelFromJSON(json: any): TriggerOutputModel {
    return TriggerOutputModelFromJSONTyped(json, false);
}

export function TriggerOutputModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): TriggerOutputModel {
    if (json == null) {
        return json;
    }
    return {
        
        'value': json['value'] == null ? undefined : json['value'],
        'triggerName': json['triggerName'] == null ? undefined : json['triggerName'],
    };
}

export function TriggerOutputModelToJSON(value?: TriggerOutputModel | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'value': value['value'],
        'triggerName': value['triggerName'],
    };
}

