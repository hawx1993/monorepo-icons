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

// src/components/Icon.tsx
var Icon_exports = {};
__export(Icon_exports, {
  default: () => Icon_default
});
module.exports = __toCommonJS(Icon_exports);
var React = __toESM(require("react"));
var import_classnames = __toESM(require("classnames"));
var import_Context = __toESM(require("./Context"));
var import_utils = require("../utils");
var Icon = React.forwardRef(
  (props, ref) => {
    const {
      // affect outter <i>...</i>
      className,
      // affect inner <svg>...</svg>
      component: Component,
      viewBox,
      spin,
      rotate,
      tabIndex,
      onClick,
      // children
      children,
      ...restProps
    } = props;
    (0, import_utils.warning)(
      Boolean(Component || children),
      "Should have `component` prop or `children`."
    );
    (0, import_utils.useInsertStyles)();
    const { prefixCls = "anticon" } = React.useContext(import_Context.default);
    const classString = (0, import_classnames.default)(prefixCls, className);
    const svgClassString = (0, import_classnames.default)({
      [`${prefixCls}-spin`]: !!spin
    });
    const svgStyle = rotate ? {
      msTransform: `rotate(${rotate}deg)`,
      transform: `rotate(${rotate}deg)`
    } : void 0;
    const innerSvgProps = {
      ...import_utils.svgBaseProps,
      className: svgClassString,
      style: svgStyle,
      viewBox
    };
    if (!viewBox) {
      delete innerSvgProps.viewBox;
    }
    const renderInnerNode = () => {
      if (Component) {
        return /* @__PURE__ */ React.createElement(Component, { ...innerSvgProps }, children);
      }
      if (children) {
        (0, import_utils.warning)(
          Boolean(viewBox) || React.Children.count(children) === 1 && React.isValidElement(children) && React.Children.only(children).type === "use",
          "Make sure that you provide correct `viewBox` prop (default `0 0 1024 1024`) to the icon."
        );
        return /* @__PURE__ */ React.createElement("svg", { ...innerSvgProps, viewBox }, children);
      }
      return null;
    };
    let iconTabIndex = tabIndex;
    if (iconTabIndex === void 0 && onClick) {
      iconTabIndex = -1;
    }
    return /* @__PURE__ */ React.createElement(
      "span",
      {
        role: "img",
        ...restProps,
        ref,
        tabIndex: iconTabIndex,
        onClick,
        className: classString
      },
      renderInnerNode()
    );
  }
);
Icon.displayName = "HeavenIcon";
var Icon_default = Icon;
