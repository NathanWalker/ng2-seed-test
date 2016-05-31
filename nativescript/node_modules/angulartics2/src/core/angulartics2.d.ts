import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Location } from '@angular/common';
export declare class Angulartics2 {
    settings: any;
    pageTrack: ReplaySubject<any>;
    eventTrack: ReplaySubject<any>;
    exceptionTrack: ReplaySubject<any>;
    setAlias: ReplaySubject<string>;
    setUsername: ReplaySubject<string>;
    setUserProperties: ReplaySubject<any>;
    setUserPropertiesOnce: ReplaySubject<any>;
    setSuperProperties: ReplaySubject<any>;
    setSuperPropertiesOnce: ReplaySubject<any>;
    userTimings: ReplaySubject<any>;
    constructor(location: Location);
    trackLocation(location: Location): void;
    virtualPageviews(value: boolean): void;
    excludeRoutes(routes: Array<string>): void;
    firstPageview(value: boolean): void;
    withBase(value: string): void;
    developerMode(value: boolean): void;
    private matchesExcludedRoute(url);
}
