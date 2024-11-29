var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/utils.ts
var utils_exports = {};
__export(utils_exports, {
  generate: () => generate,
  getSecondaryColor: () => getSecondaryColor,
  iconStyles: () => iconStyles,
  isIconDefinition: () => isIconDefinition,
  normalizeAttrs: () => normalizeAttrs,
  normalizeTwoToneColors: () => normalizeTwoToneColors,
  svgBaseProps: () => svgBaseProps,
  useInsertStyles: () => useInsertStyles,
  warning: () => warning
});
module.exports = __toCommonJS(utils_exports);
var import_colors = require("@ant-design/colors");
var import_react = __toESM(require("react"));
var import_warning = __toESM(require("rc-util/lib/warning"));
var import_dynamicCSS = require("rc-util/lib/Dom/dynamicCSS");
var import_Context = __toESM(require("./components/Context"));
function warning(valid, message) {
  (0, import_warning.default)(valid, `[@perfma/icons] ${message}`);
}
function isIconDefinition(target) {
  return typeof target === "object" && typeof target.name === "string" && typeof target.theme === "string" && (typeof target.icon === "object" || typeof target.icon === "function");
}
function normalizeAttrs(attrs = {}) {
  return Object.keys(attrs).reduce((acc, key) => {
    const val = attrs[key];
    switch (key) {
      case "class":
        acc.className = val;
        delete acc.class;
        break;
      default:
        acc[key] = val;
    }
    return acc;
  }, {});
}
function generate(node, key, rootProps) {
  if (!rootProps) {
    return import_react.default.createElement(
      node.tag,
      { key, ...normalizeAttrs(node.attrs) },
      (node.children || []).map(
        (child, index) => generate(child, `${key}-${node.tag}-${index}`)
      )
    );
  }
  return import_react.default.createElement(
    node.tag,
    {
      key,
      ...normalizeAttrs(node.attrs),
      ...rootProps
    },
    (node.children || []).map(
      (child, index) => generate(child, `${key}-${node.tag}-${index}`)
    )
  );
}
function getSecondaryColor(primaryColor) {
  return (0, import_colors.generate)(primaryColor)[0];
}
function normalizeTwoToneColors(twoToneColor) {
  if (!twoToneColor) {
    return [];
  }
  return Array.isArray(twoToneColor) ? twoToneColor : [twoToneColor];
}
var svgBaseProps = {
  width: "1em",
  height: "1em",
  fill: "currentColor",
  "aria-hidden": "true",
  focusable: "false"
};
var iconStyles = `
.anticon {
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`;
var useInsertStyles = (styleStr = iconStyles) => {
  const { csp } = (0, import_react.useContext)(import_Context.default);
  (0, import_react.useEffect)(() => {
    (0, import_dynamicCSS.updateCSS)(styleStr, "@@byd-next/icons", {
      prepend: true,
      csp
    });
  }, []);
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  generate,
  getSecondaryColor,
  iconStyles,
  isIconDefinition,
  normalizeAttrs,
  normalizeTwoToneColors,
  svgBaseProps,
  useInsertStyles,
  warning
});
