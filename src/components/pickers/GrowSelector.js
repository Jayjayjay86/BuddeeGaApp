import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ModalSelector from 'react-native-modal-selector';
import {

  modalOverlayStyle,
  modalSelectorCancelStyle,
  modalSelectorCancelTextStyle,
  modalSelectorOptionContainerStyle,
  modalSelectorOptionTextStyle,
} from '../../utils/Theme/Styles'

const GrowSelector = ({  theme, translation, icons,
                        growObject, setGrowObject, 
                        label, cancelText}) => {

  return (
    <View style={styles.selectorContainer}>
    
   
        <ModalSelector
          listType={'SCROLLVIEW'}
          animationType={'fade'}
          overlayStyle={modalOverlayStyle}
          optionContainerStyle={modalSelectorOptionContainerStyle}
          style={styles.modalSelector}
          optionTextStyle={modalSelectorOptionTextStyle}
          cancelStyle={modalSelectorCancelStyle}
          cancelTextStyle={modalSelectorCancelTextStyle}
          cancelText={translation && translation.translation.core.Cancel}
          data={translation ? translation.translation.phase.data : []}
          initValue={translation ? translation.translation.phase[growObject.currentPhase]:""}
          onChange={choice => {
            
            setGrowObject(prevState => ({...prevState,currentPhase:choice.key}));
          }}
          selectTextStyle={{fontFamily: 'Poppins-SemiBold',color:theme.core.choice}}

          selectStyle={{color:theme.core.red}}
        />
      
    </View>
  );
};

export default GrowSelector;

const styles = StyleSheet.create({
  selectorContainer:{flexDirection:"column"},

  label: {
fontFamily: 'Poppins-SemiBold',
    alignSelf: 'center',
    width: '90%',
    marginTop: 10,
  },

});
