/*
Testing API

Xyte's Device Cloud is the first all-in-one servitization platform designed for device and hardware manufacturers to cloudify, operate, support, and commercialize their connected devices in a unified platform. 

We enable OEMs across different industries to navigate their digital journey, transforming their devices into integrated business solutions that combine hardware, software and services. The only business and commerce platform designed specifically for IoT device manufacturers, our fully-federated Device Cloud empowers OEMs to manage the complete lifecycle of their devices, from the minute they leave the warehouse through aftermarket sales to end customers.

Our out-of-the-box applications for asset management, remote support, ecommerce and subscription management, financing, and a powerful and secure back office suite help OEMs boost revenue and market growth, optimize operational efficiencies, gain instant insights into equipment and device performance, and develop sustainable customer relationships.

The version of the OpenAPI document: 1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { DeviceGetInfoResponseCustom } from './device-get-info-response-custom';
import { DeviceUpdateDeviceResponseConfig } from './device-update-device-response-config';
import { DeviceUpdateDeviceResponseDetails } from './device-update-device-response-details';
import { DeviceUpdateDeviceResponsePartner } from './device-update-device-response-partner';
import { DeviceUpdateDeviceResponseState } from './device-update-device-response-state';

/**
 * 
 * @export
 * @interface DeviceUpdateDeviceResponse
 */
export interface DeviceUpdateDeviceResponse {
    /**
     * 
     * @type {string}
     * @memberof DeviceUpdateDeviceResponse
     */
    'id'?: string;
    /**
     * 
     * @type {DeviceUpdateDeviceResponsePartner}
     * @memberof DeviceUpdateDeviceResponse
     */
    'partner'?: DeviceUpdateDeviceResponsePartner;
    /**
     * 
     * @type {DeviceUpdateDeviceResponseConfig}
     * @memberof DeviceUpdateDeviceResponse
     */
    'config'?: DeviceUpdateDeviceResponseConfig;
    /**
     * 
     * @type {DeviceUpdateDeviceResponseState}
     * @memberof DeviceUpdateDeviceResponse
     */
    'state'?: DeviceUpdateDeviceResponseState;
    /**
     * 
     * @type {string}
     * @memberof DeviceUpdateDeviceResponse
     */
    'last_seen'?: string;
    /**
     * 
     * @type {DeviceGetInfoResponseCustom}
     * @memberof DeviceUpdateDeviceResponse
     */
    'custom'?: DeviceGetInfoResponseCustom;
    /**
     * 
     * @type {string}
     * @memberof DeviceUpdateDeviceResponse
     */
    'name'?: string;
    /**
     * 
     * @type {string}
     * @memberof DeviceUpdateDeviceResponse
     */
    'firmware_version'?: string;
    /**
     * 
     * @type {string}
     * @memberof DeviceUpdateDeviceResponse
     */
    'claimed'?: string;
    /**
     * 
     * @type {DeviceUpdateDeviceResponseDetails}
     * @memberof DeviceUpdateDeviceResponse
     */
    'details'?: DeviceUpdateDeviceResponseDetails;
    /**
     * 
     * @type {boolean}
     * @memberof DeviceUpdateDeviceResponse
     */
    'test'?: boolean;
}

