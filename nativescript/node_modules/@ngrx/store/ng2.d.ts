import { OpaqueToken, Provider } from '@angular/core';
export declare const INITIAL_REDUCER: OpaqueToken;
export declare const INITIAL_STATE: OpaqueToken;
export declare function provideStore(reducer: any, initialState?: any): Provider[];
