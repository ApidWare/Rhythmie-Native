import React from 'react';
import {Linking, Pressable, ScrollView, Text, View} from 'react-native';
import LastPlayed from './LastPlayed';
import TopArtists from './TopArtists';
import MostPopular from './MostPopular';
import TopPlaylists from './TopPlaylists';
import GoToExplore from './GoToExplore';

function Homepage() {
  function dev() {
    Linking.openURL('https://github.com/apidware/rhythmie');
  }
  const styles = {
    homeContainer: {
      paddingTop: 20,
      paddingLeft: 20,
    },
    dev: {
      fontFamily: 'Raleway-Regular',
      fontSize: 16,
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: '#8d3eff',
      padding: 10,
      borderRadius: 30,
      color: '#fff',
    },
    devContainer: {
      position: 'absolute',
      right: 20,
      top: 10,
    },
    greetText: {
      color: '#fff',
      fontFamily: 'JosefinSans-Light',
      fontSize: 35,
    },
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.homeContainer}>
      <View>
        <Text style={styles.greetText}>Good Evening</Text>
        <Pressable style={styles.devContainer} onPress={dev}>
          <Text style={styles.dev}>Dev Preview</Text>
        </Pressable>
      </View>
      <LastPlayed />
      <TopArtists />
      <MostPopular />
      <TopPlaylists />
      <GoToExplore />
    </ScrollView>
  );
}
export default Homepage;
