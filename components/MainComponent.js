import React from 'react';
import {View} from 'react-native';
import Homepage from './homeComponents/Homepage';
import Topbar from './homeComponents/Topbar';
import Navbar from './bottomNavComponents/Navbar';
import MiniPlayer from './bottomControls/MiniPlayer';

function MainComponent() {
  const styles = {
    mainComponent: {
      backgroundColor: '#181818',
      height: '92%',
      position: 'relative',
      top: -30,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
    },
  };

  return (
    <View style={styles.mainComponent}>
      <Navbar />
      <Homepage />
      <MiniPlayer />
    </View>
  );
}
export default MainComponent;
