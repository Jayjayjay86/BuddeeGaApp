import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

const EstDryDuration = ({ translation, icons, isDarkmode, colors,theme,
  growObject, setGrowObject,
                             placeholder}) => {
                       
  const inputStyles = {borderColor:theme.core.primary,color:theme.core.text};
  return (
    <View style={styles.phaseInput}>
      

      <TextInput
        keyboardType={'numeric'}
        value={growObject && growObject.estimatedDryingDuration}
        style={[styles.textInput, inputStyles]}
        placeholder={placeholder}
        placeholderTextColor={theme.core.text}
        onChangeText={text => {
          setGrowObject(prevState => ({...prevState, estimatedDryingDuration:text}));
        }}
      />
    </View>
  );
};

export default EstDryDuration;

const styles = StyleSheet.create({
  formText: {fontSize: 20, fontFamily: 'Poppins-Regular'},
  textInput: {
    fontFamily: 'Poppins-SemiBold',
    alignSelf: 'center',
    width: '90%',
    borderBottomWidth: 1,
    margin: 10,
  },
});
