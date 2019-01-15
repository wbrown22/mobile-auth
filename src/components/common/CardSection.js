import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  return (
    <View style={[styles.containerStyle, props.style]}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderBottomWidth: .5,
    padding: 5,
    paddingLeft: 5,
    paddingRight: 5,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    backgroundColor: '#c4e3ed',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#c4e3ed',
    position: 'relative',
    borderRadius: 15,
    borderWidth: 1
  }
};

export { CardSection };
