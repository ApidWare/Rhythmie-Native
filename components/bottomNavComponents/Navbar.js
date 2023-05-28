import React from 'react';
import { Image, Text, View } from "react-native";
import home from '../../resources/home.png';
import explore from '../../resources/search.png';
import mv from '../../resources/video.png';
import library from '../../resources/account.png';

function Navbar() {
  const styles = {
    navbarContainer: {
      display: 'flex',
      flexDirection: 'row',
      position: 'absolute',
      bottom: 25,
      left: 30,
      justifyContent: 'center',
      zIndex: 3,
      backgroundColor: 'rgba(0,0,0,0.27)',
      borderRadius: 20,
      padding: 10,
    },
    navbarOption: {
      marginRight: 10,
      marginLeft: 10,
      color: '#fff',
      fontFamily: 'JosefinSans-Light',
      fontSize: 18,
      // paddingLeft: 5,
      // paddingRight: 5,
      padding: 10,
    },
    activeOption: {
      marginRight: 10,
      marginLeft: 10,
      color: '#fff',
      // paddingBottom: 5,
      // paddingLeft: 5,
      // paddingRight: 5,
      padding: 10,
      borderRadius: 12,
      backgroundColor: '#333',
      // borderBottomWidth: 1,
      // borderBottomStyle: 'solid',
      // borderBottomColor: '#fff',
      // borderBottomLeftRadius: 5,
      // borderBottomRightRadius: 5,
    },
    homeIcon: {
      width: 24,
      height: 24,
    },
  };

  return (
    <View style={styles.navbarContainer}>
      {/*<Text style={styles.navbarOption}>Home</Text>*/}
      <View style={styles.activeOption}>
        <Image style={styles.homeIcon} source={home} />
      </View>
      {/*<View style={styles.activeOption}>*/}
      {/*  <Image style={styles.homeIcon} source={explore} />*/}
      {/*</View>*/}
      <Text style={styles.navbarOption}>Explore</Text>
      {/*<View style={styles.activeOption}>*/}
      {/*  <Image style={styles.homeIcon} source={mv} />*/}
      {/*</View>*/}
      <Text style={styles.navbarOption}>MVs</Text>
      {/*<View style={styles.activeOption}>*/}
      {/*  <Image style={styles.homeIcon} source={library} />*/}
      {/*</View>*/}
      <Text style={styles.navbarOption}>Library</Text>
    </View>
  );
}
export default Navbar;
