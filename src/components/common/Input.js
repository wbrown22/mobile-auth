import React from 'react';
import { Text, View, TextInput } from 'react-native';
import { Icon } from 'react-native-elements';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry, iconName, iconType, iconColor }) => {
  const { inputStyle, labelStyle, containerStyle } = styles;
  return (
    <View style={containerStyle}>
      <Icon
        name={iconName}
        type={iconType}
        color={iconColor}
      />
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        style={inputStyle}
        value={ value }
        onChangeText={ onChangeText }
      />
    </View>
  );
};

const styles = {
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
}
export { Input }
