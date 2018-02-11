webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_user_component__ = __webpack_require__("../../../../../src/app/user/user.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    {
        path: 'auth',
        component: __WEBPACK_IMPORTED_MODULE_2__user_user_component__["a" /* UserComponent */]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\ntest"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_mat_module__ = __webpack_require__("../../../../../src/shared/mat.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_user_module__ = __webpack_require__("../../../../../src/app/user/user.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__toolbar_toolbar_component__ = __webpack_require__("../../../../../src/app/toolbar/toolbar.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__toolbar_toolbar_component__["a" /* ToolbarComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__shared_mat_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_4__user_user_module__["a" /* UserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/toolbar/toolbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/toolbar/toolbar.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <span>My App</span>\n  <span class=\"example-spacer\"></span>\n  <app-user class=\"user-component\"></app-user>\n</mat-toolbar>"

/***/ }),

/***/ "../../../../../src/app/toolbar/toolbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToolbarComponent = /** @class */ (function () {
    function ToolbarComponent() {
    }
    ToolbarComponent.prototype.ngOnInit = function () {
    };
    ToolbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-toolbar',
            template: __webpack_require__("../../../../../src/app/toolbar/toolbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/toolbar/toolbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ToolbarComponent);
    return ToolbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user/dynamic-fields/components/dynamic-field/dynamic-field.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DynamicFieldDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__username_input_username_input_component__ = __webpack_require__("../../../../../src/app/user/dynamic-fields/components/username-input/username-input.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__email_input_email_input_component__ = __webpack_require__("../../../../../src/app/user/dynamic-fields/components/email-input/email-input.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__form_select_form_select_component__ = __webpack_require__("../../../../../src/app/user/dynamic-fields/components/form-select/form-select.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__form_button_form_button_component__ = __webpack_require__("../../../../../src/app/user/dynamic-fields/components/form-button/form-button.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var components = {
    button: __WEBPACK_IMPORTED_MODULE_5__form_button_form_button_component__["a" /* FormButtonComponent */],
    usernameInput: __WEBPACK_IMPORTED_MODULE_2__username_input_username_input_component__["a" /* UsernameInputComponent */],
    emailInput: __WEBPACK_IMPORTED_MODULE_3__email_input_email_input_component__["a" /* EmailInputComponent */],
    select: __WEBPACK_IMPORTED_MODULE_4__form_select_form_select_component__["a" /* FormSelectComponent */]
};
var DynamicFieldDirective = /** @class */ (function () {
    function DynamicFieldDirective(resolver, container) {
        this.resolver = resolver;
        this.container = container;
    }
    DynamicFieldDirective.prototype.ngOnInit = function () {
        var component = components[this.config.type];
        var factory = this.resolver.resolveComponentFactory(component);
        this.component = this.container.createComponent(factory);
        this.component.instance.config = this.config;
        this.component.instance.group = this.group;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], DynamicFieldDirective.prototype, "config", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */])
    ], DynamicFieldDirective.prototype, "group", void 0);
    DynamicFieldDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[dynamicField]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
    ], DynamicFieldDirective);
    return DynamicFieldDirective;
}());



/***/ }),

/***/ "../../../../../src/app/user/dynamic-fields/components/email-input/email-input.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mat-form-field{\n    width: 100%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/dynamic-fields/components/email-input/email-input.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailInputComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_validationErrors__ = __webpack_require__("../../../../../src/app/user/shared/validationErrors.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_user_service__ = __webpack_require__("../../../../../src/app/user/service/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EmailInputComponent = /** @class */ (function () {
    function EmailInputComponent(userService) {
        this.userService = userService;
    }
    EmailInputComponent.prototype.ngOnInit = function () {
        this.group.controls['email'].setValidators([
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].email
        ]);
        this.group.controls['email'].setAsyncValidators([
            this.checkDB.bind(this, 'email')
        ]);
    };
    EmailInputComponent.prototype.getErrorMessage = function (control) {
        return __WEBPACK_IMPORTED_MODULE_2__shared_validationErrors__["a" /* ValidationErrors */].getErrorMessage(control, this.group);
    };
    EmailInputComponent.prototype.checkDB = function (type, control) {
        return this.userService.checkDB(control.value, type)
            .map(function (res) {
            return res['success'] ? null : { fieldTaken: true };
        });
    };
    EmailInputComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'email-input',
            template: "\n    <mat-form-field class=\"example-full-width\"\n                    [formGroup]=\"group\">\n      <input matInput\n             placeholder=\"{{config.placeholder}}\"\n             name=\"{{config.name}}\"\n             [formControlName]=\"config.name\">\n      <mat-error *ngIf=\"group.controls['email'].invalid\">\n        {{ getErrorMessage('email') }}\n      </mat-error>\n    </mat-form-field>\n  ",
            styles: [__webpack_require__("../../../../../src/app/user/dynamic-fields/components/email-input/email-input.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__service_user_service__["a" /* UserService */]])
    ], EmailInputComponent);
    return EmailInputComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user/dynamic-fields/components/form-button/form-button.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FormButtonComponent = /** @class */ (function () {
    function FormButtonComponent() {
    }
    FormButtonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'form-button',
            template: "\n    <div \n      class=\"dynamic-field form-button\"\n      [formGroup]=\"group\">\n      <button type=\"submit\">\n        {{ config.label }}\n      </button>\n    </div>\n  ",
        })
    ], FormButtonComponent);
    return FormButtonComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user/dynamic-fields/components/form-select/form-select.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormSelectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FormSelectComponent = /** @class */ (function () {
    function FormSelectComponent() {
    }
    FormSelectComponent.prototype.ngOnInit = function () {
        // console.log(this.config);
        // console.log(this.group);
    };
    FormSelectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'form-select',
            template: "\n    <div \n      class=\"dynamic-field form-select\"\n      [formGroup]=\"group\">\n      <label>{{ config.label }}</label>\n      <select [formControlName]=\"config.name\">\n        <option value=\"\">{{ config.placeholder }}</option>\n        <option *ngFor=\"let option of config.options\">\n          {{ option }}\n        </option>\n      </select>\n    </div>\n  ",
        })
    ], FormSelectComponent);
    return FormSelectComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user/dynamic-fields/components/username-input/username-input.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mat-form-field{\n    width: 100%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/dynamic-fields/components/username-input/username-input.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsernameInputComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_validationErrors__ = __webpack_require__("../../../../../src/app/user/shared/validationErrors.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_user_service__ = __webpack_require__("../../../../../src/app/user/service/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UsernameInputComponent = /** @class */ (function () {
    function UsernameInputComponent(userService) {
        this.userService = userService;
    }
    UsernameInputComponent.prototype.ngOnInit = function () {
        this.group.controls['username'].setValidators([
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].minLength(3),
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].pattern('^[a-zA-Z0-9]+$')
        ]);
        this.group.controls['username'].setAsyncValidators([
            this.checkDB.bind(this, 'username')
        ]);
    };
    UsernameInputComponent.prototype.getErrorMessage = function (control) {
        return __WEBPACK_IMPORTED_MODULE_2__shared_validationErrors__["a" /* ValidationErrors */].getErrorMessage(control, this.group);
    };
    UsernameInputComponent.prototype.checkDB = function (type, control) {
        var _this = this;
        return this.userService.checkDB(control.value, type)
            .map(function (res) {
            if (_this.config.check === 'login') {
                return res['success'] ? { fieldIsset: true } : null;
            }
            else if (_this.config.check === 'reg') {
                return res['success'] ? null : { fieldTaken: true };
            }
        });
    };
    UsernameInputComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'username-input',
            template: "\n    <mat-form-field class=\"example-full-width\"\n                    [formGroup]=\"group\">\n      <input matInput\n             placeholder=\"{{config.placeholder}}\"\n             name=\"{{config.name}}\"\n             [formControlName]=\"config.name\">\n\n      <mat-error *ngIf=\"group.controls['username'].invalid\">\n        {{ getErrorMessage('username') }}\n      </mat-error>\n    </mat-form-field>\n  ",
            styles: [__webpack_require__("../../../../../src/app/user/dynamic-fields/components/username-input/username-input.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__service_user_service__["a" /* UserService */]])
    ], UsernameInputComponent);
    return UsernameInputComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user/dynamic-fields/containers/dynamic-form/dynamic-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/dynamic-fields/containers/dynamic-form/dynamic-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DynamicFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DynamicFormComponent = /** @class */ (function () {
    function DynamicFormComponent(fb) {
        this.fb = fb;
        this.config = [
            {
                type: 'input',
                label: 'Full name',
                name: 'name',
                placeholder: 'Enter your name'
            },
            {
                type: 'select',
                label: 'Favourite food',
                name: 'food',
                options: ['Pizza', 'Hot Dogs', 'Knakworstje', 'Coffee'],
                placeholder: 'Select an option'
            },
            {
                type: 'button',
                label: 'Submit',
                name: 'submit'
            },
        ];
    }
    DynamicFormComponent.prototype.ngOnInit = function () {
        this.form = this.createGroup();
    };
    DynamicFormComponent.prototype.createGroup = function () {
        var _this = this;
        var group = this.fb.group({
            'city': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('')
        });
        this.config.forEach(function (control) {
            group.addControl(control.name, _this.fb.control('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required]));
            console.log(control);
        });
        return group;
    };
    DynamicFormComponent.prototype.formSubmitted = function (form) {
        console.log(form);
    };
    DynamicFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'dynamic-form',
            template: "\n    <form\n            class=\"dynamic-form\"\n            [formGroup]=\"form\"\n            (ngSubmit)=\"formSubmitted(form)\">\n      <ng-container\n              *ngFor=\"let field of config;\"\n              dynamicField\n              [config]=\"field\"\n              [group]=\"form\">\n      </ng-container>\n      \n      <div>\n        <input type=\"text\"\n               formControlName=\"city\">\n      </div>\n      \n    </form>\n  ",
            styles: [__webpack_require__("../../../../../src/app/user/dynamic-fields/containers/dynamic-form/dynamic-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]])
    ], DynamicFormComponent);
    return DynamicFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user/dynamic-fields/testing/testing.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/dynamic-fields/testing/testing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TestingComponent = /** @class */ (function () {
    function TestingComponent() {
    }
    TestingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-testing',
            template: "\n    <div class=\"app\">\n      <dynamic-form></dynamic-form>\n    </div>",
            styles: [__webpack_require__("../../../../../src/app/user/dynamic-fields/testing/testing.component.css")]
        })
    ], TestingComponent);
    return TestingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-form-field{\n    display: block;\n}\n.eye{\n    cursor: pointer;\n}\n.example-container{\n    height: 100vh;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n.form{\n    width: 300px;\n}\n.buttons_auth{\n    float: right;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container\">\n  <form [formGroup]=\"form\"\n        novalidate\n        class=\"form\">\n\n    <ng-container\n            *ngFor=\"let field of config;\"\n            dynamicField\n            [config]=\"field\"\n            [group]=\"form\">\n    </ng-container>\n\n    <mat-form-field class=\"example-full-width\">\n      <input matInput\n             placeholder=\"Enter your password\"\n             [type]=\"hide ? 'password' : 'text'\"\n             name=\"password\"\n             [formControlName]=\"'password'\">\n      <mat-icon matSuffix\n                (click)=\"hide = !hide\"\n                class=\"eye\">\n        {{hide ? 'visibility' : 'visibility_off'}}\n      </mat-icon>\n      <mat-error *ngIf=\"form.controls['password'].invalid\">{{ getErrorMessage('password') }}</mat-error>\n    </mat-form-field>\n\n    <div class=\"buttons_auth\">\n      <button mat-fab color=\"primary\"\n              (click)=\"onSubmit(form)\"\n              [disabled]=\"form.invalid\">\n        <mat-icon>done</mat-icon>\n      </button>\n\n      <button mat-fab\n              color=\"accent\"\n              type=\"button\"\n              [routerLink]=\"'/auth/registration'\">\n        <mat-icon>people</mat-icon>\n      </button>\n    </div>\n    <!--<p>Form value: {{ form.value | json }}</p>-->\n    <!--<p>Form status: {{ form.status | json }}</p>-->\n  </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/user/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_validationErrors__ = __webpack_require__("../../../../../src/app/user/shared/validationErrors.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb) {
        this.fb = fb;
        this.hide = true;
        this.config = [
            {
                type: 'usernameInput',
                name: 'username',
                placeholder: 'Username',
                check: 'login'
            }
        ];
        this.form = this.createGroup();
    }
    LoginComponent.prototype.createGroup = function () {
        var _this = this;
        var group = this.fb.group({
            password: ['',
                [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].minLength(6)
                ]]
        });
        this.config.forEach(function (control) {
            group.addControl(control.name, _this.fb.control(''));
        });
        return group;
    };
    LoginComponent.prototype.getErrorMessage = function (control) {
        return __WEBPACK_IMPORTED_MODULE_2__shared_validationErrors__["a" /* ValidationErrors */].getErrorMessage(control, this.form);
    };
    LoginComponent.prototype.onSubmit = function (form) {
        console.log(form);
        console.log(form.value);
        // this.userService.regUser(form.value);
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/user/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user/registration/registration.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-form-field{\n    display: block;\n}\n.eye{\n    cursor: pointer;\n}\n.example-container{\n    height: 100vh;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n.form{\n    width: 300px;\n}\n.buttons_auth{\n    float: right;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/registration/registration.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container\">\n  <form [formGroup]=\"form\"\n        novalidate\n        class=\"form\">\n\n    <ng-container\n            *ngFor=\"let field of config;\"\n            dynamicField\n            [config]=\"field\"\n            [group]=\"form\">\n    </ng-container>\n\n    <mat-form-field class=\"example-full-width\">\n      <input matInput\n             placeholder=\"Enter your password\"\n             [type]=\"hide ? 'password' : 'text'\"\n             name=\"password\"\n             [formControlName]=\"'password'\">\n      <mat-icon matSuffix\n                (click)=\"hide = !hide\"\n                class=\"eye\">\n        {{hide ? 'visibility' : 'visibility_off'}}\n      </mat-icon>\n      <mat-error *ngIf=\"form.controls['password'].invalid\">{{ getErrorMessage('password') }}</mat-error>\n    </mat-form-field>\n\n    <ng2-password-strength-bar\n            [passwordToCheck]=\"form.controls['password'].value\"\n            [barLabel]=\"barLabel\"\n            [barColors]=\"myColors\">\n    </ng2-password-strength-bar>\n\n    <mat-form-field class=\"example-full-width\">\n      <input matInput\n             placeholder=\"Duplicate password\"\n             [type]=\"hide1 ? 'password' : 'text'\"\n             name=\"duplicate\"\n             [formControlName]=\"'duplicate'\">\n      <mat-icon matSuffix\n                (click)=\"hide1 = !hide1\"\n                class=\"eye\">\n        {{hide1 ? 'visibility' : 'visibility_off'}}\n      </mat-icon>\n      <mat-error *ngIf=\"form.controls['duplicate'].invalid\">{{ getErrorMessage('duplicate') }}</mat-error>\n    </mat-form-field>\n\n    <mat-checkbox\n            [formControlName]=\"'checkbox'\"\n    >Check me!\n    </mat-checkbox>\n\n    <div class=\"buttons_auth\">\n      <button mat-fab color=\"primary\"\n              (click)=\"onSubmit(form)\"\n              [disabled]=\"form.invalid\">\n        <mat-icon>done</mat-icon>\n      </button>\n      <button mat-fab color=\"accent\"\n              type=\"button\"\n              [routerLink]=\"'/auth/login'\">\n        <mat-icon>arrow_forward</mat-icon>\n      </button>\n    </div>\n    <!--<p>Form value: {{ form.value | json }}</p>-->\n    <!--<p>Form status: {{ form.status | json }}</p>-->\n  </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/user/registration/registration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_user_service__ = __webpack_require__("../../../../../src/app/user/service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_validationErrors__ = __webpack_require__("../../../../../src/app/user/shared/validationErrors.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent(userService, fb) {
        this.userService = userService;
        this.fb = fb;
        this.hide = true;
        this.hide1 = true;
        this.barLabel = "Password strength:";
        this.myColors = ['#DD2C00', '#FF6D00', '#FFD600', '#AEEA00', '#00C853'];
        this.config = [
            {
                type: 'usernameInput',
                name: 'username',
                placeholder: 'Username',
                check: 'reg'
            },
            {
                type: 'emailInput',
                name: 'email',
                placeholder: 'Email'
            }
        ];
        this.form = this.createGroup();
    }
    RegistrationComponent.prototype.createGroup = function () {
        var _this = this;
        var group = this.fb.group({
            password: ['',
                [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].minLength(6)
                ]],
            checkbox: [false,
                this.checkCheckbox
            ],
            duplicate: ['', []]
        }, { validator: this.checkIfMatchingPasswords('password', 'duplicate') });
        this.config.forEach(function (control) {
            group.addControl(control.name, _this.fb.control(''));
        });
        return group;
    };
    RegistrationComponent.prototype.checkCheckbox = function (c) {
        if (c.value == false) {
            return 'false';
        }
        else
            return true;
    };
    RegistrationComponent.prototype.checkIfMatchingPasswords = function (passwordKey, passwordConfirmationKey) {
        return function (group) {
            var passwordInput = group.controls[passwordKey], passwordConfirmationInput = group.controls[passwordConfirmationKey];
            if (passwordInput.value !== passwordConfirmationInput.value) {
                return passwordConfirmationInput.setErrors({ notEquivalent: true });
            }
            else {
                return passwordConfirmationInput.setErrors(null);
            }
        };
    };
    RegistrationComponent.prototype.getErrorMessage = function (control) {
        return __WEBPACK_IMPORTED_MODULE_4__shared_validationErrors__["a" /* ValidationErrors */].getErrorMessage(control, this.form);
    };
    RegistrationComponent.prototype.onSubmit = function (form) {
        this.userService.regUser(form.value);
    };
    RegistrationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-registration',
            template: __webpack_require__("../../../../../src/app/user/registration/registration.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user/registration/registration.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__service_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user/service/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        // private url = 'http://localhost:3000/';
        this.url = 'http://kepamu01.beget.tech/';
    }
    UserService.prototype.regUser = function (arg) {
        console.log(arg);
        this.http.post(this.url + "auth/registration", arg).subscribe(function (data) {
            console.log(data);
        });
    };
    UserService.prototype.checkDB = function (value, type) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpParams */]();
        params = params.append('value', value);
        params = params.append('type', type);
        return this.http.get(this.url + "auth/checkField", { params: params });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/app/user/shared/validationErrors.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidationErrors; });
var ValidationErrors = /** @class */ (function () {
    function ValidationErrors() {
    }
    ValidationErrors.getErrorMessage = function (control, form) {
        if (control === 'username') {
            return form.controls['username'].hasError('required') ? 'You must enter a value' :
                form.controls['username'].hasError('pattern') ? 'Not a valid username' :
                    form.controls['username'].hasError('minlength') ? "Required at least " + form.controls['username'].errors['minlength']['requiredLength'] + " characters. Actual length " + form.controls['username'].errors['minlength']['actualLength'] :
                        form.controls['username'].hasError('fieldTaken') ? 'This username already taken.' : form.controls['username'].hasError('fieldIsset') ? 'This username don\'t exist.' : '';
        }
        else if (control === 'email') {
            return form.controls['email'].hasError('required') ? 'You must enter a email' :
                form.controls['email'].hasError('email') ? 'Not a valid email' :
                    form.controls['email'].hasError('fieldTaken') ? 'This email already taken.' : '';
        }
        else if (control === 'password') {
            return form.controls['password'].hasError('required') ? 'You must enter a password' : form.controls['password'].hasError('minlength') ? "Required at least " + form.controls['password'].errors['minlength']['requiredLength'] + " characters. Actual length " + form.controls['password'].errors['minlength']['actualLength'] :
                '';
        }
        else if (control === 'duplicate') {
            return form.controls['duplicate'].hasError('notEquivalent') ? 'Passwords not match' : '';
        }
    };
    return ValidationErrors;
}());



/***/ }),

/***/ "../../../../../src/app/user/user-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__registration_registration_component__ = __webpack_require__("../../../../../src/app/user/registration/registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_component__ = __webpack_require__("../../../../../src/app/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login_component__ = __webpack_require__("../../../../../src/app/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dynamic_fields_testing_testing_component__ = __webpack_require__("../../../../../src/app/user/dynamic-fields/testing/testing.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: 'user', component: __WEBPACK_IMPORTED_MODULE_3__user_component__["a" /* UserComponent */],
        children: [
            {
                path: 'registration',
                component: __WEBPACK_IMPORTED_MODULE_2__registration_registration_component__["a" /* RegistrationComponent */]
            },
            {
                path: 'login',
                component: __WEBPACK_IMPORTED_MODULE_4__login_login_component__["a" /* LoginComponent */]
            },
            {
                path: 'testing',
                component: __WEBPACK_IMPORTED_MODULE_5__dynamic_fields_testing_testing_component__["a" /* TestingComponent */]
            }
        ]
    }
];
var UserRoutingModule = /** @class */ (function () {
    function UserRoutingModule() {
    }
    UserRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
            ]
        })
    ], UserRoutingModule);
    return UserRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/user/user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserComponent = /** @class */ (function () {
    function UserComponent() {
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user',
            template: __webpack_require__("../../../../../src/app/user/user.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user/user.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_password_strength_bar__ = __webpack_require__("../../../../ng2-password-strength-bar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_password_strength_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_password_strength_bar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_user_service__ = __webpack_require__("../../../../../src/app/user/service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_mat_module__ = __webpack_require__("../../../../../src/shared/mat.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_routing_module__ = __webpack_require__("../../../../../src/app/user/user-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dynamic_fields_containers_dynamic_form_dynamic_form_component__ = __webpack_require__("../../../../../src/app/user/dynamic-fields/containers/dynamic-form/dynamic-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__login_login_component__ = __webpack_require__("../../../../../src/app/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dynamic_fields_testing_testing_component__ = __webpack_require__("../../../../../src/app/user/dynamic-fields/testing/testing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__user_component__ = __webpack_require__("../../../../../src/app/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__registration_registration_component__ = __webpack_require__("../../../../../src/app/user/registration/registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__dynamic_fields_components_username_input_username_input_component__ = __webpack_require__("../../../../../src/app/user/dynamic-fields/components/username-input/username-input.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__dynamic_fields_components_dynamic_field_dynamic_field_directive__ = __webpack_require__("../../../../../src/app/user/dynamic-fields/components/dynamic-field/dynamic-field.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__dynamic_fields_components_form_select_form_select_component__ = __webpack_require__("../../../../../src/app/user/dynamic-fields/components/form-select/form-select.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__dynamic_fields_components_form_button_form_button_component__ = __webpack_require__("../../../../../src/app/user/dynamic-fields/components/form-button/form-button.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__dynamic_fields_components_email_input_email_input_component__ = __webpack_require__("../../../../../src/app/user/dynamic-fields/components/email-input/email-input.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__user_component__["a" /* UserComponent */],
                __WEBPACK_IMPORTED_MODULE_12__registration_registration_component__["a" /* RegistrationComponent */],
                __WEBPACK_IMPORTED_MODULE_9__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_8__dynamic_fields_containers_dynamic_form_dynamic_form_component__["a" /* DynamicFormComponent */],
                __WEBPACK_IMPORTED_MODULE_10__dynamic_fields_testing_testing_component__["a" /* TestingComponent */],
                __WEBPACK_IMPORTED_MODULE_13__dynamic_fields_components_username_input_username_input_component__["a" /* UsernameInputComponent */],
                __WEBPACK_IMPORTED_MODULE_14__dynamic_fields_components_dynamic_field_dynamic_field_directive__["a" /* DynamicFieldDirective */],
                __WEBPACK_IMPORTED_MODULE_15__dynamic_fields_components_form_select_form_select_component__["a" /* FormSelectComponent */],
                __WEBPACK_IMPORTED_MODULE_16__dynamic_fields_components_form_button_form_button_component__["a" /* FormButtonComponent */],
                __WEBPACK_IMPORTED_MODULE_17__dynamic_fields_components_email_input_email_input_component__["a" /* EmailInputComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_6__shared_mat_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_4_ng2_password_strength_bar__["PasswordStrengthBarModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_7__user_routing_module__["a" /* UserRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* FormsModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_11__user_component__["a" /* UserComponent */],
                __WEBPACK_IMPORTED_MODULE_8__dynamic_fields_containers_dynamic_form_dynamic_form_component__["a" /* DynamicFormComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__service_user_service__["a" /* UserService */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_16__dynamic_fields_components_form_button_form_button_component__["a" /* FormButtonComponent */],
                __WEBPACK_IMPORTED_MODULE_13__dynamic_fields_components_username_input_username_input_component__["a" /* UsernameInputComponent */],
                __WEBPACK_IMPORTED_MODULE_15__dynamic_fields_components_form_select_form_select_component__["a" /* FormSelectComponent */],
                __WEBPACK_IMPORTED_MODULE_17__dynamic_fields_components_email_input_email_input_component__["a" /* EmailInputComponent */]
            ]
        })
    ], UserModule);
    return UserModule;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../../src/shared/mat.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["b" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["g" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["c" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["e" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["d" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["f" /* MatInputModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["b" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["g" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["c" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["e" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["d" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["f" /* MatInputModule */]
            ],
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map