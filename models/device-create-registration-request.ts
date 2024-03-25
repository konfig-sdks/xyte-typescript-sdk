/*
Testing API

Xyte's Device Cloud is the first all-in-one servitization platform designed for device and hardware manufacturers to cloudify, operate, support, and commercialize their connected devices in a unified platform. 

We enable OEMs across different industries to navigate their digital journey, transforming their devices into integrated business solutions that combine hardware, software and services. The only business and commerce platform designed specifically for IoT device manufacturers, our fully-federated Device Cloud empowers OEMs to manage the complete lifecycle of their devices, from the minute they leave the warehouse through aftermarket sales to end customers.

Our out-of-the-box applications for asset management, remote support, ecommerce and subscription management, financing, and a powerful and secure back office suite help OEMs boost revenue and market growth, optimize operational efficiencies, gain instant insights into equipment and device performance, and develop sustainable customer relationships.

The version of the OpenAPI document: 1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface DeviceCreateRegistrationRequest
 */
export interface DeviceCreateRegistrationRequest {
    /**
     * MAC address of the device
     * @type {string}
     * @memberof DeviceCreateRegistrationRequest
     */
    'mac'?: string;
    /**
     * Unique device serial number
     * @type {string}
     * @memberof DeviceCreateRegistrationRequest
     */
    'sn': string;
    /**
     * Unique device identifier (must specify this or mac)
     * @type {string}
     * @memberof DeviceCreateRegistrationRequest
     */
    'cloud_id'?: string;
    /**
     * Semver based firmware version
     * @type {string}
     * @memberof DeviceCreateRegistrationRequest
     */
    'firmware_version': string;
    /**
     * Key defined in the model\'s hardware key section
     * @type {string}
     * @memberof DeviceCreateRegistrationRequest
     */
    'hardware_key': string;
    /**
     * Display name for the end-user
     * @type {string}
     * @memberof DeviceCreateRegistrationRequest
     */
    'name'?: string;
    /**
     * Generic JSON object with unconstrained data
     * @type {object}
     * @memberof DeviceCreateRegistrationRequest
     */
    'details'?: object;
    /**
     * Additional model details text
     * @type {string}
     * @memberof DeviceCreateRegistrationRequest
     */
    'sub_model'?: string;
    /**
     * UUID of the parent device
     * @type {string}
     * @memberof DeviceCreateRegistrationRequest
     */
    'parent_id'?: string;
}

