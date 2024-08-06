// File: components/custom/Header.tsx
import React from 'react';
import { Image, Text, SafeAreaView, TouchableOpacity, StyleSheet, View } from 'react-native';
import MenuIcon from './MenuIcon';

const Header = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <TouchableOpacity>
          <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.title}>Dineit!</Text>
        </TouchableOpacity>
      </View>
      <MenuIcon />
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  logo: {
    width: 45,
    height: 45,
    margin: 7,
    marginLeft: 20,
  },
  logoContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
  }
});

export default Header;