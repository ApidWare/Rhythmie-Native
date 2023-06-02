import React from 'react';
import {Text} from 'react-native';

function Library() {
  const styles = {
    greetText: {
      color: '#000',
      fontFamily: 'JosefinSans-Light',
      fontSize: 30,
    },
  };

  return <Text style={styles.greetText}>Library page</Text>;
}
export default Library;
