import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import React from 'react';


export default function LoadingIndicator({translation, theme}) {
  const loadingColors = {a:theme.core.primary,
                          b:theme.core.primary}
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator
        size="large"
        color={theme ? loadingColors.a : loadingColors.b}
      />
      <Text style={styles.text}>
      {translation && translation.translation.core.Loading}
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {fontSize: 30, margin: 20},
});
