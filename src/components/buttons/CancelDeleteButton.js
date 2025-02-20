import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const CancelDeleteButton = ({translation, theme, onPress}) => {
  const textColor = {color: 'black'};

  const border = {borderColor: theme.core.modalBackground};
  const greenBackground = {backgroundColor: theme.core.primary};
  return (
    <TouchableOpacity style={styles.confirm} onPress={()=>{onPress(false)}}>
      <Text style={[styles.confirmText, textColor, greenBackground, border]}>
      {translation && translation.translation.core.Cancel}
      </Text>
    </TouchableOpacity>
  );
};

export default CancelDeleteButton;

const styles = StyleSheet.create({
  confirm: {marginTop: 20},
  confirmText: {
    paddingHorizontal: 15,

    borderRadius: 10,
    alignItems: 'center',
    fontSize: 30,
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
    justifyContent: 'center',
    textAlignVertical: 'center',
    paddingTop: 5,
    borderWidth: 1,

    marginBottom: 20,
  },
  cancel: {},
  request: {marginTop: 60},
  requestText: {
    fontSize: 25,
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
  },
  name: {
    alignItems: 'center',
    fontSize: 30,
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
    justifyContent: 'center',
    textAlignVertical: 'center',
    paddingTop: 5,
    borderWidth: 1,
    marginTop: 20,
    marginBottom: 40,
  },
  plants: {
    alignItems: 'center',
    fontSize: 30,
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
    justifyContent: 'center',
    textAlignVertical: 'center',
    paddingTop: 5,
    borderWidth: 1,
  },
});
