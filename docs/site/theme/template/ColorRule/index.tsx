import React from 'react';
import ColorRulePalette from './ColorRule';
import './index.less';
import { mainColors, grayColors } from './constants';

const MainColor = () => {
  return (
    <div className="color-rule-container">
      <p className="title">品牌色 -- 相关应用</p>
      <div className="main-color-container">
        {mainColors.map((item) => (
          <ColorRulePalette
            color={item.color}
            description={item.description}
            colorVar={item.colorVar}
          />
        ))}
      </div>
      <p className="title">灰阶·HSB</p>
      <div className="main-color-container">
        {grayColors.map((item) => (
          <ColorRulePalette
            color={item.color}
            colorVar={item.colorVar}
            description={item.description}
            txt={item.txt}
          />
        ))}
      </div>
    </div>
  );
};

export default MainColor;
