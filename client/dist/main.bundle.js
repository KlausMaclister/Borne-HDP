webpackJsonp([1,4],{

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inscription_countries__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_mailer_service__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Models_phone_areCode__ = __webpack_require__(183);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartInscriptionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var CartInscriptionComponent = (function () {
    function CartInscriptionComponent(dialogRef, data, router, mailer) {
        var _this = this;
        this.dialogRef = dialogRef;
        this.data = data;
        this.router = router;
        this.mailer = mailer;
        this.isNotEuropeanCountry = false;
        this.allCountries = __WEBPACK_IMPORTED_MODULE_2__inscription_countries__["a" /* Countries */].countryList;
        this.euCountries = __WEBPACK_IMPORTED_MODULE_2__inscription_countries__["a" /* Countries */].euCountries;
        this.areCodes = __WEBPACK_IMPORTED_MODULE_5__Models_phone_areCode__["a" /* AreaCodes */].CODES;
        this.checkContinent = function (country) {
            _this.isNotEuropeanCountry = _this.euCountries.indexOf(country) > 1;
        };
        this.generateTicketId = function () {
            _this.ticketId = Math.floor(1000 + Math.random() * 9000);
        };
    }
    CartInscriptionComponent.prototype.ngOnInit = function () {
    };
    CartInscriptionComponent.prototype.confirm = function () {
        this.generateTicketId();
        this.sendEmail();
        this.router.navigate(['confirmCart'], { queryParams: { ticketId: this.ticketId } });
    };
    CartInscriptionComponent.prototype.sendEmail = function () {
        var title = "New Order | Booking in shop | Ticket ID : " + this.ticketId;
        var cart = JSON.parse(localStorage.getItem('cartItems'));
        var emailBody = {
            'firstName': this.firstName,
            'lastName': this.lastName,
            'email': this.email,
            'phone': this.areaCode + this.phone,
            'date_of_birth': this.dob,
            'passeport': this.passportNumber,
            'nationality': this.country,
            'cart': cart
        };
        var mail = { title: title, emailBody: emailBody };
        console.log(mail);
        // this.mailer.sendEmail(title, emailBody).subscribe((res) => console.log(res));
    };
    return CartInscriptionComponent;
}());
CartInscriptionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'app-cart-inscription',
        template: __webpack_require__(468),
        styles: [__webpack_require__(406)],
        providers: [__WEBPACK_IMPORTED_MODULE_4__services_mailer_service__["a" /* MailerService */]]
    }),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["E" /* MD_DIALOG_DATA */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["w" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["w" /* MdDialogRef */]) === "function" && _a || Object, Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_mailer_service__["a" /* MailerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_mailer_service__["a" /* MailerService */]) === "function" && _c || Object])
], CartInscriptionComponent);

var _a, _b, _c;
//# sourceMappingURL=cart-inscription.component.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_service__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FetcherService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FetcherService = (function () {
    function FetcherService(http) {
        this.http = http;
        this.parfums = 'assets/jsons/parfums.json';
        this.productDetails = 'https://beautyscrapr.herokuapp.com/price?url=';
    }
    FetcherService.prototype.getProductDetails = function (url) {
        var newUrl = this.productDetails + url;
        return this.http.get(newUrl)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error, could not fetch product details'); });
    };
    return FetcherService;
}());
FetcherService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* CustomHttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* CustomHttpService */]) === "function" && _a || Object])
], FetcherService);

var _a;
//# sourceMappingURL=fetcher.service.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_bus_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomHttpService; });
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






var CustomHttpService = (function (_super) {
    __extends(CustomHttpService, _super);
    function CustomHttpService(backend, options, dataBus) {
        var _this = _super.call(this, backend, options) || this;
        _this.dataBus = dataBus;
        return _this;
    }
    CustomHttpService.prototype.onGetCatch = function (error, caught) {
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(error);
    };
    CustomHttpService.prototype.get = function (url, options) {
        var _this = this;
        this.dataBus.setDataLoadingStatus(true);
        return _super.prototype.get.call(this, url, options)
            .catch(this.onGetCatch)
            .do(function (res) {
            return res;
        }, function (error) {
            __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(error);
        })
            .finally(function () {
            _this.dataBus.setDataLoadingStatus(false);
        });
    };
    return CustomHttpService;
}(__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]));
CustomHttpService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* XHRBackend */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* XHRBackend */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__data_bus_service__["a" /* DataBusService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__data_bus_service__["a" /* DataBusService */]) === "function" && _c || Object])
], CustomHttpService);

var _a, _b, _c;
//# sourceMappingURL=http.service.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: true,
    stripeKey: 'pk_live_FN4bjURxeZhZFZP6cFIDeDNB',
    firebase: {
        apiKey: 'AIzaSyCr4L9zSPtfdi8IMNXNfV5AbB2MHp8Wi5M',
        authDomain: 'beauty-success-3840f.firebaseapp.com',
        databaseURL: 'https://beauty-success-3840f.firebaseio.com',
        projectId: 'beauty-success-3840f',
        storageBucket: 'beauty-success-3840f.appspot.com',
        messagingSenderId: '22204423486'
    }
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AreaCodes; });
/**
 * Created by if_found_call_0586288454 on 18/09/2017.
 */
var AreaCodes = (function () {
    function AreaCodes() {
    }
    return AreaCodes;
}());

AreaCodes.CODES = [
    {
        'code': '+7 840',
        'name': 'Abkhazia'
    },
    {
        'code': '+93',
        'name': 'Afghanistan'
    },
    {
        'code': '+355',
        'name': 'Albania'
    },
    {
        'code': '+213',
        'name': 'Algeria'
    },
    {
        'code': '+1 684',
        'name': 'American Samoa'
    },
    {
        'code': '+376',
        'name': 'Andorra'
    },
    {
        'code': '+244',
        'name': 'Angola'
    },
    {
        'code': '+1 264',
        'name': 'Anguilla'
    },
    {
        'code': '+1 268',
        'name': 'Antigua and Barbuda'
    },
    {
        'code': '+54',
        'name': 'Argentina'
    },
    {
        'code': '+374',
        'name': 'Armenia'
    },
    {
        'code': '+297',
        'name': 'Aruba'
    },
    {
        'code': '+247',
        'name': 'Ascension'
    },
    {
        'code': '+61',
        'name': 'Australia'
    },
    {
        'code': '+672',
        'name': 'Australian External Territories'
    },
    {
        'code': '+43',
        'name': 'Austria'
    },
    {
        'code': '+994',
        'name': 'Azerbaijan'
    },
    {
        'code': '+1 242',
        'name': 'Bahamas'
    },
    {
        'code': '+973',
        'name': 'Bahrain'
    },
    {
        'code': '+880',
        'name': 'Bangladesh'
    },
    {
        'code': '+1 246',
        'name': 'Barbados'
    },
    {
        'code': '+1 268',
        'name': 'Barbuda'
    },
    {
        'code': '+375',
        'name': 'Belarus'
    },
    {
        'code': '+32',
        'name': 'Belgium'
    },
    {
        'code': '+501',
        'name': 'Belize'
    },
    {
        'code': '+229',
        'name': 'Benin'
    },
    {
        'code': '+1 441',
        'name': 'Bermuda'
    },
    {
        'code': '+975',
        'name': 'Bhutan'
    },
    {
        'code': '+591',
        'name': 'Bolivia'
    },
    {
        'code': '+387',
        'name': 'Bosnia and Herzegovina'
    },
    {
        'code': '+267',
        'name': 'Botswana'
    },
    {
        'code': '+55',
        'name': 'Brazil'
    },
    {
        'code': '+246',
        'name': 'British Indian Ocean Territory'
    },
    {
        'code': '+1 284',
        'name': 'British Virgin Islands'
    },
    {
        'code': '+673',
        'name': 'Brunei'
    },
    {
        'code': '+359',
        'name': 'Bulgaria'
    },
    {
        'code': '+226',
        'name': 'Burkina Faso'
    },
    {
        'code': '+257',
        'name': 'Burundi'
    },
    {
        'code': '+855',
        'name': 'Cambodia'
    },
    {
        'code': '+237',
        'name': 'Cameroon'
    },
    {
        'code': '+1',
        'name': 'Canada'
    },
    {
        'code': '+238',
        'name': 'Cape Verde'
    },
    {
        'code': '+ 345',
        'name': 'Cayman Islands'
    },
    {
        'code': '+236',
        'name': 'Central African Republic'
    },
    {
        'code': '+235',
        'name': 'Chad'
    },
    {
        'code': '+56',
        'name': 'Chile'
    },
    {
        'code': '+86',
        'name': 'China'
    },
    {
        'code': '+61',
        'name': 'Christmas Island'
    },
    {
        'code': '+61',
        'name': 'Cocos-Keeling Islands'
    },
    {
        'code': '+57',
        'name': 'Colombia'
    },
    {
        'code': '+269',
        'name': 'Comoros'
    },
    {
        'code': '+242',
        'name': 'Congo'
    },
    {
        'code': '+243',
        'name': 'Congo, Dem. Rep. of (Zaire)'
    },
    {
        'code': '+682',
        'name': 'Cook Islands'
    },
    {
        'code': '+506',
        'name': 'Costa Rica'
    },
    {
        'code': '+385',
        'name': 'Croatia'
    },
    {
        'code': '+53',
        'name': 'Cuba'
    },
    {
        'code': '+599',
        'name': 'Curacao'
    },
    {
        'code': '+537',
        'name': 'Cyprus'
    },
    {
        'code': '+420',
        'name': 'Czech Republic'
    },
    {
        'code': '+45',
        'name': 'Denmark'
    },
    {
        'code': '+246',
        'name': 'Diego Garcia'
    },
    {
        'code': '+253',
        'name': 'Djibouti'
    },
    {
        'code': '+1 767',
        'name': 'Dominica'
    },
    {
        'code': '+1 809',
        'name': 'Dominican Republic'
    },
    {
        'code': '+670',
        'name': 'East Timor'
    },
    {
        'code': '+56',
        'name': 'Easter Island'
    },
    {
        'code': '+593',
        'name': 'Ecuador'
    },
    {
        'code': '+20',
        'name': 'Egypt'
    },
    {
        'code': '+503',
        'name': 'El Salvador'
    },
    {
        'code': '+240',
        'name': 'Equatorial Guinea'
    },
    {
        'code': '+291',
        'name': 'Eritrea'
    },
    {
        'code': '+372',
        'name': 'Estonia'
    },
    {
        'code': '+251',
        'name': 'Ethiopia'
    },
    {
        'code': '+500',
        'name': 'Falkland Islands'
    },
    {
        'code': '+298',
        'name': 'Faroe Islands'
    },
    {
        'code': '+679',
        'name': 'Fiji'
    },
    {
        'code': '+358',
        'name': 'Finland'
    },
    {
        'code': '+33',
        'name': 'France'
    },
    {
        'code': '+596',
        'name': 'French Antilles'
    },
    {
        'code': '+594',
        'name': 'French Guiana'
    },
    {
        'code': '+689',
        'name': 'French Polynesia'
    },
    {
        'code': '+241',
        'name': 'Gabon'
    },
    {
        'code': '+220',
        'name': 'Gambia'
    },
    {
        'code': '+995',
        'name': 'Georgia'
    },
    {
        'code': '+49',
        'name': 'Germany'
    },
    {
        'code': '+233',
        'name': 'Ghana'
    },
    {
        'code': '+350',
        'name': 'Gibraltar'
    },
    {
        'code': '+30',
        'name': 'Greece'
    },
    {
        'code': '+299',
        'name': 'Greenland'
    },
    {
        'code': '+1 473',
        'name': 'Grenada'
    },
    {
        'code': '+590',
        'name': 'Guadeloupe'
    },
    {
        'code': '+1 671',
        'name': 'Guam'
    },
    {
        'code': '+502',
        'name': 'Guatemala'
    },
    {
        'code': '+224',
        'name': 'Guinea'
    },
    {
        'code': '+245',
        'name': 'Guinea-Bissau'
    },
    {
        'code': '+595',
        'name': 'Guyana'
    },
    {
        'code': '+509',
        'name': 'Haiti'
    },
    {
        'code': '+504',
        'name': 'Honduras'
    },
    {
        'code': '+852',
        'name': 'Hong Kong SAR China'
    },
    {
        'code': '+36',
        'name': 'Hungary'
    },
    {
        'code': '+354',
        'name': 'Iceland'
    },
    {
        'code': '+91',
        'name': 'India'
    },
    {
        'code': '+62',
        'name': 'Indonesia'
    },
    {
        'code': '+98',
        'name': 'Iran'
    },
    {
        'code': '+964',
        'name': 'Iraq'
    },
    {
        'code': '+353',
        'name': 'Ireland'
    },
    {
        'code': '+972',
        'name': 'Israel'
    },
    {
        'code': '+39',
        'name': 'Italy'
    },
    {
        'code': '+225',
        'name': 'Ivory Coast'
    },
    {
        'code': '+1 876',
        'name': 'Jamaica'
    },
    {
        'code': '+81',
        'name': 'Japan'
    },
    {
        'code': '+962',
        'name': 'Jordan'
    },
    {
        'code': '+7 7',
        'name': 'Kazakhstan'
    },
    {
        'code': '+254',
        'name': 'Kenya'
    },
    {
        'code': '+686',
        'name': 'Kiribati'
    },
    {
        'code': '+965',
        'name': 'Kuwait'
    },
    {
        'code': '+996',
        'name': 'Kyrgyzstan'
    },
    {
        'code': '+856',
        'name': 'Laos'
    },
    {
        'code': '+371',
        'name': 'Latvia'
    },
    {
        'code': '+961',
        'name': 'Lebanon'
    },
    {
        'code': '+266',
        'name': 'Lesotho'
    },
    {
        'code': '+231',
        'name': 'Liberia'
    },
    {
        'code': '+218',
        'name': 'Libya'
    },
    {
        'code': '+423',
        'name': 'Liechtenstein'
    },
    {
        'code': '+370',
        'name': 'Lithuania'
    },
    {
        'code': '+352',
        'name': 'Luxembourg'
    },
    {
        'code': '+853',
        'name': 'Macau SAR China'
    },
    {
        'code': '+389',
        'name': 'Macedonia'
    },
    {
        'code': '+261',
        'name': 'Madagascar'
    },
    {
        'code': '+265',
        'name': 'Malawi'
    },
    {
        'code': '+60',
        'name': 'Malaysia'
    },
    {
        'code': '+960',
        'name': 'Maldives'
    },
    {
        'code': '+223',
        'name': 'Mali'
    },
    {
        'code': '+356',
        'name': 'Malta'
    },
    {
        'code': '+692',
        'name': 'Marshall Islands'
    },
    {
        'code': '+596',
        'name': 'Martinique'
    },
    {
        'code': '+222',
        'name': 'Mauritania'
    },
    {
        'code': '+230',
        'name': 'Mauritius'
    },
    {
        'code': '+262',
        'name': 'Mayotte'
    },
    {
        'code': '+52',
        'name': 'Mexico'
    },
    {
        'code': '+691',
        'name': 'Micronesia'
    },
    {
        'code': '+1 808',
        'name': 'Midway Island'
    },
    {
        'code': '+373',
        'name': 'Moldova'
    },
    {
        'code': '+377',
        'name': 'Monaco'
    },
    {
        'code': '+976',
        'name': 'Mongolia'
    },
    {
        'code': '+382',
        'name': 'Montenegro'
    },
    {
        'code': '+1664',
        'name': 'Montserrat'
    },
    {
        'code': '+212',
        'name': 'Morocco'
    },
    {
        'code': '+95',
        'name': 'Myanmar'
    },
    {
        'code': '+264',
        'name': 'Namibia'
    },
    {
        'code': '+674',
        'name': 'Nauru'
    },
    {
        'code': '+977',
        'name': 'Nepal'
    },
    {
        'code': '+31',
        'name': 'Netherlands'
    },
    {
        'code': '+599',
        'name': 'Netherlands Antilles'
    },
    {
        'code': '+1 869',
        'name': 'Nevis'
    },
    {
        'code': '+687',
        'name': 'New Caledonia'
    },
    {
        'code': '+64',
        'name': 'New Zealand'
    },
    {
        'code': '+505',
        'name': 'Nicaragua'
    },
    {
        'code': '+227',
        'name': 'Niger'
    },
    {
        'code': '+234',
        'name': 'Nigeria'
    },
    {
        'code': '+683',
        'name': 'Niue'
    },
    {
        'code': '+672',
        'name': 'Norfolk Island'
    },
    {
        'code': '+850',
        'name': 'North Korea'
    },
    {
        'code': '+1 670',
        'name': 'Northern Mariana Islands'
    },
    {
        'code': '+47',
        'name': 'Norway'
    },
    {
        'code': '+968',
        'name': 'Oman'
    },
    {
        'code': '+92',
        'name': 'Pakistan'
    },
    {
        'code': '+680',
        'name': 'Palau'
    },
    {
        'code': '+970',
        'name': 'Palestinian Territory'
    },
    {
        'code': '+507',
        'name': 'Panama'
    },
    {
        'code': '+675',
        'name': 'Papua New Guinea'
    },
    {
        'code': '+595',
        'name': 'Paraguay'
    },
    {
        'code': '+51',
        'name': 'Peru'
    },
    {
        'code': '+63',
        'name': 'Philippines'
    },
    {
        'code': '+48',
        'name': 'Poland'
    },
    {
        'code': '+351',
        'name': 'Portugal'
    },
    {
        'code': '+1 787',
        'name': 'Puerto Rico'
    },
    {
        'code': '+974',
        'name': 'Qatar'
    },
    {
        'code': '+262',
        'name': 'Reunion'
    },
    {
        'code': '+40',
        'name': 'Romania'
    },
    {
        'code': '+7',
        'name': 'Russia'
    },
    {
        'code': '+250',
        'name': 'Rwanda'
    },
    {
        'code': '+685',
        'name': 'Samoa'
    },
    {
        'code': '+378',
        'name': 'San Marino'
    },
    {
        'code': '+966',
        'name': 'Saudi Arabia'
    },
    {
        'code': '+221',
        'name': 'Senegal'
    },
    {
        'code': '+381',
        'name': 'Serbia'
    },
    {
        'code': '+248',
        'name': 'Seychelles'
    },
    {
        'code': '+232',
        'name': 'Sierra Leone'
    },
    {
        'code': '+65',
        'name': 'Singapore'
    },
    {
        'code': '+421',
        'name': 'Slovakia'
    },
    {
        'code': '+386',
        'name': 'Slovenia'
    },
    {
        'code': '+677',
        'name': 'Solomon Islands'
    },
    {
        'code': '+27',
        'name': 'South Africa'
    },
    {
        'code': '+500',
        'name': 'South Georgia and the South Sandwich Islands'
    },
    {
        'code': '+82',
        'name': 'South Korea'
    },
    {
        'code': '+34',
        'name': 'Spain'
    },
    {
        'code': '+94',
        'name': 'Sri Lanka'
    },
    {
        'code': '+249',
        'name': 'Sudan'
    },
    {
        'code': '+597',
        'name': 'Suriname'
    },
    {
        'code': '+268',
        'name': 'Swaziland'
    },
    {
        'code': '+46',
        'name': 'Sweden'
    },
    {
        'code': '+41',
        'name': 'Switzerland'
    },
    {
        'code': '+963',
        'name': 'Syria'
    },
    {
        'code': '+886',
        'name': 'Taiwan'
    },
    {
        'code': '+992',
        'name': 'Tajikistan'
    },
    {
        'code': '+255',
        'name': 'Tanzania'
    },
    {
        'code': '+66',
        'name': 'Thailand'
    },
    {
        'code': '+670',
        'name': 'Timor Leste'
    },
    {
        'code': '+228',
        'name': 'Togo'
    },
    {
        'code': '+690',
        'name': 'Tokelau'
    },
    {
        'code': '+676',
        'name': 'Tonga'
    },
    {
        'code': '+1 868',
        'name': 'Trinidad and Tobago'
    },
    {
        'code': '+216',
        'name': 'Tunisia'
    },
    {
        'code': '+90',
        'name': 'Turkey'
    },
    {
        'code': '+993',
        'name': 'Turkmenistan'
    },
    {
        'code': '+1 649',
        'name': 'Turks and Caicos Islands'
    },
    {
        'code': '+688',
        'name': 'Tuvalu'
    },
    {
        'code': '+1 340',
        'name': 'U.S. Virgin Islands'
    },
    {
        'code': '+256',
        'name': 'Uganda'
    },
    {
        'code': '+380',
        'name': 'Ukraine'
    },
    {
        'code': '+971',
        'name': 'United Arab Emirates'
    },
    {
        'code': '+44',
        'name': 'United Kingdom'
    },
    {
        'code': '+1',
        'name': 'United States'
    },
    {
        'code': '+598',
        'name': 'Uruguay'
    },
    {
        'code': '+998',
        'name': 'Uzbekistan'
    },
    {
        'code': '+678',
        'name': 'Vanuatu'
    },
    {
        'code': '+58',
        'name': 'Venezuela'
    },
    {
        'code': '+84',
        'name': 'Vietnam'
    },
    {
        'code': '+1 808',
        'name': 'Wake Island'
    },
    {
        'code': '+681',
        'name': 'Wallis and Futuna'
    },
    {
        'code': '+967',
        'name': 'Yemen'
    },
    {
        'code': '+260',
        'name': 'Zambia'
    },
    {
        'code': '+255',
        'name': 'Zanzibar'
    },
    {
        'code': '+263',
        'name': 'Zimbabwe'
    }
];
//# sourceMappingURL=phone.areCode.js.map

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartConfirmComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CartConfirmComponent = (function () {
    function CartConfirmComponent(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    CartConfirmComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.activatedRoute.queryParams.subscribe(function (params) {
            _this.ticketId = +params['ticketId'] || 0;
        });
        setTimeout(function () {
            _this.goBackToMenu();
        }, 60000);
    };
    CartConfirmComponent.prototype.goBackToMenu = function () {
        window.localStorage.clear();
        this.router.navigate(['/']);
    };
    CartConfirmComponent.prototype.seeItinerary = function () {
        this.router.navigate(['/itinerary']);
    };
    CartConfirmComponent.prototype.gotoTuktuk = function () {
        this.router.navigate(['/tuktuk']);
    };
    CartConfirmComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    return CartConfirmComponent;
}());
CartConfirmComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'app-cart-confirm',
        template: __webpack_require__(467),
        styles: [__webpack_require__(405)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* ActivatedRoute */]) === "function" && _b || Object])
], CartConfirmComponent);

var _a, _b;
//# sourceMappingURL=cart-confirm.component.js.map

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cart_inscription_cart_inscription_component__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__inscription_inscription_component__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_data_bus_service__ = __webpack_require__(43);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CartComponent = (function () {
    function CartComponent(dialogRef, dialog, dataBus) {
        var _this = this;
        this.dialogRef = dialogRef;
        this.dialog = dialog;
        this.dataBus = dataBus;
        this.decreaseQty = function (product) {
            var productIdx = _this.cartProducts.indexOf(product);
            _this.cartProducts[productIdx].quantity--;
            _this.numberOfProducts--;
            if (_this.totalPrice >= product.price) {
                _this.totalPrice -= product.price;
                window.localStorage.setItem('cartItems', JSON.stringify(_this.cartProducts));
                _this.writeCartValueInLocalStorage();
                _this.updateCartQuantity();
            }
        };
        this.increaseQty = function (product) {
            var productIdx = _this.cartProducts.indexOf(product);
            _this.cartProducts[productIdx].quantity++;
            _this.numberOfProducts++;
            _this.totalPrice += product.price;
            _this.updateCartQuantity();
            window.localStorage.setItem('cartItems', JSON.stringify(_this.cartProducts));
            _this.writeCartValueInLocalStorage();
        };
        this.productIsDeleted = function (product) {
            return product.quantity < 1;
        };
        this.goToSignUp = function () {
            var oldArticles = localStorage.getItem('cart');
            var oldJsonified = JSON.parse(oldArticles) || [];
            oldJsonified.push(_this.cartProducts);
            var jsonified = JSON.stringify(oldJsonified);
            window.localStorage.setItem('cart', jsonified);
            var dialogRef = _this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__inscription_inscription_component__["a" /* InscriptionComponent */], {
                data: { product: _this.cartProducts },
                disableClose: true,
                width: '60%'
            });
            _this.dialogRef.close();
        };
    }
    CartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cartProducts = JSON.parse(window.localStorage.getItem('cartItems'));
        this.numberOfProducts = 0;
        this.cartProducts.forEach(function (product) {
            _this.numberOfProducts += product.quantity;
        });
        window.localStorage.setItem('cartQuantity', JSON.stringify(this.numberOfProducts));
        this.dataBus.updateCartQuantity(this.numberOfProducts);
        this.totalPrice = parseInt(window.localStorage.getItem('cartPrice'), 10);
    };
    CartComponent.prototype.writeCartValueInLocalStorage = function () {
        var strPrice = JSON.stringify(this.totalPrice);
        window.localStorage.setItem('cartPrice', strPrice);
    };
    CartComponent.prototype.updateCartQuantity = function () {
        this.dataBus.updateCartQuantity(this.numberOfProducts);
        window.localStorage.setItem('cartQuantity', JSON.stringify(this.numberOfProducts));
    };
    CartComponent.prototype.bookInShop = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__cart_inscription_cart_inscription_component__["a" /* CartInscriptionComponent */], {
            data: { product: this.cartProducts },
            disableClose: true,
            width: '60%'
        });
        this.dialogRef.close();
    };
    return CartComponent;
}());
CartComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'app-cart',
        template: __webpack_require__(469),
        styles: [__webpack_require__(407)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["w" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["w" /* MdDialogRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["v" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["v" /* MdDialog */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_data_bus_service__["a" /* DataBusService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_data_bus_service__["a" /* DataBusService */]) === "function" && _c || Object])
], CartComponent);

var _a, _b, _c;
//# sourceMappingURL=cart.component.js.map

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_bus_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_fetcher_service__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__inscription_inscription_component__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cart_inscription_cart_inscription_component__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_translator_service__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modals_add_to_cart_add_to_cart_component__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var DetailsComponent = (function () {
    function DetailsComponent(dataBus, api, dialog, translator, router) {
        var _this = this;
        this.dataBus = dataBus;
        this.api = api;
        this.dialog = dialog;
        this.translator = translator;
        this.router = router;
        this.mode = 'indeterminate';
        this.spinnerColor = 'accent';
        this.goToSignUp = function () {
            var selectedProduct = {
                'product': _this.product.label,
                'quantity': _this.selectedQty,
                'dynamicPrice': _this.product.dynamicPrice,
                'regularPrice': _this.product.regularPrice
            };
            var dialogRef = _this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__inscription_inscription_component__["a" /* InscriptionComponent */], {
                data: { product: selectedProduct },
                disableClose: true,
                width: '60%'
            });
        };
        this.addProductToCart = function () {
            _this.dialog.open(__WEBPACK_IMPORTED_MODULE_7__modals_add_to_cart_add_to_cart_component__["a" /* AddToCartComponent */], { data: { title: _this.product.label } });
            _this.updateLocalStorage();
        };
        this.contentHasLoaded = false;
        this.prices = [];
        this.quantities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        this.selectedQty = 1;
    }
    DetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataBus.currentProduct.subscribe(function (res) {
            if (res) {
                _this.api.getProductDetails(res.url).subscribe(function (product) {
                    _this.product = product[0];
                    _this.product.dynamicPrice = _this.product.price * _this.selectedQty;
                    _this.product.regularPrice = _this.product.price;
                    product.forEach(function (prod) {
                        var PriceObj = { 'price': prod.price, 'label': prod.label };
                        _this.prices.push(PriceObj);
                    });
                    _this.selectedVolume = _this.prices[0].price;
                    _this.multipleVolumes = (_this.prices.length > 1) ? true : false;
                    _this.contentHasLoaded = true;
                });
            }
            else {
                _this.router.navigate(['/parfums']);
            }
        });
    };
    DetailsComponent.prototype.updateValue = function (qty) {
        this.product.dynamicPrice = this.product.price * qty;
        this.product.regularPrice = this.product.dynamicPrice;
        var val = this.val + this.product.dynamicPrice;
    };
    DetailsComponent.prototype.updateVolumePrice = function (price) {
        this.product.dynamicPrice = price * this.selectedQty;
        this.product.price = price;
        this.product.regularPrice = price;
    };
    DetailsComponent.prototype.updateLocalStorage = function () {
        /* updating price */
        var priceFromLocalStorage = parseInt(window.localStorage.getItem('cartPrice'), 10) || 0;
        var updatedPrice = this.product.dynamicPrice + priceFromLocalStorage;
        console.log(updatedPrice);
        window.localStorage.setItem('cartPrice', JSON.stringify(updatedPrice));
        /*update products in cart*/ ;
        var products = JSON.parse(window.localStorage.getItem('cartItems')) || [];
        var currentProduct = {
            label: this.product.label,
            quantity: this.selectedQty,
            price: this.product.price,
            dynamicPrice: this.val,
            image: this.product.productBigImage
        };
        products.push(currentProduct);
        var productStr = JSON.stringify(products);
        window.localStorage.setItem('cartItems', productStr);
        /* updating the quantity in localStorage */
        var quantity = parseInt(window.localStorage.getItem('cartQuantity'), 10) || 0;
        console.log(quantity);
        var intQty = this.selectedQty + quantity;
        console.log(intQty);
        var strQty = JSON.stringify(this.selectedQty + quantity);
        window.localStorage.setItem('cartQuantity', strQty);
        this.dataBus.updateCartQuantity(intQty);
    };
    DetailsComponent.prototype.bookInShop = function () {
        var selectedProduct = {
            'product': this.product.label,
            'quantity': this.selectedQty,
            'dynamicPrice': this.product.dynamicPrice,
            'regularPrice': this.product.regularPrice
        };
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__cart_inscription_cart_inscription_component__["a" /* CartInscriptionComponent */], {
            data: { product: selectedProduct },
            disableClose: true,
            width: '60%'
        });
    };
    return DetailsComponent;
}());
DetailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'app-details',
        template: __webpack_require__(470),
        styles: [__webpack_require__(408)],
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_fetcher_service__["a" /* FetcherService */], __WEBPACK_IMPORTED_MODULE_6__services_translator_service__["a" /* TranslatorService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_bus_service__["a" /* DataBusService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_data_bus_service__["a" /* DataBusService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_fetcher_service__["a" /* FetcherService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_fetcher_service__["a" /* FetcherService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["v" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["v" /* MdDialog */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__services_translator_service__["a" /* TranslatorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_translator_service__["a" /* TranslatorService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_8__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__angular_router__["b" /* Router */]) === "function" && _e || Object])
], DetailsComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=details.component.js.map

/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EcranVeilleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EcranVeilleComponent = (function () {
    function EcranVeilleComponent(router) {
        this.router = router;
    }
    EcranVeilleComponent.prototype.ngOnInit = function () {
        window.localStorage.clear();
    };
    EcranVeilleComponent.prototype.goToLanguage = function () {
        this.router.navigate(['/language']);
    };
    return EcranVeilleComponent;
}());
EcranVeilleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'app-ecran-veille',
        template: __webpack_require__(471),
        styles: [__webpack_require__(409)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], EcranVeilleComponent);

var _a;
//# sourceMappingURL=ecran-veille.component.js.map

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Countries; });
var Countries = (function () {
    function Countries() {
    }
    return Countries;
}());

Countries.countryList = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Anguilla',
    'Antigua &amp; Barbuda',
    'Argentina',
    'Armenia',
    'Aruba',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bermuda',
    'Bhutan',
    'Bolivia',
    'Bosnia &amp; Herzegovina',
    'Botswana',
    'Brazil',
    'British Virgin Islands',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Cape Verde',
    'Cayman Islands',
    'Chad',
    'Chile',
    'China',
    'Colombia',
    'Congo',
    'Cook Islands',
    'Costa Rica',
    'Cote D Ivoire',
    'Croatia',
    'Cruise Ship',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Estonia',
    'Ethiopia',
    'Falkland Islands',
    'Faroe Islands',
    'Fiji',
    'Finland',
    'France',
    'French Polynesia',
    'French West Indies',
    'Gabon',
    'Gambia',
    'Georgia',
    'Germany',
    'Ghana',
    'Gibraltar',
    'Greece',
    'Greenland',
    'Grenada',
    'Guam',
    'Guatemala',
    'Guernsey',
    'Guinea',
    'Guinea Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hong Kong',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Isle of Man',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jersey',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kuwait',
    'Kyrgyz Republic',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macau',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Montenegro',
    'Montserrat',
    'Morocco',
    'Mozambique',
    'Namibia',
    'Nepal',
    'Netherlands',
    'Netherlands Antilles',
    'New Caledonia',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Norway',
    'Oman',
    'Pakistan',
    'Palestine',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Puerto Rico',
    'Qatar',
    'Reunion',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Pierre &amp; Miquelon',
    'Samoa',
    'San Marino',
    'Satellite',
    'Saudi Arabia',
    'Senegal',
    'Serbia',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'South Africa',
    'South Korea',
    'Spain',
    'Sri Lanka',
    'St Kitts &amp; Nevis',
    'St Lucia',
    'St Vincent',
    'St. Lucia',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Timor L\'Este',
    'Togo',
    'Tonga',
    'Trinidad &amp; Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Turks &amp; Caicos',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'Uruguay',
    'Uzbekistan',
    'Venezuela',
    'Vietnam',
    'Virgin Islands (US)',
    'Yemen',
    'Zambia',
    'Zimbabwe'
];
Countries.euCountries = ['Albania',
    'Andorra',
    'Armenia',
    'Austria',
    'Azerbaijan',
    'Belarus',
    'Belgium',
    'Bosnia and Herzegovina',
    'Bulgaria',
    'Croatia',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Estonia',
    'Finland',
    'France',
    'Georgia',
    'Germany',
    'Greece',
    'Hungary',
    'Iceland',
    'Ireland',
    'Italy',
    'Kosovo',
    'Latvia',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macedonia',
    'Malta',
    'Moldova',
    'Monaco',
    'Montenegro',
    'The Netherlands',
    'Norway',
    'Poland',
    'Portugal',
    'Romania',
    'Russia',
    'San Marino',
    'Serbia',
    'Slovakia',
    'Slovenia',
    'Spain',
    'Sweden',
    'Switzerland',
    'Turkey',
    'Ukraine',
    'United Kingdom',
    'Vatican City'
];
//# sourceMappingURL=countries.js.map

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItineraryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ItineraryComponent = (function () {
    function ItineraryComponent(router) {
        this.router = router;
    }
    ItineraryComponent.prototype.ngOnInit = function () {
    };
    ItineraryComponent.prototype.goToMenu = function () {
        this.router.navigate(['/']);
    };
    return ItineraryComponent;
}());
ItineraryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'app-itinerary',
        template: __webpack_require__(473),
        styles: [__webpack_require__(411)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], ItineraryComponent);

var _a;
//# sourceMappingURL=itinerary.component.js.map

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LanguageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LanguageComponent = (function () {
    function LanguageComponent(router) {
        var _this = this;
        this.router = router;
        this.setLanguage = function (language) {
            switch (language) {
                case 'US':
                    localStorage.setItem('language', 'en');
                    break;
                case 'FR':
                    localStorage.setItem('language', 'fr');
                    break;
                case 'ES':
                    localStorage.setItem('language', 'es');
                    break;
            }
            _this.router.navigate(['presentation']);
        };
    }
    return LanguageComponent;
}());
LanguageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'app-language',
        template: __webpack_require__(474),
        styles: [__webpack_require__(412)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], LanguageComponent);

var _a;
//# sourceMappingURL=language.component.js.map

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddToCartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddToCartComponent = (function () {
    function AddToCartComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    AddToCartComponent.prototype.ngOnInit = function () {
    };
    return AddToCartComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", String)
], AddToCartComponent.prototype, "title", void 0);
AddToCartComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'app-add-to-cart',
        template: __webpack_require__(475),
        styles: [__webpack_require__(413)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["w" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["w" /* MdDialogRef */]) === "function" && _a || Object])
], AddToCartComponent);

var _a;
//# sourceMappingURL=add-to-cart.component.js.map

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_fetcher_service__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_bus_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_startWith__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__(204);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParfumsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ParfumsComponent = (function () {
    function ParfumsComponent(api, dataBus, router, db) {
        var _this = this;
        this.api = api;
        this.dataBus = dataBus;
        this.router = router;
        this.db = db;
        this.allParfums = [];
        this.brandsToDisplay = [];
        this.getDetails = function (product) {
            _this.dataBus.setNewProduct(product);
            _this.router.navigate(['/details']);
        };
        this.filterParfums = function (brand) {
            _this.allParfums = _this.bigArr.filter(function (parfum) {
                return parfum.brand === brand;
            });
        };
    }
    ParfumsComponent.prototype.ngOnInit = function () {
        this.fetchParfums();
    };
    ParfumsComponent.prototype.ngAfterViewChecked = function () {
        this.dataBus.setDataLoadingStatus(false);
    };
    ParfumsComponent.prototype.isNotUrl = function (url) {
        return !url.includes('http');
    };
    ParfumsComponent.prototype.fetchParfums = function () {
        var _this = this;
        this.fireBrands = this.db.list('/brands');
        this.fireBrands.subscribe(function (brand) {
            brand.forEach(function (br) {
                if (br.available) {
                    _this.brandsToDisplay.push(br.name);
                }
            });
            _this.parfumsFire = _this.db.list('/parfums');
            _this.parfumsFire.subscribe(function (parfums) {
                _this.bigArr = parfums;
                _this.allParfums = _this.bigArr;
            });
        });
    };
    return ParfumsComponent;
}());
ParfumsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'app-parfums',
        template: __webpack_require__(476),
        styles: [__webpack_require__(414)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_fetcher_service__["a" /* FetcherService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_fetcher_service__["a" /* FetcherService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_fetcher_service__["a" /* FetcherService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_data_bus_service__["a" /* DataBusService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_data_bus_service__["a" /* DataBusService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _d || Object])
], ParfumsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=parfums.component.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PresentationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PresentationComponent = (function () {
    function PresentationComponent(router) {
        var _this = this;
        this.router = router;
        this.orderTuk = function () {
            _this.router.navigate(['tuktuk']);
        };
        this.shopHere = function () {
            _this.router.navigate(['parfums']);
        };
    }
    PresentationComponent.prototype.ngOnInit = function () {
    };
    return PresentationComponent;
}());
PresentationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'app-presentation',
        template: __webpack_require__(477),
        styles: [__webpack_require__(415)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], PresentationComponent);

var _a;
//# sourceMappingURL=presentation.component.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_bus_service__ = __webpack_require__(43);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrintingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import {ElectronService} from '../../providers/electron.service';
var PrintingComponent = (function () {
    function PrintingComponent(route, router, dataBus) {
        this.route = route;
        this.router = router;
        this.dataBus = dataBus;
        /*if (electronService.isElectron()) {
          console.log(electronService.childProcess);
          console.log(electronService.ipcRenderer);
        } else {
          console.log('Mode web');
        }*/
    }
    PrintingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route
            .queryParams
            .subscribe(function (params) {
            _this.firstName = params['firstName'] || '';
            _this.lastName = params['name'] || '';
            _this.travelers = params['persons'] || '';
        });
        // this.sendEvent();
        setTimeout(function () {
            window.localStorage.clear();
            _this.dataBus.updateCartQuantity(0);
            _this.router.navigate(['/']);
        }, 15000);
    };
    return PrintingComponent;
}());
PrintingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'app-printing',
        template: __webpack_require__(478),
        styles: [__webpack_require__(416)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_data_bus_service__["a" /* DataBusService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_data_bus_service__["a" /* DataBusService */]) === "function" && _c || Object])
], PrintingComponent);

var _a, _b, _c;
//# sourceMappingURL=printing.component.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailerService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MailerService = (function () {
    function MailerService(http) {
        this.http = http;
    }
    MailerService.prototype.sendEmail = function (firstName, lastName, hour, passagers) {
        var mailAddress = "https://beautyscrapr.herokuapp.com/mailer?firstName=" + firstName + "&lastName=" + lastName + "&hour=" + hour + "&passagers=" + passagers;
        return this.http.get(mailAddress)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error,could not send the email'); });
    };
    return MailerService;
}());
MailerService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], MailerService);

var _a;
//# sourceMappingURL=mailer.service.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(50);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PaymentService = (function () {
    function PaymentService(http) {
        var _this = this;
        this.http = http;
        this.createLead = function (lead) {
            var leadUrl = 'https://beauty-success-db.herokuapp.com/api/lead';
            return _this.http.post(leadUrl, lead);
        };
    }
    PaymentService.prototype.postPayment = function (amount, source, description) {
        var paymentUrl = 'https://beautyscrapr.herokuapp.com/charge';
        return this.http.post(paymentUrl, { amount: amount, source: source, description: description });
    };
    return PaymentService;
}());
PaymentService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], PaymentService);

var _a;
//# sourceMappingURL=payment.service.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuccessPaymentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SuccessPaymentComponent = (function () {
    function SuccessPaymentComponent(router) {
        this.router = router;
    }
    SuccessPaymentComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            window.localStorage.clear();
            _this.router.navigate(['/']);
        }, 15000);
    };
    return SuccessPaymentComponent;
}());
SuccessPaymentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'app-success-payment',
        template: __webpack_require__(479),
        styles: [__webpack_require__(417)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], SuccessPaymentComponent);

var _a;
//# sourceMappingURL=success-payment.component.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_mailer_service__ = __webpack_require__(195);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TuktukComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TuktukComponent = (function () {
    function TuktukComponent(router, mailer) {
        var _this = this;
        this.router = router;
        this.mailer = mailer;
        this.openingHours = ['2PM', '6PM'];
        this.ticketId = false;
        this.travelers = [];
        this.populateTravelers = function () {
            for (var i = 1; i < 7; i++) {
                _this.travelers.push(i);
            }
        };
        this.bookTuk = function () {
            _this.ticketId = true;
            _this.mailer.sendEmail(_this.lastName, _this.firstName, _this.selectedHour, _this.numberOfTravelers).subscribe(function (res) {
                console.log(res);
            });
        };
    }
    TuktukComponent.prototype.ngOnInit = function () {
        this.populateTravelers();
    };
    TuktukComponent.prototype.formIsComplete = function () {
        return (this.numberOfTravelers && this.selectedHour && this.lastName && this.firstName);
    };
    TuktukComponent.prototype.print = function () {
        this.router.navigate(['print'], {
            queryParams: {
                firstName: this.firstName,
                name: this.lastName,
                persons: this.numberOfTravelers
            }
        });
    };
    TuktukComponent.prototype.goBack = function () {
        this.router.navigate(['/']);
    };
    return TuktukComponent;
}());
TuktukComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'app-tuktuk',
        template: __webpack_require__(480),
        styles: [__webpack_require__(418)],
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_mailer_service__["a" /* MailerService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_mailer_service__["a" /* MailerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_mailer_service__["a" /* MailerService */]) === "function" && _b || Object])
], TuktukComponent);

var _a, _b;
//# sourceMappingURL=tuktuk.component.js.map

/***/ }),

/***/ 289:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 289;


/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(115);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductModel; });
var ProductModel = (function () {
    function ProductModel() {
    }
    return ProductModel;
}());

//# sourceMappingURL=product.js.map

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_bus_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cart_cart_component__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = (function () {
    function AppComponent(dataBus, dialog, router) {
        var _this = this;
        this.dataBus = dataBus;
        this.dialog = dialog;
        this.router = router;
        this.dataIsLoading = false;
        this.isNotStoreView = function () {
            var bannedUrl = ['/language', '/presentation', '/tuktuk', '/itinerary', '/ecranVeille'];
            if (bannedUrl.indexOf(_this.router.url) === -1) {
                return true;
            }
            else {
                return false;
            }
        };
        this.dataBus.dataLoadingStatus.subscribe(function (res) {
            _this.dataIsLoading = res;
        });
        this.dataBus.cartQuantity.subscribe(function (quantity) {
            _this.numberOfCartItems = quantity || _this.getNumberOfItemsFromLS();
            console.log(_this.numberOfCartItems);
        });
    }
    AppComponent.prototype.getNumberOfItemsFromLS = function () {
        var qty = 0;
        var items = JSON.parse(window.localStorage.getItem('cartItems')) || [];
        items.forEach(function (item) {
            qty += item.quantity;
        });
        return qty;
    };
    AppComponent.prototype.showCart = function () {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__cart_cart_component__["a" /* CartComponent */]);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(466),
        styles: [__webpack_require__(404)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_bus_service__["a" /* DataBusService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_data_bus_service__["a" /* DataBusService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["v" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["v" /* MdDialog */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _c || Object])
], AppComponent);

var _a, _b, _c;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_http_service__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_payment_service__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__covalent_core__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser_animations__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__routing__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2_database__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__parfums_parfums_component__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__details_details_component__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_data_bus_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_fetcher_service__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__inscription_inscription_component__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__cart_cart_component__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__language_language_component__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__success_payment_success_payment_component__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__presentation_presentation_component__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__tuktuk_tuktuk_component__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__itinerary_itinerary_component__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ecran_veille_ecran_veille_component__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__cart_inscription_cart_inscription_component__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__cart_confirm_cart_confirm_component__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__modals_add_to_cart_add_to_cart_component__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__printing_printing_component__ = __webpack_require__(194);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









/*external dependencies*/



/*Routing*/








/*views*/

















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_14__parfums_parfums_component__["a" /* ParfumsComponent */],
            __WEBPACK_IMPORTED_MODULE_15__details_details_component__["a" /* DetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_18__inscription_inscription_component__["a" /* InscriptionComponent */],
            __WEBPACK_IMPORTED_MODULE_19__cart_cart_component__["a" /* CartComponent */],
            __WEBPACK_IMPORTED_MODULE_20__language_language_component__["a" /* LanguageComponent */],
            __WEBPACK_IMPORTED_MODULE_21__success_payment_success_payment_component__["a" /* SuccessPaymentComponent */],
            __WEBPACK_IMPORTED_MODULE_22__presentation_presentation_component__["a" /* PresentationComponent */],
            __WEBPACK_IMPORTED_MODULE_23__tuktuk_tuktuk_component__["a" /* TuktukComponent */],
            __WEBPACK_IMPORTED_MODULE_29__printing_printing_component__["a" /* PrintingComponent */],
            __WEBPACK_IMPORTED_MODULE_24__itinerary_itinerary_component__["a" /* ItineraryComponent */],
            __WEBPACK_IMPORTED_MODULE_25__ecran_veille_ecran_veille_component__["a" /* EcranVeilleComponent */],
            __WEBPACK_IMPORTED_MODULE_26__cart_inscription_cart_inscription_component__["a" /* CartInscriptionComponent */],
            __WEBPACK_IMPORTED_MODULE_27__cart_confirm_cart_confirm_component__["a" /* CartConfirmComponent */],
            __WEBPACK_IMPORTED_MODULE_28__modals_add_to_cart_add_to_cart_component__["a" /* AddToCartComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_11__routing__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_9__covalent_core__["a" /* CovalentLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MdSelectModule */],
            __WEBPACK_IMPORTED_MODULE_9__covalent_core__["b" /* CovalentStepsModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["c" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["d" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["e" /* MdDialogModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["f" /* MdProgressBarModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["g" /* MdProgressSpinnerModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["h" /* MdListModule */],
            __WEBPACK_IMPORTED_MODULE_12_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].firebase),
            __WEBPACK_IMPORTED_MODULE_13_angularfire2_database__["a" /* AngularFireDatabaseModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_16__services_data_bus_service__["a" /* DataBusService */], __WEBPACK_IMPORTED_MODULE_17__services_fetcher_service__["a" /* FetcherService */], __WEBPACK_IMPORTED_MODULE_7__services_http_service__["a" /* CustomHttpService */], __WEBPACK_IMPORTED_MODULE_8__services_payment_service__["a" /* PaymentService */]],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_19__cart_cart_component__["a" /* CartComponent */], __WEBPACK_IMPORTED_MODULE_18__inscription_inscription_component__["a" /* InscriptionComponent */], __WEBPACK_IMPORTED_MODULE_26__cart_inscription_cart_inscription_component__["a" /* CartInscriptionComponent */], __WEBPACK_IMPORTED_MODULE_28__modals_add_to_cart_add_to_cart_component__["a" /* AddToCartComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__parfums_parfums_component__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__details_details_component__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__inscription_inscription_component__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__language_language_component__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__success_payment_success_payment_component__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__presentation_presentation_component__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tuktuk_tuktuk_component__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__itinerary_itinerary_component__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ecran_veille_ecran_veille_component__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__cart_confirm_cart_confirm_component__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__printing_printing_component__ = __webpack_require__(194);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var appRoutes = [
    { path: '', redirectTo: 'parfums', pathMatch: 'full' },
    { path: 'parfums', component: __WEBPACK_IMPORTED_MODULE_2__parfums_parfums_component__["a" /* ParfumsComponent */] },
    { path: 'presentation', component: __WEBPACK_IMPORTED_MODULE_7__presentation_presentation_component__["a" /* PresentationComponent */] },
    { path: 'tuktuk', component: __WEBPACK_IMPORTED_MODULE_8__tuktuk_tuktuk_component__["a" /* TuktukComponent */] },
    { path: 'print', component: __WEBPACK_IMPORTED_MODULE_12__printing_printing_component__["a" /* PrintingComponent */] },
    { path: 'details', component: __WEBPACK_IMPORTED_MODULE_3__details_details_component__["a" /* DetailsComponent */] },
    { path: 'inscription', component: __WEBPACK_IMPORTED_MODULE_4__inscription_inscription_component__["a" /* InscriptionComponent */] },
    { path: 'language', component: __WEBPACK_IMPORTED_MODULE_5__language_language_component__["a" /* LanguageComponent */] },
    { path: 'valid_payment', component: __WEBPACK_IMPORTED_MODULE_6__success_payment_success_payment_component__["a" /* SuccessPaymentComponent */] },
    { path: 'itinerary', component: __WEBPACK_IMPORTED_MODULE_9__itinerary_itinerary_component__["a" /* ItineraryComponent */] },
    { path: 'ecranVeille', component: __WEBPACK_IMPORTED_MODULE_10__ecran_veille_ecran_veille_component__["a" /* EcranVeilleComponent */] },
    { path: 'confirmCart', component: __WEBPACK_IMPORTED_MODULE_11__cart_confirm_cart_confirm_component__["a" /* CartConfirmComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(appRoutes, { useHash: true })],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=routing.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_service__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranslatorService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TranslatorService = (function () {
    function TranslatorService(http) {
        this.http = http;
        this.translateUrl = 'https://beautyscrapr.herokuapp.com/translate';
    }
    TranslatorService.prototype.translateContent = function (description, language) {
        return this.http.post(this.translateUrl, { description: description, language: language })
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw('Server error,could not translate the description'); });
    };
    return TranslatorService;
}());
TranslatorService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* CustomHttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* CustomHttpService */]) === "function" && _a || Object])
], TranslatorService);

var _a;
//# sourceMappingURL=translator.service.js.map

/***/ }),

/***/ 404:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, ".topBar{\n  background-color: #333;\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n.bs-link{\n  color: white;\n  text-underline: none !important;\n}\n.bs-link:focus{\n  text-underline: none !important;\n}\n.page-active{\n  color: #E6007E;\n  text-underline: none !important;\n}\n.page-active:focus{\n  text-underline: none !important;\n}\n.cart-items{\n  color: #E6007E;\n  font-weight: 700;\n  margin-bottom: 0 !important;\n}\n.cart-icon{\n  max-height: 25px !important;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 405:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 406:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "#form {\n  background-color: white;\n  border-radius: 4px;\n  padding: 2em;\n  box-shadow: 5px 5px 5px lightgray;\n  border: solid 2px lightpink;\n}\n\n#submit-btn {\n  background-color: #E6007E;\n  color: white;\n}\n\nlabel {\n  color: #E6007E;\n}\n\ninput {\n  color: lightslategray;\n}\n\n.disabled {\n  background-color: #999999 !important;\n}\n\n#card-element {\n  margin-top: 2em;\n  margin-bottom: 1em;\n}\n\n#card-errors {\n  color: red;\n}\n\n.price {\n  font-size: 150px;\n}\n\n.spinner {\n  margin: 50px;\n  height: 28px;\n  width: 28px;\n  -webkit-animation: rotate 0.8s infinite linear;\n          animation: rotate 0.8s infinite linear;\n  border: 8px solid lightcoral;\n  border-right-color: transparent;\n  border-radius: 50%;\n}\n\n@-webkit-keyframes rotate {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes rotate {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n.price-alert {\n  color: #009688;\n  margin-bottom: 0.7em;\n  font-weight: 600;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 407:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, ".delete-btn:focus{\n  outline: none !important;\n}\n.delete-btn{\n  background-color: #E6007E !important;\n  color: white !important;\n  margin-left: 1em;\n}\n#cart-summary{\n  color: #999999;\n  text-align: center;\n  margin-top: 0.7em;\n  margin-bottom: 1.3em;\n}\n.add-btn{\n  color: white !important;\n  margin-left: 1em;\n  background-color: #333;\n}\n.add-btn:focus{\n  outline: none;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 408:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "\n#product-big-img {\n  display: block;\n  width: 90% !important;\n  height: auto !important;\n}\n\n.main-holder {\n  width: 70%;\n}\n\n#brand-img {\n  margin: 0 auto;\n}\n\n#label, #description {\n  margin-top: 1em !important;\n  margin-bottom: 1em !important;\n}\n\n.cart-btn{\n  background-color: #333 !important;\n  color: white !important;\n  border: solid 2px #333;\n  margin-bottom: 10px;\n}\n.cart-btn:hover{\n  background-color: #DC6695 !important;\n  color: white !important;\n  border: solid 2px #DC6695 !important;\n}\n.store-btn{\n  background-color: white;\n  color: #DC6695;\n  border: solid 2px #DC6695;\n  margin-bottom: 10px;\n}\n\n.store-btn:hover{\n  background-color: #333;\n  color: white;\n  border: solid 2px #333;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 409:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "#tuk-btn{\n  height: 50px;\n  font-size: 20px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 410:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "#form{\n  background-color: white;\n  border-radius: 4px;\n  padding: 2em;\n  box-shadow: 5px 5px 5px lightgray;\n  border: solid 2px lightpink;\n}\n#submit-btn{\n  background-color: #E6007E;\n  color: white;\n}\nlabel{\n  color: #E6007E;\n}\ninput{\n  color: lightslategray;\n}\n.disabled{\n  background-color: #999999 !important;\n}\n#card-element{\n  margin-top: 2em;\n  margin-bottom: 1em;\n}\n#card-errors{\n  color: red;\n}\n.price{\n  font-size: 150px;\n}\n\n\n.spinner {\n  margin: 50px;\n  height: 28px;\n  width: 28px;\n  -webkit-animation: rotate 0.8s infinite linear;\n          animation: rotate 0.8s infinite linear;\n  border: 8px solid lightcoral;\n  border-right-color: transparent;\n  border-radius: 50%;\n}\n\n@-webkit-keyframes rotate {\n  0%    { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\n  100%  { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\n}\n\n@keyframes rotate {\n  0%    { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\n  100%  { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\n}\n.price-alert {\n  color: #009688;\n  margin-bottom: 0.7em;\n  font-weight: 600;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 411:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, ".example-header-image {\n  background-image: url(" + __webpack_require__(734) + ");\n  background-size: cover;\n}\n.icon-direction{\n  height: 20px;\n  margin-right: 15px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 412:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "#language-wrapper {\n  height: 100vh;\n  width: 100vh;\n}\n\n#us {\n  background: url(" + __webpack_require__(420) + ");\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 413:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 414:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, ".img-holder{\n  width: 120px;\n  height: 120px;\n  margin: 0 auto;\n}\n.cart-btn{\n  background-color: #333 !important;\n  color: white !important;\n  border: solid 2px #333;\n  margin-bottom: 10px;\n}\n.cart-btn:hover{\n  background-color: #DC6695 !important;\n  color: white !important;\n  border: solid 2px #DC6695 !important;\n}\n.store-btn{\n  background-color: white;\n  color: #DC6695;\n  border: solid 2px #DC6695;\n  margin-bottom: 10px;\n}\n\n.store-btn:hover{\n  background-color: #333;\n  color: white;\n  border: solid 2px #333;\n}\n.product-card{\n  width: 320px;\n  height: 360px !important;\n}\n\n.title{\n  font-weight: 700;\n}\n.desc{\n  color: #999;\n}\n\n.action-center{\n  position: absolute;\n  bottom: 10px;\n}\n#parfumBrands{\n  list-style-type: none;\n  margin-top: 5px;\n  margin-right: 2em;\n}\n#parfumBrands li{\n  margin-bottom: 1em;\n  cursor: pointer;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 415:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "#tuktuk-btn{\n  background-color: #FFB04C;\n  width: 40px;\n  color: white;\n}\n.wrapper{\n  margin-top: 5em !important;\n}\n#options{\n  margin-top: 3em;\n}\n#classic{\n  margin-right: 3em;\n  height: 675px;\n}\n#shop-here-btn{\n  background-color: #303E48;\n  color: white;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 416:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 417:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, ".conf{\n  margin-top: 2em;\n  font-weight: 400 !important;\n  color: #333333;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 418:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 420:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "US.87de9e126782b9c98185.svg";

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Models_product__ = __webpack_require__(339);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataBusService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataBusService = (function () {
    function DataBusService() {
        this._selectedProduct = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](new __WEBPACK_IMPORTED_MODULE_2__Models_product__["a" /* ProductModel */]());
        this._dataIsLoading = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](false);
        this._cartQuantity = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](0);
    }
    DataBusService.prototype.setNewProduct = function (product) {
        this._selectedProduct.next(product);
        window.localStorage.setItem('currentProductUrl', product.url);
    };
    Object.defineProperty(DataBusService.prototype, "currentProduct", {
        get: function () {
            return this._selectedProduct.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    DataBusService.prototype.setDataLoadingStatus = function (status) {
        this._dataIsLoading.next(status);
    };
    Object.defineProperty(DataBusService.prototype, "dataLoadingStatus", {
        get: function () {
            return this._dataIsLoading.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    DataBusService.prototype.updateCartQuantity = function (value) {
        console.log('new value ', value);
        this._cartQuantity.next(value);
    };
    Object.defineProperty(DataBusService.prototype, "cartQuantity", {
        get: function () {
            return this._cartQuantity.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    return DataBusService;
}());
DataBusService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], DataBusService);

//# sourceMappingURL=data-bus.service.js.map

/***/ }),

/***/ 466:
/***/ (function(module, exports) {

module.exports = "<md-progress-bar mode=\"indeterminate\" color=\"accent\" *ngIf=\"dataIsLoading\"></md-progress-bar>\n\n<div *ngIf=\"isNotStoreView()\">\n  <div layout=\"row\" class=\"topBar mb-5\" layout-align=\"space-between center\">\n    <div layout=\"row\" flex=\"60\" layout-align=\"end center\">\n      <p style=\"color: white; margin-bottom: 0px\">For any question please address the loby</p>\n    </div>\n    <div class=\"mr-4\" layout=\"row\" (click)=\"showCart()\" *ngIf=\"numberOfCartItems > 0\">\n      <img class=\"cart-icon\" src=\"assets/images/cart.svg\">\n      <p class=\"cart-items ml-2\">{{numberOfCartItems}} items</p>\n    </div>\n  </div>\n\n  <div layout=\"row\" layout-align=\"center center\" class=\"mb-5\">\n    <img src=\"assets/images/logo.png\">\n  </div>\n</div>\n<router-outlet></router-outlet>\n\n\n\n"

/***/ }),

/***/ 467:
/***/ (function(module, exports) {

module.exports = "<div layout=\"column\" layout-align=\"center center\">\n  <div class=\"wrapper-with-shadow\" style=\"width: 550px\" layout=\"column\" layout-align=\"center center\">\n    <img src=\"assets/images/valid_payment.svg\" style=\"height: 60px\">\n    <p class=\"mt-3\">Your Order has been successfully placed</p>\n    <div layout=\"row\" layout-align=\"space-between center\" class=\"mt-3\">\n      <button md-raised-button (click)=\"seeItinerary()\" class=\"mr-2\" color=\"primary\">\n        Come with Metro / by Foot\n      </button>\n      <button md-raised-button color=\"accent\" (click)=\"gotoTuktuk()\">Come by Tuktuk</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 468:
/***/ (function(module, exports) {

module.exports = "<h1 md-dialog-title>Confirm your order</h1>\n<div md-dialog-content>\n\n  <form #form=\"ngForm\" id=\"form\">\n    <div class=\"form-group\">\n      <label for=\"firstName\">First Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"firstName\" aria-describedby=\"firstName\"\n             placeholder=\"First Name\" [(ngModel)]=\"firstName\" required name=\"firstName\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"lastName\">Last Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"lastName\" aria-describedby=\"lastName\"\n             placeholder=\"Last Name\" [(ngModel)]=\"lastName\" required name=\"lastName\">\n    </div>\n    <div class=\"form-inline\">\n      <select class=\"form-control mr-3\" id=\"areaCode\" name=\"sel1\" [(ngModel)]=\"areaCode\" >\n        <option value=\"Area Code\" disabled selected>Area Code</option>\n        <option *ngFor=\"let area of areCodes\">{{area.code}}</option>\n      </select>\n      <input type=\"text\" class=\"form-control\" id=\"phone\" aria-describedby=\"phone\"\n             placeholder=\"Phone Number\" [(ngModel)]=\"phone\" required name=\"phone\" style=\"width: 84%\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"passport\">Date of Birth</label>\n      <input type=\"date\" class=\"form-control\" id=\"dob\" aria-describedby=\"dob\"\n             placeholder=\"Date of Birth\" [(ngModel)]=\"dob\" required name=\"dob\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"email\">Email address</label>\n      <input type=\"email\" class=\"form-control\" id=\"email\" aria-describedby=\"email\"\n             placeholder=\"Email\" [(ngModel)]=\"email\" required name=\"email\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"passport\">Passport Number</label>\n      <input type=\"text\" class=\"form-control\" id=\"passport\" aria-describedby=\"passport\"\n             placeholder=\"Passport Number\" [(ngModel)]=\"passportNumber\" required name=\"passport\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"sel1\">Select list:</label>\n      <select class=\"form-control\" id=\"sel1\" name=\"sel1\" [(ngModel)]=\"country\" (change)=\"checkContinent(country)\">\n        <option *ngFor=\"let country of allCountries\">{{country}}</option>\n      </select>\n    </div>\n  </form>\n</div>\n<div md-dialog-actions layout=\"row\" layout-align=\"center center\">\n  <button md-raised-button [md-dialog-close] class=\"mr-3\">Cancel</button>\n  <button md-raised-button [md-dialog-close] color=\"primary\" (click)=\"confirm()\">Confirm</button>\n</div>\n\n"

/***/ }),

/***/ 469:
/***/ (function(module, exports) {

module.exports = "<md-list>\n  <h3 id=\"cart-summary\">{{numberOfProducts}} items</h3>\n  <md-list-item *ngFor=\"let prod of cartProducts\">\n    <img md-list-avatar src=\"{{prod.image}}\">\n    <h3 md-line>{{prod.quantity}} x {{prod.label}} </h3>\n    <button md-icon-button class=\"delete-btn\" (click)=\"decreaseQty(prod)\" [disabled]=\"productIsDeleted(prod)\">-</button>\n    <button md-icon-button class=\"add-btn\" (click)=\"increaseQty(prod)\">+</button>\n  </md-list-item>\n  <div layout=\"row\" layout-align=\"center center\">\n    <h3>{{totalPrice}} €</h3>\n  </div>\n</md-list>\n<div layout=\"row\" layout-align=\"center center\">\n  <button md-raised-button color=\"primary\" class=\"mr-2\" (click)=\"bookInShop()\">Book in Shop</button>\n  <button md-raised-button color=\"accent\" class=\"ml-2\" (click)=\"goToSignUp()\">Delivery by the concierge</button>\n</div>\n"

/***/ }),

/***/ 470:
/***/ (function(module, exports) {

module.exports = "<div layout=\"row\" layout-align=\"center center\">\n  <div *ngIf=\"!contentHasLoaded; else productDetail\">\n    <md-progress-spinner\n      class=\"example-margin\"\n      [color]=\"spinnerColor\"\n      [mode]=\"mode\">\n    </md-progress-spinner>\n  </div>\n  <ng-template #productDetail layout=\"row\" class=\"mt-5 main-holder\">\n    <div flex=\"45\">\n      <img src=\"{{product.productBigImage}}\" id=\"product-big-img\">\n    </div>\n    <div layout=\"column\" layout-align=\"center\" flex=\"50\">\n      <img src=\"{{product.featuredImage}}\" id=\"brand-img\">\n      <h4 id=\"label\">{{product.label}}</h4>\n      <p id=\"description\">{{product.fullDescription}}</p>\n      <div layout=\"column\" class=\"mt-5\">\n        <div layout=\"row\" layout-align=\"center center\">\n          <p class=\"mb-0 mr-5 price\" flex=\"15\">{{product.dynamicPrice |  number:'2.1-5'}} €</p>\n          <md-select placeholder=\"Quantité\" [(ngModel)]=\"selectedVolume\" color=\"accent\" class=\"ml-2\"\n                     *ngIf=\"multipleVolumes\" (change)=\"updateVolumePrice(selectedVolume)\" flex>\n            <md-option *ngFor=\"let volume of prices\" [value]=\"volume.price\">\n              {{volume.label}}\n            </md-option>\n          </md-select>\n          <md-select placeholder=\"Quantité\" [(ngModel)]=\"selectedQty\" color=\"accent\" class=\"ml-5\"\n                     (change)=\"updateValue(selectedQty)\" flex=\"20\">\n            <md-option *ngFor=\"let qty of quantities\" [value]=\"qty\">\n              {{qty}}\n            </md-option>\n          </md-select>\n        </div>\n        <div layout=\"row\" layout-align=\"center center\" class=\"mt-5\">\n          <button md-raised-button class=\"cart-btn mr-2\" (click)=\"bookInShop()\">Book in Shop</button>\n          <button md-raised-button class=\"store-btn mr-2\" (click)=\"goToSignUp()\">Delivery to Concierge Hotel</button>\n          <button md-raised-button class=\"cart-btn ml-2\" (click)=\"addProductToCart()\">Add To Cart</button>\n        </div>\n      </div>\n    </div>\n  </ng-template>\n</div>\n"

/***/ }),

/***/ 471:
/***/ (function(module, exports) {

module.exports = "<div layout=\"column\" layout-align=\"center center\" style=\"height: 100%\">\n  <img src=\"assets/img/tuktuk.svg\">\n  <button id=\"tuk-btn\" md-raised-button (click)=\"goToLanguage()\" color=\"warn\" class=\"mt-5\">Click Here and Book your trip</button>\n</div>\n"

/***/ }),

/***/ 472:
/***/ (function(module, exports) {

module.exports = "<h1 md-dialog-title>{{data.product.product}}</h1>\n<div md-dialog-content>\n  <p class=\"price-alert\" *ngIf=\"isEligibleForRefund()\">16.6% of tax refund applied to all NON EU residents ! </p>\n  <p>Price: {{data.product.dynamicPrice | number:'1.0-2'}} €</p>\n  <form #form=\"ngForm\" id=\"form\">\n    <div class=\"form-group\">\n      <label for=\"firstName\">First Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"firstName\" aria-describedby=\"firstName\"\n             placeholder=\"First Name\" [(ngModel)]=\"firstName\" required name=\"firstName\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"lastName\">Last Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"lastName\" aria-describedby=\"lastName\"\n             placeholder=\"Last Name\" [(ngModel)]=\"lastName\" required name=\"lastName\">\n    </div>\n    <div class=\"form-inline\">\n      <select class=\"form-control mr-3\" id=\"areaCode\" name=\"sel1\" [(ngModel)]=\"areaCode\" >\n        <option value=\"Area Code\" disabled selected>Area Code</option>\n        <option *ngFor=\"let area of areCodes\">{{area.code}}</option>\n      </select>\n      <input type=\"text\" class=\"form-control\" id=\"phone\" aria-describedby=\"phone\"\n             placeholder=\"Phone Number\" [(ngModel)]=\"phone\" required name=\"phone\" style=\"width: 84%\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"email\">Email address</label>\n      <input type=\"email\" class=\"form-control\" id=\"email\" aria-describedby=\"email\"\n             placeholder=\"Email\" [(ngModel)]=\"email\" required name=\"email\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"passport\">Passport Number</label>\n      <input type=\"text\" class=\"form-control\" id=\"passport\" aria-describedby=\"passport\"\n             placeholder=\"Passport Number\" [(ngModel)]=\"passportNumber\" required name=\"passport\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"passport\">Date of Birth</label>\n      <input type=\"date\" class=\"form-control\" id=\"dob\" aria-describedby=\"dob\"\n             placeholder=\"Date of Birth\" [(ngModel)]=\"dob\" required name=\"dob\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"sel1\">Nationality:</label>\n      <select class=\"form-control\" id=\"sel1\" name=\"sel1\" [(ngModel)]=\"country\" (change)=\"checkContinent(country)\">\n        <option *ngFor=\"let country of allCountries\">{{country}}</option>\n      </select>\n    </div>\n    <div>\n      <div id=\"card-element\"></div>\n      <div id=\"card-errors\"></div>\n    </div>\n\n\n  </form>\n</div>\n<div md-dialog-actions layout=\"row\" layout-align=\"center center\">\n  <div layout=\"row\" *ngIf=\"notPaying; else payingLoader\">\n    <button md-raised-button type=\"submit\" id=\"submit-btn\" [disabled]=\"!form.valid\" [class.disabled]=\"!form.valid\"\n            (click)=\"handlePayment()\">\n      PAY\n    </button>\n    <button md-button [md-dialog-close] class=\"ml-3\">Cancel</button>\n  </div>\n  <ng-template #payingLoader layout=\"row\" layout-align=\"center center\">\n    <div class=\"spinner\"></div>\n  </ng-template>\n\n</div>\n"

/***/ }),

/***/ 473:
/***/ (function(module, exports) {

module.exports = "<div style=\"height: 100%\" layout=\"column\" layout-align=\"center center\">\n  <h3 class=\"mb-4 mt-4\" style=\"color: #D81B60\">Tip: Take a picture of this screen with your phone so that you don't get lost</h3>\n  <div layout=\"row\" layout-align=\"space-between center\">\n    <md-card style=\"width: 626px\">\n      <md-card-header>\n        <div md-card-avatar class=\"example-header-image\"></div>\n        <md-card-title>Beauty Success Shop</md-card-title>\n        <md-card-subtitle>Directions By Foot: 13 Minutes</md-card-subtitle>\n      </md-card-header>\n      <img md-card-image src=\"assets/images/map.png\" alt=\"Photo of map\">\n      <md-card-content>\n        <div layout=\"row\">\n          <img src=\"assets/img/navigation/up.svg\" class=\"icon-direction\">\n          <p>Prendre la direction nord sur Rue Cambronne</p>\n        </div>\n        <div layout=\"row\">\n          <img src=\"assets/img/navigation/left.svg\" class=\"icon-direction\">\n          <p>Tourner à gauche pour rester sur Rue Cambronne</p>\n        </div>\n        <div layout=\"row\">\n          <img src=\"assets/img/navigation/round.svg\" class=\"icon-direction\">\n          <p>Au rond-point, prendre la 3e sortie sur Boulevard Garibaldi</p>\n        </div>\n        <div layout=\"row\">\n          <img src=\"assets/img/navigation/left.svg\" class=\"icon-direction\">\n          <p>Prendre légèrement à gauche sur Place Henri Queuille</p>\n        </div>\n        <div layout=\"row\">\n          <img src=\"assets/img/navigation/up.svg\" class=\"icon-direction\">\n          <p>Continuer sur Rue de Sèvres</p>\n        </div>\n        <div layout=\"row\">\n          <img src=\"assets/img/navigation/left.svg\" class=\"icon-direction\">\n          <p>Prendre à gauche sur Boulevard des Invalides<br>\n            Votre destination se trouvera sur la droite.</p>\n        </div>\n      </md-card-content>\n    </md-card>\n    <md-card style=\"width: 626px; height: 690px\">\n      <md-card-header>\n        <div md-card-avatar class=\"example-header-image\"></div>\n        <md-card-title>Beauty Success Shop</md-card-title>\n        <md-card-subtitle>Directions By Subway: 7 minutes</md-card-subtitle>\n      </md-card-header>\n      <img md-card-image src=\"assets/images/map2.png\" alt=\"Photo of map\">\n      <md-card-content>\n        <p>Prendre la ligne 10 à la station gare d'Austerlitz</p>\n\n        <p>Montez à la station La Motte-Picquet Grenelle</p>\n\n        <p>Sortez à la station Duroc</p>\n\n        <p>Marchez jusqu'au magasin Sèvre Corner situé au 67 Boulevard des invalides</p>\n      </md-card-content>\n\n    </md-card>\n  </div>\n  <div class=\"mt-3 mb-3\" layout=\"row\" layout-align=\"center center\">\n    <button md-raised-button (click)=\"goToMenu()\" color=\"primary\">GO BACK TO MENU</button>\n  </div>\n</div>\n"

/***/ }),

/***/ 474:
/***/ (function(module, exports) {

module.exports = "<div layout=\"column\" layout-align=\"center center\" style=\"height: 100%\">\n  <h3 class=\"mb-3\">Pick a Language</h3>\n  <div layout=\"row\" layout-align=\"center center\">\n    <button md-raised-button color=\"primary\" class=\"mr-2\" (click)=\"setLanguage('US')\">US</button>\n    <button md-raised-button color=\"primary\" class=\"mr-2\" (click)=\"setLanguage('FR')\">FR</button>\n    <button md-raised-button color=\"primary\" (click)=\"setLanguage('ES')\">ES</button>\n  </div>\n</div>\n"

/***/ }),

/***/ 475:
/***/ (function(module, exports) {

module.exports = "<p>{{title}} successfully added to cart</p>\n"

/***/ }),

/***/ 476:
/***/ (function(module, exports) {

module.exports = "<div layout=\"row\" layout-align=\"space-between start\">\n  <ul id=\"parfumBrands\">\n    <li *ngFor=\"let brand of brandsToDisplay\" (click)=\"filterParfums(brand)\">{{brand}}</li>\n  </ul>\n  <div layout=\"row\" layout-wrap layout-align=\"start start\" style=\"width: 80%\">\n    <div *ngFor=\"let parfum of allParfums\">\n      <md-card class=\"product-card\" *ngIf=\"isNotUrl(parfum.image) && parfum.available\">\n        <md-card-header>\n          <md-card-title class=\"title\">{{parfum.brand}}</md-card-title>\n          <md-card-subtitle class=\"desc\">{{parfum.name}}</md-card-subtitle>\n        </md-card-header>\n        <div class=\"img-holder\">\n          <img md-card-image src=\"assets/{{parfum.image}}\">\n        </div>\n        <md-card-content>\n          <p class=\"price\">\n            {{parfum.price}} €\n          </p>\n        </md-card-content>\n        <md-card-footer layout=\"row\" layout-align=\"center center\">\n          <button md-button class=\"cart-btn\" (click)=\"getDetails(parfum)\">See More</button>\n        </md-card-footer>\n      </md-card>\n    </div>\n  </div>\n\n</div>\n\n\n"

/***/ }),

/***/ 477:
/***/ (function(module, exports) {

module.exports = "\n<div layout=\"row\" layout-align=\"space-around center\" class=\" wrapper\">\n  <div id=\"classic\" flex=\"45\" layout=\"column\" layout-align=\"center center\">\n    <img src=\"assets/img/options.svg\">\n    <p class=\"mt-5\">When shopping through this computer, you will have access to a wide variety of products, you may\n      either :</p>\n    <ul id=\"options\">\n      <li>Buy the products directly here via a secured payment using your credit card, your products will be shipped at\n        the hotel within 5 hours\n      </li>\n      <li>Order the items here and pick them up in the nearby store (500 meters)</li>\n    </ul>\n  </div>\n  <div class=\"tuktuk\" flex=\"45\" layout=\"column\" layout-align=\"center center\">\n    <img src=\"assets/img/tuktuk.svg\">\n    <p class=\"mt-5 mb-3\">Come as you are, our tuk tuk will give you a tour of the most beautiful monuments in Paris,\n      <strong>you'll\n        end the visit\n        by\n        our boutique</strong></p>\n  </div>\n</div>\n<div layout=\"row\" class=\"mt-5\" layout-align=\"space-around center\">\n  <button md-raised-button id=\"shop-here-btn\" (click)=\"shopHere()\">Shop Here</button>\n  <button id=\"tuktuk-btn\" md-raised-button (click)=\"orderTuk()\">TUKTUK</button>\n</div>\n"

/***/ }),

/***/ 478:
/***/ (function(module, exports) {

module.exports = "<div style=\"height: 100%\" layout=\"column\" layout-align=\"center center\">\n  <div>\n    <h2>Welcome on Board ! </h2>\n    <h5>First Name : </h5>\n    <h6 class=\"mt-3 mb-4\">{{firstName}}</h6>\n    <h5>Last Name : </h5>\n    <h6 class=\"mt-3 mb-4\">{{lastName}}</h6>\n    <h5>Number of Passengers : </h5>\n    <h6 class=\"mt-3 mb-4\">{{travelers}} Passagers</h6>\n    <h6 class=\"mt-3\">Please, <br>\n      present this ticket<br>\n      to the driver.\n      <h2 class=\"mt-4\">Enjoy your trip ! </h2>\n    </h6>\n  </div>\n</div>\n"

/***/ }),

/***/ 479:
/***/ (function(module, exports) {

module.exports = "<div layout=\"column\" layout-align=\"center center\">\n  <img class=\"mt-5 mb-5\" src=\"assets/images/valid_payment.svg\" style=\"height: 300px\">\n  <h3 class=\"conf\">Your payment has been successfully received, a driver will bring your article(s) by the end of the day..</h3>\n</div>\n"

/***/ }),

/***/ 480:
/***/ (function(module, exports) {

module.exports = "<div layout=\"column\" layout-align=\"center center\" style=\"height: 100%; margin-bottom: 150px\">\n  <div class=\"wrapper-with-shadow\" style=\"width: 650px\">\n    <div class=\"form-group mt-5\">\n      <label for=\"hours\">How many people will travel :</label>\n      <select class=\"form-control\" id=\"travelers\" [(ngModel)]=\"numberOfTravelers\">\n        <option *ngFor=\"let traveler of travelers\">{{traveler}}</option>\n      </select>\n      <p style=\"color: red\" *ngIf=\"numberOfTravelers\" class=\"mt-3\">\n        Warning: only adults above 16 years old are\n        allowed</p>\n      <label for=\"hours\">Pick an hour:</label>\n      <select class=\"form-control\" id=\"hours\" [(ngModel)]=\"selectedHour\">\n        <option *ngFor=\"let hour of openingHours\">{{hour}}</option>\n      </select>\n      <div class=\"form-group row mt-3\" >\n        <label for=\"firstName\" class=\"col-3 col-form-label\">First Name</label>\n        <div class=\"col-9\">\n          <input class=\"form-control\" [(ngModel)]=\"firstName\" type=\"text\" value=\"First Name\" id=\"firstName\">\n        </div>\n      </div>\n      <div class=\"form-group row mt-3\">\n        <label for=\"lastName\" class=\"col-3 col-form-label\">Last Name</label>\n        <div class=\"col-9\">\n          <input class=\"form-control\" [(ngModel)]=\"lastName\" type=\"text\" value=\"Last Name\" id=\"lastName\">\n        </div>\n      </div>\n      <div layout=\"row\" layout-align=\"center\" class=\"mt-3\">\n        <button md-raised-button color=\"accent\" (click)=\"goBack()\" class=\"mr-1\">Cancel</button>\n        <button md-raised-button color=\"primary\" class=\"ml-1\" (click)=\"bookTuk()\" [disabled]=\"!formIsComplete()\">Order TUKTUK\n        </button>\n      </div>\n      <div class=\"mt-5\" *ngIf=\"ticketId\" layout=\"row\" layout-align=\"center start\">\n        <img src=\"../../../assets/img/valid.svg\" class=\"mr-4\" style=\"height: 40px; margin-top: 3%\">\n        <div>\n          <p>Hi {{firstName}}, your TukTuk has been ordered </p>\n          <p class=\"mb-4\">He will pick you up at {{selectedHour}} by the reception</p>\n        </div>\n      </div>\n      <div layout=\"row\" layout-align=\"center center\" *ngIf=\"ticketId\">\n        <button md-raised-button class=\"mt-4\" color=\"accent\" (click)=\"print()\">Print Ticket</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 734:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "logo.1f462d60eb701e7619e1.png";

/***/ }),

/***/ 736:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(290);


/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__countries__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_payment_service__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Models_phone_areCode__ = __webpack_require__(183);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InscriptionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
    return { next: verb(0), "throw": verb(1), "return": verb(2) };
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var InscriptionComponent = (function () {
    function InscriptionComponent(paymentSrv, dialogRef, data, router) {
        var _this = this;
        this.paymentSrv = paymentSrv;
        this.dialogRef = dialogRef;
        this.data = data;
        this.router = router;
        this.submitted = false;
        this.notPaying = true;
        this.areCodes = __WEBPACK_IMPORTED_MODULE_6__Models_phone_areCode__["a" /* AreaCodes */].CODES;
        this.allCountries = __WEBPACK_IMPORTED_MODULE_1__countries__["a" /* Countries */].countryList;
        this.euCountries = __WEBPACK_IMPORTED_MODULE_1__countries__["a" /* Countries */].euCountries;
        this.postPayment = function (token) {
            var label = "payment from " + _this.lastName + " " + _this.firstName;
            var price = Math.floor(_this.data.product.dynamicPrice * 100);
            _this.paymentSrv.postPayment(price, token, label)
                .subscribe(function (payment) {
                _this.notPaying = !_this.notPaying;
                if (payment.status === 200) {
                    _this.dialogRef.close();
                    _this.router.navigate(['/valid_payment']);
                }
                else {
                    alert('your payment could not be made, please try again');
                }
            }, function (error) {
                alert(error);
                _this.notPaying = !_this.notPaying;
            });
        };
        this.submitPayment = function () { return __awaiter(_this, void 0, void 0, function () {
            var _a, token, error, errorField;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.notPaying = !this.notPaying;
                        return [4 /*yield*/, this.stripe.createToken(this.card)];
                    case 1:
                        _a = _b.sent(), token = _a.token, error = _a.error;
                        errorField = document.getElementById('card-errors');
                        if (error) {
                            this.notPaying = !this.notPaying;
                            errorField.textContent = error.message;
                        }
                        else {
                            this.postPayment(token.id);
                        }
                        return [2 /*return*/];
                }
            });
        }); };
        this.displayPayment = function () {
            _this.stripe = Stripe(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].stripeKey);
            var elements = _this.stripe.elements();
            var style = {
                base: {
                    fontSize: '16px',
                    lineHeight: '24px'
                },
            };
            _this.card = elements.create('card', { style: style });
            _this.card.addEventListener('change', function (_a) {
                var error = _a.error;
                var displayError = document.getElementById('card-errors');
                if (error) {
                    displayError.textContent = error.message;
                }
                else {
                    displayError.textContent = '';
                }
            });
            var anchor = document.getElementById('card-element');
            _this.card.mount(anchor);
        };
        this.newLead = function () {
            var lead = {
                'firstName': _this.firstName,
                'lastName': _this.lastName,
                'passeport': _this.passportNumber,
                'country': _this.country,
                'email': _this.email,
                'areaCode': _this.areaCode,
                'phone': _this.phone,
                'amount_spent': _this.data.product.dynamicPrice
            };
            _this.paymentSrv.createLead(lead).subscribe(function (res) {
                console.log(res);
            });
        };
        this.checkContinent = function (country) {
            console.log(_this.data.product);
            _this.isNotEuropeanCountry = _this.euCountries.indexOf(country) > 1;
        };
        this.data.product.dynamicPrice = this.data.product.dynamicPrice ||
            parseInt(window.localStorage.getItem('cartPrice'), 10);
    }
    InscriptionComponent.prototype.ngAfterContentInit = function () {
        this.displayPayment();
    };
    InscriptionComponent.prototype.isEligibleForRefund = function () {
        return (!this.isNotEuropeanCountry && this.data.product.dynamicPrice > 175);
    };
    InscriptionComponent.prototype.handlePayment = function () {
        this.submitted = true;
        this.router.navigate(['/valid_payment']);
        // this.submitPayment().then((status) => console.log(status));
        //  this.newLead();
    };
    return InscriptionComponent;
}());
InscriptionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'app-inscription',
        template: __webpack_require__(472),
        styles: [__webpack_require__(410)],
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_payment_service__["a" /* PaymentService */]]
    }),
    __param(2, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Inject */])(__WEBPACK_IMPORTED_MODULE_4__angular_material__["E" /* MD_DIALOG_DATA */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_payment_service__["a" /* PaymentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_payment_service__["a" /* PaymentService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["w" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["w" /* MdDialogRef */]) === "function" && _b || Object, Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === "function" && _c || Object])
], InscriptionComponent);

var _a, _b, _c;
//# sourceMappingURL=inscription.component.js.map

/***/ })

},[736]);
//# sourceMappingURL=main.bundle.js.map