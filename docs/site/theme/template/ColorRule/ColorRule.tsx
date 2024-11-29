import React from 'react';
import { message } from 'antd';
import CopyToClipboard from 'react-copy-to-clipboard';

interface ColorRuleProps {
  color: string;
  description: string;
  txt?: string;
  colorVar: string;
}
const ColorRulePalette = (props: ColorRuleProps) => {
  const { color, description, txt = 'Perfma', colorVar } = props;
  return (
    <div className="color-palette">
      <CopyToClipboard
        text={color}
        onCopy={() => message.success(`${colorVar} copied: ${color}`)}
      >
        <section
          className="color-palette-section"
          style={{ backgroundColor: color }}
        >
          <p className="color-tips">{txt}</p>
          <span className="color-txt">{color}</span>
        </section>
      </CopyToClipboard>
      <p className="description">{description}</p>
    </div>
  );
};

export default ColorRulePalette;
