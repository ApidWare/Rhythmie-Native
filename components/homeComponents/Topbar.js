import React from 'react';
import {Image, Text, View} from 'react-native';
import rhythmie from '../homeComponents/../../resources/rhythmie.jpg';
import LinearGradient from 'react-native-linear-gradient';

function Topbar() {
  const styles = {
    rhythmie: {
      width: '100%',
      height: 100,
      fontFamily: 'JosefinSans-SemiBold',
      backgroundColor: '#000',
      color: '#fff',
      fontSize: 25,
      textAlign: 'center',
      paddingTop: 42,
      position: 'absolute',
      bottom: 0,
      zIndex: 0,
      // borderTopLeftRadius: 35,
      // borderTopRightRadius: 35,
    },
    rhythmieText: {
      fontFamily: 'JosefinSans-SemiBold',
      color: '#fff',
      fontSize: 25,
      textAlign: 'center',
    },
  };

  return (
    <>
      <LinearGradient
        colors={['#1d112d', '#000', '#000']}
        start={{x: 0.0, y: 0.25}}
        end={{x: 0.5, y: 1.0}}
        locations={[0, 0.5, 1]}
        style={styles.rhythmie}>
        <Text style={styles.rhythmieText}>rhythmie</Text>
      </LinearGradient>
    </>
  );
}
export default Topbar;
