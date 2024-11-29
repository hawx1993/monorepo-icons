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

// src/icons/index.tsx
var icons_exports = {};
__export(icons_exports, {
  AffiliateNavBydfiWebIcon: () => import_AffiliateNavBydfiWeb.default,
  AssetsNavBydfiWebIcon: () => import_AssetsNavBydfiWeb.default,
  DashboardUserNavBydfiWebIcon: () => import_DashboardUserNavBydfiWeb.default,
  OrdersNavBydfiWebIcon: () => import_OrdersNavBydfiWeb.default,
  P2PNavActiveBydfiWebIcon: () => import_P2PNavActiveBydfiWeb.default,
  P2PNavBydfiWebIcon: () => import_P2PNavBydfiWeb.default,
  UserResearchActiveBydfiWebIcon: () => import_UserResearchActiveBydfiWeb.default,
  UserSearchNavBydfiWebIcon: () => import_UserSearchNavBydfiWeb.default
});
module.exports = __toCommonJS(icons_exports);
var import_AffiliateNavBydfiWeb = __toESM(require("./AffiliateNavBydfiWeb"));
var import_AssetsNavBydfiWeb = __toESM(require("./AssetsNavBydfiWeb"));
var import_DashboardUserNavBydfiWeb = __toESM(require("./DashboardUserNavBydfiWeb"));
var import_OrdersNavBydfiWeb = __toESM(require("./OrdersNavBydfiWeb"));
var import_P2PNavActiveBydfiWeb = __toESM(require("./P2PNavActiveBydfiWeb"));
var import_P2PNavBydfiWeb = __toESM(require("./P2PNavBydfiWeb"));
var import_UserResearchActiveBydfiWeb = __toESM(require("./UserResearchActiveBydfiWeb"));
var import_UserSearchNavBydfiWeb = __toESM(require("./UserSearchNavBydfiWeb"));
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AffiliateNavBydfiWebIcon,
  AssetsNavBydfiWebIcon,
  DashboardUserNavBydfiWebIcon,
  OrdersNavBydfiWebIcon,
  P2PNavActiveBydfiWebIcon,
  P2PNavBydfiWebIcon,
  UserResearchActiveBydfiWebIcon,
  UserSearchNavBydfiWebIcon
});
