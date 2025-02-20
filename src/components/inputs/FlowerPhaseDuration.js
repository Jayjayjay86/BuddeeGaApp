import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

const FlowerPhaseDuration = ({ translation, icons, isDarkmode, colors,theme,
  growObject, setGrowObject,
                             placeholder}) => {
                              
  const inputStyles = {borderColor:theme.core.primary,color:theme.core.text};
                              
  return (
    <View style={styles.phaseInput}>
      

      <TextInput
        keyboardType={'numeric'}
        placeholder={placeholder}
        placeholderTextColor={theme.core.text}
        value={growObject.floweringDurationInDays}
        style={[styles.textInput, inputStyles]}
        onChangeText={text => {
          setGrowObject(prevState => ({...prevState, floweringDurationInDays:text}));
        }}
      />
    </View>
  );
};

export default FlowerPhaseDuration;

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
