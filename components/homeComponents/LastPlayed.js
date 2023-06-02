import React, {useEffect, useState} from 'react';
import {ScrollView, Text, View, Image, Pressable} from 'react-native';
import playButton from './../../resources/play-button.png';
import pauseButton from './../../resources/pause-button.png';
import SoundPlayer from 'react-native-sound-player';
// import MusicControl from 'react-native-music-control';

let playState = 0;
function LastPlayed() {
  const styles = {
    lastPlayed: {
      backgroundColor: '#222',
      borderRadius: 30,
      width: 370,
      height: 120,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    lastPlayedText: {
      color: '#fff',
      fontFamily: 'Raleway-SemiBold',
      fontSize: 18,
      paddingLeft: 4,
      marginTop: 20,
    },
    artContainer: {
      height: 90,
      width: 90,
      backgroundColor: '#333',
      marginLeft: 16,
      marginRight: 16,
      overflow: 'hidden',
      borderRadius: 15,
    },
    lastPlayedContainer: {
      display: 'flex',
      flexDirection: 'row',
      marginTop: 20,
    },
    songDetails: {
      marginTop: -5,
    },
    songName: {
      color: '#fff',
      fontSize: 20,
      fontFamily: 'JosefinSans-Regular',
    },
    artistName: {
      color: '#8d3eff',
      fontFamily: 'Raleway-SemiBold',
      fontSize: 15,
    },
    playButton: {
      position: 'absolute',
      right: 20,
      height: 24,
      width: 24,
    },
    songArt: {
      height: '100%',
      width: '100%',
    },
  };

  const [musicButton, setMusicButton] = useState(playButton);

  useEffect(() => {
    SoundPlayer.loadUrl(
      'https://aac.saavncdn.com/077/178fb5fd6443bd5a448eace275f5fd71_160.mp4',
    );
    // MusicControl.enableBackgroundMode(true);
    // MusicControl.setNowPlaying({
    //   title: 'Blinding Lights',
    //   artwork:
    //     'https://c.saavncdn.com/820/Blinding-Lights-English-2020-20200912094411-150x150.jpg',
    //   artist: 'The Weeknd',
    //   album: 'Thriller',
    //   duration: 294,
    // });
  }, []);

  const playPause = () => {
    if (playState % 2 === 0) {
      SoundPlayer.play();
      // MusicControl.updatePlayback({
      //   state: MusicControl.STATE_PLAYING,
      // });
      setMusicButton(pauseButton);
    } else {
      SoundPlayer.pause();
      // MusicControl.updatePlayback({
      //   state: MusicControl.STATE_PAUSED,
      // });
      setMusicButton(playButton);
    }
    playState++;
  };

  return (
    <>
      <Text style={styles.lastPlayedText}>Pick up where you left</Text>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.lastPlayedContainer}>
        <View style={styles.lastPlayed}>
          <View style={styles.artContainer}>
            <Image
              style={styles.songArt}
              source={{
                uri: 'https://c.saavncdn.com/820/Blinding-Lights-English-2020-20200912094411-150x150.jpg',
              }}
            />
          </View>
          <View style={styles.songDetails}>
            <Text style={styles.songName}>Blinding Lights</Text>
            <Text style={styles.artistName}>The Weeknd</Text>
          </View>
          <Pressable style={styles.playButton} onPress={playPause}>
            <Image source={musicButton} />
          </Pressable>
        </View>
      </ScrollView>
    </>
  );
}
export default LastPlayed;
