import {Modal, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import EditGrowForm from '../../components/forms/EditGrowForm';

const modalContainerStyle = {
  width: '85%',
  height: '80%',
 
  borderRadius: 10,
  paddingHorizontal:5,
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 5,
};
const modalOverlayStyle = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
 
};
const EditGrow = ({
  navigation,isDarkMode,translation,theme, icons,
  modalVisible,setModalVisible,
  setSelectedGrow,selectedGrow,
  loadData

}) => {
  const [dateVisible, setDateVisible] = useState()
  const calculatorContainerStyle = {height:"100%" ,width:"100%",
    backgroundColor:theme.core.background}
  return (
      <Modal
        visible={modalVisible}
        animationType="slide"
      >
        <View style={calculatorContainerStyle}>
            <View style={modalOverlayStyle}>
                  <View style={modalContainerStyle}>
                      <EditGrowForm icons={icons} theme={theme} translation={translation} isDarkMode={isDarkMode}
                      dateVisible={dateVisible} setDateVisible={setDateVisible}
                      setModalVisible={setModalVisible} 
                      selectedGrow={selectedGrow}
                      loadData={loadData} navigation={navigation}
                  
                      />
                  </View>
              </View>
        </View>
           
    </Modal>
  );
};

export default EditGrow;

const styles = StyleSheet.create({

  container: {alignItems: 'center', justifyContent: 'center'},
  phaseDayContainer:{flexDirection:"column"},
  buttonsContainer:{flexDirection:"row", alignSelf:"center"},
  formContainer: {margin:15,marginTop: 15,  height:"80%"},
  name: {flex: 1},
  nameText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
   
  },
  bin: {},
  binImage: {width: 45, height: 45},
});
