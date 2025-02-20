import { View, Text, TouchableOpacity,StyleSheet,Image} from 'react-native'
import React from 'react'

const DeveloperDetailsButton = ({loadData,theme,icon,setConfirmVisible,title,handleTapping}) => {
  const buttonStyle = {backgroundColor:theme.core.grey,borderColor:theme.core.border}
  const textColor = {color:theme.core.text}
  const handlePress = () =>{
    handleTapping()
    setConfirmVisible(prevState=>!prevState)
  }
  return (
    <View >
       <TouchableOpacity style={[styles.buttonContainer,buttonStyle]} onPress={handlePress}>
                <Text style={[styles.buttonText,textColor]}>{title}</Text>
        </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
  
  buttonContainer:{ borderWidth:1, borderRadius:5, alignItems:"center",justifyContent:"center",textAlignVertical:"center"},
  buttonText:{fontSize:16,fontFamily:"Poppins-Light",textAlign:"center", textAlignVertical:"center",marginVertical:9,marginHorizontal:15}
  });
  
export default DeveloperDetailsButton

