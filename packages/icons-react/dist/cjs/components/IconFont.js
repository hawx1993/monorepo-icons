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

// src/components/IconFont.tsx
var IconFont_exports = {};
__export(IconFont_exports, {
  default: () => create
});
module.exports = __toCommonJS(IconFont_exports);
var React = __toESM(require("react"));
var import_Icon = __toESM(require("./Icon"));
var customCache = /* @__PURE__ */ new Set();
function isValidCustomScriptUrl(scriptUrl) {
  return Boolean(
    typeof scriptUrl === "string" && scriptUrl.length && !customCache.has(scriptUrl)
  );
}
function createScriptUrlElements(scriptUrls, index = 0) {
  const currentScriptUrl = scriptUrls[index];
  if (isValidCustomScriptUrl(currentScriptUrl)) {
    const script = document.createElement("script");
    script.setAttribute("src", currentScriptUrl);
    script.setAttribute("data-namespace", currentScriptUrl);
    if (scriptUrls.length > index + 1) {
      script.onload = () => {
        createScriptUrlElements(scriptUrls, index + 1);
      };
      script.onerror = () => {
        createScriptUrlElements(scriptUrls, index + 1);
      };
    }
    customCache.add(currentScriptUrl);
    document.body.appendChild(script);
  }
}
function create(options = {}) {
  const { scriptUrl, extraCommonProps = {} } = options;
  if (scriptUrl && typeof document !== "undefined" && typeof window !== "undefined" && typeof document.createElement === "function") {
    if (Array.isArray(scriptUrl)) {
      createScriptUrlElements(scriptUrl.reverse());
    } else {
      createScriptUrlElements([scriptUrl]);
    }
  }
  const Iconfont = React.forwardRef((props, ref) => {
    const { type, children, ...restProps } = props;
    let content = null;
    if (props.type) {
      content = /* @__PURE__ */ React.createElement("use", { xlinkHref: `#${type}` });
    }
    if (children) {
      content = children;
    }
    return /* @__PURE__ */ React.createElement(import_Icon.default, { ...extraCommonProps, ...restProps, ref }, content);
  });
  Iconfont.displayName = "Iconfont";
  return Iconfont;
}
