/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "currentDay": () => (/* binding */ currentDay),
/* harmony export */   "displayDataOnPage": () => (/* binding */ displayDataOnPage)
/* harmony export */ });
/* harmony import */ var _icons_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons.js */ "./src/icons.js");
/* harmony import */ var _weatherAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weatherAPI.js */ "./src/weatherAPI.js");
/* harmony import */ var _images_sunrise_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/sunrise.png */ "./src/images/sunrise.png");
/* harmony import */ var _images_sunset_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/sunset.png */ "./src/images/sunset.png");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var displayDataOnPage = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(e, geoPosition) {
    var _e$target, _e$target$;
    var weatherData, hourlyWeather, dataCoord, _weatherData, _hourlyWeather;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          if (!(((_e$target = e.target) === null || _e$target === void 0 ? void 0 : (_e$target$ = _e$target[0]) === null || _e$target$ === void 0 ? void 0 : _e$target$.value) === "")) {
            _context.next = 4;
            break;
          }
          return _context.abrupt("return");
        case 4:
          if (!(geoPosition !== undefined)) {
            _context.next = 14;
            break;
          }
          _context.next = 7;
          return (0,_weatherAPI_js__WEBPACK_IMPORTED_MODULE_1__.getCurrentWeather)(geoPosition);
        case 7:
          weatherData = _context.sent;
          _context.next = 10;
          return (0,_weatherAPI_js__WEBPACK_IMPORTED_MODULE_1__.getHourlyWeather)(geoPosition);
        case 10:
          hourlyWeather = _context.sent;
          weatherDataDisplay(weatherData, hourlyWeather);
          _context.next = 24;
          break;
        case 14:
          _context.next = 16;
          return (0,_weatherAPI_js__WEBPACK_IMPORTED_MODULE_1__.getCityCoordinates)(e);
        case 16:
          dataCoord = _context.sent;
          _context.next = 19;
          return (0,_weatherAPI_js__WEBPACK_IMPORTED_MODULE_1__.getCurrentWeather)(dataCoord);
        case 19:
          _weatherData = _context.sent;
          _context.next = 22;
          return (0,_weatherAPI_js__WEBPACK_IMPORTED_MODULE_1__.getHourlyWeather)(dataCoord);
        case 22:
          _hourlyWeather = _context.sent;
          weatherDataDisplay(_weatherData, _hourlyWeather);
        case 24:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function displayDataOnPage(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
function weatherDataDisplay(weatherData, hourlyWeather) {
  clearDataFromPage();
  displayCityNameAndCountry(weatherData);
  displayCurrentTemp(weatherData);
  displayWeatherDescription(weatherData);
  displayIcon(weatherData);
  weatherDetails(weatherData);
  sunriseAndSunset(weatherData);
  displayHourlyWeather(hourlyWeather);
  displayDailyWeather(hourlyWeather);
  clearInputField();
}
function displayCityNameAndCountry(weatherData) {
  var cityName = document.createElement("h1");
  var countryName = document.createElement("span");
  cityName.textContent = "".concat(weatherData.cityName, ", ");
  countryName.textContent = "".concat(weatherData.country);
  var div = document.querySelector(".name-of-the-city");
  div.append(cityName, countryName);
}
function displayCurrentTemp(weatherData) {
  var temp = document.createElement("div");
  temp.textContent = "".concat(Math.round(weatherData.currentTemp), " \xB0C");
  temp.classList.add("temp");
  var feel = document.createElement("div");
  feel.classList.add("feels-like");
  var feelTemp = document.createElement("span");
  feelTemp.textContent = "".concat(Math.round(weatherData.feelsLike), " \xB0C");
  var text = document.createElement("p");
  text.textContent = "Feels like ";
  var div = document.querySelector(".current-temp");
  feel.append(text, feelTemp);
  div.append(temp, feel);
}
function displayWeatherDescription(weatherData) {
  var p = document.createElement("p");
  p.textContent = weatherData.currentWeatherDescription;
  var div = document.querySelector(".description");
  div.append(p);
}
function displayIcon(weatherData) {
  var iconImg = document.createElement("img");
  iconImg.classList.add("icon-img");
  iconImg.src = (0,_icons_js__WEBPACK_IMPORTED_MODULE_0__.weatherIcons)(weatherData.currentWeather.toLowerCase());
  var weatherIconDiv = document.querySelector(".weather-icon");
  weatherIconDiv.append(iconImg);
}
function displayHourlyWeather(hourlyWeather) {
  //need current day
  var today = new Date();
  var day = today.getDate();
  var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var month = months[today.getMonth()];
  var year = today.getFullYear();
  var dateForToday = "".concat(day, " ").concat(month, " ").concat(year);

  //need day from the object
  hourlyWeather.forEach(function (item) {
    var dateToConvert = item.dt;
    var newDate = new Date(dateToConvert * 1000);
    var year = newDate.getFullYear();
    var month = months[newDate.getMonth()];
    var date = newDate.getDate();
    var currentDate = "".concat(date, " ").concat(month, " ").concat(year);
    var hour = newDate.getHours();
    var min = newDate.getMinutes();
    var sec = newDate.getSeconds();
    if (dateForToday === currentDate) {
      var divHour = document.createElement("div");
      divHour.classList.add("div-hour");
      var temp = document.createElement("div");
      temp.textContent = "".concat(Math.round(item.main.temp), " \xB0C");
      var hourIcon = document.createElement("img");
      hourIcon.classList.add("hour-icon");
      hourIcon.src = (0,_icons_js__WEBPACK_IMPORTED_MODULE_0__.weatherIcons)(item.weather[0].main.toLowerCase());
      var timeOfTheDay = "".concat(hour, ":").concat(min).concat(sec);
      var time = document.createElement("div");
      time.textContent = timeOfTheDay;
      divHour.append(temp, hourIcon, time);
      var _hourlyWeather2 = document.querySelector(".day-weather-byHours");
      _hourlyWeather2.append(divHour);
    }
  });
}
function displayDailyWeather(hourlyWeather) {
  var today = new Date().toJSON().split("T")[0];
  var daysByDate = {};
  hourlyWeather.forEach(function (item) {
    var date = item.dt_txt.split(" ")[0];
    if (date === today) {
      return;
    } else if (daysByDate[date]) {
      daysByDate[date].push(item);
    } else {
      daysByDate[date] = [item];
    }
  });
  var filtered = [];
  for (var key in daysByDate) {
    filtered.push(daysByDate[key][4]);
  }
  filtered.forEach(function (day) {
    if (day === undefined) {
      return;
    } else {
      var dayDate = day.dt;
      var eachDay = new Date(dayDate * 1000).toLocaleString("en-US", {
        weekday: "long"
      }).split(",")[0];
      var displayTemp = document.createElement("div");
      displayTemp.textContent = "".concat(Math.round(day.main.temp), " \xB0C");
      var displayDate = document.createElement("div");
      displayDate.classList.add("day-name");
      displayDate.textContent = eachDay;
      var singleDayDesc = document.createElement("p");
      singleDayDesc.classList.add("single-day-description");
      singleDayDesc.textContent = day.weather[0].description;
      var dailyIcon = document.createElement("img");
      dailyIcon.classList.add("daily-icons");
      dailyIcon.src = (0,_icons_js__WEBPACK_IMPORTED_MODULE_0__.weatherIcons)(day.weather[0].main.toLowerCase());
      var dailyWeather = document.querySelector(".weather-for-five-days");
      var singleDayDiv = document.createElement("div");
      singleDayDiv.classList.add("single-day");
      var singleDayLeft = document.createElement("div");
      singleDayLeft.classList.add("single-day-left");
      singleDayLeft.append(displayDate, singleDayDesc);
      var singleDayRight = document.createElement("div");
      singleDayRight.classList.add("single-day-right");
      singleDayRight.append(dailyIcon, displayTemp);
      singleDayDiv.append(singleDayLeft, singleDayRight);
      dailyWeather.append(singleDayDiv);
    }
  });
}
function weatherDetails(weatherData) {
  var pressureName = document.querySelector(".pressure-name");
  pressureName.textContent = "Pressure";
  var pressure = document.querySelector(".pressure-data");
  pressure.textContent = "".concat(weatherData.pressure, " mBar");
  var humidity = document.querySelector(".humidity-data");
  humidity.textContent = "".concat(weatherData.humid, " %");
  var humidName = document.querySelector(".humid-name");
  humidName.textContent = "Humidity";
  var wind = document.querySelector(".wind-data");
  //m/s to km/h
  var windSpeedConvert = weatherData.windSpeed * (60 * 60) / 1000;
  wind.textContent = "".concat(Math.round(windSpeedConvert), " km/h");
  var windName = document.querySelector(".wind-name");
  windName.textContent = "Wind";
  var visibility = document.querySelector(".visibility-data");
  var convertToKm = weatherData.visibility / 1000;
  visibility.textContent = "".concat(convertToKm, " km");
  var visibilityName = document.querySelector(".visibility-name");
  visibilityName.textContent = "Visibility";
  var maxTemp = document.querySelector(".max-temp-data");
  maxTemp.textContent = "".concat(Math.round(weatherData.maxTemp), " \xB0C");
  var maxName = document.querySelector(".max-name");
  maxName.textContent = "Max temp";
  var minTemp = document.querySelector(".min-temp-data");
  minTemp.textContent = "".concat(Math.round(weatherData.minTemp), " \xB0C");
  var minName = document.querySelector(".min-name");
  minName.textContent = "Min temp";
}
function sunriseAndSunset(weatherData) {
  var sunrise = document.querySelector(".sunrise");
  var spanSunrise = document.createElement("span");
  var unixSunrise = new Date(weatherData.sunrise * 1000).toLocaleString().split(",")[1];
  var sunriseIcon = document.createElement("img");
  sunriseIcon.classList.add("sunrise-icon");
  sunriseIcon.src = _images_sunrise_png__WEBPACK_IMPORTED_MODULE_2__;
  spanSunrise.textContent = unixSunrise;
  var sunriseTitle = document.createElement("p");
  sunriseTitle.textContent = "Sunrise";
  sunrise.append(sunriseTitle, spanSunrise, sunriseIcon);
  var sunset = document.querySelector(".sunset");
  var spanSunset = document.createElement("span");
  var unixSunset = new Date(weatherData.sunset * 1000).toLocaleString().split(",")[1];
  spanSunset.textContent = unixSunset;
  var sunsetIcon = document.createElement("img");
  sunsetIcon.classList.add("sunset-icon");
  sunsetIcon.src = _images_sunset_png__WEBPACK_IMPORTED_MODULE_3__;
  var sunsetTitle = document.createElement("p");
  sunsetTitle.textContent = "Sunset";
  sunset.append(sunsetTitle, spanSunset, sunsetIcon);
}
function currentDay() {
  var today = new Date();
  var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var dayWord = days[today.getDay()];
  var dayNum = today.getDate();
  var month = months[today.getMonth()];
  var currentDay = document.createElement("div");
  currentDay.textContent = "".concat(dayWord, ", ").concat(dayNum, " ").concat(month);
  var divContainer = document.querySelector(".current-day");
  divContainer.append(currentDay);
}
function clearInputField() {
  var inputField = document.querySelector("#city-name");
  inputField.value = "";
}
function clearDataFromPage() {
  document.querySelector(".name-of-the-city").textContent = "";
  document.querySelector(".current-temp").textContent = "";
  document.querySelector(".weather-icon").textContent = "";
  document.querySelector(".description").textContent = "";
  document.querySelector(".pressure-data").textContent = "";
  document.querySelector(".wind-data").textContent = "";
  document.querySelector(".visibility-data").textContent = "";
  document.querySelector(".weather-hours").textContent = "";
  document.querySelector(".sunrise").textContent = "";
  document.querySelector(".sunset").textContent = "";
  document.querySelector(".weather-days").textContent = "";
}

/***/ }),

/***/ "./src/icons.js":
/*!**********************!*\
  !*** ./src/icons.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "weatherIcons": () => (/* binding */ weatherIcons)
/* harmony export */ });
/* harmony import */ var _images_sun_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/sun.png */ "./src/images/sun.png");
/* harmony import */ var _images_starry_night_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/starry-night.png */ "./src/images/starry-night.png");
/* harmony import */ var _images_rain_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/rain.png */ "./src/images/rain.png");
/* harmony import */ var _images_rainy_night_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/rainy-night.png */ "./src/images/rainy-night.png");
/* harmony import */ var _images_overcast_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/overcast.png */ "./src/images/overcast.png");
/* harmony import */ var _images_cloudy_night_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/cloudy-night.png */ "./src/images/cloudy-night.png");
/* harmony import */ var _images_snowfall_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/snowfall.png */ "./src/images/snowfall.png");
/* harmony import */ var _images_snowfall_night_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/snowfall-night.png */ "./src/images/snowfall-night.png");
/* harmony import */ var _images_storm_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/storm.png */ "./src/images/storm.png");
/* harmony import */ var _images_stormy_night_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/stormy-night.png */ "./src/images/stormy-night.png");
/* harmony import */ var _images_fog_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./images/fog.png */ "./src/images/fog.png");
/* harmony import */ var _images_wind_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./images/wind.png */ "./src/images/wind.png");












function weatherIcons(icon) {
  var currentHour = new Date().getHours();
  if (currentHour > 7 && currentHour < 20) {
    switch (icon) {
      case "clear":
        document.body.style.background = "linear-gradient(90deg, hsla(39, 100%, 71%, 1) 0%, hsla(216, 100%, 62%, 1) 100%)";
        document.body.style.color = "black";
        return _images_sun_png__WEBPACK_IMPORTED_MODULE_0__;
      case "clouds":
        document.body.style.background = "linear-gradient(90deg, hsla(228, 17%, 53%, 1) 0%, hsla(229, 28%, 88%, 1) 100%)";
        document.body.style.color = "black";
        return _images_overcast_png__WEBPACK_IMPORTED_MODULE_4__;
      case "rain":
        document.body.style.background = "linear-gradient(90deg, hsla(213, 77%, 14%, 1) 0%, hsla(202, 27%, 45%, 1) 100%)";
        document.body.style.color = "white";
        return _images_rain_png__WEBPACK_IMPORTED_MODULE_2__;
      case "snow":
        document.body.style.background = "linear-gradient(90deg, hsla(233, 100%, 90%, 1) 0%, hsla(0, 0%, 89%, 1) 100%)";
        document.body.style.color = "black";
        return _images_snowfall_png__WEBPACK_IMPORTED_MODULE_6__;
      case "storm":
        document.body.style.background = "linear-gradient(90deg, rgb(24, 35, 107) 0%, rgb(71, 17, 101) 100%)";
        document.body.style.color = "white";
        return _images_storm_png__WEBPACK_IMPORTED_MODULE_8__;
      case "fog":
        document.body.style.background = "linear-gradient(90deg, hsla(228, 17%, 53%, 1) 0%, hsla(229, 28%, 88%, 1) 100%)";
        document.body.style.color = "black";
        return _images_fog_png__WEBPACK_IMPORTED_MODULE_10__;
      case "wind":
        return _images_wind_png__WEBPACK_IMPORTED_MODULE_11__;
      case "mist":
        document.body.style.background = "linear-gradient(90deg, hsla(228, 17%, 53%, 1) 0%, hsla(229, 28%, 88%, 1) 100%)";
        document.body.style.color = "black";
        return _images_fog_png__WEBPACK_IMPORTED_MODULE_10__;
      case "drizzle":
        document.body.style.background = "linear-gradient(90deg, hsla(213, 77%, 14%, 1) 0%, hsla(202, 27%, 45%, 1) 100%)";
        document.body.style.color = "white";
        return _images_rain_png__WEBPACK_IMPORTED_MODULE_2__;
    }
  } else switch (icon) {
    case "clear":
      nightBg();
      return _images_starry_night_png__WEBPACK_IMPORTED_MODULE_1__;
    case "clouds":
      nightBg();
      return _images_cloudy_night_png__WEBPACK_IMPORTED_MODULE_5__;
    case "rain":
      nightBg();
      return _images_rainy_night_png__WEBPACK_IMPORTED_MODULE_3__;
    case "snow":
      nightBg();
      return _images_snowfall_night_png__WEBPACK_IMPORTED_MODULE_7__;
    case "storm":
      nightBg();
      return _images_stormy_night_png__WEBPACK_IMPORTED_MODULE_9__;
    case "fog":
      nightBg();
      return _images_fog_png__WEBPACK_IMPORTED_MODULE_10__;
    case "wind":
      nightBg();
      return _images_wind_png__WEBPACK_IMPORTED_MODULE_11__;
    case "mist":
      nightBg();
      return _images_fog_png__WEBPACK_IMPORTED_MODULE_10__;
    case "drizzle":
      nightBg();
      return _images_rain_png__WEBPACK_IMPORTED_MODULE_2__;
  }
}
function nightBg() {
  document.body.style.background = "linear-gradient(90deg, hsla(236, 100%, 8%, 1) 0%, hsla(211, 100%, 28%, 1) 100%)";
  document.body.style.color = "white";
}

/***/ }),

/***/ "./src/weatherAPI.js":
/*!***************************!*\
  !*** ./src/weatherAPI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayLoading": () => (/* binding */ displayLoading),
/* harmony export */   "getCityCoordinates": () => (/* binding */ getCityCoordinates),
/* harmony export */   "getCurrentWeather": () => (/* binding */ getCurrentWeather),
/* harmony export */   "getHourlyWeather": () => (/* binding */ getHourlyWeather),
/* harmony export */   "hideLoading": () => (/* binding */ hideLoading)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function getCityCoordinates(_x) {
  return _getCityCoordinates.apply(this, arguments);
}
function _getCityCoordinates() {
  _getCityCoordinates = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {
    var city_name, API_key, resource, data, lat, lon, coordinates;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          e.preventDefault();
          city_name = e.target[0].value;
          if (!(city_name === "")) {
            _context.next = 6;
            break;
          }
          return _context.abrupt("return");
        case 6:
          API_key = "3ba98b4b745fa42c31dff2a783d52b5c";
          _context.prev = 7;
          displayLoading();
          _context.next = 11;
          return fetch("http://api.openweathermap.org/geo/1.0/direct?q=".concat(city_name, "&appid=").concat(API_key));
        case 11:
          resource = _context.sent;
          _context.next = 14;
          return resource.json();
        case 14:
          data = _context.sent;
          lat = data[0].lat;
          lon = data[0].lon;
          coordinates = {
            lat: lat,
            lon: lon
          };
          hideLoading();
          return _context.abrupt("return", coordinates);
        case 22:
          _context.prev = 22;
          _context.t0 = _context["catch"](7);
          (function (err) {
            return console.log(err);
          });
        case 25:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[7, 22]]);
  }));
  return _getCityCoordinates.apply(this, arguments);
}
function getCurrentWeather(_x2) {
  return _getCurrentWeather.apply(this, arguments);
}
function _getCurrentWeather() {
  _getCurrentWeather = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(dataCoord) {
    var lat, lon, API_key, resource, data, cityName, country, currentTemp, feelsLike, humid, pressure, visibility, windSpeed, currentWeather, currentWeatherDescription, sunrise, sunset, minTemp, maxTemp, weatherData;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          lat = dataCoord.lat;
          lon = dataCoord.lon;
          API_key = "3ba98b4b745fa42c31dff2a783d52b5c";
          _context2.prev = 3;
          _context2.next = 6;
          return fetch("https://api.openweathermap.org/data/2.5/weather?lat=".concat(lat, "&lon=").concat(lon, "&appid=").concat(API_key, "&units=metric"));
        case 6:
          resource = _context2.sent;
          _context2.next = 9;
          return resource.json();
        case 9:
          data = _context2.sent;
          cityName = data.name;
          country = data.sys.country;
          currentTemp = data.main.temp;
          feelsLike = data.main.feels_like;
          humid = data.main.humidity;
          pressure = data.main.pressure;
          visibility = data.visibility; //meter
          windSpeed = data.wind.speed; // m/s
          currentWeather = data.weather[0].main;
          currentWeatherDescription = data.weather[0].description;
          sunrise = data.sys.sunrise;
          sunset = data.sys.sunset;
          minTemp = data.main.temp_min;
          maxTemp = data.main.temp_max;
          weatherData = {
            cityName: cityName,
            country: country,
            currentTemp: currentTemp,
            feelsLike: feelsLike,
            humid: humid,
            pressure: pressure,
            visibility: visibility,
            windSpeed: windSpeed,
            currentWeather: currentWeather,
            currentWeatherDescription: currentWeatherDescription,
            sunrise: sunrise,
            sunset: sunset,
            minTemp: minTemp,
            maxTemp: maxTemp
          };
          return _context2.abrupt("return", weatherData);
        case 28:
          _context2.prev = 28;
          _context2.t0 = _context2["catch"](3);
          (function (err) {
            return console.log(err);
          });
        case 31:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[3, 28]]);
  }));
  return _getCurrentWeather.apply(this, arguments);
}
function getHourlyWeather(_x3) {
  return _getHourlyWeather.apply(this, arguments);
}
function _getHourlyWeather() {
  _getHourlyWeather = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(dataCoord) {
    var lat, lon, API_key, resource, hourlyData, list;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          lat = dataCoord.lat;
          lon = dataCoord.lon;
          API_key = "3ba98b4b745fa42c31dff2a783d52b5c";
          _context3.prev = 3;
          _context3.next = 6;
          return fetch("http://api.openweathermap.org/data/2.5/forecast?lat=".concat(lat, "&lon=").concat(lon, "&appid=").concat(API_key, "&units=metric"));
        case 6:
          resource = _context3.sent;
          _context3.next = 9;
          return resource.json();
        case 9:
          hourlyData = _context3.sent;
          list = hourlyData.list;
          return _context3.abrupt("return", list);
        case 14:
          _context3.prev = 14;
          _context3.t0 = _context3["catch"](3);
          (function (err) {
            return console.log(err);
          });
        case 17:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[3, 14]]);
  }));
  return _getHourlyWeather.apply(this, arguments);
}
function displayLoading() {
  document.querySelector(".loading-container").style.display = "flex";
}
function hideLoading() {
  document.querySelector(".loading-container").style.display = "none";
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Krub:wght@200;300;400;600&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  width: 100%;\n  min-height: 100vh;\n  display: grid;\n  grid-template-columns: 1.3fr 0.7fr;\n  grid-template-areas: \"search data\" \"basic days\" \"details days\" \"byHour days\" \"sunriseSunset days\" \"footer footer\";\n  gap: 20px;\n  position: relative;\n  font-family: \"Krub\", sans-serif;\n  font-weight: 200;\n}\nbody .loading-container {\n  height: 100vh;\n  width: 100%;\n  position: fixed;\n  background-color: black;\n  z-index: 10;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nbody .loading-container .spinner {\n  width: 54px;\n  height: 54px;\n  border: 8px solid;\n  border-color: #3d5af1 transparent #3d5af1 transparent;\n  border-radius: 100%;\n  animation: spin 1.2s linear infinite;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\nbody .container {\n  background: inherit;\n  position: relative;\n  overflow: hidden;\n  z-index: 1;\n  border-radius: 10px;\n}\nbody .container::after {\n  z-index: -1;\n  position: absolute;\n  content: \"\";\n  top: -10px;\n  left: -10px;\n  bottom: -10px;\n  right: -10px;\n  background: inherit;\n  box-shadow: inset 0 0 2000px rgba(255, 255, 255, 0.4);\n  filter: blur(10px);\n}\nbody .weather-search {\n  grid-area: search;\n  display: flex;\n  justify-content: center;\n  padding-top: 10px;\n  width: 80%;\n  margin: auto;\n}\nbody .weather-search form {\n  width: 100%;\n}\nbody .weather-search form input {\n  width: 100%;\n  padding: 7px 8px;\n  border-radius: 5px;\n  background: rgba(255, 255, 255, 0.4);\n  border: none;\n}\nbody .weather-search form button[type=submit] {\n  background: transparent;\n  border: none;\n  text-indent: -20px;\n  opacity: 0.7;\n}\nbody .weather-basic {\n  grid-area: basic;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 80%;\n  margin: 0 auto;\n  padding: 10px;\n}\nbody .weather-basic .left {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\nbody .weather-basic .left .current-temp .temp {\n  font-size: 40px;\n  font-weight: 400;\n}\nbody .weather-basic .left .current-temp .feels-like {\n  display: flex;\n  gap: 10px;\n}\nbody .weather-basic .right {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\nbody .weather-details {\n  grid-area: details;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 80%;\n  margin: 0 auto;\n  gap: 20px;\n  padding: 10px;\n  flex-wrap: wrap;\n}\nbody .weather-details .details-left,\nbody .weather-details .details-right,\nbody .weather-details .details-middle {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\nbody .weather-details .details-left .pressure p,\nbody .weather-details .details-left .humidity p {\n  font-weight: 600;\n}\nbody .weather-details .details-middle .max-temp p,\nbody .weather-details .details-middle .min-temp p {\n  font-weight: 600;\n}\nbody .weather-details .details-right .wind p {\n  font-weight: 600;\n}\nbody .weather-details .details-right .visibility {\n  justify-self: end;\n}\nbody .weather-details .details-right .visibility p {\n  text-transform: capitalize;\n  font-weight: 600;\n}\nbody .weather-hours {\n  grid-area: byHour;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  gap: 20px;\n  width: 80%;\n  margin: 0 auto;\n  padding: 10px;\n  flex-wrap: wrap;\n}\nbody .weather-hours .div-hour {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\nbody .weather-hours .div-hour .hour-icon {\n  width: 80px;\n}\nbody .weather-days {\n  grid-area: days;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  width: 80%;\n}\nbody .weather-days .single-day {\n  display: flex;\n  align-items: center;\n  width: 90%;\n  justify-content: space-between;\n}\nbody .weather-days .single-day .single-day-left .day-name {\n  font-weight: 600;\n}\nbody .weather-days .single-day .single-day-left .single-day-description {\n  text-transform: capitalize;\n}\nbody .weather-days .single-day .single-day-right {\n  display: flex;\n  align-items: center;\n}\nbody .weather-days .single-day .daily-icons {\n  width: 100px;\n}\nbody .sunrise-sunset {\n  grid-area: sunriseSunset;\n  display: flex;\n  justify-content: center;\n  gap: 100px;\n  width: 80%;\n  margin: 0 auto;\n  padding: 10px;\n}\nbody .sunrise-sunset .sunrise,\nbody .sunrise-sunset .sunset {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\nbody .sunrise-sunset .sunrise p,\nbody .sunrise-sunset .sunset p {\n  font-weight: 600;\n}\nbody .sunrise-sunset .sunrise-icon,\nbody .sunrise-sunset .sunset-icon {\n  width: 80px;\n}\nbody .current-day {\n  grid-area: data;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  font-size: 20px;\n  padding-top: 10px;\n}\nbody .current-day .switch-units {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n}\nbody .current-day .switch-units .cel,\nbody .current-day .switch-units .fahr {\n  font-size: 22px;\n}\nbody .current-day .switch-units .switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\nbody .current-day .switch-units .switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\nbody .current-day .switch-units .switch .slider.round {\n  border-radius: 34px;\n}\nbody .current-day .switch-units .switch .slider.round:before {\n  border-radius: 50%;\n}\nbody .current-day .switch-units .switch .slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\nbody .current-day .switch-units .switch .slider:before {\n  position: absolute;\n  content: \"\";\n  height: 25px;\n  width: 25px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\nbody .current-day .switch-units .switch input:checked + .slider {\n  background-color: #2196f3;\n}\nbody .current-day .switch-units .switch input:focus + .slider {\n  box-shadow: 0 0 1px #2196f3;\n}\nbody .current-day .switch-units .switch input:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px);\n}\nbody .icon-img {\n  width: 100px;\n}\nbody footer {\n  grid-area: footer;\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n}\nbody footer p #name {\n  color: wheat;\n  text-decoration: none;\n}\nbody footer p a i {\n  color: wheat;\n}\n\n@media (max-width: 1100px) {\n  body {\n    grid-template-columns: 1fr;\n    grid-template-areas: \"data\" \"search\" \"basic\" \"details\" \"byHour\" \"sunriseSunset\" \"days\" \"footer\";\n  }\n  .weather-days {\n    margin: auto;\n  }\n}\n@media (max-width: 630px) {\n  * {\n    font-size: 13px;\n  }\n  body .name-of-the-city h1 {\n    font-size: 18px;\n  }\n  body .weather-hours .div-hour .hour-icon {\n    width: 60px;\n  }\n  body .sunrise-sunset .sunrise .sunrise-icon,\n  body .sunrise-sunset .sunrise .sunset-icon,\n  body .sunrise-sunset .sunset .sunrise-icon,\n  body .sunrise-sunset .sunset .sunset-icon {\n    width: 60px;\n  }\n  body .weather-days .single-day .single-day-right .daily-icons {\n    width: 60px;\n  }\n  body .weather-search {\n    padding: 0;\n  }\n  body .weather-basic,\n  body .weather-details,\n  body .weather-hours,\n  body .weather-search,\n  body .sunrise-sunset,\n  body .weather-days {\n    width: 90%;\n  }\n}", "",{"version":3,"sources":["webpack://./src/scss/style.scss"],"names":[],"mappings":"AAEA;EACE,UAAA;EACA,SAAA;EACA,sBAAA;AAAF;;AAGA;EACE,WAAA;EACA,iBAAA;EACA,aAAA;EACA,kCAAA;EACA,iHACE;EAMF,SAAA;EACA,kBAAA;EACA,+BAAA;EACA,gBAAA;AANF;AAQE;EACE,aAAA;EACA,WAAA;EACA,eAAA;EACA,uBAAA;EACA,WAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AANJ;AAQI;EACE,WAAA;EACA,YAAA;EACA,iBAAA;EACA,qDAAA;EACA,mBAAA;EACA,oCAAA;AANN;AASI;EACE;IACE,uBAAA;EAPN;EASI;IACE,yBAAA;EAPN;AACF;AAWE;EACE,mBAAA;EACA,kBAAA;EACA,gBAAA;EACA,UAAA;EACA,mBAAA;AATJ;AAWI;EACE,WAAA;EACA,kBAAA;EACA,WAAA;EACA,UAAA;EACA,WAAA;EACA,aAAA;EACA,YAAA;EACA,mBAAA;EACA,qDAAA;EACA,kBAAA;AATN;AAaE;EACE,iBAAA;EACA,aAAA;EACA,uBAAA;EACA,iBAAA;EACA,UAAA;EACA,YAAA;AAXJ;AAaI;EACE,WAAA;AAXN;AAaM;EACE,WAAA;EACA,gBAAA;EACA,kBAAA;EACA,oCAAA;EACA,YAAA;AAXR;AAaM;EACE,uBAAA;EACA,YAAA;EACA,kBAAA;EACA,YAAA;AAXR;AAgBE;EACE,gBAAA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,UAAA;EACA,cAAA;EACA,aAAA;AAdJ;AAgBI;EACE,aAAA;EACA,sBAAA;EACA,SAAA;AAdN;AAiBQ;EACE,eAAA;EACA,gBAAA;AAfV;AAkBQ;EACE,aAAA;EACA,SAAA;AAhBV;AAqBI;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;AAnBN;AAuBE;EACE,kBAAA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,UAAA;EACA,cAAA;EACA,SAAA;EACA,aAAA;EACA,eAAA;AArBJ;AAuBI;;;EAGE,aAAA;EACA,sBAAA;EACA,SAAA;AArBN;AA2BQ;;EACE,gBAAA;AAxBV;AAgCQ;;EACE,gBAAA;AA7BV;AAoCQ;EACE,gBAAA;AAlCV;AAqCM;EACE,iBAAA;AAnCR;AAoCQ;EACE,0BAAA;EACA,gBAAA;AAlCV;AAuCE;EACE,iBAAA;EACA,aAAA;EACA,6BAAA;EACA,mBAAA;EACA,SAAA;EACA,UAAA;EACA,cAAA;EACA,aAAA;EACA,eAAA;AArCJ;AAuCI;EACE,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;AArCN;AAuCM;EACE,WAAA;AArCR;AA0CE;EACE,eAAA;EACA,aAAA;EACA,sBAAA;EACA,8BAAA;EACA,mBAAA;EACA,UAAA;AAxCJ;AA0CI;EACE,aAAA;EACA,mBAAA;EACA,UAAA;EACA,8BAAA;AAxCN;AA2CQ;EACE,gBAAA;AAzCV;AA2CQ;EACE,0BAAA;AAzCV;AA4CM;EACE,aAAA;EACA,mBAAA;AA1CR;AA4CM;EACE,YAAA;AA1CR;AA+CE;EACE,wBAAA;EACA,aAAA;EACA,uBAAA;EACA,UAAA;EACA,UAAA;EACA,cAAA;EACA,aAAA;AA7CJ;AA+CI;;EAEE,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;AA7CN;AA+CM;;EACE,gBAAA;AA5CR;AAgDI;;EAEE,WAAA;AA9CN;AAkDE;EACE,eAAA;EACA,aAAA;EACA,6BAAA;EACA,mBAAA;EACA,eAAA;EACA,iBAAA;AAhDJ;AAkDI;EACE,aAAA;EACA,SAAA;EACA,mBAAA;AAhDN;AAiDM;;EAEE,eAAA;AA/CR;AAiDM;EACE,kBAAA;EACA,qBAAA;EACA,WAAA;EACA,YAAA;AA/CR;AAiDQ;EACE,UAAA;EACA,QAAA;EACA,SAAA;AA/CV;AAiDQ;EACE,mBAAA;AA/CV;AAkDQ;EACE,kBAAA;AAhDV;AAkDQ;EACE,kBAAA;EACA,eAAA;EACA,MAAA;EACA,OAAA;EACA,QAAA;EACA,SAAA;EACA,sBAAA;EACA,wBAAA;EACA,gBAAA;AAhDV;AAmDQ;EACE,kBAAA;EACA,WAAA;EACA,YAAA;EACA,WAAA;EACA,SAAA;EACA,WAAA;EACA,uBAAA;EACA,wBAAA;EACA,gBAAA;AAjDV;AAmDQ;EACE,yBAAA;AAjDV;AAoDQ;EACE,2BAAA;AAlDV;AAqDQ;EACE,mCAAA;EACA,+BAAA;EACA,2BAAA;AAnDV;AAwDE;EACE,YAAA;AAtDJ;AAyDE;EACE,iBAAA;EACA,aAAA;EACA,uBAAA;EACA,qBAAA;AAvDJ;AA0DM;EACE,YAAA;EACA,qBAAA;AAxDR;AA2DQ;EACE,YAAA;AAzDV;;AAgEA;EACE;IACE,0BAAA;IACA,+FACE;EA9DJ;EAwEA;IACE,YAAA;EAtEF;AACF;AAyEA;EACE;IACE,eAAA;EAvEF;EA2EE;IACE,eAAA;EAzEJ;EA8EM;IACE,WAAA;EA5ER;EAoFM;;;;IAEE,WAAA;EAhFR;EAwFQ;IACE,WAAA;EAtFV;EA4FE;IACE,UAAA;EA1FJ;EA4FE;;;;;;IAME,UAAA;EA1FJ;AACF","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Krub:wght@200;300;400;600&display=swap\");\r\n\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  width: 100%;\r\n  min-height: 100vh;\r\n  display: grid;\r\n  grid-template-columns: 1.3fr 0.7fr;\r\n  grid-template-areas:\r\n    \"search data\"\r\n    \"basic days\"\r\n    \"details days\"\r\n    \"byHour days\"\r\n    \"sunriseSunset days\"\r\n    \"footer footer\";\r\n  gap: 20px;\r\n  position: relative;\r\n  font-family: \"Krub\", sans-serif;\r\n  font-weight: 200;\r\n\r\n  .loading-container {\r\n    height: 100vh;\r\n    width: 100%;\r\n    position: fixed;\r\n    background-color: black;\r\n    z-index: 10;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n    .spinner {\r\n      width: 54px;\r\n      height: 54px;\r\n      border: 8px solid;\r\n      border-color: #3d5af1 transparent #3d5af1 transparent;\r\n      border-radius: 100%;\r\n      animation: spin 1.2s linear infinite;\r\n    }\r\n\r\n    @keyframes spin {\r\n      0% {\r\n        transform: rotate(0deg);\r\n      }\r\n      100% {\r\n        transform: rotate(360deg);\r\n      }\r\n    }\r\n  }\r\n\r\n  .container {\r\n    background: inherit;\r\n    position: relative;\r\n    overflow: hidden;\r\n    z-index: 1;\r\n    border-radius: 10px;\r\n\r\n    &::after {\r\n      z-index: -1;\r\n      position: absolute;\r\n      content: \"\";\r\n      top: -10px;\r\n      left: -10px;\r\n      bottom: -10px;\r\n      right: -10px;\r\n      background: inherit;\r\n      box-shadow: inset 0 0 2000px rgba(255, 255, 255, 0.4);\r\n      filter: blur(10px);\r\n    }\r\n  }\r\n\r\n  .weather-search {\r\n    grid-area: search;\r\n    display: flex;\r\n    justify-content: center;\r\n    padding-top: 10px;\r\n    width: 80%;\r\n    margin: auto;\r\n\r\n    form {\r\n      width: 100%;\r\n\r\n      input {\r\n        width: 100%;\r\n        padding: 7px 8px;\r\n        border-radius: 5px;\r\n        background: rgba(255, 255, 255, 0.4);\r\n        border: none;\r\n      }\r\n      button[type=\"submit\"] {\r\n        background: transparent;\r\n        border: none;\r\n        text-indent: -20px;\r\n        opacity: 0.7;\r\n      }\r\n    }\r\n  }\r\n\r\n  .weather-basic {\r\n    grid-area: basic;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    width: 80%;\r\n    margin: 0 auto;\r\n    padding: 10px;\r\n\r\n    .left {\r\n      display: flex;\r\n      flex-direction: column;\r\n      gap: 10px;\r\n\r\n      .current-temp {\r\n        .temp {\r\n          font-size: 40px;\r\n          font-weight: 400;\r\n        }\r\n\r\n        .feels-like {\r\n          display: flex;\r\n          gap: 10px;\r\n        }\r\n      }\r\n    }\r\n\r\n    .right {\r\n      display: flex;\r\n      flex-direction: column;\r\n      align-items: center;\r\n    }\r\n  }\r\n\r\n  .weather-details {\r\n    grid-area: details;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    width: 80%;\r\n    margin: 0 auto;\r\n    gap: 20px;\r\n    padding: 10px;\r\n    flex-wrap: wrap;\r\n\r\n    .details-left,\r\n    .details-right,\r\n    .details-middle {\r\n      display: flex;\r\n      flex-direction: column;\r\n      gap: 10px;\r\n    }\r\n\r\n    .details-left {\r\n      .pressure,\r\n      .humidity {\r\n        p {\r\n          font-weight: 600;\r\n        }\r\n      }\r\n    }\r\n\r\n    .details-middle {\r\n      .max-temp,\r\n      .min-temp {\r\n        p {\r\n          font-weight: 600;\r\n        }\r\n      }\r\n    }\r\n\r\n    .details-right {\r\n      .wind {\r\n        p {\r\n          font-weight: 600;\r\n        }\r\n      }\r\n      .visibility {\r\n        justify-self: end;\r\n        p {\r\n          text-transform: capitalize;\r\n          font-weight: 600;\r\n        }\r\n      }\r\n    }\r\n  }\r\n  .weather-hours {\r\n    grid-area: byHour;\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n    gap: 20px;\r\n    width: 80%;\r\n    margin: 0 auto;\r\n    padding: 10px;\r\n    flex-wrap: wrap;\r\n\r\n    .div-hour {\r\n      display: flex;\r\n      flex-direction: column;\r\n      justify-content: center;\r\n      align-items: center;\r\n\r\n      .hour-icon {\r\n        width: 80px;\r\n      }\r\n    }\r\n  }\r\n\r\n  .weather-days {\r\n    grid-area: days;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    width: 80%;\r\n\r\n    .single-day {\r\n      display: flex;\r\n      align-items: center;\r\n      width: 90%;\r\n      justify-content: space-between;\r\n\r\n      .single-day-left {\r\n        .day-name {\r\n          font-weight: 600;\r\n        }\r\n        .single-day-description {\r\n          text-transform: capitalize;\r\n        }\r\n      }\r\n      .single-day-right {\r\n        display: flex;\r\n        align-items: center;\r\n      }\r\n      .daily-icons {\r\n        width: 100px;\r\n      }\r\n    }\r\n  }\r\n\r\n  .sunrise-sunset {\r\n    grid-area: sunriseSunset;\r\n    display: flex;\r\n    justify-content: center;\r\n    gap: 100px;\r\n    width: 80%;\r\n    margin: 0 auto;\r\n    padding: 10px;\r\n\r\n    .sunrise,\r\n    .sunset {\r\n      display: flex;\r\n      flex-direction: column;\r\n      justify-content: center;\r\n      align-items: center;\r\n\r\n      p {\r\n        font-weight: 600;\r\n      }\r\n    }\r\n\r\n    .sunrise-icon,\r\n    .sunset-icon {\r\n      width: 80px;\r\n    }\r\n  }\r\n\r\n  .current-day {\r\n    grid-area: data;\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n    font-size: 20px;\r\n    padding-top: 10px;\r\n\r\n    .switch-units {\r\n      display: flex;\r\n      gap: 10px;\r\n      align-items: center;\r\n      .cel,\r\n      .fahr {\r\n        font-size: 22px;\r\n      }\r\n      .switch {\r\n        position: relative;\r\n        display: inline-block;\r\n        width: 60px;\r\n        height: 34px;\r\n\r\n        input {\r\n          opacity: 0;\r\n          width: 0;\r\n          height: 0;\r\n        }\r\n        .slider.round {\r\n          border-radius: 34px;\r\n        }\r\n\r\n        .slider.round:before {\r\n          border-radius: 50%;\r\n        }\r\n        .slider {\r\n          position: absolute;\r\n          cursor: pointer;\r\n          top: 0;\r\n          left: 0;\r\n          right: 0;\r\n          bottom: 0;\r\n          background-color: #ccc;\r\n          -webkit-transition: 0.4s;\r\n          transition: 0.4s;\r\n        }\r\n\r\n        .slider:before {\r\n          position: absolute;\r\n          content: \"\";\r\n          height: 25px;\r\n          width: 25px;\r\n          left: 4px;\r\n          bottom: 4px;\r\n          background-color: white;\r\n          -webkit-transition: 0.4s;\r\n          transition: 0.4s;\r\n        }\r\n        input:checked + .slider {\r\n          background-color: #2196f3;\r\n        }\r\n\r\n        input:focus + .slider {\r\n          box-shadow: 0 0 1px #2196f3;\r\n        }\r\n\r\n        input:checked + .slider:before {\r\n          -webkit-transform: translateX(26px);\r\n          -ms-transform: translateX(26px);\r\n          transform: translateX(26px);\r\n        }\r\n      }\r\n    }\r\n  }\r\n  .icon-img {\r\n    width: 100px;\r\n  }\r\n\r\n  footer {\r\n    grid-area: footer;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: flex-end;\r\n\r\n    p {\r\n      #name {\r\n        color: wheat;\r\n        text-decoration: none;\r\n      }\r\n      a {\r\n        i {\r\n          color: wheat;\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n@media (max-width: 1100px) {\r\n  body {\r\n    grid-template-columns: 1fr;\r\n    grid-template-areas:\r\n      \"data\"\r\n      \"search\"\r\n      \"basic\"\r\n      \"details\"\r\n      \"byHour\"\r\n      \"sunriseSunset\"\r\n      \"days\"\r\n      \"footer\";\r\n  }\r\n\r\n  .weather-days {\r\n    margin: auto;\r\n  }\r\n}\r\n\r\n@media (max-width: 630px) {\r\n  * {\r\n    font-size: 13px;\r\n  }\r\n\r\n  body {\r\n    .name-of-the-city h1 {\r\n      font-size: 18px;\r\n    }\r\n\r\n    .weather-hours {\r\n      .div-hour {\r\n        .hour-icon {\r\n          width: 60px;\r\n        }\r\n      }\r\n    }\r\n\r\n    .sunrise-sunset {\r\n      .sunrise,\r\n      .sunset {\r\n        .sunrise-icon,\r\n        .sunset-icon {\r\n          width: 60px;\r\n        }\r\n      }\r\n    }\r\n\r\n    .weather-days {\r\n      .single-day {\r\n        .single-day-right {\r\n          .daily-icons {\r\n            width: 60px;\r\n          }\r\n        }\r\n      }\r\n    }\r\n\r\n    .weather-search {\r\n      padding: 0;\r\n    }\r\n    .weather-basic,\r\n    .weather-details,\r\n    .weather-hours,\r\n    .weather-search,\r\n    .sunrise-sunset,\r\n    .weather-days {\r\n      width: 90%;\r\n    }\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/images/cloudy-night.png":
/*!*************************************!*\
  !*** ./src/images/cloudy-night.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cloudy-night.png";

/***/ }),

/***/ "./src/images/fog.png":
/*!****************************!*\
  !*** ./src/images/fog.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fog.png";

/***/ }),

/***/ "./src/images/overcast.png":
/*!*********************************!*\
  !*** ./src/images/overcast.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "overcast.png";

/***/ }),

/***/ "./src/images/rain.png":
/*!*****************************!*\
  !*** ./src/images/rain.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "rain.png";

/***/ }),

/***/ "./src/images/rainy-night.png":
/*!************************************!*\
  !*** ./src/images/rainy-night.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "rainy-night.png";

/***/ }),

/***/ "./src/images/snowfall-night.png":
/*!***************************************!*\
  !*** ./src/images/snowfall-night.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "snowfall-night.png";

/***/ }),

/***/ "./src/images/snowfall.png":
/*!*********************************!*\
  !*** ./src/images/snowfall.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "snowfall.png";

/***/ }),

/***/ "./src/images/starry-night.png":
/*!*************************************!*\
  !*** ./src/images/starry-night.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "starry-night.png";

/***/ }),

/***/ "./src/images/storm.png":
/*!******************************!*\
  !*** ./src/images/storm.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "storm.png";

/***/ }),

/***/ "./src/images/stormy-night.png":
/*!*************************************!*\
  !*** ./src/images/stormy-night.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "stormy-night.png";

/***/ }),

/***/ "./src/images/sun.png":
/*!****************************!*\
  !*** ./src/images/sun.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "sun.png";

/***/ }),

/***/ "./src/images/sunrise.png":
/*!********************************!*\
  !*** ./src/images/sunrise.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "sunrise.png";

/***/ }),

/***/ "./src/images/sunset.png":
/*!*******************************!*\
  !*** ./src/images/sunset.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "sunset.png";

/***/ }),

/***/ "./src/images/wind.png":
/*!*****************************!*\
  !*** ./src/images/wind.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "wind.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/style.scss */ "./src/scss/style.scss");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/dom.js");


(0,_dom__WEBPACK_IMPORTED_MODULE_1__.currentDay)();
window.addEventListener("load", function () {
  document.querySelector(".loading-container").style.display = "relative";
});
document.querySelector("form").addEventListener("submit", function (e) {
  return (0,_dom__WEBPACK_IMPORTED_MODULE_1__.displayDataOnPage)(e);
});
if (navigator.geolocation) {
  var success = function success(position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    var location = {
      lat: lat,
      lon: lon
    };
    (0,_dom__WEBPACK_IMPORTED_MODULE_1__.displayDataOnPage)({}, location);
    document.querySelector(".loading-container").style.display = "none";
  };
  var error = function error() {
    alert("Unable to retrieve your location, locating to Vienna");
    (0,_dom__WEBPACK_IMPORTED_MODULE_1__.displayDataOnPage)({
      target: [{
        value: "Vienna"
      }],
      preventDefault: function preventDefault() {}
    });
  };
  navigator.geolocation.getCurrentPosition(success, error);
}
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map