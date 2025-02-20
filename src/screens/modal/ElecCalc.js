import {Modal, StyleSheet, Text, TextInput, ToastAndroid, View} from 'react-native';
import React, {useState} from 'react';
import ModalBackButton from '../../components/buttons/ModalBackButton';
import CalculateButton from '../../components/buttons/CalculateButton';
import { calculateElectric } from '../../utils/calculations';
import AdBanner from '../../components/banners/AdBanner';



const ElecCalc = ({isEntitled,theme, translation,modalVisible,setModalVisible}) => {
  const calculatorContainerStyle = {height:"100%" ,width:"100%",
    backgroundColor:theme.core.background}
  const inputLabelStyle={color:theme.core.text, fontSize:10}
  const textInputStyle={color:theme.core.text,backgroundColor:theme.core.grey,
                         fontSize:10}
  const resultInputStyle={color:theme.core.text,backgroundColor:theme.core.grey,
                          fontSize:16}
  const [wattage, setWattage] = useState('');
  const [rate, setRate] = useState('');
  const [daysFlower, setDaysFlower] = useState('');
  const [weeksVeg, setWeeksVeg] = useState('');
  const [answer, setAnswer] = useState('');

  const handlePressCalculate = () => {
    if (wattage === '') {
      ToastAndroid.show(
        translation ? translation.translation.calculators.calculators.EntWattage : "",
        ToastAndroid.BOTTOM,
      );
      return;
    } 
     else if (daysFlower === '') {
      ToastAndroid.show(
        translation ? translation.translation.calculators.calculators.EntDays : "",
        ToastAndroid.BOTTOM,
      );
      return;

    } 
    else if (weeksVeg === '') {
      ToastAndroid.show(
        translation ? translation.translation.calculators.calculators.EntWeeks : "",
        ToastAndroid.BOTTOM,
      );
      return;
    }else if (rate === '') {
      ToastAndroid.show(
        translation ? translation.translation.calculators.calculators.EntRate : "",
        ToastAndroid.BOTTOM,
      );
      return;
    }
    calculateElectric(Number(wattage),Number(rate),daysFlower,weeksVeg,setAnswer)
   
   
   
 
   
  };

  const textColor = 'black';
  return (
    <Modal
   
      visible={modalVisible}
      animationType="slide"
    >
        <View style={calculatorContainerStyle}>
            <View style={styles.form}>
                <View style={styles.inputContainer}>
                    <Text style={[styles.label, inputLabelStyle]}>
                      {translation ? translation.translation.calculators.calculators.elec.Watts : ""}
                    </Text>
                    <TextInput
                      style={[styles.input, textInputStyle]}
                      keyboardType="numeric"
                      value={wattage}
                      onChangeText={value => {
                        setWattage(value);
                      }}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={[styles.label, inputLabelStyle]}>
                      {translation ? translation.translation.calculators.calculators.elec.Day : ""}
                    </Text>
                    <TextInput
                      style={[styles.input, textInputStyle]}
                      keyboardType="numeric"
                      value={daysFlower}
                      onChangeText={value => {
                        setDaysFlower(value);
                      }}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={[styles.label, inputLabelStyle]}>
                      {translation ? translation.translation.calculators.calculators.elec.Week : ""}
                    </Text>
                    <TextInput
                      style={[styles.field, textInputStyle]}
                      keyboardType="numeric"
                      value={weeksVeg}
                      onChangeText={value => {
                        setWeeksVeg(value);
                      }}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={[styles.label, inputLabelStyle]}>
                      {translation ? translation.translation.calculators.calculators.elec.Rate : ""}
                    </Text>
                    <TextInput
                      style={[styles.input, textInputStyle]}
                      keyboardType="numeric"
                      value={rate}
                      onChangeText={value => {
                        setRate(value);
                      }}
                    />
                </View>
                <CalculateButton
                  theme={theme}
                  onPress={() => {
                    handlePressCalculate();
                  }}
                  title={translation ? translation.translation.calculators.calculators.elec.Button : ""}
                />
                <Text style={[styles.result, resultInputStyle]}>
                  {answer &&
                    `${
                      translation ?
                      translation.translation.calculators.calculators.elec.Answer  : ""
                    } ${answer}`}
                </Text>
            </View>
            <ModalBackButton translation={translation} theme={theme} setModalVisible={setModalVisible}/>
            {!isEntitled && <AdBanner></AdBanner>}
      </View>
      

      
    </Modal>
  );
};

export default ElecCalc;

const styles = StyleSheet.create({
  calculatorContainer:{},
  form: { marginVertical:5,flex:1},
  resultContainer: {},
  input: {margin: 4},
  textInput: {},
  label: { fontFamily: 'Poppins-Bold', marginLeft:5},
  result: {
    fontFamily: 'Poppins-SemiBold', textAlign: 'center',
  },
  title:{
    fontFamily:"Poppins-Bold",
    fontSize:22,
    textAlign:"center"
  }
});