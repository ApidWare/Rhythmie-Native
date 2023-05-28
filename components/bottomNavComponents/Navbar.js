import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import home from '../../resources/home.png';
import explore from '../../resources/search.png';
import mv from '../../resources/video.png';
import library from '../../resources/account.png';
import {useNavigation} from '@react-navigation/native';

function Navbar() {
  const navigation = useNavigation();

  const handleNavigate = screenName => {
    navigation.navigate(screenName);
  };

  const styles = {
    navbarContainer: {
      display: 'flex',
      flexDirection: 'row',
      position: 'absolute',
      bottom: 12,
      left: 30,
      zIndex: 3,
      backgroundColor: 'rgba(26,26,26,0.84)',
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

  // const navPressHandler = () => {
  //
  // }

  return (
    <View style={styles.navbarContainer}>
      {/*<Text style={styles.navbarOption}>Home</Text>*/}
      <Pressable onPress={() => handleNavigate('Home')}>
        <View style={styles.activeOption}>
          <Image style={styles.homeIcon} source={home} />
        </View>
      </Pressable>
      {/*<View style={styles.activeOption}>*/}
      {/*  <Image style={styles.homeIcon} source={explore} />*/}
      {/*</View>*/}
      <Pressable onPress={() => handleNavigate('Explore')}>
        <Text style={styles.navbarOption}>Explore</Text>
      </Pressable>
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
