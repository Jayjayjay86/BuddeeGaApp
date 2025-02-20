import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ModalSelector from 'react-native-modal-selector';

import { useEntitlement } from '../../utils/context/Entitlement';
import {

  modalOverlayStyle,

  

} from '../../utils/Theme/Styles'




const EntitlementPicker = ({
  setSettingsChanged,
  translation,
  userSettings,
  setUserSettings,theme
  
}) => {
  const {toggleEntitlement} = useEntitlement();
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
const parseEntitlement = (entitlementInteger) =>{
  switch (entitlementInteger) {
    case 1:
        return translation.translation.core.Adfree
    case 2:
      return translation.translation.core.Grows5
    case 3:
      return translation.translation.core.Unlimited
    case 5:
      return translation.translation.core.Tester
    case 6:
      return translation.translation.core.Developer
    default : 
      return translation.translation.tiers.Free
  }


}
const entitlementChoices = [
  {key: '0', label: translation.translation.tiers.Free},
  {key: '1', label: translation.translation.core.Adfree},
  {key: '2', label: translation.translation.core.Grows5},
  {key: '3', label: translation.translation.core.Unlimited},
  {key: '5', label: translation.translation.core.Tester},
  {key: '6', label: translation.translation.core.Developer},
]
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
        data={entitlementChoices}
        initValue={parseEntitlement(userSettings.entitlement)}
        onChange={value => {
          setUserSettings({
            ...userSettings,
            entitlement:value.key
          });
          toggleEntitlement(value.key)
          setSettingsChanged(true);
        }}

        selectTextStyle={selectChoiceStyle}
        selectStyle={selectColor}>
          <View style={[styles.buttonContainer,buttonStyle]}>
                               <Text style={[styles.buttonText,textColor]}>{parseEntitlement(userSettings.entitlement)}</Text>
                       </View>
        </ModalSelector>
    </View>
  );
};

export default EntitlementPicker;

const styles = StyleSheet.create({
  buttonContainer:{ borderWidth:2, borderRadius:5, alignItems:"center",justifyContent:"center"},
  buttonText:{width:130,fontSize:16,fontFamily:"Poppins-Light",textAlign:"center", textAlignVertical:"center",marginVertical:9,marginHorizontal:15}
});
