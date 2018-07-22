(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/User.ts":
/*!*************************!*\
  !*** ./src/app/User.ts ***!
  \*************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/_layout/header/header.component.css":
/*!*****************************************************!*\
  !*** ./src/app/_layout/header/header.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/_layout/header/header.component.html":
/*!******************************************************!*\
  !*** ./src/app/_layout/header/header.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" href=\"#\">\n   \n    Noukari.pk\n  </a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"/\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link \" routerLink=\"/dashboard\">Dashboard</a>\n      </li>\n      <li class=\"nav-item\">\n          <a class=\"nav-link \" routerLink=\"/profile\">Profile</a>\n        </li>\n    </ul>\n    <form class=\"form-inline my-2 my-lg-0\">\n      <button class=\"btn btn-outline-success my-2 my-sm-0\" routerLink=\"/login\" type=\"submit\">Login</button>\n    </form>\n  </div>\n</nav>\n\n"

/***/ }),

/***/ "./src/app/_layout/header/header.component.ts":
/*!****************************************************!*\
  !*** ./src/app/_layout/header/header.component.ts ***!
  \****************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.submitForm = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/_layout/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/_layout/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/_layout/layout/layout.component.css":
/*!*****************************************************!*\
  !*** ./src/app/_layout/layout/layout.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/_layout/layout/layout.component.html":
/*!******************************************************!*\
  !*** ./src/app/_layout/layout/layout.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/_layout/layout/layout.component.ts":
/*!****************************************************!*\
  !*** ./src/app/_layout/layout/layout.component.ts ***!
  \****************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LayoutComponent = /** @class */ (function () {
    function LayoutComponent() {
    }
    LayoutComponent.prototype.ngOnInit = function () {
    };
    LayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! ./layout.component.html */ "./src/app/_layout/layout/layout.component.html"),
            styles: [__webpack_require__(/*! ./layout.component.css */ "./src/app/_layout/layout/layout.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _layout_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_layout/layout/layout.component */ "./src/app/_layout/layout/layout.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _login_email_login_email_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login-email/login-email.component */ "./src/app/login-email/login-email.component.ts");
/* harmony import */ var _apply_job_apply_job_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./apply-job/apply-job.component */ "./src/app/apply-job/apply-job.component.ts");
/* harmony import */ var _login_register_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login-register.service */ "./src/app/login-register.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    /*{ path: '', redirectTo: '/', pathMatch: 'full' },
    { path: 'about', component: AboutComponent },
    { path: 'login', component: LoginComponent },*/
    // App routes goes here here
    {
        path: '',
        component: _layout_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"],
        children: [
            { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], pathMatch: 'full' },
            { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"] },
            { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"], canActivate: [_login_register_service__WEBPACK_IMPORTED_MODULE_10__["LoginRegisterService"]] }
        ]
    },
    {
        path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
    },
    {
        path: 'apply', component: _apply_job_apply_job_component__WEBPACK_IMPORTED_MODULE_9__["ApplyJobComponent"]
    },
    {
        path: 'login-email', component: _login_email_login_email_component__WEBPACK_IMPORTED_MODULE_8__["LoginEmailComponent"]
    },
    {
        path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n\r\n<!-- <app-apply-job></app-apply-job> -->"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: firebaseConfig, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firebaseConfig", function() { return firebaseConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_layout/header/header.component */ "./src/app/_layout/header/header.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _layout_layout_layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_layout/layout/layout.component */ "./src/app/_layout/layout/layout.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _login_email_login_email_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./login-email/login-email.component */ "./src/app/login-email/login-email.component.ts");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/esm5/angular-bootstrap-md.es5.js");
/* harmony import */ var _login_register_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./login-register.service */ "./src/app/login-register.service.ts");
/* harmony import */ var _apply_job_apply_job_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./apply-job/apply-job.component */ "./src/app/apply-job/apply-job.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var firebaseConfig = {
    apiKey: "AIzaSyCtVMi5vcDNZMHenOhm_7Px0YR90pl1oGE",
    authDomain: "myauth-e8da6.firebaseapp.com",
    databaseURL: "https://myauth-e8da6.firebaseio.com",
    projectId: "myauth-e8da6",
    storageBucket: "",
    messagingSenderId: "535388604338"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _layout_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _layout_layout_layout_component__WEBPACK_IMPORTED_MODULE_8__["LayoutComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_11__["ProfileComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_18__["DashboardComponent"],
                _login_email_login_email_component__WEBPACK_IMPORTED_MODULE_19__["LoginEmailComponent"],
                _apply_job_apply_job_component__WEBPACK_IMPORTED_MODULE_22__["ApplyJobComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_20__["MDBBootstrapModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_14__["AngularFireModule"].initializeApp(firebaseConfig, 'angular-auth-firebase'),
                angularfire2_database__WEBPACK_IMPORTED_MODULE_15__["AngularFireDatabaseModule"],
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_16__["AngularFireAuthModule"]
            ],
            providers: [_auth_service__WEBPACK_IMPORTED_MODULE_17__["AuthService"], _login_register_service__WEBPACK_IMPORTED_MODULE_21__["LoginRegisterService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/apply-job/apply-job.component.css":
/*!***************************************************!*\
  !*** ./src/app/apply-job/apply-job.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/apply-job/apply-job.component.html":
/*!****************************************************!*\
  !*** ./src/app/apply-job/apply-job.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"md-form\">\n  <div class=\"file-field\">\n      <a class=\"btn-floating peach-gradient mt-0 float-left\">\n          <i class=\"fa fa-paperclip\" aria-hidden=\"true\"></i>\n          <input type=\"file\">\n      </a>\n      <div class=\"file-path-wrapper\">\n         <input class=\"file-path validate\" type=\"text\" placeholder=\"Upload your file\">\n      </div>\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/apply-job/apply-job.component.ts":
/*!**************************************************!*\
  !*** ./src/app/apply-job/apply-job.component.ts ***!
  \**************************************************/
/*! exports provided: ApplyJobComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplyJobComponent", function() { return ApplyJobComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _job_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../job.service */ "./src/app/job.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApplyJobComponent = /** @class */ (function () {
    function ApplyJobComponent(jobService) {
        this.jobService = jobService;
    }
    ApplyJobComponent.prototype.ngOnInit = function () {
        this.useCurrent = false;
    };
    ApplyJobComponent.prototype.useExsistingResume = function () {
        this.useCurrent = true;
    };
    ApplyJobComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-apply-job',
            template: __webpack_require__(/*! ./apply-job.component.html */ "./src/app/apply-job/apply-job.component.html"),
            styles: [__webpack_require__(/*! ./apply-job.component.css */ "./src/app/apply-job/apply-job.component.css")]
        }),
        __metadata("design:paramtypes", [_job_service__WEBPACK_IMPORTED_MODULE_1__["JobService"]])
    ], ApplyJobComponent);
    return ApplyJobComponent;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(_firebaseAuth, router) {
        var _this = this;
        this._firebaseAuth = _firebaseAuth;
        this.router = router;
        this.userDetails = null;
        this.user = _firebaseAuth.authState;
        this.user.subscribe(function (user) {
            if (user) {
                _this.userDetails = user;
                _this.router.navigateByUrl('/dashboard');
                console.log(_this.userDetails);
            }
            else {
                _this.userDetails = null;
            }
        });
    }
    AuthService.prototype.signInWithTwitter = function () {
        return this._firebaseAuth.auth.signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"].TwitterAuthProvider());
    };
    AuthService.prototype.signInWithFacebook = function () {
        return this._firebaseAuth.auth.signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"].FacebookAuthProvider());
    };
    AuthService.prototype.signInWithGoogle = function () {
        return this._firebaseAuth.auth.signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"].GoogleAuthProvider());
    };
    AuthService.prototype.isLoggedIn = function () {
        if (this.userDetails == null) {
            return false;
        }
        else {
            this.router.navigateByUrl('/dashboard');
            return true;
        }
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        this._firebaseAuth.auth.signOut()
            .then(function (res) { return _this.router.navigate(['/']); });
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\" >\r\n    <h1 class=\"display-4\">Search Jobs</h1>\r\n  <div class=\"input-group mb-3\">\r\n    <input class=\"form-control\" [(ngModel)]=\"searchText\" (keyup.enter)= \"onSearch()\" name=\"searchText\" type=\"search\" placeholder=\"Enter Keywords Company Name or Skill to search for\" aria-label=\"Search\">\r\n    <div class=\"input-group-append\">\r\n      <button class=\"btn btn-outline-secondary\"  (click)=\"onSearch()\" type=\"submit\">Search</button>\r\n    </div>\r\n  </div>\r\n  <div  *ngFor=\"let job of Jobs\">\r\n    <!-- Example row of columns -->\r\n\r\n    <div class=\"card text-center\">\r\n      <div class=\"card-header\">\r\n        <strong>{{job.title}}</strong>\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <h5 class=\"card-title\"> {{job.employer}}</h5>\r\n        <p class=\"card-text\">{{job.description}}</p>\r\n\r\n        <a href=\"#\" class=\"btn btn-primary\" routerLink=\"/apply\">Apply</a>\r\n      </div>\r\n      <div class=\"card-footer text-muted\">\r\n        Posted - {{job.postedSince}} Expires on {{job.expiresOn}}\r\n      </div>\r\n    </div>\r\n\r\n    <br>\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _job_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../job.service */ "./src/app/job.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(dataservice) {
        this.dataservice = dataservice;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.searchText = 'Angular';
    };
    DashboardComponent.prototype.onSearch = function () {
        var _this = this;
        console.log(this.searchText);
        this.dataservice.getJobs(this.searchText)
            .subscribe(function (jobs) {
            _this.Jobs = jobs;
        });
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_job_service__WEBPACK_IMPORTED_MODULE_1__["JobService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#myFooter{\r\n    padding-top:32px;\r\n}\r\n\r\n#myFooter .containers{\r\n\ttext-align: center;\r\n\tbackground-color: #eee;\r\n}\r\n\r\n#myFooter .footer-copyright{\r\n    margin-bottom: 35px;\r\n    text-align: center;\r\n    color: #777;\r\n}\r\n\r\n#myFooter ul{\r\n    list-style-type: none;\r\n    padding: 0;\r\n    margin-bottom: 18px;\r\n}\r\n\r\n#myFooter a{\r\n    color: #282b2d;\r\n    font-size: 18px;\r\n}\r\n\r\n#myFooter li{\r\n    display: inline-block;\r\n    margin: 0px 15px;\r\n    line-height: 2;\r\n}\r\n\r\n#myFooter .footer-social{\r\n    text-align: center;\r\n    padding-top: 25px;\r\n    padding-bottom: 25px;\r\n    background-color: #eee;\r\n}\r\n\r\n#myFooter .fa{\r\n    font-size: 36px;\r\n    margin-right: 15px;\r\n    margin-left: 20px;\r\n    background-color: white;\r\n    color: #d0d0d0;\r\n    border-radius: 51%;\r\n    padding: 10px;\r\n    height: 60px;\r\n    width: 60px;\r\n    text-align: center;\r\n    line-height: 43px;\r\n    text-decoration: none;\r\n    transition:color 0.2s;\r\n}\r\n\r\n#myFooter .fa-facebook:hover{\r\n   color: #2b55ff;\r\n}\r\n\r\n#myFooter .fa-facebook:focus{\r\n    color: #2b55ff; \r\n}\r\n\r\n#myFooter .fa-google-plus:hover{\r\n    color:red;\r\n}\r\n\r\n#myFooter .fa-google-plus:focus{\r\n    color:red;\r\n}\r\n\r\n#myFooter .fa-twitter:hover{\r\n    color: #00aced;\r\n\r\n}\r\n\r\n#myFooter .fa-twitter:focus{\r\n    color:#00aced;\r\n}\r\n\r\n/* CSS used for positioning the footers at the bottom of the page. */\r\n\r\n/* You can remove this. */\r\n\r\nhtml{\r\n    height: 100%;\r\n}\r\n\r\nbody{\r\n    display: flex;\r\n    display: -webkit-flex;\r\n    flex-direction: column;\r\n    height: 100%;\r\n}\r\n\r\n.content{\r\n   flex: 1 0 auto;\r\n   -webkit-flex: 1 0 auto;\r\n   min-height: 200px;\r\n}\r\n\r\n#myFooter{\r\n   flex: 0 0 auto;\r\n   -webkit-flex: 0 0 auto;\r\n}"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <footer id=\"myFooter\">\n        <div class=\"footer-social\">\n            <ul>\n                <li><a href=\"#\">Company Information</a></li>\n                <li><a href=\"#\">Contact us</a></li>\n                <li><a href=\"#\">Reviews</a></li>\n                <li><a href=\"#\">Terms of service</a></li>\n            </ul>\n        <p class=\"footer-copyright\">© 2016 Copyright Text</p>\n       \n            <a href=\"#\" class=\"social-icons\"><i class=\"fa fa-facebook\"></i></a>\n            <a href=\"#\" class=\"social-icons\"><i class=\"fa fa-google-plus\"></i></a>\n            <a href=\"#\" class=\"social-icons\"><i class=\"fa fa-twitter\"></i></a>\n        </div>\n    </footer>\n   \n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    padding-top: 50px;\r\n}\r\n.dropdown.dropdown-lg .dropdown-menu {\r\n    margin-top: -1px;\r\n    padding: 6px 20px;\r\n}\r\n.input-group-btn .btn-group {\r\n    display: flex !important;\r\n}\r\n.btn-group .btn {\r\n    border-radius: 0;\r\n    margin-left: -1px;\r\n}\r\n.btn-group .btn:last-child {\r\n    border-top-right-radius: 4px;\r\n    border-bottom-right-radius: 4px;\r\n}\r\n.btn-group .form-horizontal .btn[type=\"submit\"] {\r\n  border-top-left-radius: 4px;\r\n  border-bottom-left-radius: 4px;\r\n}\r\n.form-horizontal .form-group {\r\n    margin-left: 0;\r\n    margin-right: 0;\r\n}\r\n.form-group .form-control:last-child {\r\n    border-top-left-radius: 4px;\r\n    border-bottom-left-radius: 4px;\r\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n    <div class=\"container\">\n      <h1 class=\"display-3\">What We Do!!!</h1>\n      <p class=\"lead\">The portal is designed for internal recruitment purpose more than a regular job portal. It will simplify the normal paper\n        work to shortlist candidates and interview calling. The software is featured to filter candidates, inform them for\n        interview, shortlist candidates, store large number of resumes according to server capacity and normal job portal features\n        like candidates can apply for jobs from front end of the portal etc.</p>\n      <p>\n        <a class=\"btn btn-primary btn-lg\" href=\"#\" role=\"button\">Learn more &raquo;</a>\n      </p>\n\n    </div>\n    \n  \n  </div>\n\n  <div class=\"row\">\n    <div class=\"container\">\n        <div class=\"col-sm-12\">\n            <mdb-carousel [isControls]=\"true\" class=\"carousel slide carousel-fade\" [type]=\"'carousel-thumbnails'\">\n                <!--First slide-->\n                <mdb-slide>\n                    <img class=\"d-block \" src=\"../assets/images/MaleWDep.jpg\" alt=\"First slide\">\n                </mdb-slide>\n                <!--/First slide-->\n                <!--Second slide-->\n                <mdb-slide>\n                    <img class=\"d-block \" src=\"../assets/images/FemWDep.jpg\" alt=\"Second slide\">\n                </mdb-slide>\n                <!--/Second slide-->\n                <!--Third slide-->\n                <mdb-slide>\n                    <img class=\"d-block w-190\" src=\"../assets/images/FemNoDep.jpg\" alt=\"Third slide\">\n                </mdb-slide>\n                <!--/Third slide-->\n            </mdb-carousel>\n            <!--/.Carousel Wrapper-->\n\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/job.service.ts":
/*!********************************!*\
  !*** ./src/app/job.service.ts ***!
  \********************************/
/*! exports provided: JobService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobService", function() { return JobService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'multipart/form-data' })
};
var JobService = /** @class */ (function () {
    function JobService(_http) {
        this._http = _http;
    }
    JobService.prototype.getJobs = function (searchString) {
        console.log("Job service  " + searchString);
        return this._http
            .post("http://localhost:3000/dashboard", { searchStr: searchString })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            return data;
        }));
    };
    JobService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], JobService);
    return JobService;
}());



/***/ }),

/***/ "./src/app/login-email/login-email.component.css":
/*!*******************************************************!*\
  !*** ./src/app/login-email/login-email.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-form {\r\n    width: 340px;\r\n    margin: 50px auto;\r\n}\r\n.login-form form {\r\n    margin-bottom: 15px;\r\n    background: #f7f7f7;\r\n    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n    padding: 30px;\r\n}\r\n.login-form h2 {\r\n    margin: 0 0 15px;\r\n}\r\n.form-control, .btn {\r\n    min-height: 38px;\r\n    border-radius: 2px;\r\n}\r\n.btn {        \r\n    font-size: 15px;\r\n    font-weight: bold;\r\n}"

/***/ }),

/***/ "./src/app/login-email/login-email.component.html":
/*!********************************************************!*\
  !*** ./src/app/login-email/login-email.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-form\">\n  <form action=\"/examples/actions/confirmation.php\" method=\"post\">\n      <h2 class=\"text-center\">Log in</h2>       \n      <div class=\"form-group\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"Username\"  [(ngModel)] = \"user.email\" name=\"email\" required=\"required\">\n      </div>\n      <div class=\"form-group\">\n          <input type=\"password\" class=\"form-control\"  [(ngModel)] = \"user.password\" name=\"password\" placeholder=\"Password\" required=\"required\">\n      </div>\n      <div class=\"form-group\">\n          <button type=\"submit\" (click)=\"loginUser()\" class=\"btn btn-primary btn-block\">Log in</button>\n      </div>\n      <div class=\"clearfix\">\n          <label class=\"pull-left checkbox-inline\"><input type=\"checkbox\"> Remember me</label>\n          <a href=\"#\" class=\"pull-right\">Forgot Password?</a>\n      </div>        \n  </form>\n\n</div>"

/***/ }),

/***/ "./src/app/login-email/login-email.component.ts":
/*!******************************************************!*\
  !*** ./src/app/login-email/login-email.component.ts ***!
  \******************************************************/
/*! exports provided: LoginEmailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginEmailComponent", function() { return LoginEmailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_register_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../login-register.service */ "./src/app/login-register.service.ts");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../User */ "./src/app/User.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginEmailComponent = /** @class */ (function () {
    function LoginEmailComponent(loginService) {
        this.loginService = loginService;
    }
    LoginEmailComponent.prototype.ngOnInit = function () {
        this.user = new _User__WEBPACK_IMPORTED_MODULE_2__["User"]();
    };
    LoginEmailComponent.prototype.loginUser = function () {
        console.log(this.user.email, this.user.password);
        this.loginService.loginUser(this.user).subscribe(function (results) {
            // console.log('Results',results);
        });
    };
    LoginEmailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login-email',
            template: __webpack_require__(/*! ./login-email.component.html */ "./src/app/login-email/login-email.component.html"),
            styles: [__webpack_require__(/*! ./login-email.component.css */ "./src/app/login-email/login-email.component.css")]
        }),
        __metadata("design:paramtypes", [_login_register_service__WEBPACK_IMPORTED_MODULE_1__["LoginRegisterService"]])
    ], LoginEmailComponent);
    return LoginEmailComponent;
}());



/***/ }),

/***/ "./src/app/login-register.service.ts":
/*!*******************************************!*\
  !*** ./src/app/login-register.service.ts ***!
  \*******************************************/
/*! exports provided: LoginRegisterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRegisterService", function() { return LoginRegisterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginRegisterService = /** @class */ (function () {
    function LoginRegisterService(_http, router) {
        this._http = _http;
        this.router = router;
    }
    LoginRegisterService.prototype.registerUser = function (user) {
        var _this = this;
        console.log("login service " + user.email + "," + user.pass);
        return this._http
            .post("http://localhost:3000/register", user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            _this.router.navigateByUrl('/login');
            return data;
        }));
    };
    LoginRegisterService.prototype.loginUser = function (user) {
        var _this = this;
        console.log("service email pass " + user.email + "," + user.password);
        return this._http
            .post("http://localhost:3000/login-email", {
            email: user.email,
            password: user.password
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (token) {
            if (token) {
                // var token =  _.pick(data,['token']);
                console.log(token);
                _this.userAuthenticated = true;
                _this.router.navigateByUrl('/profile');
                return token;
            }
        }));
    };
    LoginRegisterService.prototype.canActivate = function () {
        return this.userAuthenticated;
    };
    LoginRegisterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginRegisterService);
    return LoginRegisterService;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#lock {\r\n    width:40%;\r\n    margin: 1.5em auto 4em auto;\r\n    display:block;\r\n}\r\n\r\n#fb {\r\n    background:#3B5998 url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 %3F%3E%3Csvg id%3D%22Layer_1%22 style%3D%22enable-background%3Anew 0 0 512 512%3B%22 version%3D%221.1%22 viewBox%3D%220 0 512 512%22 xml%3Aspace%3D%22preserve%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%3Cstyle type%3D%22text%2Fcss%22%3E%09.st0%7Bfill%3A%23fff%3B%7D%3C%2Fstyle%3E%3Cpath class%3D%22st0%22 d%3D%22M276.1%2C462V343.9h39.7l5.9-46h-45.6v-29.4c0-13.3%2C3.7-22.4%2C22.8-22.4l24.4%2C0v-41.2  c-4.2-0.6-18.7-1.8-35.5-1.8c-35.2%2C0-59.2%2C21.5-59.2%2C60.9v34h-39.8v46h39.8V462H276.1z%22 id%3D%22f%22%2F%3E%3C%2Fsvg%3E\") no-repeat 14px 6px;\r\n    background-size: 47px;\r\n    color:#fff;\r\n}\r\n\r\n#google {\r\n    border: 1px solid #95989A;\r\n    background: #fff  url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 %3F%3E%3C!DOCTYPE svg  PUBLIC '-%2F%2FW3C%2F%2FDTD SVG 1.1%2F%2FEN'  'http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd'%3E%3Csvg enable-background%3D%22new 0 0 400 400%22 height%3D%22400px%22 id%3D%22Layer_1%22 version%3D%221.1%22 viewBox%3D%220 0 400 400%22 width%3D%22400px%22 xml%3Aspace%3D%22preserve%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%3Cg%3E%3Cpath d%3D%22M142.9%2C24.2C97.6%2C39.7%2C59%2C73.6%2C37.5%2C116.5c-7.5%2C14.8-12.9%2C30.5-16.2%2C46.8c-8.2%2C40.4-2.5%2C83.5%2C16.1%2C120.3   c12.1%2C24%2C29.5%2C45.4%2C50.5%2C62.1c19.9%2C15.8%2C43%2C27.6%2C67.6%2C34.1c31%2C8.3%2C64%2C8.1%2C95.2%2C1c28.2-6.5%2C54.9-20%2C76.2-39.6   c22.5-20.7%2C38.6-47.9%2C47.1-77.2c9.3-31.9%2C10.5-66%2C4.7-98.8c-58.3%2C0-116.7%2C0-175%2C0c0%2C24.2%2C0%2C48.4%2C0%2C72.6c33.8%2C0%2C67.6%2C0%2C101.4%2C0   c-3.9%2C23.2-17.7%2C44.4-37.2%2C57.5c-12.3%2C8.3-26.4%2C13.6-41%2C16.2c-14.6%2C2.5-29.8%2C2.8-44.4-0.1c-14.9-3-29-9.2-41.4-17.9   c-19.8-13.9-34.9-34.2-42.6-57.1c-7.9-23.3-8-49.2%2C0-72.4c5.6-16.4%2C14.8-31.5%2C27-43.9c15-15.4%2C34.5-26.4%2C55.6-30.9   c18-3.8%2C37-3.1%2C54.6%2C2.2c15%2C4.5%2C28.8%2C12.8%2C40.1%2C23.6c11.4-11.4%2C22.8-22.8%2C34.2-34.2c6-6.1%2C12.3-12%2C18.1-18.3   c-17.3-16-37.7-28.9-59.9-37.1C228.2%2C10.6%2C183.2%2C10.3%2C142.9%2C24.2z%22 fill%3D%22%23FFFFFF%22%2F%3E%3Cg%3E%3Cpath d%3D%22M142.9%2C24.2c40.2-13.9%2C85.3-13.6%2C125.3%2C1.1c22.2%2C8.2%2C42.5%2C21%2C59.9%2C37.1c-5.8%2C6.3-12.1%2C12.2-18.1%2C18.3    c-11.4%2C11.4-22.8%2C22.8-34.2%2C34.2c-11.3-10.8-25.1-19-40.1-23.6c-17.6-5.3-36.6-6.1-54.6-2.2c-21%2C4.5-40.5%2C15.5-55.6%2C30.9    c-12.2%2C12.3-21.4%2C27.5-27%2C43.9c-20.3-15.8-40.6-31.5-61-47.3C59%2C73.6%2C97.6%2C39.7%2C142.9%2C24.2z%22 fill%3D%22%23EA4335%22%2F%3E%3C%2Fg%3E%3Cg%3E%3Cpath d%3D%22M21.4%2C163.2c3.3-16.2%2C8.7-32%2C16.2-46.8c20.3%2C15.8%2C40.6%2C31.5%2C61%2C47.3c-8%2C23.3-8%2C49.2%2C0%2C72.4    c-20.3%2C15.8-40.6%2C31.6-60.9%2C47.3C18.9%2C246.7%2C13.2%2C203.6%2C21.4%2C163.2z%22 fill%3D%22%23FBBC05%22%2F%3E%3C%2Fg%3E%3Cg%3E%3Cpath d%3D%22M203.7%2C165.1c58.3%2C0%2C116.7%2C0%2C175%2C0c5.8%2C32.7%2C4.5%2C66.8-4.7%2C98.8c-8.5%2C29.3-24.6%2C56.5-47.1%2C77.2    c-19.7-15.3-39.4-30.6-59.1-45.9c19.5-13.1%2C33.3-34.3%2C37.2-57.5c-33.8%2C0-67.6%2C0-101.4%2C0C203.7%2C213.5%2C203.7%2C189.3%2C203.7%2C165.1z%22 fill%3D%22%234285F4%22%2F%3E%3C%2Fg%3E%3Cg%3E%3Cpath d%3D%22M37.5%2C283.5c20.3-15.7%2C40.6-31.5%2C60.9-47.3c7.8%2C22.9%2C22.8%2C43.2%2C42.6%2C57.1c12.4%2C8.7%2C26.6%2C14.9%2C41.4%2C17.9    c14.6%2C3%2C29.7%2C2.6%2C44.4%2C0.1c14.6-2.6%2C28.7-7.9%2C41-16.2c19.7%2C15.3%2C39.4%2C30.6%2C59.1%2C45.9c-21.3%2C19.7-48%2C33.1-76.2%2C39.6    c-31.2%2C7.1-64.2%2C7.3-95.2-1c-24.6-6.5-47.7-18.2-67.6-34.1C67%2C328.9%2C49.6%2C307.5%2C37.5%2C283.5z%22 fill%3D%22%2334A853%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E\") no-repeat 25px;\r\n    background-size: 25px;\r\n}\r\n\r\n#email {\r\n    background: #ECECEC  url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 %3F%3E%3Csvg height%3D%22331.46899%22 id%3D%22svg2439%22 version%3D%221.0%22 width%3D%22439.371%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Acc%3D%22http%3A%2F%2Fcreativecommons.org%2Fns%23%22 xmlns%3Adc%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%22 xmlns%3Ainkscape%3D%22http%3A%2F%2Fwww.inkscape.org%2Fnamespaces%2Finkscape%22 xmlns%3Ardf%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%22 xmlns%3Asodipodi%3D%22http%3A%2F%2Fsodipodi.sourceforge.net%2FDTD%2Fsodipodi-0.dtd%22 xmlns%3Asvg%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cdefs id%3D%22defs2441%22%3E%3Cmarker id%3D%22ArrowEnd%22 markerHeight%3D%223%22 markerUnits%3D%22strokeWidth%22 markerWidth%3D%224%22 orient%3D%22auto%22 refX%3D%220%22 refY%3D%225%22 viewBox%3D%220 0 10 10%22%3E%3Cpath d%3D%22M 0%2C0 L 10%2C5 L 0%2C10 L 0%2C0 z%22 id%3D%22path2444%22%2F%3E%3C%2Fmarker%3E%3Cmarker id%3D%22ArrowStart%22 markerHeight%3D%223%22 markerUnits%3D%22strokeWidth%22 markerWidth%3D%224%22 orient%3D%22auto%22 refX%3D%2210%22 refY%3D%225%22 viewBox%3D%220 0 10 10%22%3E%3Cpath d%3D%22M 10%2C0 L 0%2C5 L 10%2C10 L 10%2C0 z%22 id%3D%22path2447%22%2F%3E%3C%2Fmarker%3E%3C%2Fdefs%3E%3Cg id%3D%22g2449%22 transform%3D%22translate(-145.3305%2C-145.3305)%22%3E%3Cpath d%3D%22M 569.374%2C461.472 L 569.374%2C160.658 L 160.658%2C160.658 L 160.658%2C461.472 L 569.374%2C461.472 z%22 id%3D%22path2451%22 style%3D%22fill%3Anone%3Bstroke%3A%23000000%3Bstroke-width%3A30.65500069%22%2F%3E%3Cpath id%3D%22path2453%22 style%3D%22fill%3Anone%3Bstroke%3A%23000000%3Bstroke-width%3A30.65500069%22%2F%3E%3Cpath d%3D%22M 164.46%2C164.49 L 340.78%2C343.158 C 353.849%2C356.328 377.63%2C356.172 390.423%2C343.278 L 566.622%2C165.928%22 id%3D%22path2455%22 style%3D%22fill%3Anone%3Bstroke%3A%23000000%3Bstroke-width%3A30.65500069%22%2F%3E%3Cpath d%3D%22M 170.515%2C451.566 L 305.61%2C313.46%22 id%3D%22path2457%22 style%3D%22fill%3Anone%3Bstroke%3A%23000000%3Bstroke-width%3A30.65500069%22%2F%3E%3Cpath d%3D%22M 557.968%2C449.974 L 426.515%2C315.375%22 id%3D%22path2459%22 style%3D%22fill%3Anone%3Bstroke%3A%23000000%3Bstroke-width%3A30.65500069%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\") no-repeat 25px;\r\n    background-size: 25px;\r\n}\r\n\r\n@media (max-width: 600px) {\r\n    #page {\r\n        padding:1em;\r\n    }\r\n    #toolbar {\r\n        width:90%;\r\n        margin-left: -45%;\r\n    }\r\n    #fb {\r\n        background:#3B5998;\r\n    }\r\n\r\n    #google {\r\n        background: #fff;\r\n    }\r\n\r\n    #email {\r\n        background: #ECECEC;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-container\">\n  <img src=\"assets/images/lock.svg\" id=\"lock\">\n\n    <span class=\"error\" *ngIf=\"error\">{{ error }}</span>\n\n  <button (click)=\"loginFb()\" id=\"fb\">Login With Facebook</button><br>\n  <button (click)=\"loginGoogle()\" id=\"google\">Login With Google</button>\n  <button routerLink=\"/login-email\" id=\"email\">Email</button>\n\n  <a routerLink=\"/register\" routerLinkActive=\"active\" class=\"alc\">No account? <strong>Create one here</strong></a>\n</div>\n\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this.authService.isLoggedIn()) {
            this.authService.logout();
        }
    };
    LoginComponent.prototype.signInWithTwitter = function () {
    };
    LoginComponent.prototype.loginGoogle = function () {
        var _this = this;
        this.authService.signInWithGoogle()
            .then(function (res) {
            _this.router.navigateByUrl('/profile');
        })
            .catch(function (err) { return console.log(err); });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    padding-top: 50px;\r\n}\r\n.dropdown.dropdown-lg .dropdown-menu {\r\n    margin-top: -1px;\r\n    padding: 6px 20px;\r\n}\r\n.input-group-btn .btn-group {\r\n    display: flex !important;\r\n}\r\n.btn-group .btn {\r\n    border-radius: 0;\r\n    margin-left: -1px;\r\n}\r\n.btn-group .btn:last-child {\r\n    border-top-right-radius: 4px;\r\n    border-bottom-right-radius: 4px;\r\n}\r\n.btn-group .form-horizontal .btn[type=\"submit\"] {\r\n  border-top-left-radius: 4px;\r\n  border-bottom-left-radius: 4px;\r\n}\r\n.form-horizontal .form-group {\r\n    margin-left: 0;\r\n    margin-right: 0;\r\n}\r\n.form-group .form-control:last-child {\r\n    border-top-left-radius: 4px;\r\n    border-bottom-left-radius: 4px;\r\n}"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Profile Works</h1>"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_register_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../login-register.service */ "./src/app/login-register.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(dataservice) {
        this.dataservice = dataservice;
    }
    ProfileComponent.prototype.userLoggedin = function () {
        return true;
        // return this.dataservice.userAuthenticated;
    };
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_login_register_service__WEBPACK_IMPORTED_MODULE_1__["LoginRegisterService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-form {\r\n    width: 400px;\r\n    height: 800px;\r\n    margin: 50px auto;\r\n}\r\n.login-form form {\r\n    margin-bottom: 15px;\r\n    background: #f7f7f7;\r\n    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n    padding: 30px;\r\n}\r\n.login-form h2 {\r\n    margin: 0 0 15px;\r\n}\r\n.form-control, .btn {\r\n    min-height: 38px;\r\n    border-radius: 2px;\r\n}\r\n.btn {        \r\n    font-size: 15px;\r\n    font-weight: bold;\r\n}"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"container\">\n    <div class=\"col-sm-6\">\n      <form>\n        <div class=\"form-group\">\n          <label>Name</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)] = \"user.firstName\" name=\"Name\" id=\"UserName\" placeholder=\"Type your Name here\">\n        </div>\n        <div class=\"form-group\">\n          <label>Email address</label>\n          <input type=\"email\" class=\"form-control\" [(ngModel)] = \"user.email\" name=\"email\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\">\n          <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n        </div>\n        <div class=\"form-group\">\n          <label>Password</label>\n          <input type=\"password\" class=\"form-control\"  [(ngModel)] = \"user.password\" name=\"password\" placeholder=\"Password\">\n        </div>\n        <div class=\"form-group\">\n            <label>Gender</label>\n            <input type=\"text\" class=\"form-control\"  [(ngModel)] = \"user.gender\" name=\"gender\" placeholder=\"Gender\">\n          </div>\n\n        <button type=\"submit\" (click)=\"registerUser()\" class=\"btn btn-primary\">Submit</button>\n      </form>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_register_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../login-register.service */ "./src/app/login-register.service.ts");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../User */ "./src/app/User.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(loginService) {
        this.loginService = loginService;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.user = new _User__WEBPACK_IMPORTED_MODULE_2__["User"]();
        this.user.gender = "Male";
    };
    RegisterComponent.prototype.registerUser = function () {
        console.log(this.user.email, this.user.password, this.user.firstName, this.user.gender);
        this.loginService.registerUser(this.user).subscribe(function (results) {
            console.log('Results', results);
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_login_register_service__WEBPACK_IMPORTED_MODULE_1__["LoginRegisterService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\ALi Kazmi\Java Learning\MEAN\Angular\Projects\Noukari\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map