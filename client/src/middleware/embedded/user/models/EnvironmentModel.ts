/* tslint:disable */
/* eslint-disable */
/**
 * The Embedded User API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * The environment of a project.
 * @export
 */
export const EnvironmentModel = {
    Development: 'DEVELOPMENT',
    Staging: 'STAGING',
    Production: 'PRODUCTION'
} as const;
export type EnvironmentModel = typeof EnvironmentModel[keyof typeof EnvironmentModel];


export function EnvironmentModelFromJSON(json: any): EnvironmentModel {
    return EnvironmentModelFromJSONTyped(json, false);
}

export function EnvironmentModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): EnvironmentModel {
    return json as EnvironmentModel;
}

export function EnvironmentModelToJSON(value?: EnvironmentModel | null): any {
    return value as any;
}

