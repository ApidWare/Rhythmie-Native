import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';

function TopArtists(props) {
  const styles = {
    lastPlayed: {
      marginRight: 20,
      display: 'flex',
      flexDirection: 'column',
    },
    lastPlayedText: {
      color: '#fff',
      fontFamily: 'Raleway-SemiBold',
      fontSize: 18,
      paddingLeft: 4,
      marginTop: 20,
    },
    artContainer: {
      backgroundColor: '#222',
      borderRadius: 15,
      width: 120,
      height: 120,
      overflow: 'hidden',
    },
    lastPlayedContainer: {
      display: 'flex',
      flexDirection: 'row',
      marginTop: 20,
    },
    image: {
      height: '100%',
      width: '100%',
    },
    playlistTitle: {
      width: 120,
      paddingTop: 5,
    },
    playlistTitleText: {
      color: '#fff',
      fontSize: 10,
      textAlign: 'center',
      fontFamily: 'Raleway-Regular',
    },
  };

  return (
    <>
      <Text style={styles.lastPlayedText}>Top albums</Text>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.lastPlayedContainer}>
        {props.homepageData.albums.map(element => {
          return (
            <View key={element.key} style={styles.lastPlayed}>
              <View key={element.key} style={styles.artContainer}>
                <Image
                  key={element.key}
                  style={styles.image}
                  source={{uri: element.image[1].link}}
                />
              </View>
              <View key={element.key} style={styles.playlistTitle}>
                <Text key={element.key} style={styles.playlistTitleText}>
                  {element.name}
                </Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </>
  );
}
export default TopArtists;
