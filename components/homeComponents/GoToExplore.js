import React from 'react';
import {ScrollView, Text, View} from 'react-native';

function MostPopular() {
  const styles = {
    goToExploreContainer: {
      marginTop: 30,
      marginBottom: 130,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    goToExplore: {
      color: '#fff',
      fontFamily: 'Raleway-Regular',
      fontSize: 16,
      textAlign: 'center',
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: '#8d3eff',
      padding: 10,
      borderRadius: 30,
      width: 180,
    },
  };

  return (
    <View style={styles.goToExploreContainer}>
      <Text style={styles.goToExplore}>Explore more</Text>
    </View>
  );
}
export default MostPopular;
