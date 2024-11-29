'use strict';

const path = require('path');
const fs = require('fs');
const globby = require('globby');
import { svgDirList } from '../utils';

const list: any[] = [];

for (const theme of svgDirList) {
  globby
    .sync(`../svg/${theme}/*.svg`, { cwd: __dirname })
    .forEach((p: string) => {
      const parsed = path.parse(p);
      const { name } = parsed;
      list.push({ name, theme });
    });
}

fs.writeFileSync(
  path.resolve(__dirname, './digest.txt'),
  list
    .map(({ name, theme }) => `${name}-${theme}`)
    .sort()
    .join('\n'),
  'utf8'
);
