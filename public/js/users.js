/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/users.js":
/*!*******************************!*\
  !*** ./resources/js/users.js ***!
  \*******************************/
/***/ (() => {

eval("Livewire.on(\"deleteTriggered\", function (id, name) {\n  var proceed = confirm(\"Are you sure you want to delete \".concat(name));\n\n  if (proceed) {\n    Livewire.emit(\"delete\", id);\n  }\n});\nwindow.addEventListener('user-deleted', function (event) {\n  alert(\"\".concat(event.detail.user_name, \" was deleted!\"));\n});\nLivewire.on(\"triggerCreate\", function () {\n  $(\"#user-modal\").modal(\"show\");\n});\nwindow.addEventListener(\"user-saved\", function (event) {\n  $(\"#user-modal\").modal(\"hide\");\n  alert(\"User \".concat(event.detail.user_name, \" was \").concat(event.detail.action, \"!\"));\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdXNlcnMuanM/ZWJjZSJdLCJuYW1lcyI6WyJMaXZld2lyZSIsIm9uIiwiaWQiLCJuYW1lIiwicHJvY2VlZCIsImNvbmZpcm0iLCJlbWl0Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiYWxlcnQiLCJkZXRhaWwiLCJ1c2VyX25hbWUiLCIkIiwibW9kYWwiLCJhY3Rpb24iXSwibWFwcGluZ3MiOiJBQUFBQSxRQUFRLENBQUNDLEVBQVQsQ0FBWSxpQkFBWixFQUErQixVQUFDQyxFQUFELEVBQUtDLElBQUwsRUFBYztBQUN6QyxNQUFNQyxPQUFPLEdBQUdDLE9BQU8sMkNBQW9DRixJQUFwQyxFQUF2Qjs7QUFFQSxNQUFJQyxPQUFKLEVBQWE7QUFDVEosSUFBQUEsUUFBUSxDQUFDTSxJQUFULENBQWMsUUFBZCxFQUF3QkosRUFBeEI7QUFDSDtBQUNKLENBTkQ7QUFPQUssTUFBTSxDQUFDQyxnQkFBUCxDQUF3QixjQUF4QixFQUF3QyxVQUFDQyxLQUFELEVBQVc7QUFDL0NDLEVBQUFBLEtBQUssV0FBSUQsS0FBSyxDQUFDRSxNQUFOLENBQWFDLFNBQWpCLG1CQUFMO0FBQ0gsQ0FGRDtBQUlBWixRQUFRLENBQUNDLEVBQVQsQ0FBWSxlQUFaLEVBQTZCLFlBQU07QUFDL0JZLEVBQUFBLENBQUMsQ0FBQyxhQUFELENBQUQsQ0FBaUJDLEtBQWpCLENBQXVCLE1BQXZCO0FBQ0gsQ0FGRDtBQUtBUCxNQUFNLENBQUNDLGdCQUFQLENBQXdCLFlBQXhCLEVBQXNDLFVBQUNDLEtBQUQsRUFBVztBQUM3Q0ksRUFBQUEsQ0FBQyxDQUFDLGFBQUQsQ0FBRCxDQUFpQkMsS0FBakIsQ0FBdUIsTUFBdkI7QUFDQUosRUFBQUEsS0FBSyxnQkFBU0QsS0FBSyxDQUFDRSxNQUFOLENBQWFDLFNBQXRCLGtCQUF1Q0gsS0FBSyxDQUFDRSxNQUFOLENBQWFJLE1BQXBELE9BQUw7QUFDSCxDQUhEIiwic291cmNlc0NvbnRlbnQiOlsiTGl2ZXdpcmUub24oXCJkZWxldGVUcmlnZ2VyZWRcIiwgKGlkLCBuYW1lKSA9PiB7XHJcbiAgICBjb25zdCBwcm9jZWVkID0gY29uZmlybShgQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSAke25hbWV9YCk7XHJcblxyXG4gICAgaWYgKHByb2NlZWQpIHtcclxuICAgICAgICBMaXZld2lyZS5lbWl0KFwiZGVsZXRlXCIsIGlkKTtcclxuICAgIH1cclxufSk7XHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd1c2VyLWRlbGV0ZWQnLCAoZXZlbnQpID0+IHtcclxuICAgIGFsZXJ0KGAke2V2ZW50LmRldGFpbC51c2VyX25hbWV9IHdhcyBkZWxldGVkIWApO1xyXG59KVxyXG5cclxuTGl2ZXdpcmUub24oXCJ0cmlnZ2VyQ3JlYXRlXCIsICgpID0+IHtcclxuICAgICQoXCIjdXNlci1tb2RhbFwiKS5tb2RhbChcInNob3dcIik7XHJcbn0pO1xyXG5cclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwidXNlci1zYXZlZFwiLCAoZXZlbnQpID0+IHtcclxuICAgICQoXCIjdXNlci1tb2RhbFwiKS5tb2RhbChcImhpZGVcIik7XHJcbiAgICBhbGVydChgVXNlciAke2V2ZW50LmRldGFpbC51c2VyX25hbWV9IHdhcyAke2V2ZW50LmRldGFpbC5hY3Rpb259IWApO1xyXG59KTsiXSwiZmlsZSI6Ii4vcmVzb3VyY2VzL2pzL3VzZXJzLmpzLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/js/users.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/js/users.js"]();
/******/ 	
/******/ })()
;