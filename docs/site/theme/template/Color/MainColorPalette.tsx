import React from 'react';
import { message } from 'antd';
import CopyToClipboard from 'react-copy-to-clipboard';

const rgbToHex = (rgbString) => {
  const rgb = rgbString.match(/\d+/g);
  let r = parseInt(rgb[0], 10).toString(16);
  let g = parseInt(rgb[1], 10).toString(16);
  let b = parseInt(rgb[2], 10).toString(16);
  r = r.length === 1 ? `0${r}` : r;
  g = g.length === 1 ? `0${g}` : g;
  b = b.length === 1 ? `0${b}` : b;
  return `#${r}${g}${b}`;
};

export default class MainColorPalette extends React.Component {
  componentDidMount() {
    this.hexColors = {};
    Object.keys(this.colorNodes).forEach((key) => {
      const computedColor = getComputedStyle(this.colorNodes[key])[
        'background-color'
      ];
      if (computedColor.indexOf('rgba') >= 0) {
        this.hexColors[key] = computedColor;
      } else {
        this.hexColors[key] = rgbToHex(computedColor);
      }
    });
    this.forceUpdate();
  }

  render() {
    this.colorNodes = this.colorNodes || {};
    const {
      showTitle,
      direction,
      dark,
      color: { name, description, english, chinese },
    } = this.props;
    const className =
      direction === 'horizontal' ? 'color-palette-horizontal' : 'color-palette';
    const colorName = `${english} / ${chinese}`;

    return (
      <div className={className}>
        {showTitle && (
          <div className="color-title">
            {colorName}
            <span className="color-description">{description}</span>
          </div>
        )}
        <div className="main-color">
          <CopyToClipboard
            text="#346fff"
            onCopy={() => message.success(`#346fff copied`)}
          >
            <div
              className={`main-color-item palette-${name}-${6}`}
              style={{ color: '#fff' }}
              title="click to copy color"
            >
              <span className="main-color-text">#346fff</span>
            </div>
          </CopyToClipboard>
        </div>
      </div>
    );
  }
}
