import { IBEACON, EDDYSTONE, SECURE_PROFILE, scanMode, scanPeriod, activityCheckConfiguration, forceScanConfiguration, monitoringEnabled, monitoringSyncInterval } from './configurations';
export declare type IBeaconMinimum = {
    major: number;
    minor: number;
};
export declare type IBeaconBase = {
    uuid: string;
    major: number;
    minor: number;
    uniqueId?: string;
};
export declare type Proximity = 'IMMEDIATE' | 'NEAR' | 'FAR' | 'UNKNOWN';
/**
 * Beacon response while scanning on Android
 */
export declare type IBeaconAndroid = {
    major: number;
    minor: number;
    uuid: string;
    name: string;
    uniqueId: string;
    firmwareVersion: string;
    address: string;
    rssi: number;
    proximity: Proximity;
    accuracy: string;
    batteryPower: number;
    txPower: number;
    isShuffled: string;
};
export declare type SecureProfileAndroid = {
    name?: string;
    uniqueId: string;
    firmwareRevision: string;
    macAddress: string;
    rssi: number;
    batteryLevel: number;
    isShuffled: boolean;
    txPower: number;
    telemetry?: any;
};
/**
 * Beacon response while ranging or monitoring on iOS
 */
export declare type IBeaconIos = {
    major: number;
    minor: number;
    uuid: string;
    rssi: number;
    proximity: Proximity;
    accuracy: string;
};
/**
 * Beacon response while discovering
 */
export declare type IBeaconIosDiscovery = {
    name?: string;
    uniqueId: string;
    firmwareVersion: string;
    /**
     * percentage as integer (same as 'batteryPower' for Android)
     */
    batteryLevel: number;
    batteryPowered: boolean;
    /**
     * same as 'txPower' for Android
     */
    transmissionPower: number;
    hasConfigurationProfile: boolean;
    shuffled: boolean;
    locked: boolean;
    model: string;
    peripheral: string;
    rssi: number;
    updatedAt: number;
};
export declare type IBeaconIosDiscoveryWithMajorMinor = IBeaconIosDiscovery & {
    major?: number;
    minor?: number;
};
export declare type IBeaconWithUniqueId = IBeaconAndroid | IBeaconIosDiscoveryWithMajorMinor;
export declare type IBeacon = IBeaconAndroid | IBeaconIos | IBeaconIosDiscovery;
export declare type BeaconType = typeof IBEACON | typeof EDDYSTONE | typeof SECURE_PROFILE;
export declare type RegionBase = {
    uuid: string;
    identifier: string;
    major?: number;
    minor?: number;
    uniqueId?: string;
};
export declare type RegionAndroid = RegionBase & {
    secureUuid?: string;
};
export declare type RegionIos = RegionBase;
export declare type RegionType = RegionAndroid | RegionIos;
export declare type ConfigType = {
    scanMode?: typeof scanMode.LOW_POWER | typeof scanMode.BALANCED | typeof scanMode.LOW_LATENCY;
    scanPeriod?: typeof scanPeriod.MONITORING | typeof scanPeriod.RANGING | ReturnType<typeof scanPeriod.create>;
    activityCheckConfiguration?: typeof activityCheckConfiguration.DISABLED | typeof activityCheckConfiguration.MINIMAL | typeof activityCheckConfiguration.DEFAULT | ReturnType<typeof activityCheckConfiguration.create>;
    forceScanConfiguration?: typeof activityCheckConfiguration.DISABLED | typeof activityCheckConfiguration.MINIMAL | ReturnType<typeof forceScanConfiguration.create>;
    dropEmptyRanges?: boolean;
    invalidationAge?: number;
    monitoringEnabled?: typeof monitoringEnabled.TRUE | typeof monitoringEnabled.FALSE;
    monitoringSyncInterval?: typeof monitoringSyncInterval.DEFAULT;
};
declare type KontaktBaseType = {
    configure: (config: ConfigType | undefined) => Promise<void>;
};
export declare type KontaktAndroidType = KontaktBaseType & {
    connect: (key?: string | undefined, beaconTypes?: Array<BeaconType> | undefined) => Promise<void>;
    disconnect: () => Promise<void>;
    isConnected: () => Promise<boolean>;
    startScanning: () => Promise<void>;
    stopScanning: () => Promise<void>;
    restartScanning: () => Promise<void>;
    isScanning: () => Promise<boolean>;
    setBeaconRegion: (region: RegionType) => void;
    setBeaconRegions: (regions: Array<RegionType>) => void;
    getBeaconRegions: () => Promise<Array<RegionType>>;
    setEddystoneNamespace: (namespace: any) => void;
    IBEACON: typeof IBEACON;
    EDDYSTONE: typeof EDDYSTONE;
    SECURE_PROFILE: typeof SECURE_PROFILE;
    DEFAULT_KONTAKT_BEACON_PROXIMITY_UUID: string;
    DEFAULT_KONTAKT_NAMESPACE_ID: string;
    ANY_MAJOR: number;
    ANY_MINOR: number;
    scanMode: typeof scanMode;
    scanPeriod: typeof scanPeriod;
    activityCheckConfiguration: typeof activityCheckConfiguration;
    forceScanConfiguration: typeof forceScanConfiguration;
    monitoringEnabled: typeof monitoringEnabled;
    monitoringSyncInterval: typeof monitoringSyncInterval;
    /**
     * @deprecated Please use 'connect' instead
     */
    init?: (apiKey: string | undefined, beaconTypes: Array<BeaconType> | undefined) => Promise<void>;
};
export declare type KontaktiOSType = KontaktBaseType & {
    init: (apiKey?: string | undefined) => Promise<void>;
    isDiscovering: () => Promise<boolean>;
    startDiscovery: (config?: {
        interval: number;
    }) => Promise<void>;
    stopDiscovery: () => Promise<void>;
    restartDiscovery: () => Promise<void>;
    getAuthorizationStatus: () => Promise<string>;
    requestWhenInUseAuthorization: () => Promise<void>;
    requestAlwaysAuthorization: () => Promise<void>;
    startRangingBeaconsInRegion: (region: RegionType) => Promise<void>;
    stopRangingBeaconsInRegion: (region: RegionType) => Promise<void>;
    stopRangingBeaconsInAllRegions: () => Promise<void>;
    getRangedRegions: () => Promise<Array<RegionType>>;
    startMonitoringForRegion: (region: RegionType) => Promise<void>;
    stopMonitoringForRegion: (region: RegionType) => Promise<void>;
    stopMonitoringForAllRegions: () => Promise<void>;
    getMonitoredRegions: () => Promise<Array<RegionType>>;
    requestStateForRegion: (region: RegionType) => Promise<void>;
    startEddystoneDiscovery: (namespace: any) => Promise<void>;
    stopEddystoneDiscoveryInRegion: (region: RegionType) => Promise<void>;
    stopEddystoneDiscoveryInAllRegions: () => Promise<void>;
};
export declare const KontaktModule: any;
export declare type KontaktType = KontaktAndroidType & KontaktiOSType;
declare const module: KontaktType;
export default module;
