import { View, Text, TouchableOpacity,StyleSheet,Image} from 'react-native'
import React from 'react'

const SaveSettingsButton = ({translation,theme,icon,onPress}) => {
  const buttonContTheme = {borderColor:theme.core.modalBackground,
    backgroundColor:theme.core.primary,
    
  } 
  const textColor = {color:theme.core.text}
  return (
    <View style={[styles.buttonContainer,buttonContTheme]}>
       <TouchableOpacity onPress={()=>{onPress()}}>
                <Text style={[styles.buttonText,textColor]}>{translation && translation.translation.core.SaveChange}</Text>
        </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
  buttonContainer:{
    marginHorizontal:5,
   
    borderWidth:1,
    borderRadius:2,
    
    alignItems:"center",
    justifyContent:"center",
    height:52,
    flex:1},
    
  buttonText:{fontSize:14,fontFamily:"Poppins-Regular",textAlign:"center", textAlignVertical:"center"}
  });
  
export default SaveSettingsButton

