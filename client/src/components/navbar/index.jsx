import React, { useEffect } from 'react';
import store from '../../store';
import { Text, View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import './style.less';
import { AtIcon } from 'taro-ui';

const NavBar = (props) => {
  const { navBar } = store.useContainer();
  const { navBarHeight, menuHeight, menuBotton, menuRight } = navBar;

  const { title = '首页', showBack, onBack } = props;

  useEffect(() => {
    Taro.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#ff0000',
      animation: {
        duration: 400,
        timingFunc: 'easeIn',
      },
    });
  }, []);

  const defaultOnBack = () => {
    Taro.navigateBack();
  };

  return (
    <View>
      <View className="nav-bar" style={{ height: navBarHeight }}>
        <View
          className="tool-bar"
          style={{
            height: menuHeight,
            minHeight: menuHeight,
            lineHeight: menuHeight,
            left: menuRight,
            bottom: menuBotton,
          }}
        >
          {showBack && (
            <AtIcon
              value="chevron-left"
              size={20}
              onClick={onBack || defaultOnBack}
            />
          )}
          <Text className="tool-bar-title">{title}</Text>
        </View>
      </View>
      <View className="content" style={{ marginTop: navBarHeight }}>
        {props.children}
      </View>
    </View>
  );
};

export const withNavBar = (Comp, navBarProps) => () => {
  return (
    <NavBar {...navBarProps}>
      <Comp />
    </NavBar>
  );
};

export default NavBar;
