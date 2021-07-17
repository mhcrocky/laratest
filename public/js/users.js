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

eval("Livewire.on(\"deleteTriggered\", function (id, name) {\n  var proceed = confirm(\"Are you sure you want to delete \".concat(name));\n\n  if (proceed) {\n    Livewire.emit(\"delete\", id);\n  }\n});\nLivewire.on('user-deleted', function (data) {\n  alert(\"\".concat(data.user_name, \" was deleted!\"));\n});\nLivewire.on(\"triggerCreate\", function () {\n  $(\"#user-modal\").modal(\"show\");\n});\nLivewire.on(\"user-saved\", function (data) {\n  $(\"#user-modal\").modal(\"hide\");\n  alert(\"User \".concat(data.user_name, \" was \").concat(data.action, \"!\"));\n});\nLivewire.on(\"dataFetched\", function (user) {\n  $(\"#user-modal\").modal(\"show\");\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdXNlcnMuanM/ZWJjZSJdLCJuYW1lcyI6WyJMaXZld2lyZSIsIm9uIiwiaWQiLCJuYW1lIiwicHJvY2VlZCIsImNvbmZpcm0iLCJlbWl0IiwiZGF0YSIsImFsZXJ0IiwidXNlcl9uYW1lIiwiJCIsIm1vZGFsIiwiYWN0aW9uIiwidXNlciJdLCJtYXBwaW5ncyI6IkFBQUFBLFFBQVEsQ0FBQ0MsRUFBVCxDQUFZLGlCQUFaLEVBQStCLFVBQUNDLEVBQUQsRUFBS0MsSUFBTCxFQUFjO0FBQ3pDLE1BQU1DLE9BQU8sR0FBR0MsT0FBTywyQ0FBb0NGLElBQXBDLEVBQXZCOztBQUVBLE1BQUlDLE9BQUosRUFBYTtBQUNUSixJQUFBQSxRQUFRLENBQUNNLElBQVQsQ0FBYyxRQUFkLEVBQXdCSixFQUF4QjtBQUNIO0FBQ0osQ0FORDtBQVFBRixRQUFRLENBQUNDLEVBQVQsQ0FBWSxjQUFaLEVBQTRCLFVBQUNNLElBQUQsRUFBVTtBQUNsQ0MsRUFBQUEsS0FBSyxXQUFJRCxJQUFJLENBQUNFLFNBQVQsbUJBQUw7QUFDSCxDQUZEO0FBSUFULFFBQVEsQ0FBQ0MsRUFBVCxDQUFZLGVBQVosRUFBNkIsWUFBTTtBQUMvQlMsRUFBQUEsQ0FBQyxDQUFDLGFBQUQsQ0FBRCxDQUFpQkMsS0FBakIsQ0FBdUIsTUFBdkI7QUFDSCxDQUZEO0FBS0FYLFFBQVEsQ0FBQ0MsRUFBVCxDQUFZLFlBQVosRUFBMEIsVUFBQ00sSUFBRCxFQUFVO0FBQ2hDRyxFQUFBQSxDQUFDLENBQUMsYUFBRCxDQUFELENBQWlCQyxLQUFqQixDQUF1QixNQUF2QjtBQUNBSCxFQUFBQSxLQUFLLGdCQUFTRCxJQUFJLENBQUNFLFNBQWQsa0JBQStCRixJQUFJLENBQUNLLE1BQXBDLE9BQUw7QUFDSCxDQUhEO0FBS0FaLFFBQVEsQ0FBQ0MsRUFBVCxDQUFZLGFBQVosRUFBMkIsVUFBQ1ksSUFBRCxFQUFVO0FBQ25DSCxFQUFBQSxDQUFDLENBQUMsYUFBRCxDQUFELENBQWlCQyxLQUFqQixDQUF1QixNQUF2QjtBQUNELENBRkQiLCJzb3VyY2VzQ29udGVudCI6WyJMaXZld2lyZS5vbihcImRlbGV0ZVRyaWdnZXJlZFwiLCAoaWQsIG5hbWUpID0+IHtcclxuICAgIGNvbnN0IHByb2NlZWQgPSBjb25maXJtKGBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlICR7bmFtZX1gKTtcclxuXHJcbiAgICBpZiAocHJvY2VlZCkge1xyXG4gICAgICAgIExpdmV3aXJlLmVtaXQoXCJkZWxldGVcIiwgaWQpO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbkxpdmV3aXJlLm9uKCd1c2VyLWRlbGV0ZWQnLCAoZGF0YSkgPT4ge1xyXG4gICAgYWxlcnQoYCR7ZGF0YS51c2VyX25hbWV9IHdhcyBkZWxldGVkIWApO1xyXG59KVxyXG5cclxuTGl2ZXdpcmUub24oXCJ0cmlnZ2VyQ3JlYXRlXCIsICgpID0+IHtcclxuICAgICQoXCIjdXNlci1tb2RhbFwiKS5tb2RhbChcInNob3dcIik7XHJcbn0pO1xyXG5cclxuXHJcbkxpdmV3aXJlLm9uKFwidXNlci1zYXZlZFwiLCAoZGF0YSkgPT4ge1xyXG4gICAgJChcIiN1c2VyLW1vZGFsXCIpLm1vZGFsKFwiaGlkZVwiKTtcclxuICAgIGFsZXJ0KGBVc2VyICR7ZGF0YS51c2VyX25hbWV9IHdhcyAke2RhdGEuYWN0aW9ufSFgKTtcclxufSk7XHJcblxyXG5MaXZld2lyZS5vbihcImRhdGFGZXRjaGVkXCIsICh1c2VyKSA9PiB7XHJcbiAgJChcIiN1c2VyLW1vZGFsXCIpLm1vZGFsKFwic2hvd1wiKTtcclxufSk7Il0sImZpbGUiOiIuL3Jlc291cmNlcy9qcy91c2Vycy5qcy5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/js/users.js\n");

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