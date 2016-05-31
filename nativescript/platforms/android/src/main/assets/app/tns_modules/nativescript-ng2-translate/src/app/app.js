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
require('reflect-metadata');
require('rxjs/add/operator/map');
// nativescript
var application_1 = require('nativescript-angular/application');
// angular 
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
// libs
var ng2_translate_1 = require('ng2-translate/ng2-translate');
// app
var nativescript_ng2_translate_1 = require('nativescript-ng2-translate/nativescript-ng2-translate');
var TestComponent = (function () {
    function TestComponent(translate) {
        this.translate = translate;
        this.supportedLanguages = [
            { code: 'en', title: 'English' },
            { code: 'es', title: 'Spanish' }
        ];
    }
    TestComponent.prototype.changeLang = function (e) {
        var lang = this.supportedLanguages[e.newIndex].code;
        this.translate.use(lang);
    };
    TestComponent = __decorate([
        core_1.Component({
            selector: 'app',
            template: "\n  <StackLayout>\n    <SegmentedBar [items]=\"supportedLanguages\" (selectedIndexChanged)=\"changeLang($event)\"></SegmentedBar>\n    <Label [text]=\"'HOME' | translate\"></Label>\n  </StackLayout>\n  ",
            pipes: [ng2_translate_1.TranslatePipe]
        }), 
        __metadata('design:paramtypes', [ng2_translate_1.TranslateService])
    ], TestComponent);
    return TestComponent;
}());
application_1.nativeScriptBootstrap(TestComponent, [
    http_1.HTTP_PROVIDERS,
    core_1.provide(ng2_translate_1.TranslateLoader, {
        useFactory: function () {
            return new nativescript_ng2_translate_1.TNSTranslateLoader('assets/i18n');
        }
    }),
    ng2_translate_1.TranslateService
]);
//# sourceMappingURL=app.js.map