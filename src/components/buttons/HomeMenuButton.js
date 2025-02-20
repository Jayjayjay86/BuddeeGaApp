import { View, Text, TouchableOpacity,StyleSheet,Image} from 'react-native'
import React from 'react'


const HomeMenuButton = ({navigation,item,theme,icons,translation}) => {
  const nameTextColor = {color:theme.core.text }
  const descriptionFont = {color:theme.core.text}
  const borderColor={borderColor:theme.core.grey}
  const handlePressButton = (id) => {
    switch (id) {
      case "grows":
        navigation.navigate("Grows")
        break
      case "calculator":
        navigation.navigate("Calculators")
        break
      case "settings":
        navigation.navigate("Settings")
        break
                
    }
  
  }
  return (
    
        <TouchableOpacity style={[styles.ButtonContainer,borderColor]}
        onPress={() => {
          handlePressButton(item.Id);
        }}>
           <View style={styles.leftContainer}>
            
             <Image style={styles.ButtonImage} source={icons.core[item.Id]} />
           </View>
           <View style={styles.rightContainer}>
            <View style={styles.rightTopContainerContainer}>
            <Text style={[styles.nameText,nameTextColor]}>{item.Title}</Text>
            </View>
            <View style={styles.rightBottomContainer}>
              {item.Description && item.Description.map((item,itemId) => (
                <Text key={itemId} style={[styles.descriptionText,descriptionFont]}>{item}</Text>
            ))}

            </View>
           </View>
           
           
        </TouchableOpacity>
  
  )
}


const styles = StyleSheet.create({
  ButtonContainer:{
      borderWidth:2,
      marginVertical:5,
      display:"flex",
      flexDirection:"row",
      width:"100%",
      height:123
    },
    leftContainer:{
      alignItems:"center",
      justifyContent:"center",
      padding:10,
      width:"30%",
      height:120
    },
    rightContainer:{
      width:"70%",
      alignItems:"center"
    },
    rightTopContainerContainer:{ 
    paddingTop:10
    },
    rightBottomContainer:{
      alignItems:"center",
      paddingBottom:10
    },
    ButtonImage: {
      alignContent: 'center',
      justifyContent: 'center',
      width: 83,
      height: 83,
    },
    nameText:{
      fontFamily:"Poppins-Bold",
      fontSize:20,
    
    },
    descriptionText:{
          fontFamily:"Poppins-Regular",
          fontSize:11,
         
    }
  });
  
export default HomeMenuButton

