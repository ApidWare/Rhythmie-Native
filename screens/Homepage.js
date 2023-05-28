import React from 'react';
import {
  Image,
  Linking,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import LastPlayed from '../components/homeComponents/LastPlayed';
import TopArtists from '../components/homeComponents/TopArtists';
import MostPopular from '../components/homeComponents/MostPopular';
import TopPlaylists from '../components/homeComponents/TopPlaylists';
import GoToExplore from '../components/homeComponents/GoToExplore';
import searchIcon from '../resources/search.png';
import Navbar from '../components/bottomNavComponents/Navbar';

function Homepage() {
  function dev() {
    Linking.openURL('https://github.com/ApidWare/Rhythmie-Native');
  }
  const styles = {
    homeContainer: {
      paddingTop: 20,
      paddingLeft: 20,
      backgroundColor: '#181818',
      borderBottomLeftRadius: 30,
      borderBottomRightRadius: 30,
      height: '92%',
      position: 'absolute',
      overflow: 'hidden',
      zIndex: 999,
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
      top: 80,
    },
    greetText: {
      color: '#fff',
      fontFamily: 'JosefinSans-Light',
      fontSize: 30,
    },
    searchBar: {
      backgroundColor: '#333',
      width: '90%',
      marginLeft: 12,
      marginBottom: 20,
      borderRadius: 20,
      paddingLeft: 15,
      paddingRight: 50,
      color: '#fff',
      fontFamily: 'Raleway-Regular',
    },
    searchIcon: {
      width: 20,
      height: 20,
      position: 'absolute',
      top: 13,
      right: 45,
      zIndex: 4,
      opacity: 0.4,
    },
  };

  return (
    <View
      style={styles.homeContainer}>
      <ScrollView
        showsVerticalScrollIndicator={false}>
        <View>
          <View style={styles.searchBarContainer}>
            <Image style={styles.searchIcon} source={searchIcon} />
            <TextInput
              placeholder="What's in your mind?"
              placeholderTextColor="#777"
              style={styles.searchBar}
              selectionColor={'#8d3eff'}
            />
          </View>
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
      <Navbar />
    </View>
  );
}
export default Homepage;
