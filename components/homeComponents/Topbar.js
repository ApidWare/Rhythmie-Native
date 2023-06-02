import React from 'react';
import {Image, Text, View} from 'react-native';
import rhythmie from '../homeComponents/../../resources/rhythmie.jpg';
import LinearGradient from 'react-native-linear-gradient';

function Topbar() {
  const styles = {
    rhythmie: {
      width: '100%',
      height: 90,
      fontFamily: 'JosefinSans-SemiBold',
      backgroundColor: '#111',
      color: '#fff',
      fontSize: 25,
      textAlign: 'center',
      paddingTop: 20,
      position: 'absolute',
      bottom: 0,
      zIndex: 0,
      borderTopLeftRadius: 35,
      borderTopRightRadius: 35,
      elevation: 4,
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
        colors={['#222', '#000', '#222']}
        start={{x: 0.0, y: 1}}
        end={{x: 1, y: 1}}
        locations={[0, 0.5, 1]}
        style={styles.rhythmie}>
        <Text style={styles.rhythmieText}>rhythmie</Text>
      </LinearGradient>
    </>
  );
}
export default Topbar;
