import {Modal, StyleSheet, Text, TextInput, View,ToastAndroid, Switch, ScrollView} from 'react-native';
import React, {useState} from 'react';
import CalculateButton from '../../components/buttons/CalculateButton';
import ModalBackButton from '../../components/buttons/ModalBackButton';

import { calculateC02 } from '../../utils/calculations';
import AdBanner from '../../components/banners/AdBanner';



const Co2Calc = ({isEntitled,theme, translation,modalVisible,setModalVisible,}) => {
  const calculatorContainerStyle = {height:"100%" ,width:"100%",
    backgroundColor:theme.core.background}
  const inputLabelStyle={color:theme.core.text, fontSize:10}
  const textInputStyle={color:theme.core.text,backgroundColor:theme.core.grey,
                         fontSize:10}
  const resultInputStyle={color:theme.core.text,backgroundColor:theme.core.grey,
                          fontSize:16}
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [ambientPPM, setAmbientPPM] = useState('');
  const [targetPPM, setTargetPPM] = useState('');
  const [isSealed, setIsSealed] = useState(true);
  const [airChanges, setAirChanges] = useState('');
  const [result, setResult] = useState('');
  const instructionStyle ={color:theme.core.text, fontSize:12}
  const handlePressCalculate = () => {
    console.log("begin")
    try {
      if (length === '') {
        ToastAndroid.show(
          translation ? translation.translation.calculators.calculators.EntLength : "",
          ToastAndroid.BOTTOM,
        );
        return;}
       else if (width === '') {
        ToastAndroid.show(
          translation ? translation.translation.calculators.calculators.EntWidth : "",
          ToastAndroid.BOTTOM,
        );
        return;
      } else if (height === '') {
        ToastAndroid.show(
          translation ? translation.translation.calculators.calculators.EntHeight : "",
          ToastAndroid.BOTTOM,
        );
        return;
    } else if (ambientPPM === '') {
      ToastAndroid.show(
        "Enter ambient PPM",
        ToastAndroid.BOTTOM,
      );
      return;
  } else if (targetPPM === '') {
    ToastAndroid.show(
      "Enter target PPM",
      ToastAndroid.BOTTOM,
    );
    return;
} else if (isSealed === false && airChanges === "") {
  ToastAndroid.show(
    "Enter Air Loss",
    ToastAndroid.BOTTOM,
  );
  return;
} 
      else {
        if (isSealed === true) {
          setAirChanges(0)
        } 
       
        calculateC02(Number(length),Number(width),Number(height),Number(ambientPPM),Number(targetPPM),isSealed,Number(airChanges),setResult)
      
      }
   
    } catch (error) {}
  }
    
    

  return (
    <Modal
        visible={modalVisible}
        animationType="slide"
     
    >
    <View style={calculatorContainerStyle}>
        <View style={[styles.form]}>
          <ScrollView style={styles.scrollView}>
                        <Text style={[styles.scrollInstruction,instructionStyle]}> {translation && translation.translation.core.ScrollDown}</Text>
              <View style={styles.input}>
                  <Text style={[styles.label, inputLabelStyle]}>
                    {translation && translation.translation.calculators.calculators.co2.EnvLength}
                  </Text>
                  <TextInput
                    style={[styles.textInput, textInputStyle]}
                    keyboardType="numeric"
                    value={length}
                    onChangeText={setLength}
                  />
              </View>

              <View style={styles.input}>
                  <Text style={[styles.label, inputLabelStyle]}>
                    {translation && translation.translation.calculators.calculators.co2.EnvWidth}
                  </Text>
                  <TextInput
                    style={[styles.textInput, textInputStyle]}
                    keyboardType="numeric"
                    value={width}
                    onChangeText={setWidth}
                  />
              </View>

              <View style={styles.input}>
                  <Text style={[styles.label, inputLabelStyle]}>
                    {translation && translation.translation.calculators.calculators.co2.EnvHeight}
                  </Text>
                  <TextInput
                    style={[styles.textInput, textInputStyle]}
                    keyboardType="numeric"
                    value={height}
                    onChangeText={setHeight}
                  />
              </View>
              <View style={styles.input}>
                  <Text style={[styles.label, inputLabelStyle]}>
                    Ambient PPM
                  </Text>
                  <TextInput
                    style={[styles.textInput, textInputStyle]}
                    keyboardType="numeric"
                    value={ambientPPM}
                    onChangeText={setAmbientPPM}
                  />
              </View>
              <View style={styles.input}>
                  <Text style={[styles.label, inputLabelStyle]}>
                    Target PPM
                  </Text>
                  <TextInput
                    style={[styles.textInput, textInputStyle]}
                    keyboardType="numeric"
                    value={targetPPM}
                    onChangeText={setTargetPPM}
                  />
              </View>
              <View style={styles.input}>
                  <Text style={[styles.label, inputLabelStyle]}>
                    Sealed Room?
                  </Text>
                  <Switch value={isSealed} onValueChange={()=>{
                    setIsSealed(prevState => !prevState)
                  }}/>
              </View>
              {!isSealed && <View style={styles.input}>
                  <Text style={[styles.label, inputLabelStyle]}>
                    Air Loss (m3)
                  </Text>
                  <TextInput
                    style={[styles.textInput, textInputStyle]}
                    keyboardType="numeric"
                    value={airChanges}
                    onChangeText={setAirChanges}
                  />
              </View>}
              <CalculateButton
                theme={theme}
                onPress={handlePressCalculate}
                title={translation && translation.translation.calculators.calculators.co2.Button}/>
             
                 
                      {result
                        ? <View style={[styles.resultContainer]}>
                        <Text style={[styles.result, resultInputStyle]}>Total Co2 in Grams: {result.totalCO2Grams}</Text>
                        <Text style={[styles.result, resultInputStyle]}>Hourly Air Loss m3: {result.hourlyLossGrams}</Text>
                        
                        </View>

                        : <></>}
               
               </ScrollView>
        </View>

          
          <ModalBackButton  translation={translation} theme={theme}
                            setModalVisible={setModalVisible}
          />
          {!isEntitled && <AdBanner></AdBanner>}
      </View>

    </Modal>
  );
};

export default Co2Calc;

const styles = StyleSheet.create({
  calculatorContainer:{},
  form: { marginVertical:5,flex:1},
  resultContainer: {flexDirection:"column", margin:10},
  input: {margin: 4},
  textInput: {},
  label: { fontFamily: 'Poppins-Bold', marginLeft:5},
  result: {
    fontFamily: 'Poppins-Light',
  },
  title:{
    fontFamily:"Poppins-Bold",
    fontSize:22,
    textAlign:"center"
  },
  scrollView:{height:400},
});
