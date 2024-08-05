// File: components/custom/Header.tsx
import React from 'react';
import { Image, Text, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <SafeAreaView>
      <TouchableOpacity>
        <Image source={require('../../assets/images/logo.png')} style={styles.logo}/>
      </TouchableOpacity>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  logo: {
    width: 50,
    height: 50,
    margin: 7,
    marginLeft: 20,
  },
});

export default Header;