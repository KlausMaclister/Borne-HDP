webpackJsonp([1,4],{

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookInShopComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BookInShopComponent = (function () {
    function BookInShopComponent() {
    }
    BookInShopComponent.prototype.ngOnInit = function () {
    };
    return BookInShopComponent;
}());
BookInShopComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'app-book-in-shop',
        template: __webpack_require__(342),
        styles: [__webpack_require__(326)]
    }),
    __metadata("design:paramtypes", [])
], BookInShopComponent);

//# sourceMappingURL=book-in-shop.component.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(13);
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
    function CartConfirmComponent(router) {
        var _this = this;
        this.router = router;
        this.generateTicketId = function () {
            _this.ticketId = Math.floor(1000 + Math.random() * 9000);
        };
    }
    CartConfirmComponent.prototype.ngOnInit = function () {
        this.generateTicketId();
    };
    CartConfirmComponent.prototype.goBackToMenu = function () {
        this.router.navigate(['/']);
    };
    CartConfirmComponent.prototype.seeItinerary = function () {
        this.router.navigate(['/itinerary']);
    };
    return CartConfirmComponent;
}());
CartConfirmComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'app-cart-confirm',
        template: __webpack_require__(343),
        styles: [__webpack_require__(327)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], CartConfirmComponent);

var _a;
//# sourceMappingURL=cart-confirm.component.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inscription_countries__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(13);
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
    function CartInscriptionComponent(dialogRef, data, router) {
        var _this = this;
        this.dialogRef = dialogRef;
        this.data = data;
        this.router = router;
        this.allCountries = __WEBPACK_IMPORTED_MODULE_2__inscription_countries__["a" /* Countries */].countryList;
        this.euCountries = __WEBPACK_IMPORTED_MODULE_2__inscription_countries__["a" /* Countries */].euCountries;
        this.checkContinent = function (country) {
            _this.isNotEuropeanCountry = _this.euCountries.indexOf(country) > 1;
        };
    }
    CartInscriptionComponent.prototype.ngOnInit = function () {
    };
    CartInscriptionComponent.prototype.confirm = function () {
        this.router.navigate(['confirmCart']);
    };
    return CartInscriptionComponent;
}());
CartInscriptionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'app-cart-inscription',
        template: __webpack_require__(344),
        styles: [__webpack_require__(328)]
    }),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["E" /* MD_DIALOG_DATA */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["w" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["w" /* MdDialogRef */]) === "function" && _a || Object, Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object])
], CartInscriptionComponent);

var _a, _b;
//# sourceMappingURL=cart-inscription.component.js.map

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(5);
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
    function CartComponent(dialogRef) {
        var _this = this;
        this.dialogRef = dialogRef;
        this.decreaseQty = function (product) {
            product.quantity--;
            _this.numberOfProducts--;
            _this.totalPrice -= product.price;
        };
        this.increaseQty = function (product) {
            product.quantity++;
            _this.numberOfProducts++;
            _this.totalPrice += product.price;
        };
        this.productIsDeleted = function (product) {
            return product.quantity < 1;
        };
    }
    CartComponent.prototype.ngOnInit = function () {
        var _this = this;
        var cartStr = window.localStorage.getItem('cart');
        this.cartProducts = JSON.parse(cartStr);
        console.log(this.cartProducts);
        var AllProducts = this.cartProducts.map(function (product) {
            var price = product.quantity * product.price;
            _this.totalPrice += price;
            return product.quantity;
        });
        AllProducts.forEach(function (quantity) {
            _this.numberOfProducts += quantity;
        });
    };
    return CartComponent;
}());
CartComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'app-cart',
        template: __webpack_require__(345),
        styles: [__webpack_require__(329)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["w" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["w" /* MdDialogRef */]) === "function" && _a || Object])
], CartComponent);

var _a;
//# sourceMappingURL=cart.component.js.map

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_bus_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_fetcher_service__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__inscription_inscription_component__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cart_inscription_cart_inscription_component__ = __webpack_require__(143);
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
    function DetailsComponent(dataBus, api, router, dialog) {
        var _this = this;
        this.dataBus = dataBus;
        this.api = api;
        this.router = router;
        this.dialog = dialog;
        this.mode = 'indeterminate';
        this.spinnerColor = 'accent';
        this.goToSignUp = function () {
            var selectedProduct = {
                'product': _this.product.label,
                'quantity': _this.selectedQty,
                'dynamicPrice': _this.product.dynamicPrice,
                'regularPrice': _this.product.regularPrice
            };
            var jsonified = JSON.stringify(selectedProduct);
            window.localStorage.setItem('selectedProduct', jsonified);
            var dialogRef = _this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__inscription_inscription_component__["a" /* InscriptionComponent */], {
                data: { product: selectedProduct },
                disableClose: true,
                width: '60%'
            });
        };
        this.addProductToCart = function () {
            var product = {
                label: _this.product.label,
                quantity: _this.selectedQty,
                price: _this.product.price,
                image: _this.product.productBigImage
            };
            var numberOfItemsInCart = 0;
            for (var i = 0; i < product.quantity; i++) {
                numberOfItemsInCart++;
            }
            _this.cartProducts.push(product);
            _this.dataBus.setNewCartProduct(_this.cartProducts);
            _this.dataBus.setNumberOfItemsInCart(numberOfItemsInCart);
            var strCart = JSON.stringify(_this.cartProducts);
            window.localStorage.setItem('cart', strCart);
            window.localStorage.setItem('numberOfItemsInCart', JSON.stringify(numberOfItemsInCart));
        };
        this.contentHasLoaded = false;
        this.prices = [];
        this.quantities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        this.selectedQty = 1;
    }
    DetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var localStorageUrl = window.localStorage.getItem('currentProductUrl');
        this.dataBus.currentProduct.subscribe(function (res) {
            var UrlToCall = (localStorageUrl !== 'undefined') ? localStorageUrl : res.url;
            _this.api.getProductDetails(UrlToCall).subscribe(function (product) {
                _this.product = product[0];
                _this.product.price = parseInt(_this.product.price.replace('€', ''), 0);
                _this.product.dynamicPrice = _this.product.price * _this.selectedQty;
                _this.product.regularPrice = _this.product.price;
                product.forEach(function (prod) {
                    var PriceObj = { 'price': prod.price, 'label': prod.label };
                    _this.prices.push(PriceObj);
                    console.log(PriceObj);
                });
                _this.selectedVolume = _this.prices[0].price;
                _this.multipleVolumes = (_this.prices.length > 1) ? true : false;
                _this.contentHasLoaded = true;
            });
        });
        this.dataBus.cartProducts.subscribe(function (res) {
            _this.cartProducts = res;
            console.log(res);
        });
    };
    DetailsComponent.prototype.updateValue = function (qty) {
        this.product.dynamicPrice = this.product.price * qty;
        this.product.regularPrice = this.product.dynamicPrice;
    };
    DetailsComponent.prototype.updateVolumePrice = function (price) {
        this.product.dynamicPrice = price * this.selectedQty;
        this.product.price = price;
        this.product.regularPrice = price;
    };
    DetailsComponent.prototype.bookInShop = function () {
        var selectedProduct = {
            'product': this.product.label,
            'quantity': this.selectedQty,
            'dynamicPrice': this.product.dynamicPrice,
            'regularPrice': this.product.regularPrice
        };
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__cart_inscription_cart_inscription_component__["a" /* CartInscriptionComponent */], {
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
        template: __webpack_require__(346),
        styles: [__webpack_require__(330)],
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_fetcher_service__["a" /* FetcherService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_bus_service__["a" /* DataBusService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_data_bus_service__["a" /* DataBusService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_fetcher_service__["a" /* FetcherService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_fetcher_service__["a" /* FetcherService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["v" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["v" /* MdDialog */]) === "function" && _d || Object])
], DetailsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=details.component.js.map

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(13);
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
    };
    EcranVeilleComponent.prototype.goToLanguage = function () {
        this.router.navigate(['/language']);
    };
    return EcranVeilleComponent;
}());
EcranVeilleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'app-ecran-veille',
        template: __webpack_require__(347),
        styles: [__webpack_require__(331)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], EcranVeilleComponent);

var _a;
//# sourceMappingURL=ecran-veille.component.js.map

/***/ }),

/***/ 147:
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

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(13);
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
        template: __webpack_require__(349),
        styles: [__webpack_require__(333)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], ItineraryComponent);

var _a;
//# sourceMappingURL=itinerary.component.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(13);
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
                    localStorage.setItem('language', 'US');
                    break;
                case 'FR':
                    localStorage.setItem('language', 'FR');
                    break;
                case 'ES':
                    localStorage.setItem('language', 'ES');
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
        template: __webpack_require__(350),
        styles: [__webpack_require__(334)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], LanguageComponent);

var _a;
//# sourceMappingURL=language.component.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_fetcher_service__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_bus_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_startWith__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
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
    function ParfumsComponent(api, dataBus, router) {
        var _this = this;
        this.api = api;
        this.dataBus = dataBus;
        this.router = router;
        this.getDetails = function (product) {
            _this.dataBus.setNewProduct(product);
            _this.router.navigate(['/details']);
        };
        this.hasNoUpdatedUrl = function (url) {
            return url.includes('https');
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
    ParfumsComponent.prototype.fetchParfums = function () {
        var _this = this;
        this.api.getParfums().subscribe(function (res) {
            _this.brands = Array.from(new Set(res.map(function (parfum) { return parfum.brand; }))).slice();
            console.log(_this.brands);
            _this.bigArr = res;
            var sub = res.slice(0, 200);
            _this.allParfums = sub;
        });
    };
    return ParfumsComponent;
}());
ParfumsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'app-parfums',
        template: __webpack_require__(351),
        styles: [__webpack_require__(335)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_fetcher_service__["a" /* FetcherService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_fetcher_service__["a" /* FetcherService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_fetcher_service__["a" /* FetcherService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_data_bus_service__["a" /* DataBusService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_data_bus_service__["a" /* DataBusService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], ParfumsComponent);

var _a, _b, _c;
//# sourceMappingURL=parfums.component.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(13);
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
        template: __webpack_require__(352),
        styles: [__webpack_require__(336)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], PresentationComponent);

var _a;
//# sourceMappingURL=presentation.component.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_bus_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(172);
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
            console.log('do');
            return res;
        }, function (error) {
            __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(error);
        })
            .finally(function () {
            console.log('finally');
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

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(38);
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

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
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
    function SuccessPaymentComponent() {
    }
    SuccessPaymentComponent.prototype.ngOnInit = function () {
    };
    return SuccessPaymentComponent;
}());
SuccessPaymentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'app-success-payment',
        template: __webpack_require__(353),
        styles: [__webpack_require__(337)]
    }),
    __metadata("design:paramtypes", [])
], SuccessPaymentComponent);

//# sourceMappingURL=success-payment.component.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(13);
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
    function TuktukComponent(router) {
        var _this = this;
        this.router = router;
        this.openingHours = [];
        this.travelers = [];
        this.populateHoursArray = function () {
            for (var i = 9; i < 19; i++) {
                _this.openingHours.push(i);
            }
        };
        this.populateTravelers = function () {
            for (var i = 1; i < 7; i++) {
                _this.travelers.push(i);
            }
        };
        this.generateTicketId = function () {
            _this.ticketId = Math.floor(1000 + Math.random() * 9000);
        };
        this.bookTuk = function () {
            _this.generateTicketId();
        };
    }
    TuktukComponent.prototype.ngOnInit = function () {
        this.populateHoursArray();
        this.populateTravelers();
    };
    TuktukComponent.prototype.goBack = function () {
        this.router.navigate(['/presentation']);
    };
    return TuktukComponent;
}());
TuktukComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'app-tuktuk',
        template: __webpack_require__(354),
        styles: [__webpack_require__(338)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], TuktukComponent);

var _a;
//# sourceMappingURL=tuktuk.component.js.map

/***/ }),

/***/ 156:
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
    stripeKey: 'pk_test_gVadyNQMPuAqdaTeI3ZZzMGc',
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 216:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 216;


/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(156);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 266:
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

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_bus_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cart_cart_component__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(13);
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
            console.log(_this.router.url);
            var bannedUrl = ['/language', '/presentation', '/tuktuk', '/itinerary', '/ecranVeille'];
            console.log(bannedUrl.indexOf(_this.router.url));
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
        this.dataBus.numberOfItemsInCart.subscribe(function (number) {
            var numberOfItemsFromLS = JSON.parse(window.localStorage.getItem('numberOfItemsInCart'));
            _this.cartItems = (numberOfItemsFromLS === 0) ? number : numberOfItemsFromLS;
        });
    }
    AppComponent.prototype.showCart = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__cart_cart_component__["a" /* CartComponent */]);
        dialogRef.afterClosed().subscribe(function (result) {
            console.log(result);
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(341),
        styles: [__webpack_require__(325)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_bus_service__["a" /* DataBusService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_data_bus_service__["a" /* DataBusService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["v" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["v" /* MdDialog */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _c || Object])
], AppComponent);

var _a, _b, _c;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_http_service__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_payment_service__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__covalent_core__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser_animations__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__routing__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__parfums_parfums_component__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__details_details_component__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_data_bus_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_fetcher_service__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__inscription_inscription_component__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__cart_cart_component__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__language_language_component__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__success_payment_success_payment_component__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__presentation_presentation_component__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__tuktuk_tuktuk_component__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__itinerary_itinerary_component__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__book_in_shop_book_in_shop_component__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ecran_veille_ecran_veille_component__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__cart_inscription_cart_inscription_component__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__cart_confirm_cart_confirm_component__ = __webpack_require__(142);
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
            __WEBPACK_IMPORTED_MODULE_11__parfums_parfums_component__["a" /* ParfumsComponent */],
            __WEBPACK_IMPORTED_MODULE_12__details_details_component__["a" /* DetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_15__inscription_inscription_component__["a" /* InscriptionComponent */],
            __WEBPACK_IMPORTED_MODULE_16__cart_cart_component__["a" /* CartComponent */],
            __WEBPACK_IMPORTED_MODULE_17__language_language_component__["a" /* LanguageComponent */],
            __WEBPACK_IMPORTED_MODULE_18__success_payment_success_payment_component__["a" /* SuccessPaymentComponent */],
            __WEBPACK_IMPORTED_MODULE_19__presentation_presentation_component__["a" /* PresentationComponent */],
            __WEBPACK_IMPORTED_MODULE_20__tuktuk_tuktuk_component__["a" /* TuktukComponent */],
            __WEBPACK_IMPORTED_MODULE_21__itinerary_itinerary_component__["a" /* ItineraryComponent */],
            __WEBPACK_IMPORTED_MODULE_22__book_in_shop_book_in_shop_component__["a" /* BookInShopComponent */],
            __WEBPACK_IMPORTED_MODULE_23__ecran_veille_ecran_veille_component__["a" /* EcranVeilleComponent */],
            __WEBPACK_IMPORTED_MODULE_24__cart_inscription_cart_inscription_component__["a" /* CartInscriptionComponent */],
            __WEBPACK_IMPORTED_MODULE_25__cart_confirm_cart_confirm_component__["a" /* CartConfirmComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_10__routing__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_8__covalent_core__["a" /* CovalentLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MdSelectModule */],
            __WEBPACK_IMPORTED_MODULE_8__covalent_core__["b" /* CovalentStepsModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["c" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["d" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["e" /* MdDialogModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["f" /* MdProgressBarModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["g" /* MdProgressSpinnerModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["h" /* MdListModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_13__services_data_bus_service__["a" /* DataBusService */], __WEBPACK_IMPORTED_MODULE_14__services_fetcher_service__["a" /* FetcherService */], __WEBPACK_IMPORTED_MODULE_6__services_http_service__["a" /* CustomHttpService */], __WEBPACK_IMPORTED_MODULE_7__services_payment_service__["a" /* PaymentService */]],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_16__cart_cart_component__["a" /* CartComponent */], __WEBPACK_IMPORTED_MODULE_15__inscription_inscription_component__["a" /* InscriptionComponent */], __WEBPACK_IMPORTED_MODULE_24__cart_inscription_cart_inscription_component__["a" /* CartInscriptionComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__parfums_parfums_component__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__details_details_component__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__inscription_inscription_component__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__language_language_component__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__success_payment_success_payment_component__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__presentation_presentation_component__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tuktuk_tuktuk_component__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__itinerary_itinerary_component__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__book_in_shop_book_in_shop_component__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ecran_veille_ecran_veille_component__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__cart_confirm_cart_confirm_component__ = __webpack_require__(142);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var appRoutes = [
    { path: '', redirectTo: 'ecranVeille', pathMatch: 'full' },
    { path: 'parfums', component: __WEBPACK_IMPORTED_MODULE_2__parfums_parfums_component__["a" /* ParfumsComponent */] },
    { path: 'presentation', component: __WEBPACK_IMPORTED_MODULE_7__presentation_presentation_component__["a" /* PresentationComponent */] },
    { path: 'tuktuk', component: __WEBPACK_IMPORTED_MODULE_8__tuktuk_tuktuk_component__["a" /* TuktukComponent */] },
    { path: 'details', component: __WEBPACK_IMPORTED_MODULE_3__details_details_component__["a" /* DetailsComponent */] },
    { path: 'inscription', component: __WEBPACK_IMPORTED_MODULE_4__inscription_inscription_component__["a" /* InscriptionComponent */] },
    { path: 'language', component: __WEBPACK_IMPORTED_MODULE_5__language_language_component__["a" /* LanguageComponent */] },
    { path: 'valid_payment', component: __WEBPACK_IMPORTED_MODULE_6__success_payment_success_payment_component__["a" /* SuccessPaymentComponent */] },
    { path: 'itinerary', component: __WEBPACK_IMPORTED_MODULE_9__itinerary_itinerary_component__["a" /* ItineraryComponent */] },
    { path: 'bookInShop', component: __WEBPACK_IMPORTED_MODULE_10__book_in_shop_book_in_shop_component__["a" /* BookInShopComponent */] },
    { path: 'ecranVeille', component: __WEBPACK_IMPORTED_MODULE_11__ecran_veille_ecran_veille_component__["a" /* EcranVeilleComponent */] },
    { path: 'confirmCart', component: __WEBPACK_IMPORTED_MODULE_12__cart_confirm_cart_confirm_component__["a" /* CartConfirmComponent */] }
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

/***/ 325:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, ".topBar{\n  background-color: #333;\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n.bs-link{\n  color: white;\n  text-underline: none !important;\n}\n.bs-link:focus{\n  text-underline: none !important;\n}\n.page-active{\n  color: #E6007E;\n  text-underline: none !important;\n}\n.page-active:focus{\n  text-underline: none !important;\n}\n.cart-items{\n  color: #E6007E;\n  font-weight: 700;\n  margin-bottom: 0 !important;\n}\n.cart-icon{\n  max-height: 25px !important;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 326:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 327:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 328:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, "#form {\n  background-color: white;\n  border-radius: 4px;\n  padding: 2em;\n  box-shadow: 5px 5px 5px lightgray;\n  border: solid 2px lightpink;\n}\n\n#submit-btn {\n  background-color: #E6007E;\n  color: white;\n}\n\nlabel {\n  color: #E6007E;\n}\n\ninput {\n  color: lightslategray;\n}\n\n.disabled {\n  background-color: #999999 !important;\n}\n\n#card-element {\n  margin-top: 2em;\n  margin-bottom: 1em;\n}\n\n#card-errors {\n  color: red;\n}\n\n.price {\n  font-size: 150px;\n}\n\n.spinner {\n  margin: 50px;\n  height: 28px;\n  width: 28px;\n  -webkit-animation: rotate 0.8s infinite linear;\n          animation: rotate 0.8s infinite linear;\n  border: 8px solid lightcoral;\n  border-right-color: transparent;\n  border-radius: 50%;\n}\n\n@-webkit-keyframes rotate {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes rotate {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n.price-alert {\n  color: #009688;\n  margin-bottom: 0.7em;\n  font-weight: 600;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 329:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, ".delete-btn:focus{\n  outline: none !important;\n}\n.delete-btn{\n  background-color: #E6007E !important;\n  color: white !important;\n  margin-left: 1em;\n}\n#cart-summary{\n  color: #999999;\n  text-align: center;\n  margin-top: 0.7em;\n  margin-bottom: 1.3em;\n}\n.add-btn{\n  color: white !important;\n  margin-left: 1em;\n  background-color: #333;\n}\n.add-btn:focus{\n  outline: none;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 330:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, "\n#product-big-img {\n  display: block;\n  width: 90% !important;\n  height: auto !important;\n}\n\n.main-holder {\n  width: 70%;\n}\n\n#brand-img {\n  margin: 0 auto;\n}\n\n#label, #description {\n  margin-top: 1em !important;\n  margin-bottom: 1em !important;\n}\n\n.cart-btn{\n  background-color: #333 !important;\n  color: white !important;\n  border: solid 2px #333;\n  margin-bottom: 10px;\n}\n.cart-btn:hover{\n  background-color: #DC6695 !important;\n  color: white !important;\n  border: solid 2px #DC6695 !important;\n}\n.store-btn{\n  background-color: white;\n  color: #DC6695;\n  border: solid 2px #DC6695;\n  margin-bottom: 10px;\n}\n\n.store-btn:hover{\n  background-color: #333;\n  color: white;\n  border: solid 2px #333;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 331:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, "#tuk-btn{\n  height: 50px;\n  font-size: 20px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 332:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, "#form{\n  background-color: white;\n  border-radius: 4px;\n  padding: 2em;\n  box-shadow: 5px 5px 5px lightgray;\n  border: solid 2px lightpink;\n}\n#submit-btn{\n  background-color: #E6007E;\n  color: white;\n}\nlabel{\n  color: #E6007E;\n}\ninput{\n  color: lightslategray;\n}\n.disabled{\n  background-color: #999999 !important;\n}\n#card-element{\n  margin-top: 2em;\n  margin-bottom: 1em;\n}\n#card-errors{\n  color: red;\n}\n.price{\n  font-size: 150px;\n}\n\n\n.spinner {\n  margin: 50px;\n  height: 28px;\n  width: 28px;\n  -webkit-animation: rotate 0.8s infinite linear;\n          animation: rotate 0.8s infinite linear;\n  border: 8px solid lightcoral;\n  border-right-color: transparent;\n  border-radius: 50%;\n}\n\n@-webkit-keyframes rotate {\n  0%    { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\n  100%  { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\n}\n\n@keyframes rotate {\n  0%    { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\n  100%  { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 333:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, ".example-header-image {\n  background-image: url(" + __webpack_require__(609) + ");\n  background-size: cover;\n}\n.icon-direction{\n  height: 20px;\n  margin-right: 15px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 334:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, "#language-wrapper {\n  height: 100vh;\n  width: 100vh;\n}\n\n#us {\n  background: url(" + __webpack_require__(340) + ");\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 335:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, ".img-holder{\n  width: 120px;\n  height: 120px;\n  margin: 0 auto;\n}\n.cart-btn{\n  background-color: #333 !important;\n  color: white !important;\n  border: solid 2px #333;\n  margin-bottom: 10px;\n}\n.cart-btn:hover{\n  background-color: #DC6695 !important;\n  color: white !important;\n  border: solid 2px #DC6695 !important;\n}\n.store-btn{\n  background-color: white;\n  color: #DC6695;\n  border: solid 2px #DC6695;\n  margin-bottom: 10px;\n}\n\n.store-btn:hover{\n  background-color: #333;\n  color: white;\n  border: solid 2px #333;\n}\n.product-card{\n  width: 320px;\n  height: 360px !important;\n}\n\n.title{\n  font-weight: 700;\n}\n.desc{\n  color: #999;\n}\n\n.action-center{\n  position: absolute;\n  bottom: 10px;\n}\n#parfumBrands{\n  list-style-type: none;\n  margin-top: 5px;\n  margin-right: 2em;\n}\n#parfumBrands li{\n  margin-bottom: 1em;\n  cursor: pointer;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 336:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, "#tuktuk-btn{\n  background-color: #FFB04C;\n  width: 40px;\n  color: white;\n}\n.wrapper{\n  margin-top: 5em !important;\n}\n#options{\n  margin-top: 3em;\n}\n#classic{\n  margin-right: 3em;\n  height: 675px;\n}\n#shop-here-btn{\n  background-color: #303E48;\n  color: white;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 337:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, ".conf{\n  margin-top: 2em;\n  font-weight: 400 !important;\n  color: #333333;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 338:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 340:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "US.87de9e126782b9c98185.svg";

/***/ }),

/***/ 341:
/***/ (function(module, exports) {

module.exports = "<md-progress-bar mode=\"indeterminate\" color=\"accent\" *ngIf=\"dataIsLoading\"></md-progress-bar>\n\n<div *ngIf=\"isNotStoreView()\">\n  <div layout=\"row\" class=\"topBar mb-5\" layout-align=\"space-between center\">\n    <div>\n      <a class=\"ml-5 mr-3 bs-link\" routerLink=\"parfums\" routerLinkActive=\"page-active\">Parfums\n      </a>\n    </div>\n    <div class=\"mr-4\" layout=\"row\" (click)=\"showCart()\">\n      <img class=\"cart-icon\" src=\"assets/images/cart.svg\">\n      <p class=\"cart-items ml-2\">{{cartItems}} items</p>\n    </div>\n  </div>\n\n  <div layout=\"row\" layout-align=\"center center\" class=\"mb-5\">\n    <img src=\"assets/images/logo.png\">\n  </div>\n</div>\n<router-outlet></router-outlet>\n\n\n\n"

/***/ }),

/***/ 342:
/***/ (function(module, exports) {

module.exports = "<p>\n  book-in-shop works!\n</p>\n"

/***/ }),

/***/ 343:
/***/ (function(module, exports) {

module.exports = "<div layout=\"column\" layout-align=\"center center\">\n  <div class=\"wrapper-with-shadow\" style=\"width: 500px\" layout=\"column\" layout-align=\"center center\">\n    <img src=\"assets/images/valid_payment.svg\" style=\"height: 60px\">\n    <p class=\"mt-3\" style=\"text-align: center\">Your Order has been successfully placed, here is your order id, keep it\n      to show it in the store</p>\n    <p>Order number: <strong>{{ticketId}}</strong></p>\n    <div layout=\"row\" layout-align=\"space-between center\" class=\"mt-3\">\n      <button md-raised-button (click)=\"goBackToMenu()\" color=\"warn\" class=\"mr-2\">\n        Cancel, Go back to main menu\n      </button>\n      <button md-raised-button (click)=\"seeItinerary()\" color=\"primary\">\n        See Itinerary\n      </button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 344:
/***/ (function(module, exports) {

module.exports = "<h1 md-dialog-title>{{data.product.product}}</h1>\n<div md-dialog-content>\n\n\n  <p class=\"price-alert\" *ngIf=\"!isNotEuropeanCountry\">You have a reduction</p>\n  <p>Price: {{data.product.dynamicPrice | number:'1.0-2'}} €</p>\n  <form #form=\"ngForm\" id=\"form\">\n    <div class=\"form-group\">\n      <label for=\"firstName\">First Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"firstName\" aria-describedby=\"firstName\"\n             placeholder=\"First Name\" [(ngModel)]=\"firstName\" required name=\"firstName\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"lastName\">Last Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"lastName\" aria-describedby=\"lastName\"\n             placeholder=\"Last Name\" [(ngModel)]=\"lastName\" required name=\"lastName\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"email\">Email address</label>\n      <input type=\"email\" class=\"form-control\" id=\"email\" aria-describedby=\"email\"\n             placeholder=\"Email\" [(ngModel)]=\"email\" required name=\"email\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"passport\">Passport Number</label>\n      <input type=\"text\" class=\"form-control\" id=\"passport\" aria-describedby=\"passport\"\n             placeholder=\"Passport Number\" [(ngModel)]=\"passportNumber\" required name=\"passport\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"sel1\">Select list:</label>\n      <select class=\"form-control\" id=\"sel1\" name=\"sel1\" [(ngModel)]=\"country\" (change)=\"checkContinent(country)\">\n        <option *ngFor=\"let country of allCountries\">{{country}}</option>\n      </select>\n    </div>\n  </form>\n</div>\n<div md-dialog-actions layout=\"row\" layout-align=\"center center\">\n  <button md-raised-button [md-dialog-close] class=\"mr-3\">Cancel</button>\n  <button md-raised-button color=\"primary\" (click)=\"confirm()\">Confirm</button>\n</div>\n\n"

/***/ }),

/***/ 345:
/***/ (function(module, exports) {

module.exports = "<md-list>\n  <h3 id=\"cart-summary\">{{numberOfProducts}} items</h3>\n  <md-list-item *ngFor=\"let prod of cartProducts\">\n    <img md-list-avatar src=\"{{prod.image}}\">\n    <h3 md-line>{{prod.quantity}} x {{prod.label}} </h3>\n    <button md-icon-button class=\"delete-btn\" (click)=\"decreaseQty(prod)\" [disabled] = \"productIsDeleted(prod)\">-</button>\n    <button md-icon-button class=\"add-btn\" (click)=\"increaseQty(prod)\">+</button>\n  </md-list-item>\n  <div layout=\"row\" layout-align=\"center center\">\n    <h3>{{totalPrice | number:'1.0-2'}} €</h3>\n  </div>\n</md-list>\n"

/***/ }),

/***/ 346:
/***/ (function(module, exports) {

module.exports = "<div layout=\"row\" layout-align=\"center center\">\n  <div *ngIf=\"!contentHasLoaded; else productDetail\">\n    <md-progress-spinner\n      class=\"example-margin\"\n      [color]=\"spinnerColor\"\n      [mode]=\"mode\">\n    </md-progress-spinner>\n  </div>\n  <ng-template #productDetail layout=\"row\" class=\"mt-5 main-holder\">\n    <div flex=\"45\">\n      <img src=\"{{product.productBigImage}}\" id=\"product-big-img\">\n    </div>\n    <div layout=\"column\" layout-align=\"center\" flex=\"50\">\n      <img src=\"{{product.featuredImage}}\" id=\"brand-img\">\n      <h4 id=\"label\">{{product.label}}</h4>\n      <p id=\"description\">{{product.fullDescription}}</p>\n      <div layout=\"column\" class=\"mt-5\">\n        <div layout=\"row\" layout-align=\"center center\">\n          <p class=\"mb-0 mr-5 price\" flex=\"15\">{{product.dynamicPrice |  number:'2.1-5'}} €</p>\n          <md-select placeholder=\"Quantité\" [(ngModel)]=\"selectedVolume\" color=\"accent\" class=\"ml-2\"\n                     *ngIf=\"multipleVolumes\" (change)=\"updateVolumePrice(selectedVolume)\" flex>\n            <md-option *ngFor=\"let volume of prices\" [value]=\"volume.price\">\n              {{volume.label}}\n            </md-option>\n          </md-select>\n          <md-select placeholder=\"Quantité\" [(ngModel)]=\"selectedQty\" color=\"accent\" class=\"ml-5\"\n                     (change)=\"updateValue(selectedQty)\" flex=\"20\">\n            <md-option *ngFor=\"let qty of quantities\" [value]=\"qty\">\n              {{qty}}\n            </md-option>\n          </md-select>\n        </div>\n        <div layout=\"row\" layout-align=\"center center\" class=\"mt-5\">\n          <button md-raised-button class=\"cart-btn mr-2\" (click)=\"bookInShop()\">Book in Shop</button>\n          <button md-raised-button class=\"store-btn mr-2\" (click)=\"goToSignUp()\">Buy Now</button>\n          <button md-raised-button class=\"cart-btn ml-2\" (click)=\"addProductToCart()\">Add To Cart</button>\n        </div>\n      </div>\n    </div>\n  </ng-template>\n</div>\n"

/***/ }),

/***/ 347:
/***/ (function(module, exports) {

module.exports = "<div layout=\"column\" layout-align=\"center center\" style=\"height: 100%\">\n  <img src=\"assets/img/tuktuk.svg\">\n  <button id=\"tuk-btn\" md-raised-button (click)=\"goToLanguage()\" color=\"warn\" class=\"mt-5\">Click Here and Book your trip</button>\n</div>\n"

/***/ }),

/***/ 348:
/***/ (function(module, exports) {

module.exports = "<h1 md-dialog-title>{{data.product.product}}</h1>\n<div md-dialog-content>\n  <p>Price: {{data.product.dynamicPrice | number:'1.0-2'}} €</p>\n  <form #form=\"ngForm\" id=\"form\">\n    <div class=\"form-group\">\n      <label for=\"firstName\">First Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"firstName\" aria-describedby=\"firstName\"\n             placeholder=\"First Name\" [(ngModel)]=\"firstName\" required name=\"firstName\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"lastName\">Last Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"lastName\" aria-describedby=\"lastName\"\n             placeholder=\"Last Name\" [(ngModel)]=\"lastName\" required name=\"lastName\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"email\">Email address</label>\n      <input type=\"email\" class=\"form-control\" id=\"email\" aria-describedby=\"email\"\n             placeholder=\"Email\" [(ngModel)]=\"email\" required name=\"email\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"passport\">Passport Number</label>\n      <input type=\"text\" class=\"form-control\" id=\"passport\" aria-describedby=\"passport\"\n             placeholder=\"Passport Number\" [(ngModel)]=\"passportNumber\" required name=\"passport\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"sel1\">Select list:</label>\n      <select class=\"form-control\" id=\"sel1\" name=\"sel1\" [(ngModel)]=\"country\" (change)=\"checkContinent(country)\">\n        <option *ngFor=\"let country of allCountries\">{{country}}</option>\n      </select>\n    </div>\n    <div>\n      <div id=\"card-element\"></div>\n      <div id=\"card-errors\"></div>\n    </div>\n\n\n  </form>\n</div>\n<div md-dialog-actions layout=\"row\" layout-align=\"center center\">\n  <div layout=\"row\" *ngIf=\"notPaying; else payingLoader\">\n    <button md-raised-button type=\"submit\" id=\"submit-btn\" [disabled]=\"!form.valid\" [class.disabled]=\"!form.valid\"\n            (click)=\"handlePayment()\">\n      PAY\n    </button>\n    <button md-button [md-dialog-close] class=\"ml-3\">Cancel</button>\n  </div>\n  <ng-template #payingLoader layout=\"row\" layout-align=\"center center\">\n    <div class=\"spinner\"></div>\n  </ng-template>\n\n</div>\n"

/***/ }),

/***/ 349:
/***/ (function(module, exports) {

module.exports = "<div style=\"height: 100%\" layout=\"column\" layout-align=\"center center\">\n  <div layout=\"row\" layout-align=\"space-between center\">\n    <md-card style=\"width: 626px\">\n      <md-card-header>\n        <div md-card-avatar class=\"example-header-image\"></div>\n        <md-card-title>Beauty Success Shop</md-card-title>\n        <md-card-subtitle>Directions By Foot</md-card-subtitle>\n      </md-card-header>\n      <img md-card-image src=\"assets/images/map.png\" alt=\"Photo of map\">\n      <md-card-content>\n        <div layout=\"row\">\n          <img src=\"assets/img/navigation/up.svg\" class=\"icon-direction\">\n          <p>Prendre la direction nord sur Rue Cambronne</p>\n        </div>\n        <div layout=\"row\">\n          <img src=\"assets/img/navigation/left.svg\" class=\"icon-direction\">\n          <p>Tourner à gauche pour rester sur Rue Cambronne</p>\n        </div>\n        <div layout=\"row\">\n          <img src=\"assets/img/navigation/round.svg\" class=\"icon-direction\">\n          <p>Au rond-point, prendre la 3e sortie sur Boulevard Garibaldi</p>\n        </div>\n        <div layout=\"row\">\n          <img src=\"assets/img/navigation/left.svg\" class=\"icon-direction\">\n          <p>Prendre légèrement à gauche sur Place Henri Queuille</p>\n        </div>\n        <div layout=\"row\">\n          <img src=\"assets/img/navigation/up.svg\" class=\"icon-direction\">\n          <p>Continuer sur Rue de Sèvres</p>\n        </div>\n        <div layout=\"row\">\n          <img src=\"assets/img/navigation/left.svg\" class=\"icon-direction\">\n          <p>Prendre à gauche sur Boulevard des Invalides<br>\n            Votre destination se trouvera sur la droite.</p>\n        </div>\n      </md-card-content>\n      <md-card-actions>\n        <div layout=\"align\" layout-align=\"center center\">\n          <button md-raised-button color=\"accent\">PRINT</button>\n          <button md-raised-button (click)=\"goToMenu()\" color=\"primary\">GO BACK TO MENU</button>\n        </div>\n      </md-card-actions>\n    </md-card>\n    <md-card style=\"width: 626px\">\n      <md-card-header>\n        <div md-card-avatar class=\"example-header-image\"></div>\n        <md-card-title>Beauty Success Shop</md-card-title>\n        <md-card-subtitle>Directions By Subway</md-card-subtitle>\n      </md-card-header>\n      <img md-card-image src=\"assets/images/map.png\" alt=\"Photo of map\">\n      <md-card-content>\n        <div layout=\"row\">\n          <img src=\"assets/img/navigation/up.svg\" class=\"icon-direction\">\n          <p>Prendre la direction nord sur Rue Cambronne</p>\n        </div>\n        <div layout=\"row\">\n          <img src=\"assets/img/navigation/left.svg\" class=\"icon-direction\">\n          <p>Tourner à gauche pour rester sur Rue Cambronne</p>\n        </div>\n        <div layout=\"row\">\n          <img src=\"assets/img/navigation/round.svg\" class=\"icon-direction\">\n          <p>Au rond-point, prendre la 3e sortie sur Boulevard Garibaldi</p>\n        </div>\n        <div layout=\"row\">\n          <img src=\"assets/img/navigation/left.svg\" class=\"icon-direction\">\n          <p>Prendre légèrement à gauche sur Place Henri Queuille</p>\n        </div>\n        <div layout=\"row\">\n          <img src=\"assets/img/navigation/up.svg\" class=\"icon-direction\">\n          <p>Continuer sur Rue de Sèvres</p>\n        </div>\n        <div layout=\"row\">\n          <img src=\"assets/img/navigation/left.svg\" class=\"icon-direction\">\n          <p>Prendre à gauche sur Boulevard des Invalides<br>\n            Votre destination se trouvera sur la droite.</p>\n        </div>\n      </md-card-content>\n      <md-card-actions>\n        <div layout=\"align\" layout-align=\"center center\">\n          <button md-raised-button color=\"accent\">PRINT</button>\n          <button md-raised-button (click)=\"goToMenu()\" color=\"primary\">GO BACK TO MENU</button>\n        </div>\n      </md-card-actions>\n    </md-card>\n  </div>\n</div>\n"

/***/ }),

/***/ 350:
/***/ (function(module, exports) {

module.exports = "<div layout=\"column\" layout-align=\"center center\" style=\"height: 100%\">\n  <h3 class=\"mb-3\">Pick a Language</h3>\n  <div layout=\"row\" layout-align=\"center center\">\n    <button md-raised-button color=\"primary\" class=\"mr-2\" (click)=\"setLanguage('US')\">US</button>\n    <button md-raised-button color=\"primary\" class=\"mr-2\" (click)=\"setLanguage('FR')\">FR</button>\n    <button md-raised-button color=\"primary\" (click)=\"setLanguage('ES')\">ES</button>\n  </div>\n</div>\n"

/***/ }),

/***/ 351:
/***/ (function(module, exports) {

module.exports = "<div layout=\"row\" layout-align=\"space-between start\">\n  <ul id=\"parfumBrands\">\n    <li *ngFor=\"let brand of brands\" (click)=\"filterParfums(brand)\">{{brand}}</li>\n  </ul>\n  <div layout=\"row\" layout-wrap layout-align=\"start start\" style=\"width: 80%\">\n    <div *ngFor=\"let parfum of allParfums\">\n      <md-card class=\"product-card\" *ngIf=\"!hasNoUpdatedUrl(parfum.image)\">\n        <md-card-header>\n          <md-card-title class=\"title\">{{parfum.brand}}</md-card-title>\n          <md-card-subtitle class=\"desc\">{{parfum.name}}</md-card-subtitle>\n        </md-card-header>\n        <div class=\"img-holder\">\n          <img md-card-image src=\"assets/{{parfum.image}}\">\n        </div>\n        <md-card-content>\n          <p class=\"price\">\n            {{parfum.price}}\n          </p>\n        </md-card-content>\n        <md-card-footer layout=\"row\" layout-align=\"center center\">\n          <button md-button class=\"cart-btn\" (click)=\"getDetails(parfum)\">See More</button>\n        </md-card-footer>\n      </md-card>\n    </div>\n  </div>\n\n</div>\n\n\n"

/***/ }),

/***/ 352:
/***/ (function(module, exports) {

module.exports = "\n<div layout=\"row\" layout-align=\"space-around center\" class=\" wrapper\">\n  <div id=\"classic\" flex=\"45\" layout=\"column\" layout-align=\"center center\">\n    <img src=\"assets/img/options.svg\">\n    <p class=\"mt-5\">When shopping through this computer, you will have access to a wide variety of products, you may\n      either :</p>\n    <ul id=\"options\">\n      <li>Buy the products directly here via a secured payment using your credit card, your products will be shipped at\n        the hotel within 5 hours\n      </li>\n      <li>Order the items here and pick them up in the nearby store (500 meters)</li>\n    </ul>\n  </div>\n  <div class=\"tuktuk\" flex=\"45\" layout=\"column\" layout-align=\"center center\">\n    <img src=\"assets/img/tuktuk.svg\">\n    <p class=\"mt-5 mb-3\">Come as you are, our tuk tuk will give you a tour of the most beautiful monuments in Paris,\n      <strong>you'll\n        end the visit\n        by\n        our boutique</strong></p>\n  </div>\n</div>\n<div layout=\"row\" class=\"mt-5\" layout-align=\"space-around center\">\n  <button md-raised-button id=\"shop-here-btn\" (click)=\"shopHere()\">Shop Here</button>\n  <button id=\"tuktuk-btn\" md-raised-button (click)=\"orderTuk()\">TUKTUK</button>\n</div>\n"

/***/ }),

/***/ 353:
/***/ (function(module, exports) {

module.exports = "<div layout=\"column\" layout-align=\"center center\">\n  <img class=\"mt-5 mb-5\" src=\"assets/images/valid_payment.svg\">\n  <h3 class=\"conf\">Your payment has been successfully received, a driver will bring your article(s) by the end of the day..</h3>\n</div>\n"

/***/ }),

/***/ 354:
/***/ (function(module, exports) {

module.exports = "<div layout=\"column\" layout-align=\"center center\" style=\"height: 100%\">\n  <div class=\"wrapper-with-shadow\">\n    <div class=\"form-group mt-5\">\n      <label for=\"hours\">How many people will travel :</label>\n      <select class=\"form-control\" id=\"travelers\" [(ngModel)]=\"numberOfTravelers\">\n        <option *ngFor=\"let traveler of travelers\">{{traveler}}</option>\n      </select>\n      <p style=\"color: red\" *ngIf=\"numberOfTravelers\" class=\"mt-3\">\n        Warning: only adults above 16 years old are\n        allowed</p>\n      <label for=\"hours\">Pick an hour:</label>\n      <select class=\"form-control\" id=\"hours\" [(ngModel)]=\"selectedHour\">\n        <option *ngFor=\"let hour of openingHours\">{{hour}}</option>\n      </select>\n      <div layout=\"row\" layout-align=\"space-between center\" class=\"mt-3\">\n        <button md-raised-button color=\"accent\" (click)=\"goBack()\" class=\"mr-1\">Cancel, Go Back</button>\n        <button md-raised-button color=\"primary\" class=\"ml-1\" (click)=\"bookTuk()\" [disabled]=\"ticketId\">Order TUKTUK\n        </button>\n      </div>\n      <div class=\"mt-5\" *ngIf=\"ticketId\">\n        <p>Your tuktuk has been ordered<br> your <strong>confirmation number is {{ticketId}}</strong></p>\n        <p>He will pick you up at {{selectedHour}}H at the reception</p>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Models_product__ = __webpack_require__(266);
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
        var _this = this;
        this.setNumberOfItemsInCart = function (numberOfItems) {
            _this._numberOfItemsInCart.next(numberOfItems);
        };
        this._selectedProduct = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](new __WEBPACK_IMPORTED_MODULE_2__Models_product__["a" /* ProductModel */]());
        this._dataIsLoading = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](false);
        this._cartProducts = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this._numberOfItemsInCart = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](0);
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
    DataBusService.prototype.setNewCartProduct = function (product) {
        this._cartProducts.next(product);
    };
    Object.defineProperty(DataBusService.prototype, "cartProducts", {
        get: function () {
            return this._cartProducts.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataBusService.prototype, "numberOfItemsInCart", {
        get: function () {
            return this._numberOfItemsInCart.asObservable();
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

/***/ 609:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "logo.1f462d60eb701e7619e1.png";

/***/ }),

/***/ 611:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(217);


/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__countries__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_payment_service__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(13);
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
                'amount_spent': _this.data.product.dynamicPrice
            };
            _this.paymentSrv.createLead(lead).subscribe(function (res) {
                console.log(res);
            });
        };
        this.checkContinent = function (country) {
            console.log(_this.data.product);
            _this.isNotEuropeanCountry = _this.euCountries.indexOf(country) > 1;
            if (!_this.isNotEuropeanCountry) {
                _this.data.product.dynamicPrice = _this.data.product.regularPrice * 0.8;
            }
            else {
                _this.data.product.dynamicPrice = _this.data.product.regularPrice;
            }
        };
    }
    InscriptionComponent.prototype.ngAfterContentInit = function () {
        this.displayPayment();
    };
    InscriptionComponent.prototype.handlePayment = function () {
        this.submitted = true;
        this.submitPayment().then(function (status) { return console.log(status); });
        this.newLead();
    };
    return InscriptionComponent;
}());
InscriptionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'app-inscription',
        template: __webpack_require__(348),
        styles: [__webpack_require__(332)],
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_payment_service__["a" /* PaymentService */]]
    }),
    __param(2, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Inject */])(__WEBPACK_IMPORTED_MODULE_4__angular_material__["E" /* MD_DIALOG_DATA */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_payment_service__["a" /* PaymentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_payment_service__["a" /* PaymentService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["w" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["w" /* MdDialogRef */]) === "function" && _b || Object, Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === "function" && _c || Object])
], InscriptionComponent);

var _a, _b, _c;
//# sourceMappingURL=inscription.component.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_service__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(356);
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
    FetcherService.prototype.getParfums = function () {
        return this.http.get(this.parfums)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error, could not fetch parfums'); });
    };
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

/***/ })

},[611]);
//# sourceMappingURL=main.bundle.js.map