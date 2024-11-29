import { ICON_FONT_CONFIG } from './constants';
import { svgDirList } from '../utils';

const getActualIconList = () => {
  return ICON_FONT_CONFIG.map((item) => item.name);
};
const allTrueIconListFolders = getActualIconList();

const isArrayEqual = svgDirList.every(
  (item: string) => allTrueIconListFolders.indexOf(item) > -1
);
if (!isArrayEqual) {
  console.error('[IconFont]svg folder invalid 😭');
  process.exit(1);
} else {
  console.info('[IconFont]svg folder valid 😁');
}
