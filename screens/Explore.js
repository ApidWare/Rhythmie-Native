import React from 'react';
import {Text} from 'react-native';

function Homepage() {
  const styles = {
    greetText: {
      color: '#fff',
      fontFamily: 'JosefinSans-Light',
      fontSize: 30,
    },
  };

  return <Text style={styles.greetText}>Good Evening</Text>;
}
export default Homepage;
