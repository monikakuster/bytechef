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

import { mapValues } from '../runtime';
import type { AuthorizationTypeModel } from './AuthorizationTypeModel';
import {
    AuthorizationTypeModelFromJSON,
    AuthorizationTypeModelFromJSONTyped,
    AuthorizationTypeModelToJSON,
} from './AuthorizationTypeModel';
import type { PropertyModel } from './PropertyModel';
import {
    PropertyModelFromJSON,
    PropertyModelFromJSONTyped,
    PropertyModelToJSON,
} from './PropertyModel';

/**
 * Contains information required for a connection's authorization.
 * @export
 * @interface AuthorizationModel
 */
export interface AuthorizationModel {
    /**
     * The description.
     * @type {string}
     * @memberof AuthorizationModel
     */
    description?: string;
    /**
     * The authorization name.
     * @type {string}
     * @memberof AuthorizationModel
     */
    name?: string;
    /**
     * Properties of the connection.
     * @type {Array<PropertyModel>}
     * @memberof AuthorizationModel
     */
    properties?: Array<PropertyModel>;
    /**
     * The title
     * @type {string}
     * @memberof AuthorizationModel
     */
    title?: string;
    /**
     * 
     * @type {AuthorizationTypeModel}
     * @memberof AuthorizationModel
     */
    type?: AuthorizationTypeModel;
}

/**
 * Check if a given object implements the AuthorizationModel interface.
 */
export function instanceOfAuthorizationModel(value: object): boolean {
    return true;
}

export function AuthorizationModelFromJSON(json: any): AuthorizationModel {
    return AuthorizationModelFromJSONTyped(json, false);
}

export function AuthorizationModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuthorizationModel {
    if (json == null) {
        return json;
    }
    return {
        
        'description': json['description'] == null ? undefined : json['description'],
        'name': json['name'] == null ? undefined : json['name'],
        'properties': json['properties'] == null ? undefined : ((json['properties'] as Array<any>).map(PropertyModelFromJSON)),
        'title': json['title'] == null ? undefined : json['title'],
        'type': json['type'] == null ? undefined : AuthorizationTypeModelFromJSON(json['type']),
    };
}

export function AuthorizationModelToJSON(value?: AuthorizationModel | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'description': value['description'],
        'name': value['name'],
        'properties': value['properties'] == null ? undefined : ((value['properties'] as Array<any>).map(PropertyModelToJSON)),
        'title': value['title'],
        'type': AuthorizationTypeModelToJSON(value['type']),
    };
}

