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
import type { PropertiesDataSourceModel } from './PropertiesDataSourceModel';
import {
    PropertiesDataSourceModelFromJSON,
    PropertiesDataSourceModelFromJSONTyped,
    PropertiesDataSourceModelToJSON,
} from './PropertiesDataSourceModel';
import type { PropertyModel } from './PropertyModel';
import {
    PropertyModelFromJSON,
    PropertyModelFromJSONTyped,
    PropertyModelToJSON,
} from './PropertyModel';
import type { PropertyTypeModel } from './PropertyTypeModel';
import {
    PropertyTypeModelFromJSON,
    PropertyTypeModelFromJSONTyped,
    PropertyTypeModelToJSON,
} from './PropertyTypeModel';

/**
 * A dynamic properties property type.
 * @export
 * @interface DynamicPropertiesPropertyModel
 */
export interface DynamicPropertiesPropertyModel extends PropertyModel {
    /**
     * The dynamic property header.
     * @type {string}
     * @memberof DynamicPropertiesPropertyModel
     */
    header?: string;
    /**
     * 
     * @type {PropertiesDataSourceModel}
     * @memberof DynamicPropertiesPropertyModel
     */
    propertiesDataSource?: PropertiesDataSourceModel;
}

/**
 * Check if a given object implements the DynamicPropertiesPropertyModel interface.
 */
export function instanceOfDynamicPropertiesPropertyModel(value: object): boolean {
    return true;
}

export function DynamicPropertiesPropertyModelFromJSON(json: any): DynamicPropertiesPropertyModel {
    return DynamicPropertiesPropertyModelFromJSONTyped(json, false);
}

export function DynamicPropertiesPropertyModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): DynamicPropertiesPropertyModel {
    if (json == null) {
        return json;
    }
    return {
        ...PropertyModelFromJSONTyped(json, ignoreDiscriminator),
        'header': json['header'] == null ? undefined : json['header'],
        'propertiesDataSource': json['propertiesDataSource'] == null ? undefined : PropertiesDataSourceModelFromJSON(json['propertiesDataSource']),
    };
}

export function DynamicPropertiesPropertyModelToJSON(value?: DynamicPropertiesPropertyModel | null): any {
    if (value == null) {
        return value;
    }
    return {
        ...PropertyModelToJSON(value),
        'header': value['header'],
        'propertiesDataSource': PropertiesDataSourceModelToJSON(value['propertiesDataSource']),
    };
}

