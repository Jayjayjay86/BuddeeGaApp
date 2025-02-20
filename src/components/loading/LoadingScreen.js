import {View, Image, StyleSheet} from 'react-native';
import React from 'react';

const loadingImage = require('../../assets/images/splashscreen/transparent.png')

const LoadingScreen = () => {
  const backgroundColor = {backgroundColor: 'white'};
  return (
    <View style={[styles.container, backgroundColor]}>
      <Image style={styles.image} source={loadingImage} resizeMode="contain" />
    </View>
  );
};

export default LoadingScreen;
const styles = StyleSheet.create({
  container: {},
  image: {width: '100%', height: '100%'},
});
