
(function() {
var __DEV__ = false;
var __fastpack_cache__ = {};

function __fastpack_require__(f) {
  if (__fastpack_cache__[f.name] === undefined) {
    __fastpack_cache__[f.name] = f();
  }
  return __fastpack_cache__[f.name];
}

function __fastpack_import__(f) {
  return new Promise((resolve, reject) => {
    try {
      resolve(__fastpack_require__(f));
    } catch (e) {
      reject(e);
    }
  });
}

/* index$$_$$1 */

// @flow
// The following test makes sure that builtin transpiler strips type annotations
// from inside JSX
const $i__index$$_$$1__Component = props =>  React.createElement("div", null, item =>  {
    
  }
  );

const $n__index$$_$$1 = { exports: {} };
})()
