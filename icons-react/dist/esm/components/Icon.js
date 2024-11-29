import _objectSpread from "@babel/runtime/helpers/objectSpread2";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["className", "component", "viewBox", "spin", "rotate", "tabIndex", "onClick", "children"];
import * as React from 'react';
import classNames from 'classnames';
import Context from "./Context";
import { svgBaseProps, warning, useInsertStyles } from "../utils";
import { jsx as _jsx } from "react/jsx-runtime";
var Icon = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var className = props.className,
    Component = props.component,
    viewBox = props.viewBox,
    spin = props.spin,
    rotate = props.rotate,
    tabIndex = props.tabIndex,
    onClick = props.onClick,
    children = props.children,
    restProps = _objectWithoutProperties(props, _excluded);
  warning(Boolean(Component || children), 'Should have `component` prop or `children`.');
  useInsertStyles();
  var _React$useContext = React.useContext(Context),
    _React$useContext$pre = _React$useContext.prefixCls,
    prefixCls = _React$useContext$pre === void 0 ? 'anticon' : _React$useContext$pre;
  var classString = classNames(prefixCls, className);
  var svgClassString = classNames(_defineProperty({}, "".concat(prefixCls, "-spin"), !!spin));
  var svgStyle = rotate ? {
    msTransform: "rotate(".concat(rotate, "deg)"),
    transform: "rotate(".concat(rotate, "deg)")
  } : undefined;
  var innerSvgProps = _objectSpread(_objectSpread({}, svgBaseProps), {}, {
    className: svgClassString,
    style: svgStyle,
    viewBox: viewBox
  });
  if (!viewBox) {
    delete innerSvgProps.viewBox;
  }

  // component > children
  var renderInnerNode = function renderInnerNode() {
    if (Component) {
      // @ts-ignore
      return /*#__PURE__*/_jsx(Component, _objectSpread(_objectSpread({}, innerSvgProps), {}, {
        children: children
      }));
    }
    if (children) {
      warning(Boolean(viewBox) || React.Children.count(children) === 1 && /*#__PURE__*/React.isValidElement(children) && React.Children.only(children).type === 'use', 'Make sure that you provide correct `viewBox`' + ' prop (default `0 0 1024 1024`) to the icon.');
      return /*#__PURE__*/_jsx("svg", _objectSpread(_objectSpread({}, innerSvgProps), {}, {
        viewBox: viewBox,
        children: children
      }));
    }
    return null;
  };
  var iconTabIndex = tabIndex;
  if (iconTabIndex === undefined && onClick) {
    iconTabIndex = -1;
  }
  return /*#__PURE__*/_jsx("span", _objectSpread(_objectSpread({
    role: "img"
  }, restProps), {}, {
    ref: ref,
    tabIndex: iconTabIndex,
    onClick: onClick,
    className: classString,
    children: renderInnerNode()
  }));
});
Icon.displayName = 'HeavenIcon';
export default Icon;