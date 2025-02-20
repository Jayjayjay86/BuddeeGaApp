import { theme,View, Text, TouchableOpacity,StyleSheet,Image} from 'react-native'
import React from 'react'


const DeleteGrowButton = ({translation,theme,icons,onPress}) => {
  const borderColor = {  borderColor: theme.core.modalBackground,
    backgroundColor:theme.core.red}
  
  return (
    <View style={[styles.touchable,borderColor]}>
        <TouchableOpacity 
        onPress={() => {
            onPress();
        }}>
            <Image style={styles.binImage} source={icons.core.bin} />
        </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  touchable: {
    alignItems: 'center',
    justifyContent: 'center',
  
    borderWidth: 1,
    width: 55,
    height: 55,
    padding: 5,
    borderRadius: 5,
    margin: 5,
  },
  text: {
    fontSize: 15,
  },
  binImage: {width: 45, height: 45},
});

  
export default DeleteGrowButton

