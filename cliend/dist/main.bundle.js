webpackJsonp(["main"],{

/***/ "../models/atmDetails.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return atmDetails; });
var atmDetails = /** @class */ (function () {
    function atmDetails(name, vicinity, lat, lng) {
        this.name = name;
        this.vicinity = vicinity;
        this.lat = lat;
        this.lng = lng;
    }
    atmDetails.prototype.toString = function () {
        return "Name:" + this.name;
    };
    return atmDetails;
}());



/***/ }),

/***/ "../models/resturantDetails.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return restaurantDetails; });
var restaurantDetails = /** @class */ (function () {
    function restaurantDetails(name, vicinity, rating, lat, lng, icon) {
        this.name = name;
        this.vicinity = vicinity;
        this.rating = rating;
        this.lat = lat;
        this.lng = lng;
        this.icon = icon;
    }
    restaurantDetails.prototype.toString = function () {
        return "Name:" + this.name;
    };
    return restaurantDetails;
}());



/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__register_register_component__ = __webpack_require__("./src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__plan_plan_component__ = __webpack_require__("./src/app/plan/plan.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lone_lone_component__ = __webpack_require__("./src/app/lone/lone.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mytrips_mytrips_component__ = __webpack_require__("./src/app/mytrips/mytrips.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__group_group_component__ = __webpack_require__("./src/app/group/group.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__search_search_component__ = __webpack_require__("./src/app/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__suggestion_suggestion_component__ = __webpack_require__("./src/app/suggestion/suggestion.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__messages_messages_component__ = __webpack_require__("./src/app/messages/messages.component.ts");











//import {} from './';
var appRoutes = [
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_1__register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */] },
    { path: 'plantrip', component: __WEBPACK_IMPORTED_MODULE_3__plan_plan_component__["a" /* PlanComponent */] },
    { path: 'lone', component: __WEBPACK_IMPORTED_MODULE_4__lone_lone_component__["a" /* LoneComponent */] },
    { path: 'mytrips', component: __WEBPACK_IMPORTED_MODULE_5__mytrips_mytrips_component__["a" /* MytripsComponent */] },
    { path: 'group', component: __WEBPACK_IMPORTED_MODULE_6__group_group_component__["a" /* GroupComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */] },
    { path: 'search', component: __WEBPACK_IMPORTED_MODULE_8__search_search_component__["a" /* SearchComponent */] },
    { path: 'suggestion', component: __WEBPACK_IMPORTED_MODULE_9__suggestion_suggestion_component__["a" /* SuggestionComponent */] },
    { path: 'message', component: __WEBPACK_IMPORTED_MODULE_10__messages_messages_component__["a" /* MessagesComponent */] },
    { path: '', redirectTo: 'login', pathMatch: 'full' }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet> </router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing__ = __webpack_require__("./src/app/app-routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_uuid__ = __webpack_require__("./node_modules/angular2-uuid/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_uuid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_uuid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__register_register_component__ = __webpack_require__("./src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_authentication_service__ = __webpack_require__("./src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__plan_plan_component__ = __webpack_require__("./src/app/plan/plan.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_usertrip_service__ = __webpack_require__("./src/app/services/usertrip.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__lone_lone_component__ = __webpack_require__("./src/app/lone/lone.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__mytrips_mytrips_component__ = __webpack_require__("./src/app/mytrips/mytrips.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_modal_component__ = __webpack_require__("./src/app/services/modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__group_group_component__ = __webpack_require__("./src/app/group/group.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_plan_service__ = __webpack_require__("./src/app/services/plan.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ngx_tabs__ = __webpack_require__("./node_modules/ngx-tabs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ngx_tabs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_ngx_tabs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_transaction_service__ = __webpack_require__("./src/app/services/transaction.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__agm_core__ = __webpack_require__("./node_modules/@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_suggestions_service__ = __webpack_require__("./src/app/services/suggestions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__navbar_navbar_component__ = __webpack_require__("./src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_navbar_service__ = __webpack_require__("./src/app/services/navbar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__search_search_component__ = __webpack_require__("./src/app/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__chat_chat_component__ = __webpack_require__("./src/app/chat/chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_chat_service__ = __webpack_require__("./src/app/services/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__image_gallery_image_gallery_component__ = __webpack_require__("./src/app/image-gallery/image-gallery.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__fileupload_fileupload_component__ = __webpack_require__("./src/app/fileupload/fileupload.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__services_file_service__ = __webpack_require__("./src/app/services/file.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_ng2_file_upload__ = __webpack_require__("./node_modules/ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_31_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__suggestion_suggestion_component__ = __webpack_require__("./src/app/suggestion/suggestion.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__budget_budget_component__ = __webpack_require__("./src/app/budget/budget.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__messages_messages_component__ = __webpack_require__("./src/app/messages/messages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











// import { LoginComponent } from './login/login.component';

// import { SearchComponent } from './search/search.component';










//import { AgmCoreModule } from '@agm/core';






//import { NavbarService } from './navbar/navbar.service';









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_10__login_login_component__["a" /* LoginComponent */],
                // SearchComponent,
                __WEBPACK_IMPORTED_MODULE_11__plan_plan_component__["a" /* PlanComponent */],
                __WEBPACK_IMPORTED_MODULE_13__lone_lone_component__["a" /* LoneComponent */],
                __WEBPACK_IMPORTED_MODULE_14__mytrips_mytrips_component__["a" /* MytripsComponent */],
                __WEBPACK_IMPORTED_MODULE_15__services_modal_component__["a" /* ModalComponent */],
                __WEBPACK_IMPORTED_MODULE_16__group_group_component__["a" /* GroupComponent */],
                __WEBPACK_IMPORTED_MODULE_22__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_24__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_25__search_search_component__["a" /* SearchComponent */],
                __WEBPACK_IMPORTED_MODULE_26__chat_chat_component__["a" /* ChatComponent */],
                __WEBPACK_IMPORTED_MODULE_28__image_gallery_image_gallery_component__["a" /* ImageGalleryComponent */],
                __WEBPACK_IMPORTED_MODULE_29__fileupload_fileupload_component__["a" /* FileuploadComponent */],
                __WEBPACK_IMPORTED_MODULE_32__suggestion_suggestion_component__["a" /* SuggestionComponent */],
                __WEBPACK_IMPORTED_MODULE_33__budget_budget_component__["a" /* BudgetComponent */],
                __WEBPACK_IMPORTED_MODULE_34__messages_messages_component__["a" /* MessagesComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routing__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_31_ng2_file_upload__["FileUploadModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_18_ngx_tabs__["TabsModule"],
                __WEBPACK_IMPORTED_MODULE_20__agm_core__["a" /* AgmCoreModule */].forRoot({ apiKey: 'AIzaSyDgQfG6Y-bbidUjlgoNX8SotR2ofd2H9kA', libraries: ["places"] })
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__services_authentication_service__["a" /* AuthenticationService */],
                __WEBPACK_IMPORTED_MODULE_12__services_usertrip_service__["a" /* UsertripService */],
                __WEBPACK_IMPORTED_MODULE_17__services_plan_service__["a" /* PlanService */],
                __WEBPACK_IMPORTED_MODULE_6_angular2_uuid__["UUID"],
                __WEBPACK_IMPORTED_MODULE_19__services_transaction_service__["a" /* TransactionService */],
                __WEBPACK_IMPORTED_MODULE_21__services_suggestions_service__["a" /* SuggestionsService */],
                __WEBPACK_IMPORTED_MODULE_23__services_navbar_service__["a" /* NavbarService */],
                __WEBPACK_IMPORTED_MODULE_27__services_chat_service__["a" /* ChatService */],
                __WEBPACK_IMPORTED_MODULE_30__services_file_service__["a" /* FileService */],
                { provide: __WEBPACK_IMPORTED_MODULE_35__angular_common__["LocationStrategy"], useClass: __WEBPACK_IMPORTED_MODULE_35__angular_common__["HashLocationStrategy"] }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/budget/budget.component.css":
/***/ (function(module, exports) {

module.exports = "body {\r\n    margin: 0 auto;\r\n    max-width: 800px;\r\n    padding: 0 20px;\r\n}\r\n\r\n.container {\r\n    border: 2px solid #dedede;\r\n    background-color: #f1f1f1;\r\n    border-radius: 5px;\r\n    padding: 30px;\r\n    margin: 10px 0;\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/budget/budget.component.html":
/***/ (function(module, exports) {

module.exports = "  <div class=\"container\">\n  \n        <label><strong>Total Budget:</strong></label>\n         <label><strong>${{total}}</strong></label>&nbsp;&nbsp;&nbsp;&nbsp;\n        <label><strong>Available Budget:</strong></label>\n        <label><strong>${{available}}</strong></label>\n        <br/>\n        <label><h4>Add a new Expense:</h4></label><br/>\n        <label><strong>Description:</strong></label>\n        <input type=\"text\" id=\"description\" [(ngModel)]=\"description\">\n        <label><strong>Amount($):</strong></label>\n        <input type=\"text\" id=\"amount\" [(ngModel)]=\"amount\">\n        <button class=\"btn btn-primary\" (click)=\"onUpdate()\">Update</button> \n<br/>\n<div class='row' align=\"center\">\n <!-- Default panel contents -->\n &nbsp;&nbsp;&nbsp;<label><strong>Expenditure List</strong></label>\n <br/>\n                    <table class=\"table table-bordered table-condensed \">\n                    <thead>\n                     <th>Description</th>\n                     <th>Added By</th>\n                     <th>Amount</th>\n                     <th>Date added</th>\n                     <th>Modify</th>\n                    </thead>\n                    <tbody>\n                     <tr *ngFor=\"let tr of transactions\">\n                        <td>{{tr.description}}</td>\n                        <td>{{tr.userId}}</td>\n                      <td>{{tr.txamount}}</td>\n                      <td>{{tr.txdate| date:'yyyy-MM-dd HH:mm a'}}</td>\n                      <td>\n                          <button class=\"btn btn-primary\"  (click)=onDelete(tr.txId,tr.txamount)>Delete\n\n                          </button>\n                        </td>\n                     </tr>\n                    </tbody>\n                  </table>\n</div>\n</div>\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/budget/budget.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BudgetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_transaction_service__ = __webpack_require__("./src/app/services/transaction.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_uuid__ = __webpack_require__("./node_modules/angular2-uuid/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_uuid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_uuid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_usertrip_service__ = __webpack_require__("./src/app/services/usertrip.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BudgetComponent = /** @class */ (function () {
    function BudgetComponent(transactionService, userTripService) {
        this.transactionService = transactionService;
        this.userTripService = userTripService;
        this.total = 0.0;
        this.available = 0.0;
    }
    BudgetComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tripId = sessionStorage.getItem('tripId');
        console.log("from group component.ts , call from planservice tripId:" + this.tripId);
        this.userTripService.getTripsByTripId(this.tripId).subscribe(function (data) {
            console.log("data ");
            console.log(data.data);
            _this.trip = data.data;
            _this.total = _this.trip[0].budget;
            _this.available = _this.total;
            console.log("base value: " + _this.available);
        });
        this.transactionService.getAllTransactions(this.tripId).subscribe(function (data) {
            console.log("tripId passed in getalltx" + _this.tripId);
            console.log("get all tx from tripId");
            console.log(data);
            _this.transactions = data.data;
            console.log(_this.transactions);
            if (_this.transactions) {
                var i = 0;
                for (i = 0; i < _this.transactions.length; i++) {
                    _this.available = _this.available - _this.transactions[i].txamount;
                }
                console.log("final refresh value: " + _this.available);
            }
            else {
            }
        });
    };
    // calculateAvailableBal(transactionList:transactions){
    //   for (let transaction in transactionList){
    //     this.available = this.available-transaction.txamount;
    //   }
    //   return this.available;
    // }
    BudgetComponent.prototype.onUpdate = function () {
        var _this = this;
        var transaction = {
            txId: __WEBPACK_IMPORTED_MODULE_2_angular2_uuid__["UUID"].UUID(),
            userId: sessionStorage.getItem('userName'),
            tripId: sessionStorage.getItem('tripId'),
            txamount: this.amount,
            txdate: Date.now(),
            type: "debit",
            availableBal: this.available - this.amount,
            description: this.description
        };
        console.log("before save tx is called in .ts " + transaction);
        this.transactionService.saveTransaction(transaction).subscribe(function (data) {
            _this.transactionService.getAllTransactions(_this.tripId).subscribe(function (data1) {
                _this.transactions = data1.data;
                console.log("in transactions " + data1.data);
                //  this.available=this.transactions[0].availableBal;
                console.log("base value in tx: " + _this.available);
            });
            _this.description = "";
            _this.available = _this.available - _this.amount;
            _this.amount = 0.0;
        });
    };
    BudgetComponent.prototype.onDelete = function (txId, txamount) {
        var _this = this;
        console.log("deleted tx: " + txId);
        console.log("deleted tx: " + txamount);
        this.transactionService.deleteTransaction(txId).subscribe(function (data) {
            _this.transactionService.getAllTransactions(_this.tripId).subscribe(function (data1) {
                _this.transactions = data1.data;
                console.log("in transactions" + data1.data);
                _this.available = _this.available + txamount;
                console.log("base value in tx: " + _this.available);
            });
        });
    };
    BudgetComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-budget',
            template: __webpack_require__("./src/app/budget/budget.component.html"),
            styles: [__webpack_require__("./src/app/budget/budget.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_transaction_service__["a" /* TransactionService */], __WEBPACK_IMPORTED_MODULE_3__services_usertrip_service__["a" /* UsertripService */]])
    ], BudgetComponent);
    return BudgetComponent;
}());



/***/ }),

/***/ "./src/app/chat/chat.component.css":
/***/ (function(module, exports) {

module.exports = "\r\nbody {\r\n    margin: 0 auto;\r\n    max-width: 800px;\r\n    padding: 0 20px;\r\n}\r\n\r\n.container {\r\n    border: 2px solid #dedede;\r\n    background-color: #f1f1f1;\r\n    border-radius: 5px;\r\n    padding: 10px;\r\n    margin: 10px 0;\r\n}\r\n\r\n.darker {\r\n    border-color: #ccc;\r\n    background-color: #ddd;\r\n}\r\n\r\n.container::after {\r\n    content: \"\";\r\n    clear: both;\r\n    display: table;\r\n}\r\n\r\n.container img {\r\n    float: left;\r\n    max-width: 60px;\r\n    width: 100%;\r\n    margin-right: 20px;\r\n    border-radius: 50%;\r\n}\r\n\r\n.container img.right {\r\n    float: right;\r\n    margin-left: 20px;\r\n    margin-right:0;\r\n}\r\n\r\n.time-right {\r\n    float: right;\r\n    color: #aaa;\r\n}\r\n\r\n.time-left {\r\n    float: left;\r\n    color: #999;\r\n}\r\n"

/***/ }),

/***/ "./src/app/chat/chat.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"bg\">\n\n    <div class=\"container page-center\">\n \n      <div class=\"mx-auto\" style=\"width: 1000px;\">\n \n         <div class='row'>\n \n             <div class=\"panel panel-default\">\n \n   <!-- Default panel contents -->\n \n \n      <h3 style=\"margin-bottom: 30px; text-align: left;\">Messages</h3>\n \n     <div >\n \n       <table>\n \n         <tr  *ngFor=\"let chat of chats\">\n \n             <div class='container'>\n \n                 <p><b>{{chat.senderId}}</b> : {{chat.text}}</p>\n \n                 <span class=\"time-right\">{{chat.date| date:'yyyy-MM-dd HH:mm a'}}</span>    \n \n                </div>\n \n \n         </tr>\n \n \n \n       </table>\n \n       <div class=\"form-group\">\n \n           <input type=\"text\" class=\"form-control\" placeholder=\"Type Here..\" rows=\"4\" id=\"mesg\" [(ngModel)]=\"message\" (keypress)=\"keypressHandler($event)\"/>\n \n           \n \n           <br>\n \n           <button (click)=\"send()\"  type=\"submit\"\n \n           class=\"btn waves-effect waves-light s2\"  name=\"action\" >Send</button>\n \n       </div>\n \n          \n \n           \n \n      </div>\n \n   </div>\n \n   </div>\n \n  </div>\n \n  </div>\n "

/***/ }),

/***/ "./src/app/chat/chat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_uuid__ = __webpack_require__("./node_modules/angular2-uuid/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_uuid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_uuid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_plan_service__ = __webpack_require__("./src/app/services/plan.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_chat_service__ = __webpack_require__("./src/app/services/chat.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChatComponent = /** @class */ (function () {
    //mesg="";
    function ChatComponent(planService, chatService) {
        this.planService = planService;
        this.chatService = chatService;
        this.message = "";
    }
    ChatComponent.prototype.refresh = function () {
        window.location.reload();
    };
    ChatComponent.prototype.send = function () {
        var _this = this;
        var tripId;
        var receiver;
        if (sessionStorage.getItem('individual') === "true") {
            console.log("here");
            tripId = "";
            receiver = sessionStorage.getItem('receiver');
        }
        else {
            console.log("it is in else part: group trip");
            tripId = sessionStorage.getItem('tripId');
            receiver = "";
        }
        var msgg = {
            tripId: tripId,
            chatId: __WEBPACK_IMPORTED_MODULE_0_angular2_uuid__["UUID"].UUID(),
            text: this.message,
            date: Date.now(),
            senderId: sessionStorage.getItem('userName'),
            receiverId: receiver
        };
        console.log("message before being saved:" + msgg);
        this.chatService.saveSentMessage(msgg).subscribe(function (data) {
            _this.chats.push(msgg);
        });
        //console.log(this.message);
        //this.refresh();
    };
    ChatComponent.prototype.keypressHandler = function (event) {
        if (event.keyCode === 13) {
            this.send();
        }
    };
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("@@@@" + sessionStorage.getItem('tripId'));
        if (sessionStorage.getItem('individual') == "false") {
            //console.log("her e dfs")
            this.chatService.getChatsByTripId(sessionStorage.getItem('tripId')).subscribe(function (data) {
                // console.log(data.data)
                _this.chats = data.data;
                console.log("chats");
                console.log(_this.chats);
            });
        }
        else {
            console.log("there");
            this.chatService.get121Chats(sessionStorage.getItem('userName'), sessionStorage.getItem('receiver')).subscribe(function (data) {
                // console.log(data.data)
                _this.chats = data.data;
                // console.log("chats")
                // console.log(this.chats)
            });
        }
        // this.chatService.getChatId(this.planService.getTripID()).subscribe(data =>{
        //   console.log(data.data)
        //   this.chatId=data.data;
        // });
        // this.chatService.getChats(this.chatId).subscribe(data =>{
        //   console.log(data.data)
        //   this.chats=data.data;
        // });
    };
    ChatComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__("./src/app/chat/chat.component.html"),
            styles: [__webpack_require__("./src/app/chat/chat.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_plan_service__["a" /* PlanService */], __WEBPACK_IMPORTED_MODULE_3__services_chat_service__["a" /* ChatService */]])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "./src/app/fileupload/fileupload.component.css":
/***/ (function(module, exports) {

module.exports = ".header-section{\r\n    height: 80px;\r\n    line-height: 80px;\r\n    color: beige;\r\n    background-color: rgb(46, 43, 43);\r\n    font-size: 24px;\r\n    padding-left: 20px;\r\n}\r\n\r\n.card{\r\n    background-color: white;\r\n    -webkit-box-shadow:0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12);\r\n            box-shadow:0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12);\r\n    color:black;\r\n    margin: 20px;\r\n    padding: 10px;\r\n}\r\n\r\n.uploadList{\r\n    padding: 10px;\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n}"

/***/ }),

/***/ "./src/app/fileupload/fileupload.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container-fluid\">\n\n        <div class=\"row\">\n            <div class=\"col-md-2\"></div>\n            <div class=\"col-md-8\">\n                <div class=\"row card\">\n                    <div class=\"col-sm-12\">\n                        <h4>Upload Section</h4>\n                        <div id=\"fileSelector\">\n                            <input type=\"file\" name=\"fileUplaod\" id=\"fileUpload\"\n                            multiple ng2FileSelect [uploader]=\"uploader\">\n                        </div>\n                        <div>\n                            <div class=\"row uploadList\" *ngFor=\"let item of uploader.queue\">\n                                <div class=\"col-sm-4\">{{item.file.name}}</div>\n                                <div class=\"col-sm-4\">\n                                    <div class=\"progress\">\n                                        <div class=\"progress-bar bg-success\" \n                                        [ngStyle]=\"{'width':item.progress+'%'}\"></div>\n                                    </div>\n                                </div>\n                                <div class=\"col-sm-4\">\n                                        <button type=\"button\" class=\"btn btn-danger\" (click)=\"item.remove()\">Cancel</button>\n                                </div>\n                            </div>                        \n                        </div>\n                        <div class=\"row\" *ngIf=\"uploader?.queue?.length > 0\">\n                                <button type=\"button\" class=\"btn btn-primary\" (click)=\"uploader.uploadAll()\">Upload All</button>\n                        </div>\n                    </div>                \n                </div>\n            </div>\n            <div class=\"col-md-2\"></div>\n        </div>\n      </div>"

/***/ }),

/***/ "./src/app/fileupload/fileupload.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileuploadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__ = __webpack_require__("./node_modules/ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_file_service__ = __webpack_require__("./src/app/services/file.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_plan_service__ = __webpack_require__("./src/app/services/plan.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_usertrip_service__ = __webpack_require__("./src/app/services/usertrip.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var uri = 'https://go-ami-go.herokuapp.com/files/imgtodb';
var FileuploadComponent = /** @class */ (function () {
    function FileuploadComponent(usertripservice, fileService, planservice, http) {
        var _this = this;
        this.usertripservice = usertripservice;
        this.fileService = fileService;
        this.planservice = planservice;
        this.http = http;
        this.uploader = new __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__["FileUploader"]({ url: uri });
        this.attachmentList = [];
        this.currentTripId = sessionStorage.getItem("tripId");
        console.log("trip id in fileupload", this.currentTripId);
        this.uploader.onBuildItemForm = function (fileItem, form) {
            form.append('tripId', _this.currentTripId);
        };
        this.uploader.uploadAll();
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            if (response) {
                console.log("response", JSON.parse(response));
            }
        };
        this.fileService.sendTripIdToImageServer(this.currentTripId);
    }
    //   download(index){
    //     var filename = this.attachmentList[index].uploadname;
    //     this.fileService.downloadFile(filename)
    //     .subscribe(
    //         data => saveAs(data, filename),
    //         error => console.error(error)
    //     );
    // }
    FileuploadComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.uploader.onBeforeUploadItem = function (fileItem) {
            fileItem.formData.push({ tripId: _this.currentTripId });
        };
    };
    FileuploadComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-fileupload',
            template: __webpack_require__("./src/app/fileupload/fileupload.component.html"),
            styles: [__webpack_require__("./src/app/fileupload/fileupload.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__services_usertrip_service__["a" /* UsertripService */], __WEBPACK_IMPORTED_MODULE_2__services_file_service__["a" /* FileService */], __WEBPACK_IMPORTED_MODULE_3__services_plan_service__["a" /* PlanService */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* Http */]])
    ], FileuploadComponent);
    return FileuploadComponent;
}());



/***/ }),

/***/ "./src/app/group/group.component.css":
/***/ (function(module, exports) {

module.exports = "agm-map {\r\n    height: 300px;\r\n  }\r\n  .licolor{\r\n    color: green;\r\n  }\r\n  .container {\r\n  border: 2px solid #dedede;\r\n  background-color: #f1f1f1;\r\n  border-radius: 5px;\r\n  padding: 30px;\r\n  margin: 10px 0;\r\n}\r\n"

/***/ }),

/***/ "./src/app/group/group.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"row\" align=\"left\">\n  <div class=\"col-md-12\">\n    <a class=\"navbar-brand\"><strong>Group Page</strong></a>\n    <tabset vertical =\"true\">\n      <tab>\n        <span *tabHeading>\n            <b style=\"color: deepskyblue\">Chat</b> \n        </span>\n        <app-chat></app-chat>\n    </tab>\n\n    <tab>\n      <span *tabHeading>\n          <b style=\"color: deepskyblue\">Manage Budget</b>\n      </span>\n      <app-budget></app-budget>\n</tab>\n\n<tab>\n    <span *tabHeading>\n      <b style=\"color: deepskyblue\">Group media</b>\n    </span>\n      <app-image-gallery></app-image-gallery>\n      <app-fileupload></app-fileupload>\n    </tab>\n\n<tab>\n    <span *tabHeading>\n        <b style=\"color: deepskyblue\">Group Info</b>\n      </span>\n      <!--  -->\n      <div class=\"container\">\n      <div class='row' align=\"center\">\n        <div class=\"panel panel-default\">\n      <!-- Default panel contents -->\n            <div>\n                <label><strong>\n                    &nbsp;&nbsp;&nbsp;&nbsp; Trip Info:\n                  </strong></label>\n              <label><strong>\n                    &nbsp;&nbsp;&nbsp;&nbsp; Destination: {{destination}}\n                  </strong>\n                  </label>\n          <label><strong>\n                &nbsp;&nbsp;&nbsp;&nbsp; From Date: {{fromdate}}\n              </strong></label>\n              <label><strong>\n                    &nbsp;&nbsp;&nbsp;&nbsp; To Date: {{todate}}\n                  </strong></label>\n            </div>\n            <br/>\n            <div id=\"div1\" >\n              \n                <table >\n                <tr>\n                  <td><strong>Please enter userName:</strong></td>\t\n                  <td><input type=\"text\" [(ngModel)]=\"userName\"/>\n                    <button class=\"btn btn-primary\" (click)=\"addToGroup()\">Add Member</button></td>\n            \n                </tr>\n                  \n                </table>\n                </div>\n         <div class='panel-heading'><strong><h4>List of Members</h4></strong></div>\n        <div class='panel-body'>\n                &nbsp;&nbsp;&nbsp;&nbsp;<table class=\"table table-bordered table-condensed \">\n                     <thead>\n                         <th>User Name</th>\n                        </thead>\n                        <tbody>\n                         <tr *ngFor=\"let user of members\">\n                            <td>{{user}}</td>\n                         </tr>\n                        </tbody>\n                      </table>\n              </div>\n        </div>\n      </div>\n    </div>\n</tab>\n\n<tab>\n        <span *tabHeading>\n                <b style=\"color: deepskyblue\">Suggestions</b>\n            </span>\n    <app-suggestion></app-suggestion>\n</tab>\n\n    </tabset>\n    <!-- <alert></alert>\n          <router-outlet></router-outlet> -->\n\n  </div>\n</div>\n<!-- <div class=\"row\" align=\"left\">\n  <div class=\"col-md-12\">\n     <a class=\"navbar-brand\">Group Name</a>\n     <nav class=\"navbar navbar-expand-lg\" *ngIf='!showNav'>\n\n        \n        <ul class=\"nav navbar-nav\" routerLinkActive=\"active\">\n          <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/chat']\">Chat</a></li>\n          <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/budget']\">Manage Budget</a></li>\n\n          \n          <li class=\"nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"['/groupphotos']\">Group Photos</a>\n            </li> \n            <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/groupinfo']\">Group Info</a></li>\n            <li class=\"nav item\"><a class=\"nav-link\" [routerLink]=\"['/suggestions']\">Suggestions</a></li>\n              \n        </ul>\n    </nav>\n      <div class=\"container\">\n\n          <alert></alert>\n          <router-outlet></router-outlet>\n      </div>\n  </div>\n</div> -->\n"

/***/ }),

/***/ "./src/app/group/group.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_transaction_service__ = __webpack_require__("./src/app/services/transaction.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_uuid__ = __webpack_require__("./node_modules/angular2-uuid/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_uuid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_uuid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_utility_service__ = __webpack_require__("./src/app/services/utility.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_suggestions_service__ = __webpack_require__("./src/app/services/suggestions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__agm_core__ = __webpack_require__("./node_modules/@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_usertrip_service__ = __webpack_require__("./src/app/services/usertrip.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_file_service__ = __webpack_require__("./src/app/services/file.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import {PlanService} from './../services/plan.service';


//suggestions






var GroupComponent = /** @class */ (function () {
    //suggestions
    function GroupComponent(userTripService, mapsAPILoader, uuid, transactionService, ngZone, suggestionservice, fileSer, utilityService) {
        this.userTripService = userTripService;
        this.mapsAPILoader = mapsAPILoader;
        this.uuid = uuid;
        this.transactionService = transactionService;
        this.ngZone = ngZone;
        this.suggestionservice = suggestionservice;
        this.fileSer = fileSer;
        this.utilityService = utilityService;
    }
    GroupComponent.prototype.addToGroup = function () {
        var _this = this;
        console.log(this.utilityService.isUserExist(this.userName));
        this.utilityService.isUserExist(this.userName).subscribe(function (data) {
            _this.isValidUser = data.success;
            if (data.success) {
                console.log(_this.userName + " method returns " + _this.members.includes(_this.userName));
                if (_this.members.includes(_this.userName)) {
                    _this.messageClass = 'alert alert-danger';
                    _this.message1 = "User already selected";
                    // set an error message that 1."user already selected"
                }
                else if (_this.userName === sessionStorage.getItem('userName')) {
                    _this.messageClass = 'alert alert-danger';
                    _this.message1 = "Cannot add Current User";
                    console.log("if in validate user" + _this.isValidUser);
                    // this.members.push(this.userName);
                }
                else {
                    _this.members.push(_this.userName);
                    var trip = {
                        tripId: sessionStorage.getItem('tripId'),
                        members: _this.members
                    };
                    console.log("before call to trip service -------", trip);
                    _this.userTripService.updateTripByTripId(trip).subscribe(function (data) {
                    });
                }
            }
            else {
                _this.messageClass = 'alert alert-danger';
                _this.message1 = "Invalid User";
                // set an error message that "invalid username" ;
                console.log("else in validate user" + _this.isValidUser);
            }
            _this.userName = "";
        });
    };
    GroupComponent.prototype.ngOnInit = function () {
        // this.available=this.planservice.getBudget();
        var _this = this;
        //this.tripId=this.planservice.getTripID();
        this.tripId = sessionStorage.getItem('tripId');
        console.log("from group component.ts , call from planservice tripId:" + this.tripId);
        this.userTripService.getTripsByTripId(this.tripId).subscribe(function (data) {
            console.log("data");
            console.log(data.data);
            _this.trip = data.data;
            //      this.total=this.trip[0].budget;
            //    this.available = this.total;
            _this.fromdate = _this.trip[0].fromdate;
            _this.todate = _this.trip[0].todate;
            _this.destination = _this.trip[0].destination;
            _this.members = _this.trip[0].members;
        });
        // this.transactionService.getAllTransactions(this.tripId).subscribe(data =>{
        //   console.log("tripId passed in getalltx"+this.tripId)  
        //   console.log("get all tx from tripId")
        //   console.log(data);
        //   this.transactions=data.data;
        //   if(!this.transactions){
        //     this.available=this.transactions[0].availableBal;
        //   }
        // });
        this.searchControl = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormControl */]();
    };
    GroupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-group',
            template: __webpack_require__("./src/app/group/group.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_utility_service__["a" /* UtilityService */]],
            styles: [__webpack_require__("./src/app/group/group.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__services_usertrip_service__["a" /* UsertripService */], __WEBPACK_IMPORTED_MODULE_6__agm_core__["b" /* MapsAPILoader */], __WEBPACK_IMPORTED_MODULE_2_angular2_uuid__["UUID"], __WEBPACK_IMPORTED_MODULE_1__services_transaction_service__["a" /* TransactionService */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_4__services_suggestions_service__["a" /* SuggestionsService */], __WEBPACK_IMPORTED_MODULE_8__services_file_service__["a" /* FileService */], __WEBPACK_IMPORTED_MODULE_3__services_utility_service__["a" /* UtilityService */]])
    ], GroupComponent);
    return GroupComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<style>\n  .card {\n      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n      transition: 0.3s;\n      width: 80%\n  }\n\n  .card:hover {\n      box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\n  }\n\n  .container {\n      padding: 2px 8px;\n  }\n</style>\n\n\n<h3 style=\"margin-top: 30px; text-align: center;\">Welcome {{this.username}}!</h3>\n\n<div class=\"container\">\n <i> Search over a million flights, hotels, packages, and more.\n     No cancellation fee to change or cancel almost any hotel reservation </i>\n</div>\n\n<br>\n\n<div class=\"container\">\n  <h6>Book trip using exclusive Promo Code</h6>\n  <div class=\"row\">\n      <div class=\"col-md-4\">\n          <div class=\"card\">\n              <img src=\"assets/credit-card.jpg\" alt=\"Avatar\" style=\"width:100%\">\n              <div class=\"container\">\n                  <h4><b>Earn 25,000 GoAmiGo Rewards bonus points</b></h4>\n                  <p>Promo code: GOAMIGO25</p>\n              </div>\n          </div>\n      </div>\n      <div class=\"col-md-4\">\n          <div class=\"card\">\n              <img src=\"assets/daily-deal.png\" alt=\"Avatar\" style=\"width:100%\">\n              <div class=\"container\">\n                  <h5><b>Get 40% off featured hotels and save on flights</b></h5>\n                  <p>Promo code: GOAMIGODAILY</p>\n              </div>\n          </div>\n      </div>\n      <div class=\"col-md-4\">\n          <div class=\"card\">\n              <img src=\"assets/last-minute.jpg\" alt=\"Avatar\" style=\"width:100%\">\n              <div class=\"container\">\n                  <h4><b>Last minute travel Deals</b></h4>\n                 <p>Promo code: GOAMIGOLAST</p>\n              </div>\n          </div>\n      </div>\n\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_navbar_service__ = __webpack_require__("./src/app/services/navbar.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(nav) {
        this.nav = nav;
        this.username = "";
        // this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.nav.show();
        this.loadAllUsers();
        this.username = sessionStorage.getItem('userName');
    };
    HomeComponent.prototype.loadAllUsers = function () {
        // this.userService.getAll().subscribe(users => { this.users = users; });
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            moduleId: module.i.toString(),
            template: __webpack_require__("./src/app/home/home.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_navbar_service__["a" /* NavbarService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/image-gallery/image-gallery.component.css":
/***/ (function(module, exports) {

module.exports = "ul{padding: 0%; width: 1200px;margin: 20px auto}\r\nli{display: inline;}\r\n.tn{\r\n    margin: 6px;\r\n    border: 4px solid #eee;\r\n    -webkit-box-shadow: #555 1px 1px 8px 1px;\r\n            box-shadow: #555 1px 1px 8px 1px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/image-gallery/image-gallery.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n        <div class=\"row\">\n            <button id=\"viewimages\" name=\"viewimages\" class=\"btn btn-primary\" (click)=\"viewImages()\"> view Images</button>\n            <ul id = \"thumbnailist\">\n                <li *ngFor =\"let image of ImageList\">\n                        <img src=\"{{image}}\" class=\"tn\">\n                </li>\n            </ul>\n        </div>\n      </div>"

/***/ }),

/***/ "./src/app/image-gallery/image-gallery.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageGalleryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_file_service__ = __webpack_require__("./src/app/services/file.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_plan_service__ = __webpack_require__("./src/app/services/plan.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_usertrip_service__ = __webpack_require__("./src/app/services/usertrip.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ImageGalleryComponent = /** @class */ (function () {
    function ImageGalleryComponent(doms, fs, ps, us) {
        this.doms = doms;
        this.fs = fs;
        this.ps = ps;
        this.us = us;
        this.ImageList = [];
        this.imageID = [];
        this.imageName = [];
        this.imagePath = [];
    }
    ImageGalleryComponent.prototype.viewImages = function () {
        var _this = this;
        this.fs.getImages(this.tripId).subscribe(function (data) {
            console.log("data in image galery ", data.images);
            for (var _i = 0, _a = data.images; _i < _a.length; _i++) {
                var image = _a[_i];
                var imageName = image.path;
                var imgsantiziedname = _this.doms.bypassSecurityTrustUrl(imageName);
                if (_this.ImageList.includes(imageName)) {
                    break;
                }
                else {
                    _this.ImageList.push(imageName);
                }
            }
        });
    };
    ImageGalleryComponent.prototype.ngOnInit = function () {
        this.tripId = sessionStorage.getItem("tripId");
        this.fs.setImageID(this.imageID);
        this.fs.setImageName(this.imageName);
        this.fs.setImagePath(this.imagePath);
    };
    ImageGalleryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-image-gallery',
            template: __webpack_require__("./src/app/image-gallery/image-gallery.component.html"),
            styles: [__webpack_require__("./src/app/image-gallery/image-gallery.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["b" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_1__services_file_service__["a" /* FileService */], __WEBPACK_IMPORTED_MODULE_2__services_plan_service__["a" /* PlanService */], __WEBPACK_IMPORTED_MODULE_3__services_usertrip_service__["a" /* UsertripService */]])
    ], ImageGalleryComponent);
    return ImageGalleryComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<html>\n<head>\n<style>\n.page-center{\ndisplay: flex;\njustify-content: center;\nalign-items: center;\nheight: 100vh;\nwidth: 100vw;\noverflow: auto;\n}\n\nbody, html {\nheight: 100%;\nmargin: 0;\n}\n\n.bg {\n/* The image used */\nbackground-image: url(\"assets/login_bg.jpg\");\n\n/* Full height */\nheight: 100%; \n\n/* Center and scale the image nicely */\nbackground-position: center;\nbackground-repeat: no-repeat;\nbackground-size: cover;\n}\n\n.login-form{\npadding: 25px;\nbackground: #ecf0f1;\n}\n    </style>\n</head>\n\n\n\n<div class=\"bg\">\n   \n<div class=\"container page-center\">\n<!-- Login Form -->\n<form [formGroup]=\"form\" class=\"login-form\" (submit)=\"onLoginSubmit()\">\n\n  <!-- Username Field -->\n  <div class=\"form-group\">\n      <h2><strong>Go-AmiGo</strong></h2>\n  <h6>\"Say yes to new adventures!!\"</h6>\n  <br>\n    <label for=\"username\" ><strong>Username</strong></label>\n    <div [ngClass]=\"{'has-error': form.controls.username.errors && form.controls.username.dirty, 'has-success': form.controls.username.valid && form.controls.username.dirty }\">\n      <input class=\"form-control\" type=\"text\" name=\"username\" formControlName=\"username\"pattern=\"[A-Za-z]{5,5}[0-9]{1}\"/>\n      <!-- Validation -->\n\n        <div *ngIf=\"form.controls.username.errors?.required && (form.controls['username'].dirty || form.controls['username'].touched)\" class=\"alert alert-danger\">*Username is Required</div>\n    </div>\n  </div>\n\n  <!-- Password Field  -->\n  <div class=\"form-group\">\n    <label for=\"password\"><strong>Password</strong></label>\n    <div [ngClass]=\"{'has-error': form.controls.password.errors && form.controls.password.dirty, 'has-success': form.controls.password.valid && form.controls.password.dirty }\">\n      <input class=\"form-control\" type=\"password\" name=\"password\" formControlName=\"password\" pattern=\"[A-Za-z]{5,5}[0-9]{1}\"/>\n      <!-- Validation -->\n      \n        <div *ngIf=\"form.controls.password.errors?.required && (form.controls['password'].dirty || form.controls['password'].touched)\" class=\"alert alert-danger\">*Password is Required</div>\n      \n    </div>\n  </div>\n<!-- Custom Success/Error Message -->\n<div class=\"row show-hide-message\">\n    <div [ngClass]=\"messageClass\">\n      {{ message }}\n    </div>\n  </div>\n \n  <!-- Submit Button -->\n  <input class=\"btn btn-primary\" type=\"submit\" value=\"Login\" />\n  <div style=\"padding-top: 10px;\"> \n      <h6>Not a member? <a [routerLink]=\"['/register']\"><strong>Register</strong> </a>\n      </h6>\n  </div>\n\n</form>\n</div>\n</div>\n</html>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__("./src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
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
    function LoginComponent(formBuilder, authService, router) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.processing = false;
        this.createForm();
    }
    LoginComponent.prototype.createForm = function () {
        this.form = this.formBuilder.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]
        });
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        this.processing = true;
        var user = {
            username: this.form.get('username').value,
            password: this.form.get('password').value
        };
        this.authService.login(user).subscribe(function (data) {
            if (data.success == false) {
                //console.log(data)
                _this.messageClass = 'alert alert-danger';
                _this.message = data.message;
            }
            else {
                if (typeof (Storage) !== 'undefined') {
                }
                //console.log("i am here");
                _this.messageClass = 'alert alert-success';
                _this.message = data.message;
                if (typeof (Storage) !== 'undefined') {
                    sessionStorage.setItem('userName', _this.form.get('username').value);
                }
                _this.router.navigate(['/home']);
            }
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/lone/lone.component.css":
/***/ (function(module, exports) {

module.exports = "agm-map {\r\n    height: 300px;\r\n  }\r\n  .licolor{\r\n    color: green;\r\n  }"

/***/ }),

/***/ "./src/app/lone/lone.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"row\" align=\"left\">\n  <div class=\"col-md-12\">\n    <a class=\"navbar-brand\">Individual trips</a>\n    <tabset vertical =\"true\">\n\n    <tab>\n      <span *tabHeading>\n          <b style=\"color: deepskyblue\">Manage Budget</b>\n      </span>\n      <app-budget></app-budget>\n    \n  </tab>\n  <tab>\n    <span *tabHeading>\n        <b style=\"color: deepskyblue\">Trip media</b>\n    </span>\n        <app-image-gallery></app-image-gallery>\n        <app-fileupload></app-fileupload>\n  </tab>\n \n<tab>\n    <span *tabHeading>\n        <b style=\"color: deepskyblue\">Suggestions</b>\n    </span>\n    <app-suggestion></app-suggestion>\n\n</tab>\n\n    </tabset>\n    \n"

/***/ }),

/***/ "./src/app/lone/lone.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoneComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_plan_service__ = __webpack_require__("./src/app/services/plan.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_transaction_service__ = __webpack_require__("./src/app/services/transaction.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_uuid__ = __webpack_require__("./node_modules/angular2-uuid/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_uuid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_uuid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_usertrip_service__ = __webpack_require__("./src/app/services/usertrip.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_suggestions_service__ = __webpack_require__("./src/app/services/suggestions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__agm_core__ = __webpack_require__("./node_modules/@agm/core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//import { Component, OnInit } from '@angular/core';





//suggestions


//suggestions
var LoneComponent = /** @class */ (function () {
    //suggestions
    function LoneComponent(userTripService, mapsAPILoader, uuid, planservice, transactionService, ngZone, suggestionservice) {
        this.userTripService = userTripService;
        this.mapsAPILoader = mapsAPILoader;
        this.uuid = uuid;
        this.planservice = planservice;
        this.transactionService = transactionService;
        this.ngZone = ngZone;
        this.suggestionservice = suggestionservice;
        this.tripId = "";
    }
    LoneComponent.prototype.ngOnInit = function () {
        //this.available=this.planservice.getBudget();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("search"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], LoneComponent.prototype, "searchElementRef", void 0);
    LoneComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-lone',
            template: __webpack_require__("./src/app/lone/lone.component.html"),
            styles: [__webpack_require__("./src/app/lone/lone.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_usertrip_service__["a" /* UsertripService */], __WEBPACK_IMPORTED_MODULE_6__agm_core__["b" /* MapsAPILoader */], __WEBPACK_IMPORTED_MODULE_3_angular2_uuid__["UUID"], __WEBPACK_IMPORTED_MODULE_1__services_plan_service__["a" /* PlanService */], __WEBPACK_IMPORTED_MODULE_2__services_transaction_service__["a" /* TransactionService */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_5__services_suggestions_service__["a" /* SuggestionsService */]])
    ], LoneComponent);
    return LoneComponent;
}());



/***/ }),

/***/ "./src/app/messages/messages.component.css":
/***/ (function(module, exports) {

module.exports = "\r\nbody{\r\n\r\n    font-family: 'Raleway', sans-serif;\r\n \r\n     background-color: #ACCEDC;\r\n \r\n     \r\n \r\n }\r\n \r\n .main-section small{\r\n \r\n     font-size: 12px;\r\n \r\n }\r\n \r\n .main-section h3, .main-section h5{\r\n \r\n     margin: 0px;\r\n \r\n }\r\n \r\n .main-section{\r\n \r\n     width: 960px;\r\n \r\n     background-color: #fff;\r\n \r\n     margin: auto;\r\n \r\n }\r\n \r\n .head-section{\r\n \r\n     border-bottom:1px solid #E6E6E6;\r\n \r\n     clear: both;\r\n \r\n     overflow: hidden;\r\n \r\n     width: 100%;\r\n \r\n }\r\n \r\n .headLeft-section{\r\n \r\n     width: calc(30% - 1px);\r\n \r\n     float: left;\r\n \r\n     border-right:1px solid #E6E6E6;\r\n \r\n }\r\n \r\n .headLeft-sub{\r\n \r\n     padding: 15px;\r\n \r\n     text-align: center;\r\n \r\n }\r\n \r\n .headLeft-sub input{\r\n \r\n     width: 60%;\r\n \r\n     border-radius: 0px;\r\n \r\n     border:1px solid #E6E6E6;\r\n \r\n     padding: 7px;\r\n \r\n }\r\n \r\n .headLeft-sub button{\r\n \r\n     background: #009EF7;\r\n \r\n     color: #fff;\r\n \r\n     border:1px solid #E6E6E6;\r\n \r\n     padding: 7px 15px;\r\n \r\n }\r\n \r\n .headRight-section{\r\n \r\n     width: 70%;\r\n \r\n     float: left;\r\n \r\n }\r\n \r\n .headRight-sub{\r\n \r\n     padding: 10px 15px 0px 15px;\r\n \r\n }\r\n \r\n .body-section{\r\n \r\n     clear: both;\r\n \r\n     overflow: hidden;\r\n \r\n     width: 100%;\r\n \r\n }\r\n \r\n .left-section{\r\n \r\n     width: calc(30% - 1px);\r\n \r\n     float: left;\r\n \r\n     height: 500px;\r\n \r\n     border-right:1px solid #E6E6E6;\r\n \r\n     background-color: #FFF;\r\n \r\n     z-index: 1;\r\n \r\n     position: relative;\r\n \r\n }\r\n \r\n .left-section ul{\r\n \r\n     padding: 0px;\r\n \r\n     margin: 0px;\r\n \r\n     list-style: none;\r\n \r\n }\r\n \r\n .left-section ul li{\r\n \r\n     padding: 15px 0px;\r\n \r\n     cursor: pointer;\r\n \r\n }\r\n \r\n .left-section ul li.active{\r\n \r\n     background: #009EF7;\r\n \r\n     color: #fff;\r\n \r\n     position: relative;\r\n \r\n }\r\n \r\n .mCustomScrollBox, .mCSB_container{\r\n \r\n     overflow: unset !important;\r\n \r\n }\r\n \r\n .left-section ul li.active .desc .time{\r\n \r\n     color: #fff;\r\n \r\n }\r\n \r\n .left-section ul li.active:before{\r\n \r\n     position: absolute;\r\n \r\n     content: '';\r\n \r\n     right: -10px;\r\n \r\n     border:5px solid #009EF7;\r\n \r\n     top: 0px;\r\n \r\n     bottom: 0px;\r\n \r\n     border-radius: 0px 3px 3px 0px;\r\n \r\n }\r\n \r\n .left-section ul li.active:after{\r\n \r\n  position: absolute;\r\n \r\n  content: \"\";\r\n \r\n  bottom: 0px;\r\n \r\n  right: 0px;\r\n \r\n  left: auto;\r\n \r\n  width: 100%;\r\n \r\n  top: 0px;\r\n \r\n  -webkit-box-shadow: -8px 4px 10px #a1a1a1;\r\n \r\n  box-shadow: -8px 4px 10px #a1a1a1;\r\n \r\n }\r\n \r\n .left-section .chatList{\r\n \r\n     overflow: hidden;\r\n \r\n }\r\n \r\n .left-section .chatList .img{\r\n \r\n     width: 60px;\r\n \r\n     float: left;\r\n \r\n     text-align: center;\r\n \r\n     position: relative;\r\n \r\n }\r\n \r\n .left-section .chatList .img img{\r\n \r\n     width: 30px;\r\n \r\n     border-radius: 50%;\r\n \r\n }\r\n \r\n .left-section .chatList .img i{\r\n \r\n     position: absolute;\r\n \r\n     font-size: 10px;\r\n \r\n     color: #52E2A7;\r\n \r\n     border:1px solid #fff;\r\n \r\n     border-radius: 50%;\r\n \r\n     left: 10px;\r\n \r\n }\r\n \r\n .left-section .chatList .desc{\r\n \r\n     width: calc(100% - 60px);\r\n \r\n     float: left;\r\n \r\n     position: relative;\r\n \r\n }\r\n \r\n .left-section .chatList .desc h5{\r\n \r\n     margin-top: 6px;\r\n \r\n     line-height: 5px;\r\n \r\n }\r\n \r\n .left-section .chatList .desc .time{\r\n \r\n     position: absolute;\r\n \r\n     right: 15px;\r\n \r\n     color: #c1c1c1;\r\n \r\n }\r\n \r\n .right-section{\r\n \r\n     width: 70%;\r\n \r\n     float: left;\r\n \r\n     height: 500px;\r\n \r\n     background-color: #F6F6F6;\r\n \r\n     position: relative;\r\n \r\n }\r\n \r\n .message{\r\n \r\n     height: calc(100% - 68px);\r\n \r\n     font-family: sans-serif;\r\n \r\n }\r\n \r\n .message ul{\r\n \r\n     padding: 0px;\r\n \r\n     list-style: none;\r\n \r\n     margin: 0px auto;\r\n \r\n     width: 90%;\r\n \r\n     overflow:hidden;\r\n \r\n }\r\n \r\n .message ul li{\r\n \r\n     position: relative;\r\n \r\n     width: 80%;\r\n \r\n     padding: 15px 0px;\r\n \r\n     clear: both;\r\n \r\n }\r\n \r\n .message ul li.msg-left{\r\n \r\n     float: left;\r\n \r\n }\r\n \r\n .message ul li.msg-left img{\r\n \r\n     position: absolute;\r\n \r\n     width: 40px;\r\n \r\n     bottom: 30px;\r\n \r\n }\r\n \r\n .message ul li.msg-left .msg-desc{\r\n \r\n     margin-left: 70px;\r\n \r\n     font-size: 12px;\r\n \r\n     background: #E8E8E8;\r\n \r\n     padding:5px 10px;\r\n \r\n     border-radius: 5px 5px 5px 0px;\r\n \r\n     position: relative;\r\n \r\n }\r\n \r\n .message ul li.msg-left .msg-desc:before{\r\n \r\n     position: absolute;\r\n \r\n     content: '';\r\n \r\n     border:10px solid transparent;\r\n \r\n     border-bottom-color: #E8E8E8;\r\n \r\n     bottom: 0px;\r\n \r\n     left: -10px;\r\n \r\n }\r\n \r\n .message ul li.msg-left small{\r\n \r\n     float: right;\r\n \r\n     color: #c1c1c1;\r\n \r\n }\r\n \r\n .message ul li.msg-right{\r\n \r\n     float: right;\r\n \r\n }\r\n \r\n .message ul li.msg-right img{\r\n \r\n     position: absolute;\r\n \r\n     width: 40px;\r\n \r\n     right: 0px;\r\n \r\n     bottom: 30px;\r\n \r\n }\r\n \r\n .message ul li.msg-right .msg-desc{\r\n \r\n     margin-right: 70px;\r\n \r\n     font-size: 12px;\r\n \r\n     background: #cce5ff;\r\n \r\n     color: #004085;\r\n \r\n     padding:5px 10px;\r\n \r\n     border-radius: 5px 5px 5px 0px;\r\n \r\n     position: relative;\r\n \r\n }\r\n \r\n .message ul li.msg-right .msg-desc:before{\r\n \r\n     position: absolute;\r\n \r\n     content: '';\r\n \r\n     border:10px solid transparent;\r\n \r\n     border-bottom-color: #cce5ff;\r\n \r\n     bottom: 0px;\r\n \r\n     right: -10px;\r\n \r\n }\r\n \r\n .message ul li.msg-right small{\r\n \r\n     float: right;\r\n \r\n     color: #c1c1c1;\r\n \r\n     margin-right: 70px;\r\n \r\n }\r\n \r\n .message ul li.msg-day{\r\n \r\n     border-top:1px solid #EBEBEB;\r\n \r\n     width: 100%;\r\n \r\n     padding: 0px;\r\n \r\n     margin: 15px 0px;\r\n \r\n }\r\n \r\n .message ul li.msg-day small{\r\n \r\n     position: absolute;\r\n \r\n     top: -10px;\r\n \r\n     background: #F6F6F6;\r\n \r\n     color: #c1c1c1;\r\n \r\n     padding: 3px 10px;\r\n \r\n     left: 50%;\r\n \r\n     -webkit-transform: translateX(-50%);\r\n \r\n             transform: translateX(-50%);\r\n \r\n }\r\n \r\n .right-section-bottom{\r\n \r\n     background: #fff;\r\n \r\n     width: 100%;\r\n \r\n     padding: 15px;\r\n \r\n     position: absolute;\r\n \r\n     bottom: 0px;\r\n \r\n     border-top:1px solid #E6E6E6;\r\n \r\n     text-align: center;\r\n \r\n }\r\n \r\n .right-section-bottom input{\r\n \r\n     border:0px;\r\n \r\n     padding:8px 5px;\r\n \r\n     width:calc(100% - 150px);\r\n \r\n }\r\n \r\n .right-section-bottom .btn-send{\r\n \r\n     border:0px;\r\n \r\n     padding: 8px 10px;\r\n \r\n     float: right;\r\n \r\n     margin-right: 30px;\r\n \r\n     color: #009EF7;\r\n \r\n     font-size: 18px;\r\n \r\n     background: #fff;\r\n \r\n     cursor: pointer;\r\n \r\n }\r\n \r\n .upload-btn{\r\n \r\n  position: relative;\r\n \r\n  overflow: hidden;\r\n \r\n  display: inline-block;\r\n \r\n  float: left;\r\n \r\n }\r\n \r\n .upload-btn .btn{\r\n \r\n    border:0px;\r\n \r\n     padding: 8px 10px;\r\n \r\n     color: #009EF7;\r\n \r\n     font-size: 18px;\r\n \r\n     background: #fff;\r\n \r\n     cursor: pointer;\r\n \r\n }\r\n \r\n .upload-btn input[type=file] {\r\n \r\n  font-size: 100px;\r\n \r\n  position: absolute;\r\n \r\n  left: 0;\r\n \r\n  top: 0;\r\n \r\n  opacity: 0;\r\n \r\n }\r\n \r\n "

/***/ }),

/***/ "./src/app/messages/messages.component.html":
/***/ (function(module, exports) {

module.exports = "\n<app-navbar></app-navbar>\n<!DOCTYPE html>\n<html>\n<head>\n    <link href=\"https://fonts.googleapis.com/css?family=Raleway\" rel=\"stylesheet\">\n    <link href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\" rel=\"stylesheet\">\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/malihu-custom-scrollbar-plugin/3.1.5/jquery.mCustomScrollbar.css\">\n</head>\n<body>\n    <div class=\"main-section\">\n        <div class=\"head-section\">\n            <div class=\"headLeft-section\">\n                <div class=\"headLeft-sub\">\n                    <h2>User List</h2>\n                </div>\n            </div>\n            <div class=\"headRight-section\">\n                <div class=\"headRight-sub\">\n                    <h3>Message</h3>\n                </div>\n            </div>\n        </div>\n        <div class=\"body-section\">\n            <div class=\"left-section mCustomScrollbar\" data-mcs-theme=\"minimal-dark\">\n                    <table>\n                            <tr  *ngFor=\"let chat of myarray\">                    \n                <ul>\n                    <li>\n                        <div class=\"chatList\">\n                            <div class=\"desc\" (click)='populateMsgs(chat.val,chat.key)'>                               \n                                {{chat.key}}\n                            </div>\n                        </div>\n                    </li>\n                </ul>\n                </tr>\n                </table>\n            </div>\n            <div class=\"right-section\">\n                <div class=\"message mCustomScrollbar\" data-mcs-theme=\"minimal-dark\">\n                        <table>\n                                <tr  *ngFor=\"let chat of messages\">  \n                    <ul>\n                        <li class=\"msg-left\">\n                            <div class=\"msg-left-sub\">\n                                <div class=\"msg-desc\">\n                                        {{chat.text}}     \n                                </div>\n                                <small>{{chat.date| date:'yyyy-MM-dd HH:mm a'}}</small>\n                            </div>\n                        </li>\n                        \n                    </ul>\n                    </tr></table>\n\n                </div>\n                <div class=\"right-section-bottom\">\n                    <form>\n                        <input type=\"text\" name=\"newMsg\" placeholder=\"type here...\" [(ngModel)]=\"newMsg\">\n                        <button class=\"btn-send\" (click)='onSave()'><i class=\"fa fa-send\"></i></button>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n    \n    <script src=\"http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js\"></script>\n    <!-- custom scrollbar plugin -->\n    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/malihu-custom-scrollbar-plugin/3.1.5/jquery.mCustomScrollbar.concat.min.js\"></script>\n</body>\n</html>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/messages/messages.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_navbar_service__ = __webpack_require__("./src/app/services/navbar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_uuid__ = __webpack_require__("./node_modules/angular2-uuid/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_uuid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_uuid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_chat_service__ = __webpack_require__("./src/app/services/chat.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(nav, chatService) {
        this.nav = nav;
        this.chatService = chatService;
        this.newMsg = "";
        this.newReceiver = "";
    }
    MessagesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.convMap = new Map();
        this.nav.show();
        this.chatService.getAll121Chats(sessionStorage.getItem("userName")).subscribe(function (data) {
            _this.conversations = data.data;
            if (_this.conversations.length > 0) {
                var i = 0;
                for (i = 0; i < _this.conversations.length; i++) {
                    if (_this.convMap.has(_this.conversations[i].receiverId)) {
                        _this.convMap.get(_this.conversations[i].receiverId).push(_this.conversations[i]);
                    }
                    else {
                        var tempArray = [_this.conversations[i]];
                        _this.convMap.set(_this.conversations[i].receiverId, tempArray);
                    }
                }
            }
            _this.chatService.getAll121ChatsReceiver(sessionStorage.getItem("userName")).subscribe(function (data) {
                _this.conversations = data.data;
                console.log("receievr");
                console.log(_this.conversations);
                if (_this.conversations.length > 0) {
                    var i = 0;
                    for (i = 0; i < _this.conversations.length; i++) {
                        console.log("------");
                        if (_this.convMap.has(_this.conversations[i].senderId)) {
                            console.log(_this.conversations[i].senderId);
                            _this.convMap.get(_this.conversations[i].senderId).push(_this.conversations[i]);
                        }
                        else {
                            console.log("----!!!!!!--");
                            var tempArray = [_this.conversations[i]];
                            console.log(_this.conversations[i].senderId);
                            _this.convMap.set(_this.conversations[i].senderId, tempArray);
                        }
                    }
                }
            });
            _this.myarray = _this.transform(_this.convMap);
            if (_this.myarray.length == 0) {
                _this.myarray.push({ key: '', val: '' });
            }
            console.log("my ");
            console.log(_this.myarray);
            _this.populateMsgs(_this.myarray[0].val, _this.myarray[0].key);
        });
        //console.log(this.convMap.entries);
    };
    MessagesComponent.prototype.transform = function (value, args) {
        //console.log(value)
        var returnArray = [];
        value.forEach(function (entryVal, entryKey) {
            //console.log(entryVal)
            returnArray.push({ key: entryKey, val: entryVal });
        });
        return returnArray;
    };
    MessagesComponent.prototype.populateMsgs = function (listOfChats, receiver) {
        this.messages = [];
        console.log("list");
        console.log(listOfChats);
        this.newReceiver = receiver;
        this.messages = listOfChats;
    };
    MessagesComponent.prototype.onSave = function () {
        var _this = this;
        var msgg = {
            tripId: "",
            chatId: __WEBPACK_IMPORTED_MODULE_2_angular2_uuid__["UUID"].UUID(),
            text: this.newMsg,
            date: Date.now(),
            senderId: sessionStorage.getItem('userName'),
            receiverId: this.newReceiver
        };
        // console.log("message before being saved:"+msgg);
        this.chatService.saveSentMessage(msgg).subscribe(function (data) {
            _this.messages.push(msgg);
            _this.newMsg = "";
        });
        //console.log(this.message);
        //this.refresh();
    };
    MessagesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-messages',
            template: __webpack_require__("./src/app/messages/messages.component.html"),
            styles: [__webpack_require__("./src/app/messages/messages.component.css")]
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'convMap' }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_navbar_service__["a" /* NavbarService */], __WEBPACK_IMPORTED_MODULE_3__services_chat_service__["a" /* ChatService */]])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "./src/app/mytrips/mytrips.component.css":
/***/ (function(module, exports) {

module.exports = "table.table-striped{\r\n    border:1px solid rgb(19, 19, 41);\r\n    margin-top:20px;\r\n  }\r\ntable.table-striped > thead > tr > th{\r\n    border:1px solid rgb(19, 19, 41);\r\n}\r\ntable.table-striped > tbody > tr > td{\r\n    border:1px solid rgb(19, 19, 41);\r\n}"

/***/ }),

/***/ "./src/app/mytrips/mytrips.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<html>\n<head>\n<style>\n    .page-center{\ndisplay: flex;\njustify-content: center;\nalign-items: center;\nheight: 100vh;\nwidth: 100vw;\noverflow: auto;\n}\n\nbody, html {\nheight: 100%;\nmargin: 0;\n}\n\n.bg {\n/* The image used */\nbackground-image: url(\"assets/Backp.jpg\");\n\n/* Full height */\nheight: 100%; \n\n/* Center and scale the image nicely */\nbackground-position: center;\nbackground-repeat: no-repeat;\nbackground-size: cover;\n}\n\n.mytrip-form{\npadding: 25px;\nbackground: #c5f4f7;\n}\n    </style>\n</head>\n<div class=\"bg\">\n<div class=\"mx-auto\" style=\"width: 1000px;\">\n<div class='row'>\n<div class=\"panel panel-default\">\n   <!-- Default panel contents -->\n<h3 style=\"margin-top: 30px; text-align: center;\"><strong>My Trips</strong></h3>\n   \n\n<div class=\"mytrip-form\">\n    <h5 style=\"margin-top: 30px; text-align: left;\"><strong>Lone Trips</strong></h5>\n      <table class=\"table table-striped\">\n        <thead>\n          <tr>\n         <th>Source</th>\n         <th>Destination</th>\n         <th>From</th>\n         <th>To</th>\n         <!-- <th>Modify</th>\n         <th>Delete</th> -->\n         <th>View</th>\n</tr>\n        </thead>\n        <tbody>\n         <tr *ngFor=\"let trip of mytrips\">\n           \n          <td *ngIf=\"trip.lone == 'lone'\">{{trip.source}}</td>\n          <td *ngIf=\"trip.lone == 'lone'\">{{trip.destination}}</td>\n          <td *ngIf=\"trip.lone == 'lone'\">{{trip.fromdate}}</td>\n          <td *ngIf=\"trip.lone == 'lone'\">{{trip.todate}}</td>\n          <!-- <td *ngIf=\"trip.lone == 'lone'\"><button class=\"btn btn-primary\" type=\"submit\">Update</button></td> -->\n          <!-- <td *ngIf=\"trip.lone == 'lone'\"><button class=\"btn btn-primary\" (click) = \"deleteTrip(trip)\">Delete</button></td> -->\n          <td *ngIf=\"trip.lone == 'lone'\"><button class=\"btn btn-primary\" type=\"button\" (click)='onViewLoneTrip(trip.tripId)'>View</button>\n          </td>\n         </tr>\n        </tbody>\n      </table>\n\n    </div>\n    \n    <div class=\"mytrip-form\">\n\n    <h5 style=\"margin-top: 30px; text-align: left;\"><strong>Group Trips</strong> </h5>\n\n    <div class='panel-body'>\n      <table class=\"table table-striped\">\n        <thead>\n          <tr>\n          <th>Source</th>\n          <th>Destination</th>\n         <th>From</th>\n         <th>To</th>\n         <!-- <th>Modify</th> -->\n         <th>View</th>\n         </tr>\n        </thead>\n        <tbody>\n         <tr *ngFor=\"let trip of mytrips\">\n          <td *ngIf=\"trip.lone == 'group'\">{{trip.source}}</td>\n          <td *ngIf=\"trip.lone == 'group'\">{{trip.destination}}</td>\n          <td *ngIf=\"trip.lone == 'group'\">{{trip.fromdate}}</td>\n          <td *ngIf=\"trip.lone == 'group'\">{{trip.todate}}</td>\n          <!-- <td *ngIf=\"trip.lone == 'group'\"><button class=\"btn btn-primary\" type=\"submit\">Update</button></td> -->\n          \n          <td *ngIf=\"trip.lone == 'group'\"><button class=\"btn btn-primary\" type=\"button\" (click)='onViewGroupTrip(trip.tripId)'>View</button>\n\n            </td>\n          </tr>\n        </tbody>\n           </table>\n\n    </div>\n  </div>\n</div>\n\n</div>\n</div>\n</div>\n</html>"

/***/ }),

/***/ "./src/app/mytrips/mytrips.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MytripsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_usertrip_service__ = __webpack_require__("./src/app/services/usertrip.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import {PlanService} from './../services/plan.service'
var MytripsComponent = /** @class */ (function () {
    function MytripsComponent(router, userTripService, http) {
        this.router = router;
        this.userTripService = userTripService;
        console.log("here");
        console.log(this.mytrips);
    }
    MytripsComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(sessionStorage.getItem('userName'));
        this.userTripService.getAllTrips(sessionStorage.getItem('userName')).subscribe(function (data) {
            console.log(data.data);
            _this.mytrips = data.data;
            //console.log(this.mytrips);
        });
    };
    MytripsComponent.prototype.onViewLoneTrip = function (trip) {
        //this.planTripService.setTripID(trip);
        sessionStorage.setItem('tripId', trip);
        sessionStorage.setItem('individual', "true");
        console.log("trip id in onViewLoneTrip: " + trip);
        this.router.navigate(['/lone']);
    };
    MytripsComponent.prototype.onViewGroupTrip = function (trip) {
        console.log("tripId in onViewGroupTrip " + trip);
        sessionStorage.setItem('individual', "false");
        //this.planTripService.setTripID(trip);
        sessionStorage.setItem('tripId', trip);
        this.router.navigate(['/group']);
    };
    MytripsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-mytrips',
            template: __webpack_require__("./src/app/mytrips/mytrips.component.html"),
            styles: [__webpack_require__("./src/app/mytrips/mytrips.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_usertrip_service__["a" /* UsertripService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__services_usertrip_service__["a" /* UsertripService */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */]])
    ], MytripsComponent);
    return MytripsComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12\">\n      <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\" style=\"background-color: aliceblue\" >\n<div class=\"navbar-left\">\n          <a class=\"navbar-brand\"  [routerLink]=\"['/home']\"><img src=\"assets/eart.png\"\n            style=\"width: 40px;\"> Go-Amigo</a>\n            </div>\n\n<div class=\"navbar-nav ml-auto\">\n          <ul class=\"nav navbar-nav\" routerLinkActive=\"active\" style=\"float: right;\">\n            \n            <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/search']\">Search</a></li>\n            <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/plantrip']\">Plan Trip</a></li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" [routerLink]=\"['/mytrips']\">My Trips</a>\n              </li> \n              <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/message']\"> Messages</a></li>\n            <li class=\"nav-item mr-sm-2\"><a class=\"nav-link\" [routerLink]=\"['/login']\"> Logout</a></li>\n             \n          </ul>\n        </div>\n      </nav>\n  \n     </div>\n     </div>\n\n\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_navbar_service__ = __webpack_require__("./src/app/services/navbar.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(nav) {
        this.nav = nav;
    }
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_navbar_service__["a" /* NavbarService */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/plan/plan.component.css":
/***/ (function(module, exports) {

module.exports = "/* MODAL STYLES\r\n-------------------------------*/\r\n    /* modals are hidden by default */\r\n    modal {\r\n        /* modals are hidden by default */\r\n        display: none;\r\n    }\r\n    .custom-modal {\r\n        /* modal container fixed across whole screen */\r\n        position: fixed;\r\n        top: 0;\r\n        right: 0;\r\n        bottom: 0;\r\n        left: 0;\r\n\r\n        /* z-index must be higher than .modal-background */\r\n        z-index: 1000;\r\n        \r\n        /* enables scrolling for tall modals */\r\n        overflow: auto;\r\n    }\r\n    .custom-modal-body {\r\n            padding: 20px;\r\n            background: #c5f4f7;\r\n\r\n            /* margin exposes part of the modal background */\r\n            margin: 40px;\r\n        }\r\n    .custom-modal-background {\r\n        /* modal background fixed across whole screen */\r\n        position: fixed;\r\n        top: 0;\r\n        right: 0;\r\n        bottom: 0;\r\n        left: 0;\r\n\r\n        /* semi-transparent black  */\r\n        background-color: #000;\r\n        opacity: 0.75;\r\n        \r\n        /* z-index must be below .modal and above everything else  */\r\n        z-index: 900;\r\n    }\r\n    body.modal-open {\r\n    /* body overflow is hidden to hide main scrollbar when modal window is open */\r\n    overflow: hidden;\r\n}\r\n"

/***/ }),

/***/ "./src/app/plan/plan.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<html>\n<head>\n<style>\n.page-center{\ndisplay: flex;\njustify-content: center;\nalign-items: center;\nheight: 100vh;\nwidth: 100vw;\noverflow: auto;\n}\n\nbody, html {\nheight: 100%;\nmargin: 0;\n}\n.bg {\n/* The image used */\nbackground-image: url(\"assets/Backp.jpg\");\n\n/* Full height */\nheight: 100%; \n\n/* Center and scale the image nicely */\nbackground-position: center;\nbackground-repeat: no-repeat;\nbackground-size: cover;\n}\n.plan-form{\npadding: 25px;\nbackground: #c5f4f7;\n}\n</style>\n</head>\n<div>\n\t  \n\n<div class=\"bg\">\n<div class=\"container page-center\">\n\n\t\t<form [formGroup]=\"form\" class=\"plan-form\" (submit)=\"onPlanSUbmit('custom-modal-1')\" ngNativeValidate>\n\t\t\t<h3 style=\"margin-top: 30px; text-align:center;\"><strong>Plan Trip</strong></h3>\n\t\t\t\t<br style=\"clear: both\">\n\n\t\t\t\t<div id=\"datepicker\" class=\"calendar\"></div>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t<label><strong>Source:</strong></label>\n\t\t\t\t\t\t<input type=\"text\" name=\"source\" placeholder=\"Search for Source\" class=\"form-control\" formControlName=\"source\" #source required=\"true\">\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t     <div>\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t<label><strong>Destination:</strong></label>\n\t\t\t\t\t\t\t\t<input type=\"text\" name=\"destination\" placeholder=\"Search for Destination\" class=\"form-control\" formControlName=\"destination\" #destination  required=\"true\" >\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t  </div>\t\n\t\t\t\t\t\t\n\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"form-group\">\n\n\t\t\t\t\t\t<div class=\"input-group registration-date-time\">\n\t\t\t\t\t\t\t<span class=\"input-group-addon\" id=\"basic-addon1\"></span>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<label><strong>From:</strong></label>\n\t\t\t\t\t\t\t<input class=\"form-control\" id=\"fromdate\"  [(ngModel)]=\"fromdate\" type=\"date\" name=\"fromdate\" required=\"true\" formControlName=\"fromdate\" >\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<label><strong>To:</strong></label>\n\t\t\t\t\t\t\t<input class=\"form-control\" id=\"todate\" type=\"date\" name=\"todate\"  [(ngModel)]=\"todate\" required=\"true\" formControlName=\"todate\">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"form-group\">\n\n\t\t\t\t\t\t\t<label><strong>Set Budget($):</strong></label>\n\t\t\t\t\t\t\t<input type=\"text\" name=\"amount\" required=\"true\" formControlName=\"amount\" pattern=\"[0-9]{1,20}\">\n\t\t\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\n\t\t\t\t\t\t\t<input type=\"radio\" name=\"lone\" value=\"lone\" formControlName=\"lone\" required=\"true\"/> <strong>Lone</strong>\n\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t<input type=\"radio\" name=\"lone\" value=\"group\" formControlName=\"lone\" required=\"true\"\t/><strong>Group</strong>\n\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"row show-hide-message\">\n\t\t\t\t\t\t<div [ngClass]=\"messageClass\">\n\t\t\t\t\t\t  {{ message1 }}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t  </div>\n\t<button type=\"submit\" id=\"submit\" name=\"submit\" class=\"btn btn-primary\" >Save</button>\n\t<button type=\"button\" id=\"reset\" name=\"reset\" class=\"btn btn-primary\" (click)=\"reset()\">Reset</button>\n\t\t\t</form>\n</div>\n</div>\n</div>\t\t\n</html>\n<modal id=\"custom-modal-1\">\n\t<div class=\"custom-modal\">\n\t\t<div class=\"custom-modal-body\">\n\t\t\t<h2>Group Options</h2>\n\t\t\t<table>\n\t\t\t\t<tr><td><button class=\"btn btn-primary\" (click)=\"createGroup();\">Create A Group</button></td>\n\t\t\t\t\t<td><button class=\"btn btn-primary\" (click)=\"searchPeople();\">Search People</button></td>\n\t\t\t\t\t\n\t\t\t\t</tr>\n\t\t\t\t\n\t\t\t\t<!--<tr>\n\t\t\t\t<td>Please enter userName:</td>\t\n\t\t\t\t<td><input type=\"text\" [(ngModel)]=\"userName\"/><button (click)=\"addToGroup()\">Add Member</button></td>\t\n\t\t\t\t</tr>!-->\n\n\t\t\t</table>\n\t\t</div>\n\t\t<div id=\"div1\" style=\"visibility: hidden\">\n\t\t\t\t<div class=\"custom-modal-body\">\n\t\t\t\t\t\t<div class=\"form-group\">\n\n\t\t\t\t<table >\n\t\t\t\t<tr>\n\t\t\t\t\t<td><strong>Please enter Username:</strong></td>\t\n\t\t\t\t\t<td><input type=\"text\" [(ngModel)]=\"userName\" data-error=\"invalid\"required/>\n\t\t\t\t\t\t<button class=\"btn btn-primary\" (click)=\"addToGroup()\">Add Member</button></td>\n\t\t\t\t</tr>\n\t\t\t\t\n\t\t\t\t<div class=\"row show-hide-message\">\n\t\t\t\t\t\t<div [ngClass]=\"messageClass\">\n\t\t\t\t\t\t  {{ message1 }}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t  </div>\n\t\t\t\t\n\t\t\t\t</table>\n\t\t\t\t<table class=\"table table-bordered table-condensed \">\n\t\t\t\t\t<thead>\n\t\t\t\t\t <th>UserID</th>\n\t\t\t\t\t <th>Delete</th> \n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t <tr *ngFor=\"let user of members\">\n\t\t\t\t\t\t<td>{{user}}</td>\n\t\t\t\t\t  <td>\n\t\t\t\t\t\t  <button class=\"btn btn-primary\"  (click)=onDelete(user)>Delete\n\t\t\t\t\t\t  </button>\n\n\t\t\t\t\t\t</td>\n\t\t\t\t\t </tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t  </table>\n\t\t\t\t</div>\n\n\t\t\t <button class=\"btn btn-primary\" (click)=\"Save();\">Save</button>\n\t\t\t<button class=\"btn btn-primary\" (click)=\"closeModal('custom-modal-1');\">Close</button>\n\t\t\t\t</div>\n\t\t</div>\n\t\t</div>\n\t<div class=\"custom-modal-background\"></div>\n</modal>"

/***/ }),

/***/ "./src/app/plan/plan.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlanComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_usertrip_service__ = __webpack_require__("./src/app/services/usertrip.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_uuid__ = __webpack_require__("./node_modules/angular2-uuid/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_uuid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_uuid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_modal_service__ = __webpack_require__("./src/app/services/modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__agm_core__ = __webpack_require__("./node_modules/@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_utility_service__ = __webpack_require__("./src/app/services/utility.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var PlanComponent = /** @class */ (function () {
    function PlanComponent(modalService, 
        //  private planservice:PlanService,
        uuid, formBuilder, userTripService, router, mapsAPILoader, ngZone, utilityService) {
        this.modalService = modalService;
        this.uuid = uuid;
        this.formBuilder = formBuilder;
        this.userTripService = userTripService;
        this.router = router;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.utilityService = utilityService;
        this.name = "len";
        this.members = [];
        this.createForm();
    }
    PlanComponent.prototype.createForm = function () {
        this.form = this.formBuilder.group({
            source: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            destination: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            todate: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            fromdate: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            lone: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            amount: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]
        });
    };
    PlanComponent.prototype.onPlanSUbmit = function (id) {
        if (this.OnCompare()) {
            this.messageClass = 'alert alert-danger';
            this.message1 = "To date should be greater than or equal to From date";
        }
        else {
            console.log(this.form.get('lone').value == "lone");
            if (this.form.get('lone').value == "lone") {
                this.Save();
            }
            else {
                this.modalService.open(id);
            }
        }
    };
    PlanComponent.prototype.Save = function () {
        //console.log(this.members)
        var _this = this;
        //if(this.form.get('lone').value=="group"){
        this.members.push(sessionStorage.getItem('userName'));
        var tripId = __WEBPACK_IMPORTED_MODULE_4_angular2_uuid__["UUID"].UUID();
        console.log("here" + this.form.get('amount').value);
        // const trip = {
        //   userId: sessionStorage.getItem('user'),
        //   tripId:tripId
        // }
        // this.userTripService.saveTrip(trip).subscribe(data =>{
        //   console.log("wrong") 
        // });
        var tempmessage = "";
        for (var _i = 0, _a = this.members; _i < _a.length; _i++) {
            var member = _a[_i];
            var usertrip = {
                source: this.source,
                destination: this.destination,
                todate: this.form.get('todate').value,
                fromdate: this.form.get('fromdate').value,
                lone: this.form.get('lone').value,
                name: member,
                tripId: tripId,
                members: this.members,
                amount: this.form.get('amount').value
            };
            this.userTripService.saveTripDetails(usertrip).subscribe(function (data) {
                if (!data.success) {
                    _this.messageClass = 'alert alert-danger'; // Set an error class
                    _this.saveSuccess = data.success;
                    tempmessage = data.message;
                    console.log("wrong");
                }
                else {
                    _this.messageClass = 'alert alert-success'; // Set a success class
                    tempmessage = data.message; // Set a success message
                    _this.saveSuccess = data.success;
                    //    console.log("dsfrg"+trip);
                    //this.userTripService.saveTrip(trip);  
                    // After 2 seco
                }
                _this.message = tempmessage;
                //this.planservice.setTripID(tripId);
                sessionStorage.setItem('tripId', tripId);
                //this.planservice.setBudget(this.form.get('amount').value);
                console.log(_this.form.get('lone').value == "lone");
                if (_this.form.get('lone').value == "lone") {
                    console.log("not navigating");
                    // if(this.saveSuccess){
                    // sessionStorage.setItem('tripId',tripId);
                    _this.router.navigate(['/lone']);
                    // }
                }
                else {
                    console.log("navigating");
                    _this.router.navigate(['/group']);
                }
            });
        }
        //}
    };
    PlanComponent.prototype.OnCompare = function () {
        console.log("---" + this.fromdate + "----" + this.todate);
        if (this.fromdate > this.todate) {
            console.log("Working");
            return true;
        }
    };
    PlanComponent.prototype.onDelete = function (user) {
        ///this.model.members.
        var index = this.members.indexOf(user, 0);
        if (index > -1) {
            this.members.splice(index, 1);
        }
    };
    PlanComponent.prototype.createGroup = function () {
        var x = document.getElementById("div1").style.visibility = "visible";
        //to show hinnden elementsS
    };
    PlanComponent.prototype.addToGroup = function () {
        var _this = this;
        console.log(this.utilityService.isUserExist(this.userName));
        this.utilityService.isUserExist(this.userName).subscribe(function (data) {
            _this.isValidUser = data.success;
            if (data.success) {
                console.log(_this.userName + " method returns " + _this.members.includes(_this.userName));
                if (_this.members.includes(_this.userName)) {
                    _this.messageClass = 'alert alert-danger';
                    _this.message1 = "User already selected";
                    // set an error message that 1."user already selected"
                }
                else if (_this.userName === sessionStorage.getItem('userName')) {
                    _this.messageClass = 'alert alert-danger';
                    _this.message1 = "Cannot add Current User";
                    console.log("if in validate user" + _this.isValidUser);
                    // this.members.push(this.userName);
                }
                else {
                    _this.members.push(_this.userName);
                }
            }
            else {
                _this.messageClass = 'alert alert-danger';
                _this.message1 = "Invalid User";
                // set an error message that "invalid username" ;
                console.log("else in validate user" + _this.isValidUser);
            }
            _this.userName = "";
        });
    };
    PlanComponent.prototype.searchPeople = function () {
        this.Save();
        this.router.navigate(['/search']);
    };
    PlanComponent.prototype.closeModal = function (id) {
        this.modalService.close(id);
    };
    PlanComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mapsAPILoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(_this.sourceElement.nativeElement, {
                types: ["(cities)"]
            });
            autocomplete.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    //get the place result
                    var place = autocomplete.getPlace();
                    _this.source = place.formatted_address;
                    //verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                });
            });
        });
        this.mapsAPILoader.load().then(function () {
            var autocomplete2 = new google.maps.places.Autocomplete(_this.destinationElement.nativeElement, {
                types: ["(cities)"]
            });
            autocomplete2.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    //get the place result
                    var place = autocomplete2.getPlace();
                    _this.destination = place.formatted_address;
                    //verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                });
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('source'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], PlanComponent.prototype, "sourceElement", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('destination'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], PlanComponent.prototype, "destinationElement", void 0);
    PlanComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-plan',
            template: __webpack_require__("./src/app/plan/plan.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_5__services_modal_service__["a" /* ModalService */], __WEBPACK_IMPORTED_MODULE_7__services_utility_service__["a" /* UtilityService */]],
            styles: [__webpack_require__("./src/app/plan/plan.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__services_modal_service__["a" /* ModalService */],
            __WEBPACK_IMPORTED_MODULE_4_angular2_uuid__["UUID"],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__services_usertrip_service__["a" /* UsertripService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_6__agm_core__["b" /* MapsAPILoader */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"],
            __WEBPACK_IMPORTED_MODULE_7__services_utility_service__["a" /* UtilityService */]])
    ], PlanComponent);
    return PlanComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<html>\n<head>\n<style>\n.page-center{\ndisplay: flex;\njustify-content: center;\nalign-items: center;\nheight: 100vh;\nwidth: 100vw;\noverflow: hidden;\n}\n\nbody, html {\nheight: 100%;\nmargin: 0;\n}\n\n.bg {\n/* The image used */\nbackground-image: url(\"assets/login_bg.jpg\");\n\n/* Full height */\nheight: 100%; \n\n/* Center and scale the image nicely */\nbackground-position: center;\nbackground-repeat: no-repeat;\nbackground-size: cover;\n}\n\n.login-form{\npadding:25px;\nbackground: #ecf0f1;\n}\n    </style>\n</head>\n\n<div class=\"bg\">\n       <div class=\"container page-center\">\n       \n  <div class=\"panel-heading\" style=\"width:30%\">\n    <div class=\"panel panel-primary \">\n    {{ title }}\n  </div>\n  <div class=\"panel-body\" >\n      <div class=\"row show-hide-message\">\n          <div [ngClass]=\"messageClass\">\n            {{ message }}\n          </div>\n        </div>\n    <form [formGroup]=\"form\" class=\"login-form\" (submit)=\"onRegisterSubmit()\">\n      <div class=\"form-group\">\n          <h3><strong>Registration</strong></h3>\n          <br>\n        <label class=\"col-sm-8\">Username</label>\n        <input type=\"text\" class=\"form-control\" name=\"username\" formControlName=\"username\" pattern=\"(?=.*\\d)[a-zA-Z\\d]{6,12}$\"/>\n      </div>\n      <div *ngIf=\"form.controls['username'].invalid && (form.controls['username'].dirty || form.controls['username'].touched)\" class=\"alert alert-danger\">\n        <div *ngIf=\"form.controls['username'].errors.required\">\n          *Username is required.\n        </div>\n        <div *ngIf=\"form.controls['username'].errors.pattern\">\n           *Username must contain a number.\n          </div>\n          <div *ngIf=\"form.controls['username'].errors.pattern\">\n           It should be between 6-12 characters.\n            </div>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"col-sm-8\">Email</label>\n        <input type=\"text\" class=\"form-control\" name=\"email\" formControlName=\"email\"  pattern=\"[a-zA-Z0-9.-_]{1,}@[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,}\"/>\n      </div>\n      \n        <div *ngIf=\"form.controls['email'].invalid && (form.controls['email'].dirty || form.controls['email'].touched)\" class=\"alert alert-danger\">\n            <div *ngIf=\"form.controls['email'].errors.required\">\n                *Email is required.\n              </div>\n        <div *ngIf=\"form.controls['email'].errors.pattern\">\n            *Email should be in valid format.\n          </div>\n      </div>\n      <div class=\"form-group\">\n          <label class=\"col-sm-8\">Password</label>\n          <input type=\"password\" class=\"form-control\" name=\"password\" formControlName=\"password\"  pattern=\"(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,12}$\"/>\n        </div>\n      <div *ngIf=\"form.controls['password'].invalid && (form.controls['password'].dirty || form.controls['password'].touched)\" class=\"alert alert-danger\">\n          <div *ngIf=\"form.controls['password'].errors.required\">\n            *Password is required.\n          </div>\n          <div *ngIf=\"form.controls['password'].errors.pattern\">\n            *Password should have atleast one special character \n            </div>\n            <div *ngIf=\"form.controls['password'].errors.pattern\">\n              *Length must be between 6-12.\n              </div>\n        </div>\n        <div class=\"form-group\">\n          <input type=\"submit\" class=\"btn btn-primary\"  value=\"submit\" value=\"Register\">\n        </div>\n    </form>\n  </div>\n</div>\n</div>\n</div></html>"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__("./src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(formBuilder, authService, router) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.createForm(); // Create Angular 2 Form when component loads
    }
    // Function to create registration form
    RegisterComponent.prototype.createForm = function () {
        this.form = this.formBuilder.group({
            // Email Input
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            // Username Input
            username: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            // Password Input
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            image: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]
        });
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            email: this.form.get('email').value,
            username: this.form.get('username').value,
            password: this.form.get('password').value
        };
        this.authService.registerUser(user).subscribe(function (data) {
            if (!data.success) {
                _this.messageClass = 'alert alert-danger'; // Set an error class
                _this.message = data.message;
            }
            else {
                _this.messageClass = 'alert alert-success'; // Set a success class
                _this.message = data.message; // Set a success message
                // After 2 second timeout, navigate to the login page
                setTimeout(function () {
                    _this.router.navigate(['/login']); // Redirect to login view
                }, 2000);
            }
        });
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("./src/app/register/register.component.html"),
            styles: [__webpack_require__("./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/search/search.component.css":
/***/ (function(module, exports) {

module.exports = "\r\ntable.table-striped{\r\n\r\n    border:1px solid rgb(19, 19, 41);\r\n \r\n    margin-top:20px;\r\n \r\n  }\r\n \r\n table.table-striped > thead > tr > th{\r\n \r\n    border:1px solid rgb(19, 19, 41);\r\n \r\n }\r\n \r\n table.table-striped > tbody > tr > td{\r\n \r\n    border:1px solid rgb(19, 19, 41);\r\n \r\n }\r\n \r\n /* MODAL STYLES\r\n \r\n -------------------------------*/\r\n \r\n /* modals are hidden by default */\r\n \r\n modal {\r\n \r\n        /* modals are hidden by default */\r\n \r\n        display: none;\r\n \r\n    }\r\n \r\n .custom-modal {\r\n \r\n        /* modal container fixed across whole screen */\r\n \r\n        position: fixed;\r\n \r\n        top: 0;\r\n \r\n        right: 0;\r\n \r\n        bottom: 0;\r\n \r\n        left: 0;\r\n \r\n \r\n        /* z-index must be higher than .modal-background */\r\n \r\n        z-index: 1000;\r\n \r\n       \r\n \r\n        /* enables scrolling for tall modals */\r\n \r\n        overflow: auto;\r\n \r\n    }\r\n \r\n .custom-modal-body {\r\n \r\n            padding: 20px;\r\n \r\n            background: #c5f4f7;\r\n \r\n \r\n            /* margin exposes part of the modal background */\r\n \r\n            margin: 40px;\r\n \r\n        }\r\n \r\n .custom-modal-background {\r\n \r\n        /* modal background fixed across whole screen */\r\n \r\n        position: fixed;\r\n \r\n        top: 0;\r\n \r\n        right: 0;\r\n \r\n        bottom: 0;\r\n \r\n        left: 0;\r\n \r\n \r\n        /* semi-transparent black  */\r\n \r\n        background-color: #000;\r\n \r\n        opacity: 0.75;\r\n \r\n       \r\n \r\n        /* z-index must be below .modal and above everything else  */\r\n \r\n        z-index: 900;\r\n \r\n    }\r\n \r\n body.modal-open {\r\n \r\n    /* body overflow is hidden to hide main scrollbar when modal window is open */\r\n \r\n    overflow: hidden;\r\n \r\n }\r\n  "

/***/ }),

/***/ "./src/app/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "\n<app-navbar></app-navbar>\n\n<html>\n\n<head>\n\n<style>\n\ntable.table-striped{\n\n   border:1px solid rgb(19, 19, 41);\n\n   margin-top:20px;\n\n }\n\ntable.table-striped > thead > tr > th{\n\n   border:1px solid rgb(19, 19, 41);\n\n}\n\ntable.table-striped > tbody > tr > td{\n\n   border:1px solid rgb(19, 19, 41);\n\n}\n\n\n.page-center{\n\ndisplay: flex;\n\njustify-content: center;\n\nalign-items: center;\n\nheight: 100vh;\n\nwidth: 100vw;\n\noverflow-y:default;\n\n}\n\n\nbody, html {\n\nheight: 100%;\n\nmargin: 0;\n\n}\n\n\n.bg {\n\n/* The image used */\n\nbackground-image: url(\"assets/Backp.jpg\");\n\n\n/* Full height */\n\nheight: 100%;\n\n\n/* Center and scale the image nicely */\n\nbackground-position: center;\n\nbackground-repeat: no-repeat;\n\nbackground-size: cover;\n\n}\n\n\n.search-form{\n\npadding: 25px;\n\nbackground: #c5f4f7;\n\n}\n\n\n</style>\n\n</head>\n\n\n<div class=\"bg\">\n\n   <div class=\"container page-center\">\n\n     <div class=\"mx-auto\" style=\"width: 1000px;\">\n\n        <div class='row'>\n\n            <div class=\"panel panel-default\">\n\n  <!-- Default panel contents -->\n\n  <div class=\"search-form\">\n\n     <h3 style=\"margin-bottom: 30px; text-align: left;\">Search people!</h3>\n\n\n     <label>Destination:</label>\n\n       <input type=\"text\" id=\"dest\" required=\"required\"/>\n\n         <button class=\"btn btn-primary\" type=\"submit\" (click)=onSubmit()>Submit</button>\n\n   \n\n\n   <h5 style=\"margin-top: 30px; text-align: left;\"><strong>Travellers List</strong></h5>\n\n           <div class='panel-body' *ngIf=\"trips\">\n\n                 \n\n                 <table class=\"table table-bordered\">\n\n                   <thead>\n\n                    <th>Name</th>\n\n                    <th>Source</th>\n\n                    <th>Destination</th>\n\n                    <th>Start Date</th>\n\n                    <th>End Date</th>\n\n                    <th>Connect</th>\n\n                   </thead>\n\n                   <tbody>\n\n                    <tr *ngFor=\"let trip of trips\">\n\n                     <td>{{trip.members[0]}} </td>\n\n                     <td>{{trip.source}}</td>\n\n                     <td>{{trip.destination}}</td>\n\n                     <td>{{trip.todate}}</td>\n\n                     <td>{{trip.fromdate}}</td>\n\n                     <td><button class=\"btn btn-primary\" type=\"button\" (click)=\"on121Chat(trip.members[0],'custom-modal-2')\">Connect</button></td>\n\n                    </tr>\n\n                   </tbody>\n\n                 </table>\n\n          </div>\n\n     </div>\n\n   </div>\n\n  </div>\n\n  </div>\n\n </div>\n\n </div>\n\n</html>\n\n<modal id=\"custom-modal-2\">\n\n   <div class=\"custom-modal\">\n\n     <div class=\"custom-modal-body\">\n\n         <app-chat></app-chat>\n\n        \n\n     \n\n     </div>\n\n     <button class=\"btn btn-primary\" (click)=\"closeModal('custom-modal-2');\">Close</button>\n\n  </div>\n\n  <div class=\"custom-modal-background\"></div>\n\n </modal>\n\n"

/***/ }),

/***/ "./src/app/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_modal_service__ = __webpack_require__("./src/app/services/modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_usertrip_service__ = __webpack_require__("./src/app/services/usertrip.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SearchComponent = /** @class */ (function () {
    function SearchComponent(modalService, router, ngZone, userTripService, activatedRoute, http) {
        this.modalService = modalService;
        this.router = router;
        this.ngZone = ngZone;
        this.userTripService = userTripService;
        this.activatedRoute = activatedRoute;
        this.dest = "";
        this.userName = "";
    }
    SearchComponent.prototype.ngOnInit = function () {
        this.userName = sessionStorage.getItem("userName");
    };
    SearchComponent.prototype.onSubmit = function () {
        var _this = this;
        this.userTripService.getTripsByDestination(this.dest, this.userName).subscribe(function (data) {
            console.log(data);
            _this.trips = data.data;
            console.log("value of my trips", _this.trips);
        });
    };
    SearchComponent.prototype.on121Chat = function (receiverName, id) {
        sessionStorage.setItem('receiver', receiverName);
        sessionStorage.setItem('individual', 'true');
        this.modalService.open(id);
    };
    SearchComponent.prototype.closeModal = function (id) {
        this.modalService.close(id);
    };
    SearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-search',
            template: __webpack_require__("./src/app/search/search.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_0__services_modal_service__["a" /* ModalService */]],
            styles: [__webpack_require__("./src/app/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_modal_service__["a" /* ModalService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgZone"],
            __WEBPACK_IMPORTED_MODULE_3__services_usertrip_service__["a" /* UsertripService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* Http */]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/services/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
        this.domain = "https://go-ami-go.herokuapp.com";
    }
    // Function to register user accounts
    AuthenticationService.prototype.registerUser = function (user) {
        return this.http.post(this.domain + '/authentication/register', user).map(function (res) { return res.json(); });
    };
    AuthenticationService.prototype.login = function (user) {
        return this.http.post(this.domain + '/authentication/login', user).map(function (res) { return res.json(); });
    };
    AuthenticationService.prototype.checkUser = function (userId) {
        return this.http.get(this.domain + '/authentication/usercheck', userId).map(function (res) { return res.json(); });
    };
    AuthenticationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/services/chat.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatService = /** @class */ (function () {
    function ChatService(http) {
        this.http = http;
        this.domain = "https://go-ami-go.herokuapp.com";
    }
    ChatService.prototype.getChatsByTripId = function (tripId) {
        console.log(tripId);
        return this.http.get(this.domain + '/chat/getchatByTripId?tripId=' + tripId).map(function (res) { return res.json(); });
    };
    ChatService.prototype.getAll121Chats = function (senderId) {
        return this.http.get(this.domain + '/chat/getAll121Chats?senderId=' + senderId).map(function (res) { return res.json(); });
    };
    ChatService.prototype.get121Chats = function (senderId, receiverId) {
        return this.http.get(this.domain + "/chat/get121Chats?senderId=" + senderId + "&receiverId=" + receiverId).map(function (res) { return res.json(); });
    };
    ChatService.prototype.getAll121ChatsReceiver = function (receiverId) {
        return this.http.get(this.domain + '/chat/getAll121ChatsReceiver?receiverId=' + receiverId).map(function (res) { return res.json(); });
    };
    ChatService.prototype.saveSentMessage = function (message) {
        console.log(message);
        return this.http.post(this.domain + '/chat/savechat', message).map(function (res) { return res.json(); });
    };
    ChatService.prototype.saveTripChat = function (chat) {
        return this.http.post(this.domain + '/chat/groupchatdetails', chat).map(function (res) { return res.json(); });
    };
    ChatService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]])
    ], ChatService);
    return ChatService;
}());



/***/ }),

/***/ "./src/app/services/file.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FileService = /** @class */ (function () {
    function FileService(http) {
        this.http = http;
        this.imageID = [];
        this.imageName = [];
        this.imagePath = [];
    }
    // downloadFile(file:String){
    //     var body = {filename:file};
    //     console.log("filename", file)
    //     return this.http.post('https://go-ami-go.herokuapp.com/file/download',body,{
    //         responseType : 'blob',
    //         headers:new HttpHeaders().append('Content-Type','application/json')
    //     });
    // }
    FileService.prototype.setFileTripID = function (tripID) {
        this.currentTripID = tripID;
    };
    FileService.prototype.getFileTripID = function () {
        return this.currentTripID;
    };
    FileService.prototype.setImageID = function (imgID) {
        this.imageID = imgID;
    };
    FileService.prototype.getImageID = function () {
        return this.imageID;
    };
    FileService.prototype.setImageName = function (imgName) {
        this.imageName = imgName;
    };
    FileService.prototype.getImageName = function () {
        return this.imageName;
    };
    FileService.prototype.setImagePath = function (imgPath) {
        this.imagePath = imgPath;
    };
    FileService.prototype.getImagePath = function () {
        return this.imagePath;
    };
    FileService.prototype.getImages = function (tripId) {
        console.log("trip id in file service", tripId);
        return this.http.get('https://go-ami-go.herokuapp.com/files/getimages?tripId=' + tripId).map(function (res) { return res.json(); });
    };
    FileService.prototype.sendTripIdToImageServer = function (tripId) {
        return this.http.post('https://go-ami-go.herokuapp.com/files/imgtodb', tripId).map(function (res) { return res.json(); });
    };
    FileService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */]])
    ], FileService);
    return FileService;
}());



/***/ }),

/***/ "./src/app/services/modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_modal_service__ = __webpack_require__("./src/app/services/modal.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ModalComponent = /** @class */ (function () {
    function ModalComponent(modalService, el) {
        this.modalService = modalService;
        this.el = el;
        this.element = __WEBPACK_IMPORTED_MODULE_1_jquery__(el.nativeElement);
    }
    ModalComponent.prototype.ngOnInit = function () {
        var modal = this;
        // ensure id attribute exists
        if (!this.id) {
            console.error('modal must have an id');
            return;
        }
        // move element to bottom of page (just before </body>) so it can be displayed above everything else
        this.element.appendTo('body');
        // close modal on background click
        /*    this.element.on('click', function (e: any) {
                var target = $(e.target);
                if (!target.closest('.modal-body').length) {
                    modal.close();
                }
            });
    */
        // add self (this modal instance) to the modal service so it's accessible from controllers
        this.modalService.add(this);
    };
    // remove self from modal service when directive is destroyed
    ModalComponent.prototype.ngOnDestroy = function () {
        this.modalService.remove(this.id);
        this.element.remove();
    };
    // open modal
    ModalComponent.prototype.open = function () {
        this.element.show();
        __WEBPACK_IMPORTED_MODULE_1_jquery__('body').addClass('modal-open');
    };
    // close modal
    ModalComponent.prototype.close = function () {
        this.element.hide();
        __WEBPACK_IMPORTED_MODULE_1_jquery__('body').removeClass('modal-open');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ModalComponent.prototype, "id", void 0);
    ModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            moduleId: module.i.toString(),
            selector: 'modal',
            template: '<ng-content></ng-content>'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_modal_service__["a" /* ModalService */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], ModalComponent);
    return ModalComponent;
}());



/***/ }),

/***/ "./src/app/services/modal.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore__ = __webpack_require__("./node_modules/underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_underscore__);

var ModalService = /** @class */ (function () {
    function ModalService() {
        this.modals = [];
    }
    ModalService.prototype.add = function (modal) {
        // add modal to array of active modals
        this.modals.push(modal);
    };
    ModalService.prototype.remove = function (id) {
        // remove modal from array of active modals
        var modalToRemove = __WEBPACK_IMPORTED_MODULE_0_underscore__["findWhere"](this.modals, { id: id });
        this.modals = __WEBPACK_IMPORTED_MODULE_0_underscore__["without"](this.modals, modalToRemove);
    };
    ModalService.prototype.open = function (id) {
        // open modal specified by id
        var modal = __WEBPACK_IMPORTED_MODULE_0_underscore__["findWhere"](this.modals, { id: id });
        modal.open();
    };
    ModalService.prototype.close = function (id) {
        // close modal specified by id
        var modal = __WEBPACK_IMPORTED_MODULE_0_underscore__["find"](this.modals, { id: id });
        modal.close();
    };
    return ModalService;
}());



/***/ }),

/***/ "./src/app/services/navbar.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarService = /** @class */ (function () {
    function NavbarService() {
        this.visible = false;
    }
    NavbarService.prototype.hide = function () { this.visible = false; };
    NavbarService.prototype.show = function () { this.visible = true; };
    NavbarService.prototype.toggle = function () { this.visible = !this.visible; };
    NavbarService.prototype.doSomethingElseUseful = function () { };
    NavbarService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], NavbarService);
    return NavbarService;
}());



/***/ }),

/***/ "./src/app/services/plan.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlanService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { Trip } from './trip';
var PlanService = /** @class */ (function () {
    function PlanService() {
        this.budget = 0.0;
    }
    PlanService.prototype.getBudget = function () {
        return this.budget;
    };
    PlanService.prototype.setBudget = function (budget) {
        this.budget = budget;
    };
    PlanService.prototype.setTripID = function (tripid) {
        this.tripID = tripid;
    };
    PlanService.prototype.getTripID = function () {
        return this.tripID;
    };
    PlanService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], PlanService);
    return PlanService;
}());



/***/ }),

/***/ "./src/app/services/suggestions.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuggestionsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operator_delay__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/delay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operator_mergeMap__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/switchMap.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var SuggestionsService = /** @class */ (function (_super) {
    __extends(SuggestionsService, _super);
    function SuggestionsService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        return _this;
    }
    SuggestionsService.prototype.restaurantPlaceApi = function (lat, lan) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('Access-Control-Allow-Origin', 'https://go-ami-go.herokuapp.com');
        return this.http.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + lat + ',' + lan + '&radius=1000&type=restaurant&key=AIzaSyDgQfG6Y-bbidUjlgoNX8SotR2ofd2H9kA', { headers: headers })
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    SuggestionsService.prototype.atmPlaceApi = function (lat, lan) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('Access-Control-Allow-Origin', 'https://go-ami-go.herokuapp.com');
        return this.http.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + lat + ',' + lan + '&radius=1000&type=atm&key=AIzaSyDgQfG6Y-bbidUjlgoNX8SotR2ofd2H9kA', { headers: headers })
            .map(function (res1) { return res1.json(); })
            .catch(this.handleError);
    };
    SuggestionsService.prototype.handleError = function (error) {
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error.json().error || 'Server error');
    };
    SuggestionsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]])
    ], SuggestionsService);
    return SuggestionsService;
}(__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* BrowserXhr */]));



/***/ }),

/***/ "./src/app/services/transaction.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TransactionService = /** @class */ (function () {
    function TransactionService(http) {
        this.http = http;
        this.domain = "https://go-ami-go.herokuapp.com";
    }
    TransactionService.prototype.saveTransaction = function (transaction) {
        console.log("tx" + transaction);
        return this.http.post(this.domain + '/transaction/transactions', transaction).map(function (res) { return res.json(); });
    };
    TransactionService.prototype.getAllTransactions = function (tripId) {
        console.log("t=" + tripId);
        return this.http.get(this.domain + '/transaction/getTxTripId?tripId=' + tripId).map(function (res) { return res.json(); });
    };
    TransactionService.prototype.updateTransaction = function (transaction) {
        return this.http.post(this.domain + '/transaction/transactions', transaction).map(function (res) { return res.json(); });
    };
    TransactionService.prototype.deleteTransaction = function (transactionId) {
        return this.http.delete(this.domain + '/transaction/deletetx?transactionId=' + transactionId).map(function (res) { return res.json(); });
    };
    TransactionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]])
    ], TransactionService);
    return TransactionService;
}());



/***/ }),

/***/ "./src/app/services/usertrip.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsertripService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsertripService = /** @class */ (function () {
    function UsertripService(http) {
        this.http = http;
        this.domain = "https://go-ami-go.herokuapp.com";
    }
    UsertripService.prototype.saveTripDetails = function (usertrip) {
        //this.saveTrip(usertrip);
        return this.http.post(this.domain + '/trips/tripdetails', usertrip).map(function (res) { return res.json(); });
    };
    //  saveTrip(usertripDetails){
    //   console.log("in usertrip service, save trip method",this.domain,usertripDetails)
    //   return this.http.post(this.domain + '/mytrip/usertrip',usertripDetails).map(res => res.json());
    // }
    UsertripService.prototype.getAllTrips = function (userid) {
        return this.http.get(this.domain + '/mytrip/tripdetailsByName?username=' + userid).map(function (res) { return res.json(); });
    };
    UsertripService.prototype.getTripsByDestination = function (destination, username) {
        console.log("in usertrip destination", destination);
        console.log();
        return this.http.get(this.domain + '/trips/destination?name=' + destination + "&username=" + username).map(function (res) { return res.json(); });
    };
    UsertripService.prototype.getTripsByTripId = function (tripId) {
        return this.http.get(this.domain + '/mytrip/tripdetails?tripId=' + tripId).map(function (res) { return res.json(); });
    };
    UsertripService.prototype.updateTripByTripId = function (usertrip) {
        //this.saveTrip(usertrip);
        console.log("in service.............................");
        return this.http.put(this.domain + '/trips/updatetrip', usertrip).map(function (res) { return res.json(); });
    };
    UsertripService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]])
    ], UsertripService);
    return UsertripService;
}());



/***/ }),

/***/ "./src/app/services/utility.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilityService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UtilityService = /** @class */ (function () {
    function UtilityService(http) {
        this.http = http;
        this.domain = "https://go-ami-go.herokuapp.com";
    }
    UtilityService.prototype.isLoggedIn = function () {
        if (typeof (Storage) !== 'undefined') {
            if (sessionStorage.getItem('user')) {
                return true;
            }
        }
        return false;
    };
    UtilityService.prototype.isUserExist = function (userName) {
        return this.http.get(this.domain + '/authentication/usercheck?username=' + userName).map(function (res) { return res.json(); });
    };
    UtilityService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]])
    ], UtilityService);
    return UtilityService;
}());



/***/ }),

/***/ "./src/app/suggestion/suggestion.component.css":
/***/ (function(module, exports) {

module.exports = "agm-map {\r\n    height: 300px;\r\n  }\r\n  .licolor{\r\n    color: green;\r\n  }\r\n  .container {\r\n    border: 2px solid #dedede;\r\n    background-color: #f1f1f1;\r\n    border-radius: 5px;\r\n    padding: 50px;\r\n    margin: 10px 0;\r\n}\r\n"

/***/ }),

/***/ "./src/app/suggestion/suggestion.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" >\n    <h4>View Nearby Resturants and ATMS</h4>\n      <!-- this creates a google map on the page with the given lat/lng from -->\n    <!-- the component as the initial center of the map: -->\n    <div class=\"form-group\">\n      <input placeholder=\"search for location\" type=\"text\" class=\"form-control\" #search>\n    </div>\n\n  <div class=\"form-group\">\n    <label>Search </label>\n        <div class=\"form-control\">\n            <label class=\"radio\">\n           <input id=\"1\" type=\"radio\" name=\"Resturants\" value=\"Resturants\" [(ngModel)]=\"radioValue\" (change)=\"getval()\">\n                Resturants\n            </label>\n            <label class=\"radio\">\n             <input id=\"1\" name=\"ATM\" type=\"radio\" value=\"ATM\"  [(ngModel)]=\"radioValue\" (change)=\"getval()\">\n                ATM\n            </label>\n        </div>\n  </div>\n      <div id=\"div1\" *ngIf=\"radioValue === 'Resturants' \">\n            <agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" [zoom]=\"zoom\" > \n                    <agm-marker *ngFor=\"let restaurant of restaurantsList;\" [latitude]=\"restaurant.lat\" [longitude]=\"restaurant.lng\"  [iconUrl]=\"restaurant.iconUrl\">\n                        <agm-info-window>{{restaurant.toString()}}</agm-info-window>\n                      </agm-marker> \n                    </agm-map>\n         <table *ngFor=\"let restaurant of restaurantsList\" class=\"list-group-item licolor\">\n            <td>\n              <tr><strong> Restaurant name:</strong> {{restaurant.name}}</tr>\n              <tr><strong> Address</strong> {{restaurant.vicinity}}</tr>\n              <tr><strong> Rating:</strong> {{restaurant.rating}}</tr>   \n          </td> \n         </table>\n     </div>\n           \n        <div id=\"div1\" *ngIf=\"radioValue === 'ATM'\" >\n            <agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" [zoom]=\"zoom\"  > \n                    <agm-marker *ngFor=\"let atm of atmList;\" [latitude]=\"atm.lat\" [longitude]=\"atm.lng\" >\n                      <agm-info-window>{{atm.toString()}}</agm-info-window>\n                    </agm-marker>       \n                </agm-map>\n                <table *ngFor=\"let atm of atmList\" class=\"list-group-item licolor\">\n                <td>\n                  <tr><strong> atmname:</strong>{{atm.name}}</tr>\n                  <tr><strong> Address:</strong> {{atm.vicinity}}</tr>     \n                </td> \n               </table>\n       </div>\n</div>\n        "

/***/ }),

/***/ "./src/app/suggestion/suggestion.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuggestionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_navbar_service__ = __webpack_require__("./src/app/services/navbar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__agm_core__ = __webpack_require__("./node_modules/@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_resturantDetails__ = __webpack_require__("../models/resturantDetails.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_atmDetails__ = __webpack_require__("../models/atmDetails.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_suggestions_service__ = __webpack_require__("./src/app/services/suggestions.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';






var SuggestionComponent = /** @class */ (function () {
    function SuggestionComponent(mapsAPILoader, router, ngZone, suggestionservice, nav) {
        this.mapsAPILoader = mapsAPILoader;
        this.router = router;
        this.ngZone = ngZone;
        this.suggestionservice = suggestionservice;
        this.nav = nav;
        this.radioValue = "";
        this.zoom = 15;
    }
    SuggestionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchControl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]();
        this.setCurrentPosition();
        this.restaurantPlaceApicall(this.latitude, this.longitude);
        //load Places Autocomplete
        this.mapsAPILoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElementRef.nativeElement, {
                types: ["address"]
            });
            autocomplete.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    //get the place result
                    var place = autocomplete.getPlace();
                    //verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    //set latitude, longitude and zoom
                    _this.latitude = place.geometry.location.lat();
                    _this.longitude = place.geometry.location.lng();
                    _this.formatted_address = place.formatted_address;
                    //this.restaurantPlaceApicall(this.latitude,this.longitude); 
                });
            });
        });
        //this.getTransactions();  
    };
    SuggestionComponent.prototype.setCurrentPosition = function () {
        var _this = this;
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.latitude = position.coords.latitude;
                _this.longitude = position.coords.longitude;
            });
        }
    };
    SuggestionComponent.prototype.getval = function () {
        var id = document.getElementById.toString();
        console.log("radioVAlue is " + this.radioValue);
        if (this.radioValue == "Resturants") {
            this.restaurantPlaceApicall(this.latitude, this.longitude);
        }
        if (this.radioValue == "ATM") {
            this.atmPlaceApicall(this.latitude, this.longitude);
        }
    };
    SuggestionComponent.prototype.restaurantPlaceApicall = function (lat, lan) {
        var _this = this;
        //console.log(lat,lan)
        this.suggestionservice.restaurantPlaceApi(lat, lan).subscribe(function (data) {
            _this.res = data;
            // console.log(this.res.results,"Result");
            if (_this.res.results.length > 0) {
                _this.rstaurantnameList = true;
                // console.log(this.res.results.geometry.location.lat,"results fetched")
                _this.restaurantsList = new Array(_this.res.results.length);
                for (var i = 0; i < _this.res.results.length; i++) {
                    // this.rstaurantnameList = true;
                    //  this.restaurantsList[i].name = this.res.results[i].name;
                    //  this.restaurantsList[i].vicinity = this.res.results[i].vicinity;
                    var lat = _this.res.results[i].geometry.location.lat;
                    var lng = _this.res.results[i].geometry.location.lng;
                    _this.restaurantsList[i] = new __WEBPACK_IMPORTED_MODULE_4__models_resturantDetails__["a" /* restaurantDetails */](_this.res.results[i].name, _this.res.results[i].vicinity, _this.res.results[i].rating, lat, lng, _this.res.results[i].icon);
                    console.log(_this.restaurantsList[i]);
                }
            }
            else {
                _this.rstaurantnameList = false;
            }
        }),
            function (error) { console.log(error); },
            function () { return console.log('Google Place API called.'); };
    };
    SuggestionComponent.prototype.atmPlaceApicall = function (lat, lan) {
        var _this = this;
        //console.log(lat,lan)
        this.suggestionservice.atmPlaceApi(lat, lan).subscribe(function (data) {
            _this.res_atm = data;
            //console.log(this.res.results.length,"Result");
            if (_this.res_atm.results.length > 0) {
                _this.atmnameList = true;
                _this.atmList = new Array(_this.res_atm.results.length);
                for (var i = 0; i < _this.res_atm.results.length; i++) {
                    var lat = _this.res_atm.results[i].geometry.location.lat;
                    var lng = _this.res_atm.results[i].geometry.location.lng;
                    _this.atmList[i] = new __WEBPACK_IMPORTED_MODULE_5__models_atmDetails__["a" /* atmDetails */](_this.res_atm.results[i].name, _this.res_atm.results[i].vicinity, lat, lng);
                    console.log(_this.atmList[i]);
                }
            }
            else {
                _this.atmnameList = false;
            }
        }),
            function (error) { console.log(error); },
            function () { return console.log('Google Place API called.'); };
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("search"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], SuggestionComponent.prototype, "searchElementRef", void 0);
    SuggestionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-suggestion',
            template: __webpack_require__("./src/app/suggestion/suggestion.component.html"),
            styles: [__webpack_require__("./src/app/suggestion/suggestion.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__agm_core__["b" /* MapsAPILoader */], __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_7__services_suggestions_service__["a" /* SuggestionsService */],
            __WEBPACK_IMPORTED_MODULE_1__services_navbar_service__["a" /* NavbarService */]])
    ], SuggestionComponent);
    return SuggestionComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: true
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map