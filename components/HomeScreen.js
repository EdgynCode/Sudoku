import React from 'react';
import {ImageBackground, StyleSheet, Image, View} from 'react-native';
import bg from 'D:/Desktop/VS_Outputs/_Mobile/Sudoku/assets/BG-HomeScreen.png'
import title from 'D:/Desktop/VS_Outputs/_Mobile/Sudoku/assets/BG-Title.png'

const HomeScreen = () => (
  <View style={styles.container}>
    <ImageBackground source={bg} resizeMode="cover" style={styles.image}>
      <Image source={title} style={styles.image}/>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
});

export default HomeScreen;