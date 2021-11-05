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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbENlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztVQ3hCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ044QjtBQUNHOztBQUVqQztBQUNBO0FBQ0E7QUFDQTs7O0FBR0Esc0JBQXNCLGtEQUFNO0FBQzVCOztBQUVBLFlBQVksaURBQUk7QUFDaEIsWUFBWSxpREFBSTtBQUNoQixZQUFZLGlEQUFJO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gscUJBQXFCLGlEQUFJO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixlQUFlO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixlQUFlO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBLFciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ub0RvLUxpc3QvLi9zcmMvbXlEYXRlLmpzIiwid2VicGFjazovL1RvRG8tTGlzdC8uL3NyYy9wcmludC5qcyIsIndlYnBhY2s6Ly9Ub0RvLUxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vVG9Eby1MaXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9Ub0RvLUxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9Ub0RvLUxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9Ub0RvLUxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXlEYXRlIHtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLmRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIH1cbiAgICBjb21wYXJlRGF5KHN0cmluZyl7XG4gICAgICAgIC8vdmFyIGxpbmVDb2wgPSBzdHJpbmcuc3BsaXQoJy0nKTtcbiAgICAgICAgdmFyIGRpYSA9IHRoaXMuZGF0ZVN0cmluZygyLCBzdHJpbmcpO1xuICAgICAgICAvL3ZhciBtb3V0aFRhc2sgPSBOdW1iZXIucGFyc2VJbnQobGluZUNvbFsxXSk7XG4gICAgICAgIC8vdmFyIHllYXJUYXNrID0gTnVtYmVyLnBhcnNlSW50KGxpbmVDb2xbMF0pO1xuICAgICAgICByZXR1cm4gZGlhO1xuICAgIH1cbiAgICBjb21wYXJlTW91dGgoc3RyaW5nKXtcbiAgICAgICAgdmFyIG1vdXRoID0gdGhpcy5kYXRlU3RyaW5nKDEsIHN0cmluZyk7XG4gICAgICAgIHJldHVybiBtb3V0aDtcbiAgICB9IFxuICAgIGNvbXBhcmVZZWFyKHN0cmluZyl7XG4gICAgICAgIHZhciB5ZWFyID0gdGhpcy5kYXRlU3RyaW5nKDAsIHN0cmluZyk7XG4gICAgICAgIHJldHVybiB5ZWFyO1xuICAgIH1cbiAgICBkYXRlU3RyaW5nKHBvc2l0aW9uLCBzdHJpbmcpe1xuICAgICAgICB2YXIgbGluZUNvbCA9IHN0cmluZy5zcGxpdCgnLScpO1xuICAgICAgICByZXR1cm4gTnVtYmVyLnBhcnNlSW50KGxpbmVDb2xbcG9zaXRpb25dKTtcbiAgICB9ICAgXG4gICAgdmFsaWRhdGlvbkRhdGUoc3RyaW5nKXtcbiAgICAgICAgaWYodGhpcy5kYXRlLmdldFVUQ0Z1bGxZZWFyKCkgPj0gdGhpcy5jb21wYXJlWWVhcihzdHJpbmcpKXtcbiAgICAgICAgICAgIGlmKHRoaXMuZGF0ZS5nZXRNb250aCgpKzEgPj0gdGhpcy5jb21wYXJlTW91dGgoc3RyaW5nKSl7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5kYXRlLmdldFVUQ0RheSgpID49IHRoaXMuY29tcGFyZURheShzdHJpbmcpKXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2sge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBkYXRlKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmRhdGUgPSBkYXRlO1xuICAgIHRoaXMuc3RhdHVzID0gZmFsc2U7XG4gIH1cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG4gIGdldERhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0ZTtcbiAgfVxuICBnZXRTdGF0dXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdHVzO1xuICB9XG4gIHNldE5hbWUodmFsdWUpIHtcbiAgICB0aGlzLm5hbWUgPSB2YWx1ZTtcbiAgfVxuICBzZXREYXRlKHZhbHVlKSB7XG4gICAgdGhpcy5kYXRlID0gdmFsdWU7XG4gIH1cbiAgc2V0U3RhdHVzKHZhbHVlKSB7XG4gICAgdGhpcy5zdGF0dXMgPSB2YWx1ZTtcbiAgfVxufVxuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBUYXNrIGZyb20gXCIuL3ByaW50LmpzXCI7XG5pbXBvcnQgTXlEYXRlIGZyb20gXCIuL215RGF0ZS5qc1wiO1xuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInNlY3Rpb24uY29udGVudFwiKTtcbmNvbnN0IGxpc3RUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdi5saXN0XCIpO1xuY29uc3QgdG9kYXlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYSN0b2RheVwiKTtcbmNvbnN0IGZvcm1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2LmZvcm1zJyk7XG5cblxuY29uc3QgbXlXYXlEYXRlID0gbmV3IE15RGF0ZSgpOyBcbmNvbnN0IGh3ID0gW107XG5cbmh3WzBdID0gbmV3IFRhc2soJ0VzdHVkYXIgUnVieScsICcyMDIxLTEwLTI5Jyk7XG5od1sxXSA9IG5ldyBUYXNrKCdFc3R1ZGFyIFNpc3RlbWFzIGRlIENvbXVuaWNhw6fDo28gSUknLCAnMjAyMS0xMC0zMCcpO1xuaHdbMl0gPSBuZXcgVGFzaygnRXN0dWRhciBQRFMnLCAnMjAyMS0xMC0yOScpO1xuaHdbMl0uc2V0U3RhdHVzKHRydWUpO1xubGV0IHBvc2l0aW9uID0gaHcubGVuZ3RoO1xuLy9mb3Jtc1xuY29uc3QgaW5wdXROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0I25hbWVUYXNrXCIpO1xuY29uc3QgaW5wdXREYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0I2RhdGVUYXNrXCIpO1xuY29uc3QgYWRkVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b24jYWRkXCIpO1xuXG5hZGRUYXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93RGF0YSk7XG5cbmZ1bmN0aW9uIHNob3dEYXRhKCkge1xuICBpZiAoaW5wdXROYW1lLnZhbHVlLmxlbmd0aCA9PSAwIHx8IGlucHV0RGF0ZS52YWx1ZS5sZW5ndGggPT0gMCkge1xuICAgIHdpbmRvdy5hbGVydChcIltFcnJvcl0gWW91IG5lZWQgdG8gd3JpdGUgc29tZXRoaW5nXCIpO1xuICB9ZWxzZXtcbiAgICBjb25zdCB0b0RvID0gbmV3IFRhc2soaW5wdXROYW1lLnZhbHVlLCBpbnB1dERhdGUudmFsdWUpO1xuICAgIGh3LnB1c2godG9Ebyk7XG4gICAgY29uc29sZS5sb2coaHcubGVuZ3RoKTtcbiAgICBhZGRMaXN0Q2hpbGQoaHdbcG9zaXRpb25dLmdldE5hbWUoKSwgaHdbcG9zaXRpb25dLmdldERhdGUoKSwgcG9zaXRpb24pO1xuICAgIFxuICAgIHBvc2l0aW9uKys7XG4gIH1cbn1cbmZ1bmN0aW9uIGFkZExpc3RDaGlsZChuYW1lLCBkYXRlLCBwb3Mpe1xuICBsaXN0VGFzay5hcHBlbmRDaGlsZChwdXRJdE9uTGlzdChpdGVtXzAocG9zKSwgaXRlbV8xKG5hbWUpLCBpdGVtXzIoZGF0ZSkpKTtcbn1cbmZ1bmN0aW9uIGl0ZW1fMChwb3MpIHtcbiAgY29uc3QgY2hlY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjaGVjay5jbGFzc0xpc3QuYWRkKFwiY2hlY2tcIik7XG4gIGNoZWNrLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGh3W3Bvc10uZ2V0U3RhdHVzKCkgPT09IGZhbHNlKSB7XG4gICAgICBod1twb3NdLnNldFN0YXR1cyh0cnVlKTtcbiAgICAgIGNoZWNrLmNsYXNzTGlzdC5hZGQoXCJjaGVjay1kb25lXCIpO1xuICAgICAgaHcuc3BsaWNlKHBvcywgMSk7ICAgXG4gICAgICBhbGxUYXNrKCk7ICBcbiAgICB9IGVsc2Uge1xuICAgICAgaHdbcG9zXS5zZXRTdGF0dXMoZmFsc2UpO1xuICAgICAgY2hlY2suaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgIGNoZWNrLmNsYXNzTGlzdC5hZGQoXCJjaGVja1wiKTsgICAgICAgXG4gICAgfVxuICB9O1xuICByZXR1cm4gY2hlY2s7XG59XG5mdW5jdGlvbiBpdGVtXzEobmFtZVRhc2spIHtcbiAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgbmFtZS5pbm5lckhUTUwgPSBuYW1lVGFzaztcbiAgcmV0dXJuIG5hbWU7XG59XG5mdW5jdGlvbiBpdGVtXzIoZGF0ZVRhc2spIHtcbiAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgZGF0ZS5pbm5lckhUTUwgPSBkYXRlVGFzaztcbiAgcmV0dXJuIGRhdGU7XG59XG5cbmZ1bmN0aW9uIHB1dEl0T25MaXN0KGl0ZW0wLCBpdGVtMSwgaXRlbTIpIHtcbiAgY29uc3QgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRhc2suY2xhc3NMaXN0LmFkZChcInRhc2tcIik7XG4gIHRhc2suYXBwZW5kQ2hpbGQoaXRlbTApO1xuICB0YXNrLmFwcGVuZENoaWxkKGl0ZW0xKTtcbiAgdGFzay5hcHBlbmRDaGlsZChpdGVtMik7XG4gIHJldHVybiB0YXNrO1xufVxuXG50b2RheUJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24oKXtcbiAgbGlzdFRhc2suaW5uZXJIVE1MID0gJyc7XG4gIGZvcm1zLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIGNvbnNvbGUubG9nKG15V2F5RGF0ZS5kYXRlLmdldERhdGUoKSk7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBody5sZW5ndGg7IGkrKyl7XG4gICAgY29uc29sZS5sb2coaSk7XG4gICAgaWYobXlXYXlEYXRlLmRhdGUuZ2V0RGF0ZSgpID09IG15V2F5RGF0ZS5jb21wYXJlRGF5KGh3W2ldLmdldERhdGUoKSkpe1xuICAgICAgY29uc29sZS5sb2coJ3Bvc2l0aW9uJyk7XG4gICAgICBjb25zb2xlLmxvZyhpKTtcbiAgICAgIGNvbnNvbGUubG9nKGkpO1xuICAgICAgaWYoaHdbaV0uZ2V0U3RhdHVzKCkgPT0gZmFsc2Upe1xuICAgICAgICBjb25zb2xlLmxvZyhod1tpXS5nZXRTdGF0dXMoKSk7XG4gICAgICAgIGFkZExpc3RDaGlsZChod1tpXS5nZXROYW1lKCksIGh3W2ldLmdldERhdGUoKSwgaSk7XG4gICAgICB9XG4gICAgICBcbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIGFsbFRhc2soKXtcbiAgbGlzdFRhc2suaW5uZXJIVE1MID0gJyc7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBody5sZW5ndGg7IGkrKyl7XG4gICAgYWRkTGlzdENoaWxkKGh3W2ldLmdldE5hbWUoKSwgaHdbaV0uZ2V0RGF0ZSgpLCBpKTtcbiAgfVxufVxuIGFsbFRhc2soKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=