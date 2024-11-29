import { readFileSync } from 'fs';
import { parallel, series } from 'gulp';
import { resolve } from 'path';
import { assignAttrsAtTag } from './plugins/svg2Definition/transforms';
import { remainFillConfig } from './plugins/svgo/presets';
import { clean, copy, generateEntry, generateIcons, generateInline } from './tasks/creators';
import { ExtractRegExp } from './tasks/creators/generateInline';
import { IconDefinition, ThemeType, ThemeTypeUpperCase } from './templates/types';
import { getIdentifier, svgDirList } from './utils';

const iconTemplate = readFileSync(resolve(__dirname, './templates/icon.ts.ejs'), 'utf8');

console.log('svgDirList', svgDirList);
function firstUpperCase(str: string) {
  return str.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase());
}
const commonGenerate = () => {
  return svgDirList.map((dir: ThemeType) => {
    return generateIcons({
      theme: `${dir}`,
      from: [`svg/${dir}/*.svg`],
      toDir: 'src/asn',
      svgoConfig: remainFillConfig,
      extraNodeTransformFactories: [assignAttrsAtTag('svg', { focusable: 'false' })],
      stringify: JSON.stringify,
      template: iconTemplate,
      mapToInterpolate: ({ name, content }) => ({
        identifier: getIdentifier({
          name,
          themeSuffix: firstUpperCase(dir) as ThemeTypeUpperCase,
        }),
        content,
      }),
      filename: ({ name }) =>
        getIdentifier({
          name,
          themeSuffix: firstUpperCase(dir) as ThemeTypeUpperCase,
        }),
    });
  });
};
export default series(
  // 1. clean
  clean(['src', 'inline-svg', 'es', 'lib']),

  parallel(
    // 2.1 copy helpers.ts, types.ts
    copy({
      from: ['templates/*.ts'],
      toDir: 'src',
    }),

    // 2.2 generate abstract node with the theme "filled"
    commonGenerate()
  ),
  parallel(
    // 3.1 generate entry file: src/index.ts
    generateEntry({
      entryName: 'index.ts',
      from: ['src/asn/*.ts'],
      toDir: 'src',
      banner: '// This index.ts file is generated automatically.\n',
      template: `export { default as <%= identifier %> } from '<%= path %>';`,
      mapToInterpolate: ({ name: identifier }) => ({
        identifier,
        path: `./asn/${identifier}`,
      }),
    }),

    // 3.2 generate inline SVG files
    generateInline({
      from: ['src/asn/*.ts'],
      toDir: ({ _meta }) => `inline-svg/${_meta && _meta.theme}`,
      getIconDefinitionFromSource: (content: string): IconDefinition => {
        const extract = ExtractRegExp.exec(content);
        if (extract === null || !extract[1]) {
          throw new Error('Failed to parse raw icon definition: ' + content);
        }
        return new Function(`return ${extract[1]}`)() as IconDefinition;
      },
    }),
    // 3.3 generate inline SVG files with namespace
    generateInline({
      from: ['src/asn/*.ts'],
      toDir: ({ _meta }) => `inline-namespaced-svg/${_meta && _meta.theme}`,
      getIconDefinitionFromSource: (content: string): IconDefinition => {
        const extract = ExtractRegExp.exec(content);
        if (extract === null || !extract[1]) {
          throw new Error('Failed to parse raw icon definition: ' + content);
        }
        return new Function(`return ${extract[1]}`)() as IconDefinition;
      },
      renderOptions: {
        extraSVGAttrs: { xmlns: 'http://www.w3.org/2000/svg' },
      },
    })
  )
);
