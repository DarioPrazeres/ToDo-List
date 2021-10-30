/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/myDate.js":
/*!***********************!*\
  !*** ./src/myDate.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MyDate)
/* harmony export */ });
class MyDate {
    constructor(){
        this.date = new Date();
    }
    compareDay(string){
        //var lineCol = string.split('-');
        var dia = this.dateString(2, string);
        //var mouthTask = Number.parseInt(lineCol[1]);
        //var yearTask = Number.parseInt(lineCol[0]);
        return dia;
    }
    compareMouth(string){
        var mouth = this.dateString(1, string);
        return mouth;
    } 
    compareYear(string){
        var year = this.dateString(0, string);
        return year;
    }
    dateString(position, string){
        var lineCol = string.split('-');
        return Number.parseInt(lineCol[position]);
    }   
    validationDate(string){
        if(this.date.getUTCFullYear() >= this.compareYear(string)){
            if(this.date.getMonth()+1 >= this.compareMouth(string)){
                if(this.date.getUTCDay() >= this.compareDay(string)){
                    return true;
                }
            }
        }else{
            return false;
        }
    }
}


/***/ }),

/***/ "./src/print.js":
/*!**********************!*\
  !*** ./src/print.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
class Task {
  constructor(name, date) {
    this.name = name;
    this.date = date;
    this.status = false;
  }
  getName() {
    return this.name;
  }
  getDate() {
    return this.date;
  }
  getStatus() {
    return this.status;
  }
  setName(value) {
    this.name = value;
  }
  setDate(value) {
    this.date = value;
  }
  setStatus(value) {
    this.status = value;
  }
}



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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _print_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./print.js */ "./src/print.js");
/* harmony import */ var _myDate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./myDate.js */ "./src/myDate.js");



const content = document.querySelector("section.content");
const listTask = document.querySelector("div.list");
const todayButton = document.querySelector("a#today");
const forms = document.querySelector('div.forms');

const dayToday = new Date();
const myWayDate = new _myDate_js__WEBPACK_IMPORTED_MODULE_1__["default"](); 
const hw = [];

hw[0] = new _print_js__WEBPACK_IMPORTED_MODULE_0__["default"]('Estudar Ruby', '2021-10-29');
hw[1] = new _print_js__WEBPACK_IMPORTED_MODULE_0__["default"]('Estudar Sistemas de Comunicação II', '2021-10-30');
hw[2] = new _print_js__WEBPACK_IMPORTED_MODULE_0__["default"]('Estudar PDS', '2021-10-29');
hw[2].setStatus(true);
let position = hw.length;
//forms
const inputName = document.querySelector("input#nameTask");
const inputDate = document.querySelector("input#dateTask");
const addTask = document.querySelector("button#add");

addTask.addEventListener("click", showData);

function showData() {
  if (inputName.value.length == 0 || inputDate.value.length == 0) {
    window.alert("[Error] You need to write something");
  }else{
    const toDo = new _print_js__WEBPACK_IMPORTED_MODULE_0__["default"](inputName.value, inputDate.value);
    hw.push(toDo);
    console.log(hw.length);
    addListChild(hw[position].getName(), hw[position].getDate(), position);
    
    position++;
  }
}
function addListChild(name, date, pos){
  listTask.appendChild(putItOnList(item_0(pos), item_1(name), item_2(date)));
}
function item_0(pos) {
  const check = document.createElement("div");
  check.classList.add("check");
  check.onclick = function () {
    if (hw[pos].getStatus() === false) {
      hw[pos].setStatus(true);
      check.classList.add("check-done");
      hw.splice(pos, 1);   
      allTask();  
    } else {
      hw[pos].setStatus(false);
      check.innerHTML = "";
      check.classList.add("check");
       
    }
  };
  return check;
}
function item_1(nameTask) {
  const name = document.createElement("h3");
  name.innerHTML = nameTask;

  return name;
}
function item_2(dateTask) {
  const date = document.createElement("h3");
  date.innerHTML = dateTask;
  return date;
}

function putItOnList(item0, item1, item2) {
  const task = document.createElement("div");
  //stylist
  task.classList.add("task");
  task.appendChild(item0);
  task.appendChild(item1);
  task.appendChild(item2);

  return task;
}

todayButton.onclick = function(){
  listTask.innerHTML = '';
  forms.style.display = 'none';
  console.log(myWayDate.date.getDate());
  for(let i = 0; i < hw.length; i++){
    console.log(i);
    if(myWayDate.date.getDate() == myWayDate.compareDay(hw[i].getDate())){
      console.log('position');
      console.log(i);
      console.log(i);
      if(hw[i].getStatus() == false){
        console.log(hw[i].getStatus());
        addListChild(hw[i].getName(), hw[i].getDate(), i);
      }
      
    }
  }
}
function allTask(){
  listTask.innerHTML = '';
  for(let i = 0; i < hw.length; i++){
    addListChild(hw[i].getName(), hw[i].getDate(), i);
  }
}
console.log('Dario Prazeres');
 allTask();
/*function checkItem(status){    
    const check = document.createElement('div'); 
    check.addEventListener('click', changeCheck(status));

    if(status === false){
        check.classList.add('check'); 
    }else{
        check.classList.add('check-done'); 
    }

    return check;
}
function changeCheck(status){
    if(status === false){
       return status; 
    }else{
       return status;
    }
}*/
 //console.log(dayToday.getDate());
  /*for(let i = 0; i <= hw.length-1; i++){
    const name = hw[i].getName();
    const date = hw[i].getDate();
    listTask.appendChild(putItOnList(item_0(position), item_1(name), item_2(date), item_3()));
    console.log('i am number');
    console.log(i);
    //console.log(hw[i].date);
    console.log(dayOfWeek);
    var dateFull = hw[i].date;
    var lineCol = dateFull.split('-');
    var diaTask = Number.parseInt(lineCol[2]);
    var mouthTask = Number.parseInt(lineCol[1]);
    var yearTask = Number.parseInt(lineCol[0]);
    //console.log(mouthTask);
    //console.log(yearTask);
    //console.log(diaTask);
    //console.log('mouth and day');
    
    //console.log(date.getUTCMonth()+1);
    
  }*/
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbENlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztVQ3hCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ044QjtBQUNHOztBQUVqQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQixrREFBTTtBQUM1Qjs7QUFFQSxZQUFZLGlEQUFJO0FBQ2hCLFlBQVksaURBQUk7QUFDaEIsWUFBWSxpREFBSTtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILHFCQUFxQixpREFBSTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsZUFBZTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsZUFBZTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxtQkFBbUIsa0JBQWtCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vVG9Eby1MaXN0Ly4vc3JjL215RGF0ZS5qcyIsIndlYnBhY2s6Ly9Ub0RvLUxpc3QvLi9zcmMvcHJpbnQuanMiLCJ3ZWJwYWNrOi8vVG9Eby1MaXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1RvRG8tTGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vVG9Eby1MaXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vVG9Eby1MaXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vVG9Eby1MaXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIE15RGF0ZSB7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5kYXRlID0gbmV3IERhdGUoKTtcbiAgICB9XG4gICAgY29tcGFyZURheShzdHJpbmcpe1xuICAgICAgICAvL3ZhciBsaW5lQ29sID0gc3RyaW5nLnNwbGl0KCctJyk7XG4gICAgICAgIHZhciBkaWEgPSB0aGlzLmRhdGVTdHJpbmcoMiwgc3RyaW5nKTtcbiAgICAgICAgLy92YXIgbW91dGhUYXNrID0gTnVtYmVyLnBhcnNlSW50KGxpbmVDb2xbMV0pO1xuICAgICAgICAvL3ZhciB5ZWFyVGFzayA9IE51bWJlci5wYXJzZUludChsaW5lQ29sWzBdKTtcbiAgICAgICAgcmV0dXJuIGRpYTtcbiAgICB9XG4gICAgY29tcGFyZU1vdXRoKHN0cmluZyl7XG4gICAgICAgIHZhciBtb3V0aCA9IHRoaXMuZGF0ZVN0cmluZygxLCBzdHJpbmcpO1xuICAgICAgICByZXR1cm4gbW91dGg7XG4gICAgfSBcbiAgICBjb21wYXJlWWVhcihzdHJpbmcpe1xuICAgICAgICB2YXIgeWVhciA9IHRoaXMuZGF0ZVN0cmluZygwLCBzdHJpbmcpO1xuICAgICAgICByZXR1cm4geWVhcjtcbiAgICB9XG4gICAgZGF0ZVN0cmluZyhwb3NpdGlvbiwgc3RyaW5nKXtcbiAgICAgICAgdmFyIGxpbmVDb2wgPSBzdHJpbmcuc3BsaXQoJy0nKTtcbiAgICAgICAgcmV0dXJuIE51bWJlci5wYXJzZUludChsaW5lQ29sW3Bvc2l0aW9uXSk7XG4gICAgfSAgIFxuICAgIHZhbGlkYXRpb25EYXRlKHN0cmluZyl7XG4gICAgICAgIGlmKHRoaXMuZGF0ZS5nZXRVVENGdWxsWWVhcigpID49IHRoaXMuY29tcGFyZVllYXIoc3RyaW5nKSl7XG4gICAgICAgICAgICBpZih0aGlzLmRhdGUuZ2V0TW9udGgoKSsxID49IHRoaXMuY29tcGFyZU1vdXRoKHN0cmluZykpe1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuZGF0ZS5nZXRVVENEYXkoKSA+PSB0aGlzLmNvbXBhcmVEYXkoc3RyaW5nKSl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIHtcbiAgY29uc3RydWN0b3IobmFtZSwgZGF0ZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5kYXRlID0gZGF0ZTtcbiAgICB0aGlzLnN0YXR1cyA9IGZhbHNlO1xuICB9XG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuICBnZXREYXRlKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGU7XG4gIH1cbiAgZ2V0U3RhdHVzKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXR1cztcbiAgfVxuICBzZXROYW1lKHZhbHVlKSB7XG4gICAgdGhpcy5uYW1lID0gdmFsdWU7XG4gIH1cbiAgc2V0RGF0ZSh2YWx1ZSkge1xuICAgIHRoaXMuZGF0ZSA9IHZhbHVlO1xuICB9XG4gIHNldFN0YXR1cyh2YWx1ZSkge1xuICAgIHRoaXMuc3RhdHVzID0gdmFsdWU7XG4gIH1cbn1cblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgVGFzayBmcm9tIFwiLi9wcmludC5qc1wiO1xuaW1wb3J0IE15RGF0ZSBmcm9tIFwiLi9teURhdGUuanNcIjtcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzZWN0aW9uLmNvbnRlbnRcIik7XG5jb25zdCBsaXN0VGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYubGlzdFwiKTtcbmNvbnN0IHRvZGF5QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImEjdG9kYXlcIik7XG5jb25zdCBmb3JtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5mb3JtcycpO1xuXG5jb25zdCBkYXlUb2RheSA9IG5ldyBEYXRlKCk7XG5jb25zdCBteVdheURhdGUgPSBuZXcgTXlEYXRlKCk7IFxuY29uc3QgaHcgPSBbXTtcblxuaHdbMF0gPSBuZXcgVGFzaygnRXN0dWRhciBSdWJ5JywgJzIwMjEtMTAtMjknKTtcbmh3WzFdID0gbmV3IFRhc2soJ0VzdHVkYXIgU2lzdGVtYXMgZGUgQ29tdW5pY2HDp8OjbyBJSScsICcyMDIxLTEwLTMwJyk7XG5od1syXSA9IG5ldyBUYXNrKCdFc3R1ZGFyIFBEUycsICcyMDIxLTEwLTI5Jyk7XG5od1syXS5zZXRTdGF0dXModHJ1ZSk7XG5sZXQgcG9zaXRpb24gPSBody5sZW5ndGg7XG4vL2Zvcm1zXG5jb25zdCBpbnB1dE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXQjbmFtZVRhc2tcIik7XG5jb25zdCBpbnB1dERhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXQjZGF0ZVRhc2tcIik7XG5jb25zdCBhZGRUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvbiNhZGRcIik7XG5cbmFkZFRhc2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dEYXRhKTtcblxuZnVuY3Rpb24gc2hvd0RhdGEoKSB7XG4gIGlmIChpbnB1dE5hbWUudmFsdWUubGVuZ3RoID09IDAgfHwgaW5wdXREYXRlLnZhbHVlLmxlbmd0aCA9PSAwKSB7XG4gICAgd2luZG93LmFsZXJ0KFwiW0Vycm9yXSBZb3UgbmVlZCB0byB3cml0ZSBzb21ldGhpbmdcIik7XG4gIH1lbHNle1xuICAgIGNvbnN0IHRvRG8gPSBuZXcgVGFzayhpbnB1dE5hbWUudmFsdWUsIGlucHV0RGF0ZS52YWx1ZSk7XG4gICAgaHcucHVzaCh0b0RvKTtcbiAgICBjb25zb2xlLmxvZyhody5sZW5ndGgpO1xuICAgIGFkZExpc3RDaGlsZChod1twb3NpdGlvbl0uZ2V0TmFtZSgpLCBod1twb3NpdGlvbl0uZ2V0RGF0ZSgpLCBwb3NpdGlvbik7XG4gICAgXG4gICAgcG9zaXRpb24rKztcbiAgfVxufVxuZnVuY3Rpb24gYWRkTGlzdENoaWxkKG5hbWUsIGRhdGUsIHBvcyl7XG4gIGxpc3RUYXNrLmFwcGVuZENoaWxkKHB1dEl0T25MaXN0KGl0ZW1fMChwb3MpLCBpdGVtXzEobmFtZSksIGl0ZW1fMihkYXRlKSkpO1xufVxuZnVuY3Rpb24gaXRlbV8wKHBvcykge1xuICBjb25zdCBjaGVjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNoZWNrLmNsYXNzTGlzdC5hZGQoXCJjaGVja1wiKTtcbiAgY2hlY2sub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoaHdbcG9zXS5nZXRTdGF0dXMoKSA9PT0gZmFsc2UpIHtcbiAgICAgIGh3W3Bvc10uc2V0U3RhdHVzKHRydWUpO1xuICAgICAgY2hlY2suY2xhc3NMaXN0LmFkZChcImNoZWNrLWRvbmVcIik7XG4gICAgICBody5zcGxpY2UocG9zLCAxKTsgICBcbiAgICAgIGFsbFRhc2soKTsgIFxuICAgIH0gZWxzZSB7XG4gICAgICBod1twb3NdLnNldFN0YXR1cyhmYWxzZSk7XG4gICAgICBjaGVjay5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgY2hlY2suY2xhc3NMaXN0LmFkZChcImNoZWNrXCIpO1xuICAgICAgIFxuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGNoZWNrO1xufVxuZnVuY3Rpb24gaXRlbV8xKG5hbWVUYXNrKSB7XG4gIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIG5hbWUuaW5uZXJIVE1MID0gbmFtZVRhc2s7XG5cbiAgcmV0dXJuIG5hbWU7XG59XG5mdW5jdGlvbiBpdGVtXzIoZGF0ZVRhc2spIHtcbiAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgZGF0ZS5pbm5lckhUTUwgPSBkYXRlVGFzaztcbiAgcmV0dXJuIGRhdGU7XG59XG5cbmZ1bmN0aW9uIHB1dEl0T25MaXN0KGl0ZW0wLCBpdGVtMSwgaXRlbTIpIHtcbiAgY29uc3QgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIC8vc3R5bGlzdFxuICB0YXNrLmNsYXNzTGlzdC5hZGQoXCJ0YXNrXCIpO1xuICB0YXNrLmFwcGVuZENoaWxkKGl0ZW0wKTtcbiAgdGFzay5hcHBlbmRDaGlsZChpdGVtMSk7XG4gIHRhc2suYXBwZW5kQ2hpbGQoaXRlbTIpO1xuXG4gIHJldHVybiB0YXNrO1xufVxuXG50b2RheUJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24oKXtcbiAgbGlzdFRhc2suaW5uZXJIVE1MID0gJyc7XG4gIGZvcm1zLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIGNvbnNvbGUubG9nKG15V2F5RGF0ZS5kYXRlLmdldERhdGUoKSk7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBody5sZW5ndGg7IGkrKyl7XG4gICAgY29uc29sZS5sb2coaSk7XG4gICAgaWYobXlXYXlEYXRlLmRhdGUuZ2V0RGF0ZSgpID09IG15V2F5RGF0ZS5jb21wYXJlRGF5KGh3W2ldLmdldERhdGUoKSkpe1xuICAgICAgY29uc29sZS5sb2coJ3Bvc2l0aW9uJyk7XG4gICAgICBjb25zb2xlLmxvZyhpKTtcbiAgICAgIGNvbnNvbGUubG9nKGkpO1xuICAgICAgaWYoaHdbaV0uZ2V0U3RhdHVzKCkgPT0gZmFsc2Upe1xuICAgICAgICBjb25zb2xlLmxvZyhod1tpXS5nZXRTdGF0dXMoKSk7XG4gICAgICAgIGFkZExpc3RDaGlsZChod1tpXS5nZXROYW1lKCksIGh3W2ldLmdldERhdGUoKSwgaSk7XG4gICAgICB9XG4gICAgICBcbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIGFsbFRhc2soKXtcbiAgbGlzdFRhc2suaW5uZXJIVE1MID0gJyc7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBody5sZW5ndGg7IGkrKyl7XG4gICAgYWRkTGlzdENoaWxkKGh3W2ldLmdldE5hbWUoKSwgaHdbaV0uZ2V0RGF0ZSgpLCBpKTtcbiAgfVxufVxuY29uc29sZS5sb2coJ0RhcmlvIFByYXplcmVzJyk7XG4gYWxsVGFzaygpO1xuLypmdW5jdGlvbiBjaGVja0l0ZW0oc3RhdHVzKXsgICAgXG4gICAgY29uc3QgY2hlY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgXG4gICAgY2hlY2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGFuZ2VDaGVjayhzdGF0dXMpKTtcblxuICAgIGlmKHN0YXR1cyA9PT0gZmFsc2Upe1xuICAgICAgICBjaGVjay5jbGFzc0xpc3QuYWRkKCdjaGVjaycpOyBcbiAgICB9ZWxzZXtcbiAgICAgICAgY2hlY2suY2xhc3NMaXN0LmFkZCgnY2hlY2stZG9uZScpOyBcbiAgICB9XG5cbiAgICByZXR1cm4gY2hlY2s7XG59XG5mdW5jdGlvbiBjaGFuZ2VDaGVjayhzdGF0dXMpe1xuICAgIGlmKHN0YXR1cyA9PT0gZmFsc2Upe1xuICAgICAgIHJldHVybiBzdGF0dXM7IFxuICAgIH1lbHNle1xuICAgICAgIHJldHVybiBzdGF0dXM7XG4gICAgfVxufSovXG4gLy9jb25zb2xlLmxvZyhkYXlUb2RheS5nZXREYXRlKCkpO1xuICAvKmZvcihsZXQgaSA9IDA7IGkgPD0gaHcubGVuZ3RoLTE7IGkrKyl7XG4gICAgY29uc3QgbmFtZSA9IGh3W2ldLmdldE5hbWUoKTtcbiAgICBjb25zdCBkYXRlID0gaHdbaV0uZ2V0RGF0ZSgpO1xuICAgIGxpc3RUYXNrLmFwcGVuZENoaWxkKHB1dEl0T25MaXN0KGl0ZW1fMChwb3NpdGlvbiksIGl0ZW1fMShuYW1lKSwgaXRlbV8yKGRhdGUpLCBpdGVtXzMoKSkpO1xuICAgIGNvbnNvbGUubG9nKCdpIGFtIG51bWJlcicpO1xuICAgIGNvbnNvbGUubG9nKGkpO1xuICAgIC8vY29uc29sZS5sb2coaHdbaV0uZGF0ZSk7XG4gICAgY29uc29sZS5sb2coZGF5T2ZXZWVrKTtcbiAgICB2YXIgZGF0ZUZ1bGwgPSBod1tpXS5kYXRlO1xuICAgIHZhciBsaW5lQ29sID0gZGF0ZUZ1bGwuc3BsaXQoJy0nKTtcbiAgICB2YXIgZGlhVGFzayA9IE51bWJlci5wYXJzZUludChsaW5lQ29sWzJdKTtcbiAgICB2YXIgbW91dGhUYXNrID0gTnVtYmVyLnBhcnNlSW50KGxpbmVDb2xbMV0pO1xuICAgIHZhciB5ZWFyVGFzayA9IE51bWJlci5wYXJzZUludChsaW5lQ29sWzBdKTtcbiAgICAvL2NvbnNvbGUubG9nKG1vdXRoVGFzayk7XG4gICAgLy9jb25zb2xlLmxvZyh5ZWFyVGFzayk7XG4gICAgLy9jb25zb2xlLmxvZyhkaWFUYXNrKTtcbiAgICAvL2NvbnNvbGUubG9nKCdtb3V0aCBhbmQgZGF5Jyk7XG4gICAgXG4gICAgLy9jb25zb2xlLmxvZyhkYXRlLmdldFVUQ01vbnRoKCkrMSk7XG4gICAgXG4gIH0qLyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==