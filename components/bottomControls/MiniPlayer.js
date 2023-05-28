import React from 'react';
import {Text, View} from 'react-native';

function MiniPlayer() {
  const styles = {
    miniPlayerContainer: {
      height: 60,
      width: '92%',
      backgroundColor: '#333',
      position: 'absolute',
      bottom: 100,
      left: '4%',
      borderRadius: 15,
      elevation: 1,
      zIndex: 3,
      display: 'none',
    },
  };

  return <View style={styles.miniPlayerContainer} />;
}
export default MiniPlayer;
