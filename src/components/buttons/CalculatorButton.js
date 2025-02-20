import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const CalculatorButton = ({theme, icon, handlePressButton, title,description}) => {
  const textColor = {color: theme.core.black};
  const buttonContainerTheme = {backgroundColor: theme.core.primary,
                                borderColor:theme.core.black, 
                                borderWidth:2};
 
  return (
    <TouchableOpacity style={[styles.buttonContainer,buttonContainerTheme]}
    onPress={() => {
      handlePressButton(prevState => !prevState);
    }}>
       
        <Text style={[styles.title,textColor]}>{title}</Text>
        <Text style={[styles.description,textColor]}>{description}</Text>
    </TouchableOpacity>
  );
};

export default CalculatorButton;

const styles = StyleSheet.create({
  buttonContainer:{
    height:"14%",
    marginVertical:10,
    width:"100%",
    justifyContent:"center",
    alignItems:"center"
  },
  title:{
   
    textAlign:"center",
    fontFamily:"Poppins-Bold",
    fontSize:19,

  },
  description:{
  
    textAlign:"center",
    fontFamily:"Poppins-Regular",
    fontSize:11,
    paddingBottom:4

  }
});
