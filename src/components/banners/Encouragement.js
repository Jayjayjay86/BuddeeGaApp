import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const Encouragement = ({theme,translation,handlePress,buttonText,text}) => {
   
    const upgradeStyle = {backgroundColor:theme.core.primary,
        borderColor: theme.core.modalBackground,
     
      }
      const adTextColor = {
        color: theme.core.text,
      };
      const textColor = {
        color: theme.core.modalBackground,
      };
    
  return (
    <View style={styles.encouragement}>
       
            <Text style={[styles.textAD,adTextColor]}>{text}</Text>
                <TouchableOpacity onPress={()=>handlePress()} style={[styles.upgrade,upgradeStyle]}>
                    <Text style={[styles.upgradeText,textColor]}>{buttonText}</Text>
                </TouchableOpacity>
    </View>

  )
}

const styles = StyleSheet.create({
    listContainer:{flex:1},
    noObjectImage:{width: 320, height: 550, margin: 20,borderRadius:10},
    encouragement:{flexDirection:"row",
        marginHorizontal:0,
        alignItems:"center", 
        height:80, 
   
        margin:1},
    textAD:{fontSize:22,
      fontFamily:"Poppins-SemiBold",
      flex:1,
      paddingLeft:20
    },
    upgrade:{borderRadius:5,borderWidth:1,marginRight:10,alignItems:"center",justifyContent:"center"},
    upgradeText:{fontSize:20,fontFamily:"Poppins-SemiBold",padding:10}
  })
  
export default Encouragement