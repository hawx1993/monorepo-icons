import * as React from "react";
import type { IconDefinition } from "@byd-next/icons-svg/lib/types";
import type { IconBaseProps } from "./Icon";
import { getTwoToneColor, TwoToneColor, setTwoToneColor } from "./twoTonePrimaryColor";
export interface HeavenIconProps extends IconBaseProps {
    twoToneColor?: TwoToneColor;
    tooltip?: string;
}
export interface IconComponentProps extends HeavenIconProps {
    icon: IconDefinition;
}
interface IconBaseComponent<Props> extends React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLSpanElement>> {
    getTwoToneColor: typeof getTwoToneColor;
    setTwoToneColor: typeof setTwoToneColor;
}
declare const Icon: IconBaseComponent<IconComponentProps>;
export default Icon;
