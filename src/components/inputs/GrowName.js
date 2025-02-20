import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

const GrowName = ({
      colors, translation, isDarkMode, icons, theme,
      growObject, setGrowObject, 
      placeholder }) => {
        
  const inputStyles = {borderColor:theme.core.primary,color:theme.core.text};
 

  return (
    <View style={styles.formInput}>
          <TextInput
            placeholder={placeholder}
            placeholderTextColor={theme.core.text}
            value={growObject.name}
            style={[styles.textInput, inputStyles]}
            
            onChangeText={text =>
              setGrowObject(prevState => ({...prevState,name:text}))
            }
          />
     
      
    </View>
  );
};

export default GrowName;
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
