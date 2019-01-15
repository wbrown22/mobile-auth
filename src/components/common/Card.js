import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    position: 'relative',
    left: 0,
    right: 0,
    bottom: 0,
    height: '60%',
    width: '80%',
    marginTop: 10
  }
};

export { Card };
