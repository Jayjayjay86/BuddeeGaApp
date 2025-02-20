import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

export default function AffirmButton({translation,onPress, label,theme}) {
  const backgroundColor = {backgroundColor: theme.core.green}
  const borderColor = {borderColor: theme.core.modalBackground}
  const textColor = {color: theme.core.modalBackground}
  let buttonWidth =80
 
  if (translation && translation.translation.core.Code === "de") {
    buttonWidth = 100
  } else if (translation.translation.core.Code === "hi") {
    buttonWidth = 100
  }
  const theWidth = {width:buttonWidth}
  return (
    <TouchableOpacity onPress={() => onPress()} style={[styles.touchable,borderColor,backgroundColor,theWidth]}>
    <Text style={[styles.text,textColor]}>{label}</Text>
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
    margin: 5,
  },
  text: {
    fontSize: 15,
    fontFamily:"Poppins-SemiBold",
    textAlignVertical:"center",
    
  },
});
