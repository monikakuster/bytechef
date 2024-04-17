/* tslint:disable */
/* eslint-disable */
/**
 * The Embedded Configuration API
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
 * @interface PublishIntegrationRequestModel
 */
export interface PublishIntegrationRequestModel {
    /**
     * The description of a integration version.
     * @type {string}
     * @memberof PublishIntegrationRequestModel
     */
    description?: string;
}

/**
 * Check if a given object implements the PublishIntegrationRequestModel interface.
 */
export function instanceOfPublishIntegrationRequestModel(value: object): boolean {
    return true;
}

export function PublishIntegrationRequestModelFromJSON(json: any): PublishIntegrationRequestModel {
    return PublishIntegrationRequestModelFromJSONTyped(json, false);
}

export function PublishIntegrationRequestModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublishIntegrationRequestModel {
    if (json == null) {
        return json;
    }
    return {
        
        'description': json['description'] == null ? undefined : json['description'],
    };
}

export function PublishIntegrationRequestModelToJSON(value?: PublishIntegrationRequestModel | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'description': value['description'],
    };
}

