import * as React from "react";
import classNames from "classnames";
import type { IconDefinition } from "@byd-next/icons-svg/lib/types";
import { Tooltip } from "antd";
import Context from "./Context";
import type { IconBaseProps } from "./Icon";
import ReactIcon from "./IconBase";
import {
  getTwoToneColor,
  TwoToneColor,
  setTwoToneColor,
} from "./twoTonePrimaryColor";
import { normalizeTwoToneColors } from "../utils";

export interface HeavenIconProps extends IconBaseProps {
  twoToneColor?: TwoToneColor;
  tooltip?: string;
}

export interface IconComponentProps extends HeavenIconProps {
  icon: IconDefinition;
}

// Initial setting
setTwoToneColor("#1890ff");

// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/34757#issuecomment-488848720
interface IconBaseComponent<Props>
  extends React.ForwardRefExoticComponent<
    Props & React.RefAttributes<HTMLSpanElement>
  > {
  getTwoToneColor: typeof getTwoToneColor;
  setTwoToneColor: typeof setTwoToneColor;
}

const Icon = React.forwardRef<HTMLSpanElement, IconComponentProps>(
  (props, ref) => {
    const {
      // affect outter <i>...</i>
      className,

      // affect inner <svg>...</svg>
      icon,
      spin,
      rotate,

      tabIndex,
      onClick,
      tooltip,
      // other
      twoToneColor,

      ...restProps
    } = props;

    const { prefixCls = "anticon" } = React.useContext(Context);

    const classString = classNames(
      prefixCls,
      {
        [`${prefixCls}-${icon.name}`]: !!icon.name,
        [`${prefixCls}-spin`]: !!spin || icon.name === "loading",
      },
      className
    );

    let iconTabIndex = tabIndex;
    if (iconTabIndex === undefined && onClick) {
      iconTabIndex = -1;
    }

    const svgStyle = rotate
      ? {
          msTransform: `rotate(${rotate}deg)`,
          transform: `rotate(${rotate}deg)`,
        }
      : undefined;

    const [primaryColor, secondaryColor] = normalizeTwoToneColors(twoToneColor);

    return (
      <span
        role="img"
        aria-label={icon.name}
        {...restProps}
        ref={ref}
        tabIndex={iconTabIndex}
        onClick={onClick}
        className={classString}
      >
        {tooltip ? (
          <Tooltip title={tooltip}>
            <ReactIcon
              icon={icon}
              primaryColor={primaryColor}
              secondaryColor={secondaryColor}
              style={svgStyle}
            />
          </Tooltip>
        ) : (
          <ReactIcon
            icon={icon}
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
            style={svgStyle}
          />
        )}
      </span>
    );
  }
) as IconBaseComponent<IconComponentProps>;

Icon.displayName = "HeavenIcon";
Icon.getTwoToneColor = getTwoToneColor;
Icon.setTwoToneColor = setTwoToneColor;

export default Icon;
