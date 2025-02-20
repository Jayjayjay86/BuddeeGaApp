import {Modal, StyleSheet, Text, TextInput, ToastAndroid, View} from 'react-native';
import React, {useState} from 'react';
import CalculatorButton from '../../components/buttons/CalculatorButton';
import CalculateButton from '../../components/buttons/CalculateButton';
import ModalBackButton from '../../components/buttons/ModalBackButton';
import { calculatorContainer } from '../../utils/Theme/Styles';
import { calculateLight } from '../../utils/calculations';
import AdBanner from '../../components/banners/AdBanner';


const LightingCalc = ({isEntitled,theme, translation,modalVisible,setModalVisible}) => {
  const calculatorContainerStyle = {height:"100%" ,width:"100%",
    backgroundColor:theme.core.background}
  const inputLabelStyle={color:theme.core.text, fontSize:10}
  const textInputStyle={color:theme.core.text,backgroundColor:theme.core.grey,
                         fontSize:10}
  const resultInputStyle={color:theme.core.text,backgroundColor:theme.core.grey,
                          fontSize:16}
  const [width, setWidth] = useState('');
  const [length, setLength] = useState('');
  const [height, setHeight] = useState('');
  const [wattage, setWattage] = useState('');

  const calculateWattage = () => {
    if (width === '') {
      ToastAndroid.show(
        translation ? translation.translation.calculators.calculators.EntWidth : "",
        ToastAndroid.BOTTOM,
      );
      return;
    } else if (length === '') {
      ToastAndroid.show(
        translation ? translation.translation.calculators.calculators.EntHeight : "",
        ToastAndroid.BOTTOM,
      );
      return;
    } 
    calculateLight(parseFloat(width),parseFloat(length),setWattage)
  };
  const textColor = 'black';
  return (
    <Modal visible={modalVisible}animationType="slide">
        <View style={calculatorContainerStyle}>
            
            <View style={styles.form}>
              
                <View style={[styles.input,inputLabelStyle]}>
                    <Text style={[styles.label, inputLabelStyle]}>
                          {translation ? translation.translation.calculators.calculators.GwW : ""}
                    </Text>
                    <TextInput
                          keyboardType="numeric"
                          value={width}
                          onChangeText={setWidth}
                          style={[styles.input,textInputStyle]}
                    />
                </View>
                <View style={[styles.input,inputLabelStyle]}>
                    <Text style={[styles.label, inputLabelStyle]}>
                      {translation ? translation.translation.calculators.calculators.GwL : ""}
                    </Text>
                    <TextInput
                      keyboardType="numeric"
                      value={length}
                      onChangeText={setLength}
                      style={[[styles.input,inputLabelStyle], textInputStyle]}
                    />
                </View>

               
                <CalculateButton
                  theme={theme}
                  onPress={calculateWattage}
                  title={
                    translation ? translation.translation.calculators.calculators.Calc : ""}/>
                <View style={styles.resultContainer}>
                    <Text style={[styles.result, resultInputStyle
                        ]}>
                        {wattage
                          ? `${
                              translation ? translation.translation.calculators.calculators.light.Est : ""
                            } ${wattage} ${
                              translation ? translation.translation.calculators.calculators.light.Watts : ""
                            }`
                          : ''}
                  </Text>
                </View>

            </View>
          <ModalBackButton translation={translation} theme={theme} setModalVisible={setModalVisible}/>
          {!isEntitled && <AdBanner></AdBanner>}
        </View>
    </Modal>
  );
};

export default LightingCalc;

const styles = StyleSheet.create({
  calculatorContainer:{height:"100%" ,width:"100%"},
  form: {flex:1, marginVertical:5},
  resultContainer: {height:"43%"},
  input: {margin: 4},
  label: { fontFamily: 'Poppins-Regular', marginLeft:5},
  result: {
    fontFamily: 'Poppins-SemiBold', textAlign: 'center',
  },
});
