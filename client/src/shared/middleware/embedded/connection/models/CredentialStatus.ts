/* tslint:disable */
/* eslint-disable */
/**
 * The Embedded Connection Internal API
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
 * 
 * @export
 */
export const CredentialStatus = {
    Valid: 'VALID',
    Invalid: 'INVALID'
} as const;
export type CredentialStatus = typeof CredentialStatus[keyof typeof CredentialStatus];


export function instanceOfCredentialStatus(value: any): boolean {
    for (const key in CredentialStatus) {
        if (Object.prototype.hasOwnProperty.call(CredentialStatus, key)) {
            if (CredentialStatus[key as keyof typeof CredentialStatus] === value) {
                return true;
            }
        }
    }
    return false;
}

export function CredentialStatusFromJSON(json: any): CredentialStatus {
    return CredentialStatusFromJSONTyped(json, false);
}

export function CredentialStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): CredentialStatus {
    return json as CredentialStatus;
}

export function CredentialStatusToJSON(value?: CredentialStatus | null): any {
    return value as any;
}

