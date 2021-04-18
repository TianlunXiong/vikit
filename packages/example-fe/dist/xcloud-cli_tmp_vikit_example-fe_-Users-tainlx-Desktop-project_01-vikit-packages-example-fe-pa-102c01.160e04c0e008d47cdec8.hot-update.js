self["webpackHotUpdate_vikit_example_fe"]("xcloud-cli_tmp_vikit_example-fe_-Users-tainlx-Desktop-project_01-vikit-packages-example-fe-pa-102c01",{

/***/ "../xstyle/src/background/index.tsx":
/*!******************************************!*\
  !*** ../xstyle/src/background/index.tsx ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.id);

function background(props) {
  return `
        ${props.backgroundImage ? `background-image: ${props.backgroundImage};` : ''}
        ${props.backgroundSize ? `background-size: ${props.backgroundSize};` : ''}
        ${props.backgroundPosition ? `background-position: ${props.backgroundPosition};` : ''}
        ${props.backgroundRepeat ? `background-repeat: ${props.backgroundRepeat};` : ''}
    `;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (background);

const currentExports = __react_refresh_utils__.getModuleExports(module.id);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.id);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.id].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}

/***/ }),

/***/ "../xstyle/src/border/index.tsx":
/*!**************************************!*\
  !*** ../xstyle/src/border/index.tsx ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.id);

function border(props) {
  return `
        ${props.border ? `border: ${props.border};` : ''}
        ${props.borderWidth ? `border-width: ${props.borderWidth};` : ''}
        ${props.borderStyle ? `border-style: ${props.borderStyle};` : ''}
        ${props.borderColor ? `border-color: ${props.borderColor};` : ''}
        ${props.borderRadius ? `border-radius: ${props.borderRadius};` : ''}
        ${props.borderTop ? `border-top: ${props.borderTop};` : ''}
        ${props.borderTopWidth ? `border-top-width: ${props.borderTopWidth};` : ''}
        ${props.borderTopStyle ? `border-top-style: ${props.borderTopStyle};` : ''}
        ${props.borderTopColor ? `border-top-color: ${props.borderTopColor};` : ''}
        ${props.borderTopLeftRadius ? `border-left-top-radius: ${props.borderTopLeftRadius};` : ''}
        ${props.borderTopRightRadius ? `border-left-right-radius: ${props.borderTopRightRadius};` : ''}
        ${props.borderRight ? `border-right: ${props.borderRight};` : ''}
        ${props.borderRightWidth ? `border-right-width: ${props.borderRightWidth};` : ''}
        ${props.borderRightStyle ? `border-right-style: ${props.borderRightStyle};` : ''}
        ${props.borderRightColor ? `border-right-color: ${props.borderRightColor};` : ''}
        ${props.borderBottom ? `border-bottom: ${props.borderBottom};` : ''}
        ${props.borderBottomWidth ? `border-bottom-width: ${props.borderBottomWidth};` : ''}
        ${props.borderBottomStyle ? `border-bottom-style: ${props.borderBottomStyle};` : ''}
        ${props.borderBottomColor ? `border-bottom-color: ${props.borderBottomColor};` : ''}
        ${props.borderBottomLeftRadius ? `border-bottom-top-radius: ${props.borderBottomLeftRadius};` : ''}
        ${props.borderBottomRightRadius ? `border-bottom-right-radius: ${props.borderBottomRightRadius};` : ''}
        ${props.borderLeft ? `border-left: ${props.borderLeft};` : ''}
        ${props.borderLeftWidth ? `border-left-width: ${props.borderLeftWidth};` : ''}
        ${props.borderLeftStyle ? `border-left-style: ${props.borderLeftStyle};` : ''}
        ${props.borderLeftColor ? `border-left-color: ${props.borderLeftColor};` : ''}
    `;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (border);

const currentExports = __react_refresh_utils__.getModuleExports(module.id);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.id);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.id].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}

/***/ }),

/***/ "../xstyle/src/box/index.tsx":
/*!***********************************!*\
  !*** ../xstyle/src/box/index.tsx ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../color */ "../xstyle/src/color/index.tsx");
/* harmony import */ var _space__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../space */ "../xstyle/src/space/index.tsx");
/* harmony import */ var _typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../typography */ "../xstyle/src/typography/index.tsx");
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layout */ "../xstyle/src/layout/index.tsx");
/* harmony import */ var _flexbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../flexbox */ "../xstyle/src/flexbox/index.tsx");
/* harmony import */ var _background__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../background */ "../xstyle/src/background/index.tsx");
/* harmony import */ var _border__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../border */ "../xstyle/src/border/index.tsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.id);









_border__WEBPACK_IMPORTED_MODULE_6__.BorderProps & _background__WEBPACK_IMPORTED_MODULE_5__.BackgroundProps;
const Box = (0,styled_components__WEBPACK_IMPORTED_MODULE_7__.default)('div')`
   ${_color__WEBPACK_IMPORTED_MODULE_0__.default}
   ${_space__WEBPACK_IMPORTED_MODULE_1__.default}
   ${_typography__WEBPACK_IMPORTED_MODULE_2__.default}
   ${_layout__WEBPACK_IMPORTED_MODULE_3__.default}
   ${_flexbox__WEBPACK_IMPORTED_MODULE_4__.default}
   ${_background__WEBPACK_IMPORTED_MODULE_5__.default}
   ${_border__WEBPACK_IMPORTED_MODULE_6__.default}
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Box);

const currentExports = __react_refresh_utils__.getModuleExports(module.id);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.id);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.id].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}

/***/ })

});
//# sourceMappingURL=xcloud-cli_tmp_vikit_example-fe_-Users-tainlx-Desktop-project_01-vikit-packages-example-fe-pa-102c01.160e04c0e008d47cdec8.hot-update.js.map