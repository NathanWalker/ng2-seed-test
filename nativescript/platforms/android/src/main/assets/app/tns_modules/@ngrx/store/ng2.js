"use strict";
var core_1 = require('@angular/core');
var reducer_1 = require('./reducer');
var dispatcher_1 = require('./dispatcher');
var store_1 = require('./store');
var state_1 = require('./state');
var utils_1 = require('./utils');
exports.INITIAL_REDUCER = new core_1.OpaqueToken('ngrx/store/reducer');
exports.INITIAL_STATE = new core_1.OpaqueToken('ngrx/store/initial-state');
var dispatcherProvider = core_1.provide(dispatcher_1.Dispatcher, {
    useFactory: function () {
        return new dispatcher_1.Dispatcher();
    }
});
var storeProvider = core_1.provide(store_1.Store, {
    deps: [dispatcher_1.Dispatcher, reducer_1.Reducer, state_1.State, exports.INITIAL_STATE],
    useFactory: function (dispatcher, reducer, state$, initialState) {
        return new store_1.Store(dispatcher, reducer, state$, initialState);
    }
});
var stateProvider = core_1.provide(state_1.State, {
    deps: [exports.INITIAL_STATE, dispatcher_1.Dispatcher, reducer_1.Reducer],
    useFactory: function (initialState, dispatcher, reducer) {
        return new state_1.State(initialState, dispatcher, reducer);
    }
});
var reducerProvider = core_1.provide(reducer_1.Reducer, {
    deps: [dispatcher_1.Dispatcher, exports.INITIAL_REDUCER],
    useFactory: function (dispatcher, reducer) {
        return new reducer_1.Reducer(dispatcher, reducer);
    }
});
function provideStore(reducer, initialState) {
    return [
        core_1.provide(exports.INITIAL_REDUCER, {
            useFactory: function () {
                if (typeof reducer === 'function') {
                    return reducer;
                }
                return utils_1.combineReducers(reducer);
            }
        }),
        core_1.provide(exports.INITIAL_STATE, {
            deps: [exports.INITIAL_REDUCER],
            useFactory: function (reducer) {
                if (initialState === undefined) {
                    return reducer(undefined, { type: dispatcher_1.Dispatcher.INIT });
                }
                return initialState;
            }
        }),
        dispatcherProvider,
        storeProvider,
        stateProvider,
        reducerProvider
    ];
}
exports.provideStore = provideStore;
