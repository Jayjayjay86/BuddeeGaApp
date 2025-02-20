import { View, Text, TouchableOpacity,StyleSheet,Image} from 'react-native'
import React from 'react'

const HomeMenuButton = ({translation,onPressButton,theme,icon}) => {
  const textColor = {color:theme.core.text}
  return (
    <View style={styles.ButtonContainer}>
        <TouchableOpacity 
        onPress={() => {
            onPressButton();
        }}>
            <Image style={styles.ButtonImage} source={icon} />
            <Text style={[styles.ButtonText,textColor]}>{translation}</Text>
        </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
  ButtonContainer:{
      borderWidth:2,
      marginBottom:5,
      display:"flex",

    },
    ButtonImage: {
      alignContent: 'center',
      justifyContent: 'center',
      width: 90,
      height: 90,
      margin: 5,
      borderRadius: 10,
      borderWidth: 3,
    },
  });
  
export default HomeMenuButton

