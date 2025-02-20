import { View, Text, TouchableOpacity,StyleSheet,Image} from 'react-native'
import React from 'react'

const ClearRecordsButton = ({theme,icon,setConfirmVisible,title}) => {
  const buttonStyle = {backgroundColor:theme.core.red,borderColor:theme.core.border}
  const textColor = {color:theme.core.text}
  
  return (
    <View >
       <TouchableOpacity style={[styles.buttonContainer,buttonStyle]} onPress={()=>{setConfirmVisible(true)}}>
                <Text style={[styles.buttonText,textColor]}>{title}</Text>
        </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
  
  buttonContainer:{ borderWidth:1, borderRadius:5, alignItems:"center",justifyContent:"center"},
  buttonText:{fontSize:16,fontFamily:"Poppins-Light",textAlign:"center", textAlignVertical:"center",marginVertical:9,marginHorizontal:15}
  });
  
export default ClearRecordsButton

