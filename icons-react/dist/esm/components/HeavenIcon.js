import _objectSpread from "@babel/runtime/helpers/objectSpread2";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "tooltip", "twoToneColor"];
import * as React from "react";
import classNames from "classnames";
import { Tooltip } from "antd";
import Context from "./Context";
import ReactIcon from "./IconBase";
import { getTwoToneColor, setTwoToneColor } from "./twoTonePrimaryColor";
import { normalizeTwoToneColors } from "../utils";
import { jsx as _jsx } from "react/jsx-runtime";
// Initial setting
setTwoToneColor("#1890ff");

// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/34757#issuecomment-488848720

var Icon = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var className = props.className,
    icon = props.icon,
    spin = props.spin,
    rotate = props.rotate,
    tabIndex = props.tabIndex,
    onClick = props.onClick,
    tooltip = props.tooltip,
    twoToneColor = props.twoToneColor,
    restProps = _objectWithoutProperties(props, _excluded);
  var _React$useContext = React.useContext(Context),
    _React$useContext$pre = _React$useContext.prefixCls,
    prefixCls = _React$useContext$pre === void 0 ? "anticon" : _React$useContext$pre;
  var classString = classNames(prefixCls, _defineProperty(_defineProperty({}, "".concat(prefixCls, "-").concat(icon.name), !!icon.name), "".concat(prefixCls, "-spin"), !!spin || icon.name === "loading"), className);
  var iconTabIndex = tabIndex;
  if (iconTabIndex === undefined && onClick) {
    iconTabIndex = -1;
  }
  var svgStyle = rotate ? {
    msTransform: "rotate(".concat(rotate, "deg)"),
    transform: "rotate(".concat(rotate, "deg)")
  } : undefined;
  var _normalizeTwoToneColo = normalizeTwoToneColors(twoToneColor),
    _normalizeTwoToneColo2 = _slicedToArray(_normalizeTwoToneColo, 2),
    primaryColor = _normalizeTwoToneColo2[0],
    secondaryColor = _normalizeTwoToneColo2[1];
  return /*#__PURE__*/_jsx("span", _objectSpread(_objectSpread({
    role: "img",
    "aria-label": icon.name
  }, restProps), {}, {
    ref: ref,
    tabIndex: iconTabIndex,
    onClick: onClick,
    className: classString,
    children: tooltip ? /*#__PURE__*/_jsx(Tooltip, {
      title: tooltip,
      children: /*#__PURE__*/_jsx(ReactIcon, {
        icon: icon,
        primaryColor: primaryColor,
        secondaryColor: secondaryColor,
        style: svgStyle
      })
    }) : /*#__PURE__*/_jsx(ReactIcon, {
      icon: icon,
      primaryColor: primaryColor,
      secondaryColor: secondaryColor,
      style: svgStyle
    })
  }));
});
Icon.displayName = "HeavenIcon";
Icon.getTwoToneColor = getTwoToneColor;
Icon.setTwoToneColor = setTwoToneColor;
export default Icon;