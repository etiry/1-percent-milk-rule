/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const config = (() => {

  const configInfo = {
    appId: 'f1b5ac37',
    appKey:'b1c54486120f8a90b98e7dbf36794f7f'
  }

  return {
    configInfo
  }

 })();
 
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (config);

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
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ "./config.js");


const Food = (data) => {
  const getFood = (myFood) => {
    if (!myFood.parsed) {
      return myFood.hints[0].food;
    }
    return myFood.parsed[0].food;
  };

  const calculateProteinRatio = (food) => {
    const onePercentMilkRatio = (3.37 * 4) / 42;
    const foodRatio = (food.nutrients.PROCNT * 4) / food.nutrients.ENERC_KCAL;

    if (foodRatio >= onePercentMilkRatio) {
      return true;
    }

    return false;
  };

  const getFoodDetails = (food) => ({
    id: food.foodId,
    name: food.label,
    image: food.image,
    calories: food.nutrients.ENERC_KCAL,
    protein: food.nutrients.PROCNT,
    isProteinFood: calculateProteinRatio(food),
  });

  const food = getFoodDetails(getFood(data));

  return {
    food,
  };
};

const setFood = (data) => Food(data);

const renderResult = (food) => {
  const result = document.querySelector('.result');

  result.replaceChildren();

  const flexedBicepEmoji = String.fromCodePoint('0x1F4AA');
  const sadFaceEmoji = String.fromCodePoint('0x1F641');

  const proteinFood = food.food.isProteinFood ? `Protein food! ${flexedBicepEmoji}` : `Not a protein food ${sadFaceEmoji}`;

  const template = `
    <div class="col-md-4 offset-md-4 p-4">
      <h1 class="p-4">${proteinFood}</h1>
      <img src=${food.food.image} class="rounded-circle">
      <h3 class="p-4">${food.food.name}</h3>
    </div>`;

  result.innerHTML = template;
};

const fetchFood = (query) => {
  const url = `https://api.edamam.com/api/food-database/v2/parser?app_id=${_config__WEBPACK_IMPORTED_MODULE_0__["default"].configInfo.appId}&app_key=${_config__WEBPACK_IMPORTED_MODULE_0__["default"].configInfo.appKey}&ingr=${query}`;

  fetch(url, {
    method: 'GET',
    dataType: 'json',
  })
    .then((response) => response.json())
    .then((data) => setFood(data))
    .then((result) => renderResult(result));
};

document.querySelector('#btnFetch').addEventListener('click', () => {
  const searchTerm = document.querySelector('#search-query').value;

  fetchFood(searchTerm);

  document.querySelector('#search-query').value = '';
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxFQUFFO0FBQ0Y7QUFDQSxpRUFBZSxNQUFNOzs7Ozs7VUNickI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ04rQjs7QUFFL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWlFLGlCQUFpQiwwQkFBMEIsYUFBYTs7QUFFekg7QUFDQTtBQUNBLHdCQUF3QixZQUFZO0FBQ3BDLGlCQUFpQixpQkFBaUI7QUFDbEMsd0JBQXdCLGVBQWU7QUFDdkM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDJFQUEyRSwrQ0FBTSxrQkFBa0IsV0FBVywrQ0FBTSxtQkFBbUIsUUFBUSxNQUFNOztBQUVySjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb25maWcuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNvbmZpZyA9ICgoKSA9PiB7XG5cbiAgY29uc3QgY29uZmlnSW5mbyA9IHtcbiAgICBhcHBJZDogJ2YxYjVhYzM3JyxcbiAgICBhcHBLZXk6J2IxYzU0NDg2MTIwZjhhOTBiOThlN2RiZjM2Nzk0ZjdmJ1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBjb25maWdJbmZvXG4gIH1cblxuIH0pKCk7XG4gXG5leHBvcnQgZGVmYXVsdCBjb25maWc7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZyc7XG5cbmNvbnN0IEZvb2QgPSAoZGF0YSkgPT4ge1xuICBjb25zdCBnZXRGb29kID0gKG15Rm9vZCkgPT4ge1xuICAgIGlmICghbXlGb29kLnBhcnNlZCkge1xuICAgICAgcmV0dXJuIG15Rm9vZC5oaW50c1swXS5mb29kO1xuICAgIH1cbiAgICByZXR1cm4gbXlGb29kLnBhcnNlZFswXS5mb29kO1xuICB9O1xuXG4gIGNvbnN0IGNhbGN1bGF0ZVByb3RlaW5SYXRpbyA9IChmb29kKSA9PiB7XG4gICAgY29uc3Qgb25lUGVyY2VudE1pbGtSYXRpbyA9ICgzLjM3ICogNCkgLyA0MjtcbiAgICBjb25zdCBmb29kUmF0aW8gPSAoZm9vZC5udXRyaWVudHMuUFJPQ05UICogNCkgLyBmb29kLm51dHJpZW50cy5FTkVSQ19LQ0FMO1xuXG4gICAgaWYgKGZvb2RSYXRpbyA+PSBvbmVQZXJjZW50TWlsa1JhdGlvKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgY29uc3QgZ2V0Rm9vZERldGFpbHMgPSAoZm9vZCkgPT4gKHtcbiAgICBpZDogZm9vZC5mb29kSWQsXG4gICAgbmFtZTogZm9vZC5sYWJlbCxcbiAgICBpbWFnZTogZm9vZC5pbWFnZSxcbiAgICBjYWxvcmllczogZm9vZC5udXRyaWVudHMuRU5FUkNfS0NBTCxcbiAgICBwcm90ZWluOiBmb29kLm51dHJpZW50cy5QUk9DTlQsXG4gICAgaXNQcm90ZWluRm9vZDogY2FsY3VsYXRlUHJvdGVpblJhdGlvKGZvb2QpLFxuICB9KTtcblxuICBjb25zdCBmb29kID0gZ2V0Rm9vZERldGFpbHMoZ2V0Rm9vZChkYXRhKSk7XG5cbiAgcmV0dXJuIHtcbiAgICBmb29kLFxuICB9O1xufTtcblxuY29uc3Qgc2V0Rm9vZCA9IChkYXRhKSA9PiBGb29kKGRhdGEpO1xuXG5jb25zdCByZW5kZXJSZXN1bHQgPSAoZm9vZCkgPT4ge1xuICBjb25zdCByZXN1bHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzdWx0Jyk7XG5cbiAgcmVzdWx0LnJlcGxhY2VDaGlsZHJlbigpO1xuXG4gIGNvbnN0IGZsZXhlZEJpY2VwRW1vamkgPSBTdHJpbmcuZnJvbUNvZGVQb2ludCgnMHgxRjRBQScpO1xuICBjb25zdCBzYWRGYWNlRW1vamkgPSBTdHJpbmcuZnJvbUNvZGVQb2ludCgnMHgxRjY0MScpO1xuXG4gIGNvbnN0IHByb3RlaW5Gb29kID0gZm9vZC5mb29kLmlzUHJvdGVpbkZvb2QgPyBgUHJvdGVpbiBmb29kISAke2ZsZXhlZEJpY2VwRW1vaml9YCA6IGBOb3QgYSBwcm90ZWluIGZvb2QgJHtzYWRGYWNlRW1vaml9YDtcblxuICBjb25zdCB0ZW1wbGF0ZSA9IGBcbiAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTQgb2Zmc2V0LW1kLTQgcC00XCI+XG4gICAgICA8aDEgY2xhc3M9XCJwLTRcIj4ke3Byb3RlaW5Gb29kfTwvaDE+XG4gICAgICA8aW1nIHNyYz0ke2Zvb2QuZm9vZC5pbWFnZX0gY2xhc3M9XCJyb3VuZGVkLWNpcmNsZVwiPlxuICAgICAgPGgzIGNsYXNzPVwicC00XCI+JHtmb29kLmZvb2QubmFtZX08L2gzPlxuICAgIDwvZGl2PmA7XG5cbiAgcmVzdWx0LmlubmVySFRNTCA9IHRlbXBsYXRlO1xufTtcblxuY29uc3QgZmV0Y2hGb29kID0gKHF1ZXJ5KSA9PiB7XG4gIGNvbnN0IHVybCA9IGBodHRwczovL2FwaS5lZGFtYW0uY29tL2FwaS9mb29kLWRhdGFiYXNlL3YyL3BhcnNlcj9hcHBfaWQ9JHtjb25maWcuY29uZmlnSW5mby5hcHBJZH0mYXBwX2tleT0ke2NvbmZpZy5jb25maWdJbmZvLmFwcEtleX0maW5ncj0ke3F1ZXJ5fWA7XG5cbiAgZmV0Y2godXJsLCB7XG4gICAgbWV0aG9kOiAnR0VUJyxcbiAgICBkYXRhVHlwZTogJ2pzb24nLFxuICB9KVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKChkYXRhKSA9PiBzZXRGb29kKGRhdGEpKVxuICAgIC50aGVuKChyZXN1bHQpID0+IHJlbmRlclJlc3VsdChyZXN1bHQpKTtcbn07XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG5GZXRjaCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBjb25zdCBzZWFyY2hUZXJtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlYXJjaC1xdWVyeScpLnZhbHVlO1xuXG4gIGZldGNoRm9vZChzZWFyY2hUZXJtKTtcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoLXF1ZXJ5JykudmFsdWUgPSAnJztcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9