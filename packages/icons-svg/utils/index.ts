import camelCase from "lodash.camelcase";
import upperFirst from "lodash.upperfirst";
import { pipe } from "ramda";
import { ThemeType, ThemeTypeUpperCase } from "../templates/types";
const { readdirSync } = require("fs");
const { join } = require("path");

export interface IdentifierMeta {
  name: string;
  themeSuffix?: ThemeTypeUpperCase;
}

export interface GetIdentifierType {
  (meta: IdentifierMeta): string;
}

export const getIdentifier: GetIdentifierType = pipe(
  ({ name, themeSuffix }: IdentifierMeta) =>
    name + (themeSuffix ? `-${themeSuffix}` : ""),
  camelCase,
  upperFirst
);
export const svgDirList = readdirSync(join(__dirname, "../svg")).filter(
  (item: ThemeType) => !item.includes(".")
);
