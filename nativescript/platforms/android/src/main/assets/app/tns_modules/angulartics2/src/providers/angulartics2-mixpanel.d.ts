import { Angulartics2 } from '../core/angulartics2';
export declare class Angulartics2Mixpanel {
    private angulartics2;
    constructor(angulartics2: Angulartics2);
    pageTrack(path: string, location: any): void;
    eventTrack(action: string, properties: any): void;
    setUsername(userId: string): void;
    setUserProperties(properties: any): void;
    setUserPropertiesOnce(properties: any): void;
    setSuperProperties(properties: any): void;
    setSuperPropertiesOnce(properties: any): void;
    setAlias(alias: any): void;
}
