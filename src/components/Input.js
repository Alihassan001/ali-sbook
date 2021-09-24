import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

//Icon
import AntDesign from 'react-native-vector-icons/AntDesign';

const Input = props => {
  const {
    styling = {},
    placeholder = 'Enter Email',
    inputStyling = {},
    iconStyling = {},
    keyboardType = 'default',
    editable = true,
    onChangeText = () => {},
    value = '',
    maxLength = 300,
    leftIcon,
    isLeftIcon = true,
    iconName = 'mail',
    secureTextEntry = false,
  } = props;

  return (
    <View style={[styles.inputContainer, styling]}>
      {!!leftIcon
        ? leftIcon
        : !!isLeftIcon && (
            <AntDesign name={iconName} style={[styles.icon, iconStyling]} />
          )}
      <TextInput
        placeholder={placeholder}
        style={[styles.input, inputStyling]}
        placeholderTextColor="#000"
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        editable={editable}
        onChangeText={text => onChangeText(text)}
        value={value}
        maxLength={maxLength}
        {...props}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  icon: {
    marginRight: 10,
    color: '#000',
    fontSize: 10,
  },
  input: {
    paddingLeft: 0,
    width: '88.5%',
  },
});
