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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Holder = require('holderjs');
var HolderJsComponent = (function () {
    function HolderJsComponent() {
    }
    HolderJsComponent.prototype.ngOnInit = function () { };
    HolderJsComponent.prototype.ngAfterViewInit = function () {
        var holderDiv = document.getElementById(this.holderId);
        Holder.addImage(this.imgSrc, holderDiv).run();
    };
    return HolderJsComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], HolderJsComponent.prototype, "holderId", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], HolderJsComponent.prototype, "imgSrc", void 0);
HolderJsComponent = __decorate([
    core_1.Component({
        selector: 'hjs',
        template: '<div id="{{holderId}}"></div>'
    }),
    __metadata("design:paramtypes", [])
], HolderJsComponent);
exports.HolderJsComponent = HolderJsComponent;
//# sourceMappingURL=holderjs.component.js.map