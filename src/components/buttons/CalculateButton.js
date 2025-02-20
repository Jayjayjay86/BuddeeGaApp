import { View, Text, TouchableOpacity,StyleSheet,Image} from 'react-native'
import React from 'react'

const CalculateButton = ({title,onPress,theme,icon}) => {
  const textColor = {color: theme.core.black};
  const buttonContainerTheme = {backgroundColor: theme.core.primary,
                                borderColor:theme.core.black, 
                                borderWidth:2};
  return (
    <View style={[styles.buttonContainer,buttonContainerTheme]}>
        <TouchableOpacity 
        onPress={() => {
            onPress();
        }}>
          
            <Text style={[styles.title,textColor]}>{title}</Text>
        </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
  buttonContainer:{
    height:50,
    marginTop:10,
    width:"100%",
    justifyContent:"center",
    alignItems:"center"
  },
  title:{
    padding:5,
    textAlign:"center",
    fontFamily:"Poppins-Regular",
    fontSize:19,

  },
});
  
export default CalculateButton

