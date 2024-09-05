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
import type { OptionsDataSource } from './OptionsDataSource';
import {
    OptionsDataSourceFromJSON,
    OptionsDataSourceFromJSONTyped,
    OptionsDataSourceToJSON,
} from './OptionsDataSource';
import type { ControlType } from './ControlType';
import {
    ControlTypeFromJSON,
    ControlTypeFromJSONTyped,
    ControlTypeToJSON,
} from './ControlType';
import type { Option } from './Option';
import {
    OptionFromJSON,
    OptionFromJSONTyped,
    OptionToJSON,
} from './Option';
import type { PropertyType } from './PropertyType';
import {
    PropertyTypeFromJSON,
    PropertyTypeFromJSONTyped,
    PropertyTypeToJSON,
} from './PropertyType';
import type { ValueProperty } from './ValueProperty';
import {
    ValuePropertyFromJSON,
    ValuePropertyFromJSONTyped,
    ValuePropertyToJSON,
} from './ValueProperty';

/**
 * A date property type.
 * @export
 * @interface DateProperty
 */
export interface DateProperty extends ValueProperty {
    /**
     * The property default value.
     * @type {Date}
     * @memberof DateProperty
     */
    defaultValue?: Date;
    /**
     * The property sample value.
     * @type {Date}
     * @memberof DateProperty
     */
    exampleValue?: Date;
    /**
     * The list of valid property options.
     * @type {Array<Option>}
     * @memberof DateProperty
     */
    options?: Array<Option>;
    /**
     * 
     * @type {OptionsDataSource}
     * @memberof DateProperty
     */
    optionsDataSource?: OptionsDataSource;
}



/**
 * Check if a given object implements the DateProperty interface.
 */
export function instanceOfDateProperty(value: object): value is DateProperty {
    return true;
}

export function DatePropertyFromJSON(json: any): DateProperty {
    return DatePropertyFromJSONTyped(json, false);
}

export function DatePropertyFromJSONTyped(json: any, ignoreDiscriminator: boolean): DateProperty {
    if (json == null) {
        return json;
    }
    return {
        ...ValuePropertyFromJSONTyped(json, ignoreDiscriminator),
        'defaultValue': json['defaultValue'] == null ? undefined : (new Date(json['defaultValue'])),
        'exampleValue': json['exampleValue'] == null ? undefined : (new Date(json['exampleValue'])),
        'options': json['options'] == null ? undefined : ((json['options'] as Array<any>).map(OptionFromJSON)),
        'optionsDataSource': json['optionsDataSource'] == null ? undefined : OptionsDataSourceFromJSON(json['optionsDataSource']),
    };
}

export function DatePropertyToJSON(value?: DateProperty | null): any {
    if (value == null) {
        return value;
    }
    return {
        ...ValuePropertyToJSON(value),
        'defaultValue': value['defaultValue'] == null ? undefined : ((value['defaultValue']).toISOString().substring(0,10)),
        'exampleValue': value['exampleValue'] == null ? undefined : ((value['exampleValue']).toISOString().substring(0,10)),
        'options': value['options'] == null ? undefined : ((value['options'] as Array<any>).map(OptionToJSON)),
        'optionsDataSource': OptionsDataSourceToJSON(value['optionsDataSource']),
    };
}

