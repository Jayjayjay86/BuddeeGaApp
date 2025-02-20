import { View, Text, TouchableOpacity,StyleSheet,Image} from 'react-native'
import React from 'react'

const AddGrowButton = ({translation,theme,icon,setModalVisible,handleAddGrow}) => {
  buttonContainerTheme = { backgroundColor:theme.core.primary}
  return (
    <View style={[styles.ButtonContainer,buttonContainerTheme]}>
        <TouchableOpacity 
        onPress={() => {
          handleAddGrow()
        }}>
            
            <Text style={styles.ButtonText}>{translation && translation.translation.core.AddGrow}</Text>
        </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
  ButtonContainer:{
      height:50,
      width:"100%",
      borderWidth:2,
      marginBottom:5,
      display:"flex",
      alignItems:"center",
      justifyContent:"center"
    },
    ButtonText:{
      paddingTop:4,
      fontSize:26,
      textAlign:"center",
      textAlignVertical:"center",
      fontFamily: 'Poppins-Regular',
    }
  });
  
export default AddGrowButton

