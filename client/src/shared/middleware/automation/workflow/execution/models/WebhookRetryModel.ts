/* tslint:disable */
/* eslint-disable */
/**
 * The Automation Execution Internal API
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
 * 
 * @export
 * @interface WebhookRetryModel
 */
export interface WebhookRetryModel {
    /**
     * 
     * @type {number}
     * @memberof WebhookRetryModel
     */
    initialInterval?: number;
    /**
     * 
     * @type {number}
     * @memberof WebhookRetryModel
     */
    maxInterval?: number;
    /**
     * 
     * @type {number}
     * @memberof WebhookRetryModel
     */
    maxAttempts?: number;
    /**
     * 
     * @type {number}
     * @memberof WebhookRetryModel
     */
    multiplier?: number;
}

/**
 * Check if a given object implements the WebhookRetryModel interface.
 */
export function instanceOfWebhookRetryModel(value: object): boolean {
    return true;
}

export function WebhookRetryModelFromJSON(json: any): WebhookRetryModel {
    return WebhookRetryModelFromJSONTyped(json, false);
}

export function WebhookRetryModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebhookRetryModel {
    if (json == null) {
        return json;
    }
    return {
        
        'initialInterval': json['initialInterval'] == null ? undefined : json['initialInterval'],
        'maxInterval': json['maxInterval'] == null ? undefined : json['maxInterval'],
        'maxAttempts': json['maxAttempts'] == null ? undefined : json['maxAttempts'],
        'multiplier': json['multiplier'] == null ? undefined : json['multiplier'],
    };
}

export function WebhookRetryModelToJSON(value?: WebhookRetryModel | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'initialInterval': value['initialInterval'],
        'maxInterval': value['maxInterval'],
        'maxAttempts': value['maxAttempts'],
        'multiplier': value['multiplier'],
    };
}

