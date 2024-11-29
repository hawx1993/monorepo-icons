import React from 'react';
import cls from 'classnames';
import Palette from './MainColorPalette';
import './colors.less';

const MainColor = (props) => {
  const { dark } = props;

  const colors = [
    {
      name: 'blue',
      english: 'Blue',
      chinese: '品牌色',
      description: '包容、科技、普惠',
    },
  ];
  const colorCls = cls('color-palettes', {
    'color-palettes-dark': !!dark,
  });
  return (
    <div className={colorCls}>
      {colors.map((color) => (
        <Palette key={color.name} color={color} dark={dark} showTitle />
      ))}
    </div>
  );
};

export default MainColor;
