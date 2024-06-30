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
import type { ActionDefinitionBasicModel } from './ActionDefinitionBasicModel';
import {
    ActionDefinitionBasicModelFromJSON,
    ActionDefinitionBasicModelFromJSONTyped,
    ActionDefinitionBasicModelToJSON,
} from './ActionDefinitionBasicModel';
import type { ComponentCategoryModel } from './ComponentCategoryModel';
import {
    ComponentCategoryModelFromJSON,
    ComponentCategoryModelFromJSONTyped,
    ComponentCategoryModelToJSON,
} from './ComponentCategoryModel';
import type { ConnectionDefinitionBasicModel } from './ConnectionDefinitionBasicModel';
import {
    ConnectionDefinitionBasicModelFromJSON,
    ConnectionDefinitionBasicModelFromJSONTyped,
    ConnectionDefinitionBasicModelToJSON,
} from './ConnectionDefinitionBasicModel';
import type { ResourcesModel } from './ResourcesModel';
import {
    ResourcesModelFromJSON,
    ResourcesModelFromJSONTyped,
    ResourcesModelToJSON,
} from './ResourcesModel';
import type { TriggerDefinitionBasicModel } from './TriggerDefinitionBasicModel';
import {
    TriggerDefinitionBasicModelFromJSON,
    TriggerDefinitionBasicModelFromJSONTyped,
    TriggerDefinitionBasicModelToJSON,
} from './TriggerDefinitionBasicModel';

/**
 * A component contains a set of reusable code(actions) that accomplish specific tasks, triggers and connections if there is a need for a connection to an outside service.
 * @export
 * @interface ComponentDefinitionModel
 */
export interface ComponentDefinitionModel {
    /**
     * The list of all available actions the component can perform.
     * @type {Array<ActionDefinitionBasicModel>}
     * @memberof ComponentDefinitionModel
     */
    actions?: Array<ActionDefinitionBasicModel>;
    /**
     * The list of categories the component belongs to.
     * @type {Array<ComponentCategoryModel>}
     * @memberof ComponentDefinitionModel
     */
    categories?: Array<ComponentCategoryModel>;
    /**
     * 
     * @type {ConnectionDefinitionBasicModel}
     * @memberof ComponentDefinitionModel
     */
    connection?: ConnectionDefinitionBasicModel;
    /**
     * If connection is required or not if it is defined.
     * @type {boolean}
     * @memberof ComponentDefinitionModel
     */
    connectionRequired: boolean;
    /**
     * The description.
     * @type {string}
     * @memberof ComponentDefinitionModel
     */
    description?: string;
    /**
     * The icon.
     * @type {string}
     * @memberof ComponentDefinitionModel
     */
    icon?: string;
    /**
     * The name.
     * @type {string}
     * @memberof ComponentDefinitionModel
     */
    name: string;
    /**
     * 
     * @type {ResourcesModel}
     * @memberof ComponentDefinitionModel
     */
    resources?: ResourcesModel;
    /**
     * Tags for categorization.
     * @type {Array<string>}
     * @memberof ComponentDefinitionModel
     */
    tags?: Array<string>;
    /**
     * The title
     * @type {string}
     * @memberof ComponentDefinitionModel
     */
    title?: string;
    /**
     * The list of all available triggers the component can perform.
     * @type {Array<TriggerDefinitionBasicModel>}
     * @memberof ComponentDefinitionModel
     */
    triggers?: Array<TriggerDefinitionBasicModel>;
    /**
     * The version of a component.
     * @type {number}
     * @memberof ComponentDefinitionModel
     */
    version: number;
}

/**
 * Check if a given object implements the ComponentDefinitionModel interface.
 */
export function instanceOfComponentDefinitionModel(value: object): boolean {
    if (!('connectionRequired' in value)) return false;
    if (!('name' in value)) return false;
    if (!('version' in value)) return false;
    return true;
}

export function ComponentDefinitionModelFromJSON(json: any): ComponentDefinitionModel {
    return ComponentDefinitionModelFromJSONTyped(json, false);
}

export function ComponentDefinitionModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): ComponentDefinitionModel {
    if (json == null) {
        return json;
    }
    return {
        
        'actions': json['actions'] == null ? undefined : ((json['actions'] as Array<any>).map(ActionDefinitionBasicModelFromJSON)),
        'categories': json['categories'] == null ? undefined : ((json['categories'] as Array<any>).map(ComponentCategoryModelFromJSON)),
        'connection': json['connection'] == null ? undefined : ConnectionDefinitionBasicModelFromJSON(json['connection']),
        'connectionRequired': json['connectionRequired'],
        'description': json['description'] == null ? undefined : json['description'],
        'icon': json['icon'] == null ? undefined : json['icon'],
        'name': json['name'],
        'resources': json['resources'] == null ? undefined : ResourcesModelFromJSON(json['resources']),
        'tags': json['tags'] == null ? undefined : json['tags'],
        'title': json['title'] == null ? undefined : json['title'],
        'triggers': json['triggers'] == null ? undefined : ((json['triggers'] as Array<any>).map(TriggerDefinitionBasicModelFromJSON)),
        'version': json['version'],
    };
}

export function ComponentDefinitionModelToJSON(value?: ComponentDefinitionModel | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'actions': value['actions'] == null ? undefined : ((value['actions'] as Array<any>).map(ActionDefinitionBasicModelToJSON)),
        'categories': value['categories'] == null ? undefined : ((value['categories'] as Array<any>).map(ComponentCategoryModelToJSON)),
        'connection': ConnectionDefinitionBasicModelToJSON(value['connection']),
        'connectionRequired': value['connectionRequired'],
        'description': value['description'],
        'icon': value['icon'],
        'name': value['name'],
        'resources': ResourcesModelToJSON(value['resources']),
        'tags': value['tags'],
        'title': value['title'],
        'triggers': value['triggers'] == null ? undefined : ((value['triggers'] as Array<any>).map(TriggerDefinitionBasicModelToJSON)),
        'version': value['version'],
    };
}

