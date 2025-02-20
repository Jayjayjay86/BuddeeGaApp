import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import ModalSelector from 'react-native-modal-selector';
import {
  modalOverlayStyle,
 
} from '../../utils/Theme/Styles'
import { useTranslation } from '../../utils/Locales/TranslationContext';

const LanguagePicker = ({
  setSettingsChanged,
  translation,
  userSettings,
  setUserSettings,
  theme
}) => {
  
  const {setTranslation} = useTranslation();
  const textColor = {color:theme.core.text}
  const modalSelectorOptionTextStyle = {
    fontFamily: 'Poppins-Bold',
    color:theme.core.text
  };
  const themeModalSelectorOptionContainerStyle = {
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
const buttonStyle = {backgroundColor:theme.core.grey, borderColor:theme.core.border}
const touchableSelectorStyle={fontFamily:"Poppins-Regular"
}
  return (

      <ModalSelector
        listType={'SCROLLVIEW'}
        animationType={'fade'}
        overlayStyle={modalOverlayStyle}
        optionContainerStyle={themeModalSelectorOptionContainerStyle}
        style={{...styles.modalSelector,...buttonStyle}}
        optionTextStyle={modalSelectorOptionTextStyle}
        cancelStyle={modalSelectorCancelStyle}
        cancelTextStyle={modalSelectorCancelTextStyle}
        cancelText={translation && translation.translation.core.Cancel}
        data={translation && translation.translation.languages}
        initValue={translation && translation.translation.languageChoice[userSettings.userLanguage]}
        onChange={language => {
          setUserSettings(prevState =>({...prevState,userLanguage:language.key}))
          setTranslation(language.key);
          setSettingsChanged(true);
        }}
        
        selectTextStyle={{fontFamily:"Poppins-Regular",color:theme.core.choice}}

        selectStyle={{color:theme.core.red}}
        touchableStyle={touchableSelectorStyle}>
        
       <View style={[styles.buttonContainer,buttonStyle]}>
                       <Text style={[styles.buttonText,textColor]}>{translation && translation.translation.languageChoice[userSettings.userLanguage]}</Text>
               </View>
        
      </ModalSelector>
   
  );
};

export default LanguagePicker;

const styles = StyleSheet.create({
  buttonContainer:{ borderWidth:1, borderRadius:5, alignItems:"center",justifyContent:"center"},
  buttonText:{width:130,fontSize:16,fontFamily:"Poppins-Light",textAlign:"center", textAlignVertical:"center",marginVertical:9,marginHorizontal:15}
});
