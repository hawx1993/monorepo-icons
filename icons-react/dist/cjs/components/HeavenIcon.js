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

// src/components/HeavenIcon.tsx
var HeavenIcon_exports = {};
__export(HeavenIcon_exports, {
  default: () => HeavenIcon_default
});
module.exports = __toCommonJS(HeavenIcon_exports);
var React = __toESM(require("react"));
var import_classnames = __toESM(require("classnames"));
var import_antd = require("antd");
var import_Context = __toESM(require("./Context"));
var import_IconBase = __toESM(require("./IconBase"));
var import_twoTonePrimaryColor = require("./twoTonePrimaryColor");
var import_utils = require("../utils");
(0, import_twoTonePrimaryColor.setTwoToneColor)("#1890ff");
var Icon = React.forwardRef(
  (props, ref) => {
    const {
      // affect outter <i>...</i>
      className,
      // affect inner <svg>...</svg>
      icon,
      spin,
      rotate,
      tabIndex,
      onClick,
      tooltip,
      // other
      twoToneColor,
      ...restProps
    } = props;
    const { prefixCls = "anticon" } = React.useContext(import_Context.default);
    const classString = (0, import_classnames.default)(
      prefixCls,
      {
        [`${prefixCls}-${icon.name}`]: !!icon.name,
        [`${prefixCls}-spin`]: !!spin || icon.name === "loading"
      },
      className
    );
    let iconTabIndex = tabIndex;
    if (iconTabIndex === void 0 && onClick) {
      iconTabIndex = -1;
    }
    const svgStyle = rotate ? {
      msTransform: `rotate(${rotate}deg)`,
      transform: `rotate(${rotate}deg)`
    } : void 0;
    const [primaryColor, secondaryColor] = (0, import_utils.normalizeTwoToneColors)(twoToneColor);
    return /* @__PURE__ */ React.createElement(
      "span",
      {
        role: "img",
        "aria-label": icon.name,
        ...restProps,
        ref,
        tabIndex: iconTabIndex,
        onClick,
        className: classString
      },
      tooltip ? /* @__PURE__ */ React.createElement(import_antd.Tooltip, { title: tooltip }, /* @__PURE__ */ React.createElement(
        import_IconBase.default,
        {
          icon,
          primaryColor,
          secondaryColor,
          style: svgStyle
        }
      )) : /* @__PURE__ */ React.createElement(
        import_IconBase.default,
        {
          icon,
          primaryColor,
          secondaryColor,
          style: svgStyle
        }
      )
    );
  }
);
Icon.displayName = "HeavenIcon";
Icon.getTwoToneColor = import_twoTonePrimaryColor.getTwoToneColor;
Icon.setTwoToneColor = import_twoTonePrimaryColor.setTwoToneColor;
var HeavenIcon_default = Icon;
