import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

export default function BackButton({pressBack,theme,translation,navigation, message}) {
  const backgroundColor={backgroundColor:theme.core.primary}
  const borderColor = {borderColor: theme.core.modalBackground}
  const textColor = {color: theme.core.modalBackground}
  let buttonWidth = 65

  if (translation && translation.translation.core.Code === "it") {
    buttonWidth = 80
  }
  const theWidth = {width:buttonWidth}
  return (
    <TouchableOpacity onPress={pressBack} style={[styles.touchable,borderColor,backgroundColor,theWidth]}>
    <Text style={[styles.text,textColor]}>{translation && translation.translation.core.Back}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  touchable: {
    alignItems: 'center',
    justifyContent: 'center',
    
    borderWidth: 1,
   
    height: 55,
    padding: 5,
    borderRadius: 5,
    marginHorizontal: 10,
    
  },
  text: {
    fontFamily:"Poppins-SemiBold",
    fontSize: 15,
  },
});
