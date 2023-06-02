import React, {useEffect, useState} from 'react';
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
import LinearGradient from 'react-native-linear-gradient';

function Homepage() {
  const [homepageData, setHomepageData] = useState({
    albums: [],
    charts: [],
    playlists: [],
  });
  const func = async () => {
    let data = await fetch('https://saavn.me/modules?language=hindi,english');
    const response = await data.json();
    // console.log(response.data);
    setHomepageData(response.data);
  };
  useEffect(() => {
    func();
  }, []);
  function dev() {
    Linking.openURL('https://github.com/ApidWare/Rhythmie-Native');
  }
  const styles = {
    homeContainer: {
      backgroundColor: '#1d112d',
      height: '93%',
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
    gradientContainer: {
      paddingTop: 20,
      paddingLeft: 20,
    },
  };

  return (
    <View style={styles.homeContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <LinearGradient
          colors={['#1d112d', '#111', '#111']}
          start={{x: 0.0, y: 0.1}}
          end={{x: 1, y: 1.0}}
          locations={[0, 0.2, 0.3]}
          style={styles.gradientContainer}>
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
          <TopPlaylists homepageData={homepageData} />
          <TopArtists homepageData={homepageData} />
          <MostPopular homepageData={homepageData} />
          <GoToExplore />
        </LinearGradient>
      </ScrollView>
    </View>
  );
}
export default Homepage;
