import React from 'react';
import cls from 'classnames';
import Palette from './Palette';
import './colors.less';

const ColorPalettes = (props) => {
  const { dark } = props;

  const colors = [
    {
      name: 'blue',
      english: 'Daybreak Blue',
      chinese: '拂晓蓝',
      description: '包容、科技、普惠',
    },
    {
      name: 'gray',
      english: 'gray',
      chinese: '灰色',
      description: '醒目、澎湃',
    },
    {
      name: 'bluegray',
      english: 'bluegray',
      chinese: '蓝灰色',
      description: '醒目、澎湃',
    },
    {
      name: 'purple',
      english: 'Golden Purple',
      chinese: '酱紫',
      description: '优雅、浪漫',
    },
    {
      name: 'geekblue',
      english: 'Geek Blue',
      chinese: '极客蓝',
      description: '探索、钻研',
    },
    {
      name: 'cyan',
      english: 'Cyan',
      chinese: '明青',
      description: '希望、坚强',
    },
    {
      name: 'red',
      english: 'Dust Red',
      chinese: '薄暮',
      description: '斗志、奔放',
    },
    {
      name: 'orange',
      english: 'Sunset Orange',
      chinese: '日暮',
      description: '温暖、欢快',
    },
    {
      name: 'yellow',
      english: 'Sunrise Yellow',
      chinese: '日出',
      description: '出生、阳光',
    },

    {
      name: 'lime',
      english: 'Lime',
      chinese: '青柠',
      description: '自然、生机',
    },

    {
      name: 'green',
      english: 'green',
      chinese: '绿色',
      description: '探索、钻研',
    },

    {
      name: 'magenta',
      english: 'Magenta',
      chinese: '法式洋红',
      description: '明快、感性',
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

export default ColorPalettes;
