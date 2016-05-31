"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/map');
require('rxjs/add/observable/fromPromise');
// nativescript
var file_system_1 = require('file-system');
var NSHttpService = (function () {
    function NSHttpService(http) {
        this.http = http;
        this.cache = {};
    }
    NSHttpService.prototype.get = function (url) {
        var _this = this;
        if (url.indexOf('http') === -1) {
            // local file in nativescript app
            if (this.cache[url]) {
                // already cached
                return Observable_1.Observable.of(this.cache[url]);
            }
            else {
                // requesting local file
                var app = file_system_1.knownFolders.currentApp();
                // strip leading slash
                url = url.indexOf('/') === 0 ? url.slice(1) : url;
                var localFile_1 = app.getFile(url);
                return Observable_1.Observable.fromPromise(new Promise(function (resolve, reject) {
                    localFile_1.readText().then(function (data) {
                        try {
                            _this.cache[url] = JSON.parse(data);
                            resolve(_this.cache[url]);
                        }
                        catch (err) {
                            reject(err);
                        }
                    }, function (err) {
                        reject(err);
                    });
                }));
            }
        }
        else {
            // standard remote http request
            return this.http.get(url)
                .map(function (response) { return response.json(); });
        }
    };
    NSHttpService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], NSHttpService);
    return NSHttpService;
}());
exports.NSHttpService = NSHttpService;
//# sourceMappingURL=http.service.js.map