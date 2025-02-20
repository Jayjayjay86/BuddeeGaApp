import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

export default function ModalBackButton({theme,translation, setModalVisible}) {
  const backgroundColor={backgroundColor:theme.core.primary}
  const borderColor = {borderColor: theme.core.modalBackground}
  const textColor = {color: theme.core.modalBackground}
  const pressBack = () => {
    setModalVisible(false)
  };
  return (
    <TouchableOpacity onPress={pressBack} style={[styles.touchable,borderColor,backgroundColor]}>
    <Text style={[styles.text,textColor]}>{translation && translation.translation.core.Back}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  touchable: {
    alignItems: 'center',
    justifyContent: 'center',
    
    borderWidth: 1,
    width: 65,
    height: 55,
    padding: 5,
    borderRadius: 5,
    margin: 5,
    
  },
  text: {
    fontSize: 15,
    fontFamily:"Poppins-SemiBold",
     textAlignVertical:"center"
  },
});
