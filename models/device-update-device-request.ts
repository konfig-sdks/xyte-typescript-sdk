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
 * @interface DeviceUpdateDeviceRequest
 */
export interface DeviceUpdateDeviceRequest {
    /**
     * 
     * @type {string}
     * @memberof DeviceUpdateDeviceRequest
     */
    'firmware_version'?: string;
    /**
     * Friendly device name
     * @type {string}
     * @memberof DeviceUpdateDeviceRequest
     */
    'name'?: string;
    /**
     * Latest version of the space information the device has applied
     * @type {string}
     * @memberof DeviceUpdateDeviceRequest
     */
    'space_version'?: string;
    /**
     * Latest version of the configuration the device has applied
     * @type {string}
     * @memberof DeviceUpdateDeviceRequest
     */
    'config_version'?: string;
    /**
     * Details of the device. Will be visible in a different tab on the device\'s view calls \'Details\'.
     * @type {object}
     * @memberof DeviceUpdateDeviceRequest
     */
    'details'?: object;
}

