import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ModalSelector from 'react-native-modal-selector';
import { useTheme } from '../../utils/Theme/ContextManager';
import {

  modalOverlayStyle,

  

} from '../../utils/Theme/Styles'


const ThemePicker = ({
  setSettingsChanged,
  translation,
  userSettings,
  setUserSettings,
  
}) => {
  const {toggleTheme,theme} = useTheme();
  const textColor = {color:theme.core.text} 
 const selectColor = {color:theme.core.red}
 const buttonStyle = {backgroundColor:theme.core.border,borderColor:theme.core.grey}
 const selectChoiceStyle = {fontFamily:"Poppins-Regular",color:theme.core.choice}

 const modalSelectorOptionTextStyle = {
  fontFamily: 'Poppins-Bold',
  color:theme.core.text
};
const modalSelectorOptionContainerStyle = {
  backgroundColor:theme.core.modalBackground,
  height: '55%',
  width: '90%',
  borderRadius: 3,
  fontFamily: 'Poppins-Light',
  alignItems:"center",
  justifyContent:"center"
};
const modalSelectorCancelStyle = {
  width: 100,
  alignSelf: 'center',   
  backgroundColor:theme.core.red
};
const modalSelectorCancelTextStyle = {
  fontFamily: 'Poppins-SemiBold',
  color:theme.core.text
};
  return (
    <View style={styles.container}>
      <ModalSelector
        buttonStyle={buttonStyle}
        
        listType={'SCROLLVIEW'}
        animationType={'fade'}
        overlayStyle={{...modalOverlayStyle,...textColor}}
        optionContainerStyle={{...modalSelectorOptionContainerStyle,...textColor}}
        style={{...styles.modalSelector,...buttonStyle}}
        optionTextStyle={{...modalSelectorOptionTextStyle,...textColor}}
        cancelStyle={{...modalSelectorCancelStyle}}
        cancelTextStyle={{...modalSelectorCancelTextStyle}}
        data={translation.translation.theme.data}
        initValue={userSettings.preferDarkMode ? translation.translation.core.Dark : translation.translation.core.Light}
        onChange={theme => {
         const newTheme =  theme.key === "light" ? false : true
          setUserSettings({
            ...userSettings,
            preferDarkMode:newTheme
          });
          toggleTheme(newTheme)
          setSettingsChanged(true);
        }}

        selectTextStyle={selectChoiceStyle}
        selectStyle={selectColor}>
          <View style={[styles.buttonContainer,buttonStyle]}>
                               <Text style={[styles.buttonText,textColor]}>{userSettings.preferDarkMode ? translation.translation.core.Dark : translation.translation.core.Light}</Text>
                       </View>
        </ModalSelector>
    </View>
  );
};

export default ThemePicker;

const styles = StyleSheet.create({
  buttonContainer:{ borderWidth:2, borderRadius:5, alignItems:"center",justifyContent:"center"},
  buttonText:{width:130,fontSize:16,fontFamily:"Poppins-Light",textAlign:"center", textAlignVertical:"center",marginVertical:9,marginHorizontal:15}
});
