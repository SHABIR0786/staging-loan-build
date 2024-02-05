(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/modules/models/post.model.ts":
/*!**********************************************!*\
  !*** ./src/app/modules/models/post.model.ts ***!
  \**********************************************/
/*! exports provided: PostModel, AddFinanceApiModel, RefinancePost, LeadAssetDetail, MonthlyIncomeDetailsAdd, EmployementDetailAdd */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostModel", function() { return PostModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddFinanceApiModel", function() { return AddFinanceApiModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefinancePost", function() { return RefinancePost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeadAssetDetail", function() { return LeadAssetDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonthlyIncomeDetailsAdd", function() { return MonthlyIncomeDetailsAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployementDetailAdd", function() { return EmployementDetailAdd; });
class PostModel {
    constructor() {
        this.leadApplicationDetailPurchasingId = 1;
        this.newHomeState = "1";
        this.newHomeStateName = "";
        this.empState = "1";
        this.currentStateId = 1;
    }
}
class AddFinanceApiModel {
    constructor() {
        this.newHomeStateId = 1;
        this.currentStateId = 1;
    }
    map(e) {
        this.stage = e.stage;
        this.isWorkingWithEzalready = e.workingWdEz ? 1 : 0;
        this.workingOfficerName = e.ezLoadOfficer;
        this.newHomeAddress = e.newHomeAddress;
        this.newHomeUnit = e.newHomeUnit;
        this.newHomeCity = e.newHomeCityTown;
        this.newHomeStateId = parseInt(e.newHomeState);
        this.newHomeZipCode = e.newHomeZip;
        this.contractClosingDate = e.contractDate;
        /* to be done */
        this.contractType = e.propertyOption1;
        this.estimatedHomePrice = parseFloat(e.estimatedPrice);
        this.downPaymentAmount = parseFloat(e.downPaymentAmount);
        this.downPaymentPercentage = parseFloat(e.downPaymentPercent);
        this.estimatedAnnualTax = parseFloat(e.estAnnualTaxes);
        this.estimatedAnnualHomeInsurance = parseFloat(e.estAnnualHomeIns);
        this.creditScore = e.creditScore;
        this.propertyLegalFirstName = e.firstName;
        this.propertyMiddleInitial = e.middleName;
        this.propertyLegalLastName = e.lastName;
        this.propertyPhoneNumber = e.phone;
        this.propertyEmailAddress = e.email;
        this.typeOfHome = e.homeType;
        this.monthlyHoadues = parseFloat(e.monthlyhoadues);
        // to be dn
        this.typeOfNewHome = e.homePlan;
        this.isMilitaryMember = e.isMillitary ? 1 : 0;
        this.currentMilitaryStatus = e.milStatus;
        this.militaryBranch = e.milBranch;
        this.isEtsdateinYear = new Date(e.milEts).getFullYear();
        this.etsdate = e.etsDate;
        this.isValoanPreviously = e.milVa ? 1 : 0;
        this.whoLivingInHome = e.milLive;
        this.personalLegalFirstName = e.milFirstName;
        this.personalMiddleInitial = e.milMiddleName;
        this.personalLegalLastName = e.milLastName;
        this.personalPhoneNumber = e.milPhoneNumber;
        this.personalEmailAddress = e.milEmail;
        this.personalPassword = e.milPassword;
        // to be done
        this.isSomeOneRefer = e.isSomeOneRefer;
        // to be done
        this.isApplyOwn = e.isApplyOwn;
        // to be don
        this.maritialStatus = e.maritialStatus;
        // to be done
        this.numberOfDependents = e.numberOfDependents;
        this.currentAddress = e.currentAddress;
        this.currentUnit = e.currentUnit;
        this.currentCity = e.currentCity;
        this.currentStateId = e.currentStateId;
        this.currentZipCode = e.currentZipCode;
        this.currentStartLivingDate = e.currentStartLivingDate;
        //to be done
        this.currentReantingType = e.currentReantingType;
        //to be done
        this.estimatedMonthlyExpenses = e.monthlyExpress;
        this.isEmployementHistory = e.haveAnyOtherEmpForm ? 1 : 0;
        this.sex = e.govSex;
        this.ethnicity = e.govEthnicity;
        this.race = e.govRace;
        //to be done
        this.citizenshipId = e.citizenshipId;
        //to be done
        this.isCertify = e.govAgree1 ? 1 : 0;
        this.isReadEconsent = e.govAgree2 ? 1 : 0;
        this.isReadThirdPartyConsent = e.govAgree3 ? 1 : 0;
        this.socialSecurityNumber = e.ssn;
        this.conformSsn = e.ssnConfirm;
        this.birthDate = e.ssnBirthDay;
        return this;
    }
}
class RefinancePost {
    constructor() {
        this.leadApplicationDetailRefinancingId = 1;
        this.id = 0;
        this["propertyStateId"] = 1;
        this["currentStateId"] = 1;
        this["personalStateId"] = 1;
        this.empState = 1;
        this.newHomeState = "1";
    }
}
class LeadAssetDetail {
}
class MonthlyIncomeDetailsAdd {
}
class EmployementDetailAdd {
    constructor() {
        this["currentStateId"] = 1;
        this["empState"] = 1;
        this["newHomeState"] = "1";
    }
    map(e) {
        this.employeeTypeId = e.employeeTypeId;
        this.leadApplicationDetailPurchasingId =
            e.leadApplicationDetailPurchasingId;
        this.leadApplicationDetailRefinancingId =
            e.leadApplicationDetailRefinancingId;
        this.leadApplicationTypeId = e.leadApplicationTypeId;
        this.employerName = e.employerName;
        this.employementAddress = e.employementAddress;
        this.employementSuite = e.employementSuite;
        this.employementCity = e.employementCity;
        this.employementTaxeId = e.employementTaxeId;
        this.employementZip = e.employementZip;
        this.employerPhoneNumber = e.employerPhoneNumber;
        this.isCurrentJob = e.isCurrentJob;
        this.estimatedStartDate = e.estimatedStartDate;
        this.jobTitle = e.jobTitle;
        this.estimatedAnnualBaseSalary = e.estimatedAnnualBaseSalary;
        this.estimatedAnnualBonus = e.estimatedAnnualBonus;
        this.estimatedAnnualCommission = e.estimatedAnnualCommission;
        this.estimatedAnnualOvertime = e.estimatedAnnualOvertime;
        this.isCoBorrower = e.isCoBorrower;
        this.currentStateId = e.currentStateId;
        return this;
    }
}


/***/ }),

/***/ "./src/app/services/api.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../environments/environment */ "./src/environments/environment.ts");





class ApiService {
    constructor(http) {
        this.http = http;
        this.API_BASE = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseApi;
    }
    get(url) {
        return this.http.get(`${this.API_BASE}${url}`);
    }
    post(url, data) {
        return this.http.post(`${this.API_BASE}${url}`, data);
    }
    put(url, data) {
        return this.http.put(`${this.API_BASE}${url}`, data);
    }
    delete(url) {
        return this.http.delete(`${this.API_BASE}${url}`);
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/offline.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/offline.service.ts ***!
  \*********************************************/
/*! exports provided: OfflineService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfflineService", function() { return OfflineService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const ROUTE_DATA = [
    "/purchase/welcome/1",
    "/purchase/property-info/1",
    "/purchase/property-info/1",
    "/purchase/income-info/1",
    "/purchase/assets-info/1",
    "/purchase/gov/1",
    "/app/purchase/gov/5",
];
class OfflineService {
    constructor(router) {
        this.router = router;
    }
    saveStep(step, data) {
        localStorage.setItem("offline", JSON.stringify(data));
        localStorage.setItem("step", step);
    }
    moveTo() {
        const stepData = this.getStep();
        this.router.navigate([ROUTE_DATA[stepData.step - 1]]);
    }
    clear() {
        localStorage.setItem("offline", "{}");
        localStorage.setItem("step", "");
    }
    getStep() {
        let num = 1;
        try {
            num = parseInt(localStorage.getItem("step"));
        }
        catch (error) {
            num = 1;
        }
        return {
            step: num,
            data: localStorage.getItem("offline")
                ? JSON.parse(localStorage.getItem("offline"))
                : {},
        };
    }
}
OfflineService.ɵfac = function OfflineService_Factory(t) { return new (t || OfflineService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
OfflineService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OfflineService, factory: OfflineService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OfflineService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/shared/animations/routerTransition.ts":
/*!***************************************************!*\
  !*** ./src/shared/animations/routerTransition.ts ***!
  \***************************************************/
/*! exports provided: appModuleAnimation, accountModuleAnimation, slideFromBottom, slideFromUp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appModuleAnimation", function() { return appModuleAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "accountModuleAnimation", function() { return accountModuleAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideFromBottom", function() { return slideFromBottom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideFromUp", function() { return slideFromUp; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

function appModuleAnimation() {
    return slideFromBottom();
}
function accountModuleAnimation() {
    return slideFromUp();
}
function slideFromBottom() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])("routerTransition", [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])("void", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ "padding-top": "20px", opacity: "0" })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])("*", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ "padding-top": "0px", opacity: "1" })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(":enter", [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("0.33s ease-out", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: "1", "padding-top": "0px" })),
        ]),
    ]);
}
function slideFromUp() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])("routerTransition", [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])("void", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ "margin-top": "10px", opacity: "0" })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])("*", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ "margin-top": "0px", opacity: "1" })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(":enter", [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("0.3s ease-out", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: "1", "margin-top": "0px" })),
        ]),
    ]);
}


/***/ })

}]);
//# sourceMappingURL=common.js.map