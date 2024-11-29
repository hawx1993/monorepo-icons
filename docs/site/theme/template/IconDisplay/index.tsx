import * as React from "react";
import * as HeavenIcons from "@byd-next/icons";
import { Radio, Empty, Input } from "antd";
import type { RadioChangeEvent } from "antd/es/radio/interface";
import debounce from "lodash/debounce";
import Category from "./Category";
import type { CategoriesKeys } from "./fields";
import { categories } from "./fields";
import "./icons.less";

export enum ThemeType {
  Common = "CommonIcon",
  TestMa = "TestmaIcon",
  Xchaos = "XchaosIcon",
  Xcrab = "XcrabIcon",
  Xfiregod = "XfiregodIcon",
  Xsea = "XseaIcon",
  Xshelter = "XshelterIcon",
  Zeus = "ZeusIcon",
}
const allIcons: { [key: string]: any } = HeavenIcons;

interface IconDisplayProps {
  intl: any;
}

interface IconDisplayState {
  theme: ThemeType;
  searchKey: string;
}

const IconDisplay: React.FC<IconDisplayProps> = () => {
  const [displayState, setDisplayState] = React.useState<IconDisplayState>({
    theme: ThemeType.Common,
    searchKey: "",
  });

  const newIconNames: string[] = [];
  const handleSearchIcon = React.useCallback(
    debounce((searchKey: string) => {
      setDisplayState((prevState) => ({ ...prevState, searchKey }));
    }),
    []
  );
  const handleChangeTheme = React.useCallback((e: RadioChangeEvent) => {
    setDisplayState((prevState) => ({
      ...prevState,
      theme: e.target.value as ThemeType,
    }));
  }, []);

  const renderCategories = React.useMemo<
    React.ReactNode | React.ReactNode[]
  >(() => {
    const { searchKey = "", theme } = displayState;
    const categoriesResult = Object.keys(categories)
      .map((key: CategoriesKeys) => {
        let iconList = categories[key];
        if (searchKey) {
          const matchKey = searchKey
            // eslint-disable-next-line prefer-regex-literals
            .replace(new RegExp(`^<([a-zA-Z]*)\\s/>$`, "gi"), (_, name) => name)
            .toLowerCase();
          iconList = iconList.filter((iconName) =>
            iconName.toLowerCase().includes(matchKey)
          );
        }
        return {
          icons: iconList
            .map((iconName) => iconName + theme)
            .filter((iconName) => allIcons[iconName]),
        };
      })
      .filter(({ icons }) => !!icons.length)
      .map(({ icons }) => (
        <Category theme={theme} icons={icons} newIcons={newIconNames} />
      ));
    return categoriesResult.length === 0 ? (
      <Empty style={{ margin: "2em 0" }} />
    ) : (
      categoriesResult
    );
  }, [displayState.searchKey, displayState.theme]);
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Radio.Group
          value={displayState.theme}
          onChange={handleChangeTheme}
          size="large"
          buttonStyle="solid"
        >
          <Radio.Button value={ThemeType.Common}>Common</Radio.Button>
          <Radio.Button value={ThemeType.TestMa}>TestMa</Radio.Button>
          <Radio.Button value={ThemeType.Xchaos}>XChaos</Radio.Button>
          <Radio.Button value={ThemeType.Xcrab}>XCrab</Radio.Button>
          <Radio.Button value={ThemeType.Xfiregod}>XFiregod</Radio.Button>
          <Radio.Button value={ThemeType.Xsea}>XSea</Radio.Button>
          <Radio.Button value={ThemeType.Xshelter}>XShelter</Radio.Button>
          <Radio.Button value={ThemeType.Zeus}>Zeus</Radio.Button>
        </Radio.Group>
        <Input.Search
          placeholder="输入icon名字搜索，点击图标可复制代码"
          style={{ margin: "0 10px", flex: 1 }}
          allowClear
          onChange={(e) => handleSearchIcon(e.currentTarget.value)}
          size="large"
          autoFocus
        />
      </div>
      {renderCategories}
    </>
  );
};

export default IconDisplay;
