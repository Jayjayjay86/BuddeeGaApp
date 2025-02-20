import {Modal, StyleSheet, Text, TextInput, ToastAndroid, View} from 'react-native';
import React, {useState} from 'react';
import ModalBackButton from '../../components/buttons/ModalBackButton';
import CalculateButton from '../../components/buttons/CalculateButton';
import { calculateYield } from '../../utils/calculations';
import AdBanner from '../../components/banners/AdBanner';



const YieldCalc = ({isEntitled,theme, translation,modalVisible,setModalVisible}) => {
  const calculatorContainerStyle = {height:"100%" ,width:"100%",
    backgroundColor:theme.core.background}
  const inputLabelStyle={color:theme.core.text, fontSize:10}
  const textInputStyle={color:theme.core.text,backgroundColor:theme.core.grey, fontSize:10}
  const resultInputStyle={color:theme.core.text,backgroundColor:theme.core.grey, fontSize:16}
  const [wattage, setWattage] = useState('');
  const [vegWeeks, setVegWeeks] = useState('');
  const [flowerDays, setFlowerDays] = useState('');
  const [result, setResult] = useState('');

  
  const handleCalculateYield = () => {
    if (wattage === '') {
      ToastAndroid.show(
        translation ? translation.translation.calculators.calculators.EntWattage : "",
        ToastAndroid.BOTTOM,
      );
      return;
    } else if (vegWeeks === '') {
      ToastAndroid.show(
        translation ? translation.translation.calculators.calculators.EntWeeks : "",
        ToastAndroid.BOTTOM,
      );
      return;
    } else if (flowerDays === '') {
      ToastAndroid.show(
        translation ? translation.translation.calculators.calculators.EntDays : "",
        ToastAndroid.BOTTOM,
      );
      return;
    }
    calculateYield(wattage,vegWeeks,flowerDays,setResult)
  
  };
  return (
    <Modal
      visible={modalVisible}
      animationType="slide">
    <View style={calculatorContainerStyle}>
        <View style={styles.form}>
            <View style={styles.input}>
                <Text style={[styles.label, inputLabelStyle]}>
                  {translation ? translation.translation.calculators.calculators.yield.Wattage : ""}
                </Text>
                <TextInput
                  style={[styles.input, textInputStyle]}
                  keyboardType="numeric"
                  value={wattage}
                  onChangeText={setWattage}
                />
            </View>
            <View style={styles.input}>
                <Text style={[styles.label, inputLabelStyle]}>
                  {translation ? translation.translation.calculators.calculators.yield.VegWeeks : ""}
                </Text>
                <TextInput
                  style={[styles.input, textInputStyle]}
                  keyboardType="numeric"
                  value={vegWeeks}
                  onChangeText={setVegWeeks}
                />
            </View>
            <View style={styles.input}>
                <Text style={[styles.label, inputLabelStyle]}>
                  {translation ? translation.translation.calculators.calculators.yield.FlowerDays : ""}
                </Text>
                <TextInput
                  style={[styles.input, textInputStyle]}
                  keyboardType="numeric"
                  value={flowerDays}
                  onChangeText={setFlowerDays}
                />
            </View>
            <CalculateButton
              theme={theme}
              onPress={handleCalculateYield}
              title={
                translation ? translation.translation.calculators.calculators.yield.Button : ""
              }
            />
            <View style={styles.resultContainer}>
                <Text style={[styles.result, resultInputStyle]}>
                    {result
                      ? `${
                          translation ? translation.translation.calculators.calculators.yield.Est : ""
                        } ${result} ${
                          translation ? translation.translation.calculators.calculators.yield.Grams : ""
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

export default YieldCalc;

const styles = StyleSheet.create({

  form: {flex:1, marginVertical:5},
  resultContainer: {height:"43%"},
  input: {margin: 4},
  label: { fontFamily: 'Poppins-Regular', marginLeft:5},
  result: {
    fontFamily: 'Poppins-SemiBold', textAlign: 'center',
  },
});
