import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  modalContainerStyle,
  modalOverlayStyle,
} from '../../utils/Theme/Styles';
import ConfirmDeleteButton from '../../components/buttons/ConfirmDeleteButton';
import CancelDeleteButton from '../../components/buttons/CancelDeleteButton';

const ConfirmDeleteGrow = ({
  translation,icons,theme,navigation,isDarkMode,
  isVisible,setisVisible,
  handleDelete
}) => {
  const calculatorContainerStyle = {height:"100%" ,width:"100%",
    backgroundColor:theme.core.background}
    const textColor = {color:theme.core.text}
  return (
    <Modal
 
      visible={isVisible}
      animationType="slide"
    >
        <View style={calculatorContainerStyle}>

            <View style={modalOverlayStyle}>
                <View style={modalContainerStyle}>
                    <View style={styles.confirmContainer}>
                        <Text style={[styles.confirm,textColor]}>
                        {translation && translation.translation.core.DeleteGrow}
                        </Text>
                    </View>
                    <View style={styles.buttonsContainer}>

                        <CancelDeleteButton
                          translation={translation}
                          theme={theme}
                          onPress={setisVisible}
                        />
                        <ConfirmDeleteButton
                          translation={translation}
                          theme={theme}
                          onPress={handleDelete}
                        />
                    </View>
          
                </View>
            </View>
        </View>
      
    </Modal>
  );
};

export default ConfirmDeleteGrow;

const styles = StyleSheet.create({
  container: {
  },
  buttonsContainer:{flexDirection:"row"},
  formContainer: {
    width: '100%',
    margin: 10,
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  confirmContainer: {flex:1},
  confirm: {
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
    fontSize: 22,
    margin: 30,
  },
  label: { fontFamily: 'Poppins-Regular', fontSize: 19},
  datePicker: {},
  dateMarker: {
    fontFamily: 'Poppins-Regular',
    fontSize: 19,

    borderBottomWidth: 2,
  },
  formText: {fontSize: 20, fontFamily: 'Poppins-Regular'},
});
