import * as HeavenIcons from '@perfma/icons';

const all = Object.keys(HeavenIcons)
  .map((n) =>
    n.replace(
      /(XseaIcon|CommonIcon|TestmaIcon|XchaosIcon|XshelterIcon|XfiregodIcon|XcrabIcon|ZeusIcon)$/,
      '',
    ),
  )
  .filter((n, i, arr) => arr.indexOf(n) === i);

export const categories = {
  iconfont: all,
};
// console.log('categories', categories);
export default categories;

export type Categories = typeof categories;
export type CategoriesKeys = keyof Categories;
