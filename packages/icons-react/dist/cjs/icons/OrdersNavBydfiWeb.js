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

// src/icons/OrdersNavBydfiWeb.tsx
var OrdersNavBydfiWeb_exports = {};
__export(OrdersNavBydfiWeb_exports, {
  default: () => OrdersNavBydfiWeb_default
});
module.exports = __toCommonJS(OrdersNavBydfiWeb_exports);
var React = __toESM(require("react"));
var import_OrdersNavBydfiWeb = __toESM(require("@byd-next/icons-svg/es/asn/OrdersNavBydfiWeb"));
var import_HeavenIcon = __toESM(require("../components/HeavenIcon"));
var OrdersNavBydfiWeb = (props, ref) => /* @__PURE__ */ React.createElement(import_HeavenIcon.default, { ...props, ref, icon: import_OrdersNavBydfiWeb.default });
OrdersNavBydfiWeb.displayName = "OrdersNavBydfiWeb";
var OrdersNavBydfiWeb_default = React.forwardRef(OrdersNavBydfiWeb);
