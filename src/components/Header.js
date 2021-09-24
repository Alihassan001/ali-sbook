import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

//Icon
import AntDesign from 'react-native-vector-icons/AntDesign';

const Header = props => {
  const {onPress, title = 'Home', isIcon = true, rightIcon = false} = props;
  return (
    <View style={styles.header}>
      {rightIcon && (
        <AntDesign
          onPress={onPress}
          size={24}
          name="left"
          style={styles.rightIcon}
        />
      )}
      <Text style={styles.heading}>{title}</Text>
      {isIcon && (
        <AntDesign
          onPress={onPress}
          size={24}
          name="poweroff"
          style={styles.icon}
        />
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    color: '#fff',
    fontFamily: 'AdobeFanHeitiStd-Bold',
  },
  header: {
    backgroundColor: '#000',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
  },
  icon: {
    color: 'red',
    position: 'absolute',
    right: 10,
  },
  rightIcon: {
    color: '#fff',
    position: 'absolute',
    left: 10,
  },
});
