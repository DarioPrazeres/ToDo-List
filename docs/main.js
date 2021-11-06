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
        var dia = this.dateString(2, string);
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
 allTask();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDL0JlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztVQ3hCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ044QjtBQUNHOztBQUVqQztBQUNBO0FBQ0E7QUFDQTs7O0FBR0Esc0JBQXNCLGtEQUFNO0FBQzVCOztBQUVBLFlBQVksaURBQUk7QUFDaEIsWUFBWSxpREFBSTtBQUNoQixZQUFZLGlEQUFJO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gscUJBQXFCLGlEQUFJO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixlQUFlO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixlQUFlO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBLFciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ub0RvLUxpc3QvLi9zcmMvbXlEYXRlLmpzIiwid2VicGFjazovL1RvRG8tTGlzdC8uL3NyYy9wcmludC5qcyIsIndlYnBhY2s6Ly9Ub0RvLUxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vVG9Eby1MaXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9Ub0RvLUxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9Ub0RvLUxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9Ub0RvLUxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXlEYXRlIHtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLmRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIH1cbiAgICBjb21wYXJlRGF5KHN0cmluZyl7XG4gICAgICAgIHZhciBkaWEgPSB0aGlzLmRhdGVTdHJpbmcoMiwgc3RyaW5nKTtcbiAgICAgICAgcmV0dXJuIGRpYTtcbiAgICB9XG4gICAgY29tcGFyZU1vdXRoKHN0cmluZyl7XG4gICAgICAgIHZhciBtb3V0aCA9IHRoaXMuZGF0ZVN0cmluZygxLCBzdHJpbmcpO1xuICAgICAgICByZXR1cm4gbW91dGg7XG4gICAgfSBcbiAgICBjb21wYXJlWWVhcihzdHJpbmcpe1xuICAgICAgICB2YXIgeWVhciA9IHRoaXMuZGF0ZVN0cmluZygwLCBzdHJpbmcpO1xuICAgICAgICByZXR1cm4geWVhcjtcbiAgICB9XG4gICAgZGF0ZVN0cmluZyhwb3NpdGlvbiwgc3RyaW5nKXtcbiAgICAgICAgdmFyIGxpbmVDb2wgPSBzdHJpbmcuc3BsaXQoJy0nKTtcbiAgICAgICAgcmV0dXJuIE51bWJlci5wYXJzZUludChsaW5lQ29sW3Bvc2l0aW9uXSk7XG4gICAgfSAgIFxuICAgIHZhbGlkYXRpb25EYXRlKHN0cmluZyl7XG4gICAgICAgIGlmKHRoaXMuZGF0ZS5nZXRVVENGdWxsWWVhcigpID49IHRoaXMuY29tcGFyZVllYXIoc3RyaW5nKSl7XG4gICAgICAgICAgICBpZih0aGlzLmRhdGUuZ2V0TW9udGgoKSsxID49IHRoaXMuY29tcGFyZU1vdXRoKHN0cmluZykpe1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuZGF0ZS5nZXRVVENEYXkoKSA+PSB0aGlzLmNvbXBhcmVEYXkoc3RyaW5nKSl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIHtcbiAgY29uc3RydWN0b3IobmFtZSwgZGF0ZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5kYXRlID0gZGF0ZTtcbiAgICB0aGlzLnN0YXR1cyA9IGZhbHNlO1xuICB9XG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuICBnZXREYXRlKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGU7XG4gIH1cbiAgZ2V0U3RhdHVzKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXR1cztcbiAgfVxuICBzZXROYW1lKHZhbHVlKSB7XG4gICAgdGhpcy5uYW1lID0gdmFsdWU7XG4gIH1cbiAgc2V0RGF0ZSh2YWx1ZSkge1xuICAgIHRoaXMuZGF0ZSA9IHZhbHVlO1xuICB9XG4gIHNldFN0YXR1cyh2YWx1ZSkge1xuICAgIHRoaXMuc3RhdHVzID0gdmFsdWU7XG4gIH1cbn1cblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgVGFzayBmcm9tIFwiLi9wcmludC5qc1wiO1xuaW1wb3J0IE15RGF0ZSBmcm9tIFwiLi9teURhdGUuanNcIjtcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzZWN0aW9uLmNvbnRlbnRcIik7XG5jb25zdCBsaXN0VGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYubGlzdFwiKTtcbmNvbnN0IHRvZGF5QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImEjdG9kYXlcIik7XG5jb25zdCBmb3JtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5mb3JtcycpO1xuXG5cbmNvbnN0IG15V2F5RGF0ZSA9IG5ldyBNeURhdGUoKTsgXG5jb25zdCBodyA9IFtdO1xuXG5od1swXSA9IG5ldyBUYXNrKCdFc3R1ZGFyIFJ1YnknLCAnMjAyMS0xMC0yOScpO1xuaHdbMV0gPSBuZXcgVGFzaygnRXN0dWRhciBTaXN0ZW1hcyBkZSBDb211bmljYcOnw6NvIElJJywgJzIwMjEtMTAtMzAnKTtcbmh3WzJdID0gbmV3IFRhc2soJ0VzdHVkYXIgUERTJywgJzIwMjEtMTAtMjknKTtcbmh3WzJdLnNldFN0YXR1cyh0cnVlKTtcbmxldCBwb3NpdGlvbiA9IGh3Lmxlbmd0aDtcbi8vZm9ybXNcbmNvbnN0IGlucHV0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dCNuYW1lVGFza1wiKTtcbmNvbnN0IGlucHV0RGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dCNkYXRlVGFza1wiKTtcbmNvbnN0IGFkZFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uI2FkZFwiKTtcblxuYWRkVGFzay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd0RhdGEpO1xuXG5mdW5jdGlvbiBzaG93RGF0YSgpIHtcbiAgaWYgKGlucHV0TmFtZS52YWx1ZS5sZW5ndGggPT0gMCB8fCBpbnB1dERhdGUudmFsdWUubGVuZ3RoID09IDApIHtcbiAgICB3aW5kb3cuYWxlcnQoXCJbRXJyb3JdIFlvdSBuZWVkIHRvIHdyaXRlIHNvbWV0aGluZ1wiKTtcbiAgfWVsc2V7XG4gICAgY29uc3QgdG9EbyA9IG5ldyBUYXNrKGlucHV0TmFtZS52YWx1ZSwgaW5wdXREYXRlLnZhbHVlKTtcbiAgICBody5wdXNoKHRvRG8pO1xuICAgIGNvbnNvbGUubG9nKGh3Lmxlbmd0aCk7XG4gICAgYWRkTGlzdENoaWxkKGh3W3Bvc2l0aW9uXS5nZXROYW1lKCksIGh3W3Bvc2l0aW9uXS5nZXREYXRlKCksIHBvc2l0aW9uKTtcbiAgICBcbiAgICBwb3NpdGlvbisrO1xuICB9XG59XG5mdW5jdGlvbiBhZGRMaXN0Q2hpbGQobmFtZSwgZGF0ZSwgcG9zKXtcbiAgbGlzdFRhc2suYXBwZW5kQ2hpbGQocHV0SXRPbkxpc3QoaXRlbV8wKHBvcyksIGl0ZW1fMShuYW1lKSwgaXRlbV8yKGRhdGUpKSk7XG59XG5mdW5jdGlvbiBpdGVtXzAocG9zKSB7XG4gIGNvbnN0IGNoZWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY2hlY2suY2xhc3NMaXN0LmFkZChcImNoZWNrXCIpO1xuICBjaGVjay5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChod1twb3NdLmdldFN0YXR1cygpID09PSBmYWxzZSkge1xuICAgICAgaHdbcG9zXS5zZXRTdGF0dXModHJ1ZSk7XG4gICAgICBjaGVjay5jbGFzc0xpc3QuYWRkKFwiY2hlY2stZG9uZVwiKTtcbiAgICAgIGh3LnNwbGljZShwb3MsIDEpOyAgIFxuICAgICAgYWxsVGFzaygpOyAgXG4gICAgfSBlbHNlIHtcbiAgICAgIGh3W3Bvc10uc2V0U3RhdHVzKGZhbHNlKTtcbiAgICAgIGNoZWNrLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICBjaGVjay5jbGFzc0xpc3QuYWRkKFwiY2hlY2tcIik7ICAgICAgIFxuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGNoZWNrO1xufVxuZnVuY3Rpb24gaXRlbV8xKG5hbWVUYXNrKSB7XG4gIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIG5hbWUuaW5uZXJIVE1MID0gbmFtZVRhc2s7XG4gIHJldHVybiBuYW1lO1xufVxuZnVuY3Rpb24gaXRlbV8yKGRhdGVUYXNrKSB7XG4gIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIGRhdGUuaW5uZXJIVE1MID0gZGF0ZVRhc2s7XG4gIHJldHVybiBkYXRlO1xufVxuXG5mdW5jdGlvbiBwdXRJdE9uTGlzdChpdGVtMCwgaXRlbTEsIGl0ZW0yKSB7XG4gIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0YXNrLmNsYXNzTGlzdC5hZGQoXCJ0YXNrXCIpO1xuICB0YXNrLmFwcGVuZENoaWxkKGl0ZW0wKTtcbiAgdGFzay5hcHBlbmRDaGlsZChpdGVtMSk7XG4gIHRhc2suYXBwZW5kQ2hpbGQoaXRlbTIpO1xuICByZXR1cm4gdGFzaztcbn1cblxudG9kYXlCdXR0b24ub25jbGljayA9IGZ1bmN0aW9uKCl7XG4gIGxpc3RUYXNrLmlubmVySFRNTCA9ICcnO1xuICBmb3Jtcy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBjb25zb2xlLmxvZyhteVdheURhdGUuZGF0ZS5nZXREYXRlKCkpO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgaHcubGVuZ3RoOyBpKyspe1xuICAgIGNvbnNvbGUubG9nKGkpO1xuICAgIGlmKG15V2F5RGF0ZS5kYXRlLmdldERhdGUoKSA9PSBteVdheURhdGUuY29tcGFyZURheShod1tpXS5nZXREYXRlKCkpKXtcbiAgICAgIGNvbnNvbGUubG9nKCdwb3NpdGlvbicpO1xuICAgICAgY29uc29sZS5sb2coaSk7XG4gICAgICBjb25zb2xlLmxvZyhpKTtcbiAgICAgIGlmKGh3W2ldLmdldFN0YXR1cygpID09IGZhbHNlKXtcbiAgICAgICAgY29uc29sZS5sb2coaHdbaV0uZ2V0U3RhdHVzKCkpO1xuICAgICAgICBhZGRMaXN0Q2hpbGQoaHdbaV0uZ2V0TmFtZSgpLCBod1tpXS5nZXREYXRlKCksIGkpO1xuICAgICAgfVxuICAgICAgXG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiBhbGxUYXNrKCl7XG4gIGxpc3RUYXNrLmlubmVySFRNTCA9ICcnO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgaHcubGVuZ3RoOyBpKyspe1xuICAgIGFkZExpc3RDaGlsZChod1tpXS5nZXROYW1lKCksIGh3W2ldLmdldERhdGUoKSwgaSk7XG4gIH1cbn1cbiBhbGxUYXNrKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9