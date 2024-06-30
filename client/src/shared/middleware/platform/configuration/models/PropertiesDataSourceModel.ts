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
/**
 * Defines function that should load properties.
 * @export
 * @interface PropertiesDataSourceModel
 */
export interface PropertiesDataSourceModel {
    /**
     * The list of property names on which value change the properties should load/reload.
     * @type {Array<string>}
     * @memberof PropertiesDataSourceModel
     */
    propertiesLookupDependsOn?: Array<string>;
}

/**
 * Check if a given object implements the PropertiesDataSourceModel interface.
 */
export function instanceOfPropertiesDataSourceModel(value: object): boolean {
    return true;
}

export function PropertiesDataSourceModelFromJSON(json: any): PropertiesDataSourceModel {
    return PropertiesDataSourceModelFromJSONTyped(json, false);
}

export function PropertiesDataSourceModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): PropertiesDataSourceModel {
    if (json == null) {
        return json;
    }
    return {
        
        'propertiesLookupDependsOn': json['propertiesLookupDependsOn'] == null ? undefined : json['propertiesLookupDependsOn'],
    };
}

export function PropertiesDataSourceModelToJSON(value?: PropertiesDataSourceModel | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'propertiesLookupDependsOn': value['propertiesLookupDependsOn'],
    };
}

