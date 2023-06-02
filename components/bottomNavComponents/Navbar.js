import React, {useState, useRef} from 'react';
import {Image, Pressable, Text, View, StyleSheet, Animated} from 'react-native';
import home from '../../resources/home.png';
import explore from '../../resources/search.png';
import mv from '../../resources/video.png';
import library from '../../resources/account.png';
import {useNavigation} from '@react-navigation/native';

function Navbar() {
  const navigation = useNavigation();
  const [activeOption, setActiveLink] = useState('Home');
  const animationValue = useRef(new Animated.Value(1)).current;

  const handleNavigate = screenName => {
    navigation.navigate(screenName);
    setActiveLink(screenName);
  };

  const animateButton = () => {
    Animated.sequence([
      Animated.timing(animationValue, {
        toValue: 0.8,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(animationValue, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const animatedStyle = {
    transform: [{scale: animationValue}],
  };

  const styles = StyleSheet.create({
    navbarContainer: {
      display: 'flex',
      flexDirection: 'row',
      position: 'absolute',
      bottom: 105,
      left: 45,
      zIndex: 3,
      backgroundColor: 'rgba(26,26,26,0.95)',
      borderRadius: 20,
      height: 60,
      width: 320,
    },
    navbarOption: {
      // marginRight: 5,
      // marginLeft: 5,
      color: '#fff',
      fontFamily: 'JosefinSans-Light',
      fontSize: 18,
      marginBottom: -4,
    },
    activeOption: {
      // marginRight: 10,
      // marginLeft: 10,
      color: '#fff',
      borderRadius: 12,
      backgroundColor: '#333',
      padding: 10,
      marginBottom: -10,
    },
    homeIcon: {
      width: 24,
      height: 24,
    },
    pressable: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: 50,
      width: '22%',
      marginLeft: 7,
    },
    animatedButton: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  return (
    <View style={styles.navbarContainer}>
      <Pressable
        onPress={() => {
          handleNavigate('Home');
          animateButton();
        }}
        style={styles.pressable}>
        <Animated.View
          style={[
            styles.navbarOption,
            activeOption === 'Home' && styles.activeOption,
            animatedStyle, // Apply the animated style
          ]}>
          {activeOption === 'Home' && (
            <Image style={styles.homeIcon} source={home} />
          )}
          {activeOption !== 'Home' && (
            <Text style={styles.navbarOption}>Home</Text>
          )}
        </Animated.View>
      </Pressable>
      <Pressable
        onPress={() => {
          handleNavigate('Explore');
          animateButton();
        }}
        style={styles.pressable}>
        <Animated.View
          style={[
            styles.navbarOption,
            activeOption === 'Explore' && styles.activeOption,
            animatedStyle,
          ]}>
          {activeOption === 'Explore' && (
            <Image style={styles.homeIcon} source={explore} />
          )}
          {activeOption !== 'Explore' && (
            <Text style={styles.navbarOption}>Explore</Text>
          )}
        </Animated.View>
      </Pressable>
      <Pressable
        onPress={() => {
          handleNavigate('MVs');
          animateButton();
        }}
        style={styles.pressable}>
        <Animated.View
          style={[
            styles.navbarOption,
            activeOption === 'MVs' && styles.activeOption,
            animatedStyle,
          ]}>
          {activeOption === 'MVs' && (
            <Image style={styles.homeIcon} source={mv} />
          )}
          {activeOption !== 'MVs' && (
            <Text style={styles.navbarOption}>MVs</Text>
          )}
        </Animated.View>
      </Pressable>
      <Pressable
        onPress={() => {
          handleNavigate('Library');
          animateButton();
        }}
        style={styles.pressable}>
        <Animated.View
          style={[
            styles.navbarOption,
            activeOption === 'Library' && styles.activeOption,
            animatedStyle,
          ]}>
          {activeOption === 'Library' && (
            <Image style={styles.homeIcon} source={library} />
          )}
          {activeOption !== 'Library' && (
            <Text style={styles.navbarOption}>Library</Text>
          )}
        </Animated.View>
      </Pressable>
    </View>
  );
}

export default Navbar;
