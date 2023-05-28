import React from 'react';
import {ScrollView, Text, View} from 'react-native';

function TopArtists() {
  const styles = {
    lastPlayed: {
      backgroundColor: '#222',
      borderRadius: 100,
      width: 120,
      height: 120,
      marginRight: 20,
    },
    lastPlayedText: {
      color: '#fff',
      fontFamily: 'Raleway-Regular',
      fontSize: 16,
      paddingLeft: 4,
      marginTop: 20,
    },
    artContainer: {
      height: 45,
      width: 45,
      // backgroundColor:
      // borderRadius: 50,
    },
    lastPlayedContainer: {
      display: 'flex',
      flexDirection: 'row',
      marginTop: 20,
    },
  };

  return (
    <>
      <Text style={styles.lastPlayedText}>Top artists</Text>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.lastPlayedContainer}>
        <View style={styles.lastPlayed}>
          <View style={styles.artContainer} />
        </View>
        <View style={styles.lastPlayed}>
          <View style={styles.artContainer} />
        </View>
        <View style={styles.lastPlayed}>
          <View style={styles.artContainer} />
        </View>
        <View style={styles.lastPlayed}>
          <View style={styles.artContainer} />
        </View>
      </ScrollView>
    </>
  );
}
export default TopArtists;
