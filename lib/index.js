"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.configure = exports.KontaktModule = void 0;
const react_native_1 = require("react-native");
const configurations_1 = require("./configurations");
// If the native module (i.e. Java module) is prefixed with "RCT",
// the NativeModules name does not include "RCT".
exports.KontaktModule = react_native_1.NativeModules.KontaktBeacons;
/**
 * Methods shared in android and iOS
 */
const configure = (params = null) => exports.KontaktModule.configure(params);
exports.configure = configure;
let Kontakt = {};
/**
 * Android
 */
if (react_native_1.Platform.OS === 'android') {
    const connect = (apiKey = null, beaconTypes = null) => exports.KontaktModule.connect(apiKey, beaconTypes);
    /**
     * @deprecated
     * 'init' was renamed to 'connect' - please use 'connect'
     */
    const init = (apiKey = null, beaconTypes = null) => exports.KontaktModule.connect(apiKey, beaconTypes);
    const disconnect = exports.KontaktModule.disconnect;
    const isConnected = exports.KontaktModule.isConnected;
    const startScanning = exports.KontaktModule.startScanning;
    const stopScanning = exports.KontaktModule.stopScanning;
    const restartScanning = exports.KontaktModule.restartScanning;
    const isScanning = exports.KontaktModule.isScanning;
    const setBeaconRegion = (region = null) => exports.KontaktModule.setBeaconRegion(region);
    const setBeaconRegions = (regionsArray = null) => exports.KontaktModule.setBeaconRegions(regionsArray);
    const getBeaconRegions = exports.KontaktModule.getBeaconRegions;
    const setEddystoneNamespace = (namespace) => exports.KontaktModule.setEddystoneNamespace(namespace);
    const DEFAULT_KONTAKT_BEACON_PROXIMITY_UUID = exports.KontaktModule.DEFAULT_KONTAKT_BEACON_PROXIMITY_UUID;
    const DEFAULT_KONTAKT_NAMESPACE_ID = exports.KontaktModule.DEFAULT_KONTAKT_NAMESPACE_ID;
    const ANY_MINOR = exports.KontaktModule.ANY_MINOR;
    const ANY_MAJOR = exports.KontaktModule.ANY_MAJOR;
    Kontakt = {
        configure: exports.configure,
        connect,
        disconnect,
        isConnected,
        startScanning,
        stopScanning,
        restartScanning,
        isScanning,
        setBeaconRegion,
        setBeaconRegions,
        getBeaconRegions,
        setEddystoneNamespace,
        // Constants
        IBEACON: configurations_1.IBEACON,
        EDDYSTONE: configurations_1.EDDYSTONE,
        SECURE_PROFILE: configurations_1.SECURE_PROFILE,
        DEFAULT_KONTAKT_BEACON_PROXIMITY_UUID,
        DEFAULT_KONTAKT_NAMESPACE_ID,
        ANY_MAJOR,
        ANY_MINOR,
        // Configurations
        scanMode: configurations_1.scanMode,
        scanPeriod: configurations_1.scanPeriod,
        activityCheckConfiguration: configurations_1.activityCheckConfiguration,
        forceScanConfiguration: configurations_1.forceScanConfiguration,
        monitoringEnabled: configurations_1.monitoringEnabled,
        monitoringSyncInterval: configurations_1.monitoringSyncInterval,
        init, // @deprecated
    };
}
/**
 * iOS
 */
if (react_native_1.Platform.OS === 'ios') {
    const init = (apiKey = null) => exports.KontaktModule.init(apiKey);
    const startDiscovery = (config) => exports.KontaktModule.startDiscovery(config);
    const stopDiscovery = exports.KontaktModule.stopDiscovery;
    const restartDiscovery = exports.KontaktModule.restartDiscovery;
    const isDiscovering = exports.KontaktModule.isDiscovering;
    const getAuthorizationStatus = exports.KontaktModule.getAuthorizationStatus;
    const requestWhenInUseAuthorization = exports.KontaktModule.requestWhenInUseAuthorization;
    const requestAlwaysAuthorization = exports.KontaktModule.requestAlwaysAuthorization;
    const startRangingBeaconsInRegion = (region) => exports.KontaktModule.startRangingBeaconsInRegion(region);
    const stopRangingBeaconsInRegion = (region) => exports.KontaktModule.stopRangingBeaconsInRegion(region);
    const stopRangingBeaconsInAllRegions = () => exports.KontaktModule.stopRangingBeaconsInAllRegions;
    const getRangedRegions = exports.KontaktModule.getRangedRegions;
    const startMonitoringForRegion = (region) => exports.KontaktModule.startMonitoringForRegion(region);
    const stopMonitoringForRegion = (region) => exports.KontaktModule.stopMonitoringForRegion(region);
    const stopMonitoringForAllRegions = exports.KontaktModule.stopMonitoringForAllRegions;
    const getMonitoredRegions = exports.KontaktModule.getMonitoredRegions;
    const requestStateForRegion = (region) => exports.KontaktModule.requestStateForRegion(region);
    const startEddystoneDiscovery = (namespace) => exports.KontaktModule.startEddystoneDiscovery(namespace);
    const stopEddystoneDiscoveryInRegion = (region) => exports.KontaktModule.stopEddystoneDiscoveryInRegion(region);
    const stopEddystoneDiscoveryInAllRegions = exports.KontaktModule.stopEddystoneDiscoveryInAllRegions;
    Kontakt = {
        init,
        configure: exports.configure,
        // authorization
        getAuthorizationStatus,
        requestWhenInUseAuthorization,
        requestAlwaysAuthorization,
        // discovery
        startDiscovery,
        stopDiscovery,
        restartDiscovery,
        isDiscovering,
        // ranging
        startRangingBeaconsInRegion,
        stopRangingBeaconsInRegion,
        stopRangingBeaconsInAllRegions,
        getRangedRegions,
        // monitoring
        startMonitoringForRegion,
        stopMonitoringForRegion,
        stopMonitoringForAllRegions,
        getMonitoredRegions,
        requestStateForRegion,
        // eddystone
        startEddystoneDiscovery,
        stopEddystoneDiscoveryInRegion,
        stopEddystoneDiscoveryInAllRegions,
    };
}
__exportStar(require("./types"), exports);
exports.default = Kontakt;
