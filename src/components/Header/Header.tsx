import React from 'react';
import {shallowEqual, useSelector} from 'react-redux';
import {View, Text, SafeAreaView, TextStyle} from 'react-native';

import {DATETIME} from '../../helpers';

import styles from './styles';

export type HeaderProps = {
  title: string;
  children?: React.ReactNode;
  shadow?: boolean;
  textAlign?: 'center' | 'left' | 'right';
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  numberOfLines?: number;
  titleStyle?: TextStyle;
};

const Header = (props: HeaderProps) => {
  const {title, shadow = true, rightIcon, leftIcon} = props;

  return (
    <SafeAreaView style={[styles.headerWrapper, shadow && styles.shadow]}>
      <View style={[styles.header]}>
        <View style={styles.wrapIcon}>{leftIcon}</View>
        <View style={styles.wrapTitle}>
          <Text numberOfLines={1} style={styles.textTitle}>
            {title}
          </Text>
        </View>
        <View style={styles.wrapIcon}>{rightIcon}</View>
      </View>
    </SafeAreaView>
  );
};

export default Header;
