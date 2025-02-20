import {StyleSheet, Text, TextInput, View, ToastAndroid, Modal, ScrollView} from 'react-native';
import React, {useState} from 'react';
import ModalBackButton from '../../components/buttons/ModalBackButton';
import CalculateButton from '../../components/buttons/CalculateButton';
import { calculateWater } from '../../utils/calculations';
import AdBanner from '../../components/banners/AdBanner';



const WaterCalc = ({isEntitled,theme, translation,modalVisible,setModalVisible}) => {
  const calculatorContainerStyle = {height:"100%" ,width:"100%",
    backgroundColor:theme.core.background}
  const instructionStyle ={color:theme.core.text, fontSize:12}
  const inputLabelStyle={color:theme.core.text, fontSize:10}
  const textInputStyle={color:theme.core.text,backgroundColor:theme.core.grey, fontSize:10}
  const resultInputStyle={color:theme.core.text,backgroundColor:theme.core.grey, fontSize:12}
  const [vegWeeks, setVegWeeks] = useState('');
  const [flowerDays, setFlowerDays] = useState('');
  const [plantAge, setPlantAge] = useState('');
  const [numPlants, setNumPlants] = useState('');
  const [waterNeeded, setWaterNeeded] = useState('');
  const [vegNutrients, setVegNutrients] = useState('');
  const [flowerNutrients, setFlowerNutrients] = useState('');
  const [vegAnswer, setVegAnswer] = useState('');
  const [flowerAnswer, setFlowerAnswer] = useState('');
  
  const handleCalculateWater = () => {
    if (vegWeeks === '') {
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
    } else if (plantAge === '') {
      ToastAndroid.show(
        translation ? translation.translation.calculators.calculators.EntAge : "",
        ToastAndroid.BOTTOM,
      );
      return;
    } else if (numPlants === '') {
      ToastAndroid.show(
        translation ? translation.translation.calculators.calculators.EntNumber : "",
        ToastAndroid.BOTTOM,
      );
      return;
    } else if (vegNutrients === '') {
      ToastAndroid.show(
        translation ? translation.translation.calculators.calculators.EntNutrientAmount : "",
        ToastAndroid.BOTTOM,
      );
      return;
    } else if (flowerNutrients === '') {
      ToastAndroid.show(
        translation ? translation.translation.calculators.calculators.EntFlowerAmount : "",
        ToastAndroid.BOTTOM,
      );
      return;
    }
    calculateWater(vegWeeks,flowerDays,plantAge,numPlants,vegNutrients,flowerNutrients,
                              setWaterNeeded,setVegAnswer,setFlowerAnswer)

  };

  return (
    <Modal
    visible={modalVisible}
    animationType="slide"
  >


      <View style={calculatorContainerStyle}>

          <View style={styles.form}>
           
              <ScrollView style={styles.scrollView}>
              <Text style={[styles.scrollInstruction,instructionStyle]}> {translation ? translation.translation.core.ScrollDown : ""}</Text>

                  <View style={styles.input}>
                      <Text style={[styles.label, inputLabelStyle]}>
                        {translation ? translation.translation.calculators.calculators.water.TimeVeg : ""}
                      </Text>
                      <TextInput
                        keyboardType="numeric"
                        value={vegWeeks}
                        onChangeText={setVegWeeks}
                        style={[styles.input, textInputStyle]}
                      />
                  </View>

                  <View style={styles.input}>
                      <Text style={[styles.label, inputLabelStyle]}>
                        {translation ? translation.translation.calculators.calculators.water.TimeFl : ""}
                      </Text>
                      <TextInput
                        keyboardType="numeric"
                        value={flowerDays}
                        onChangeText={setFlowerDays}
                        style={[styles.input, textInputStyle]}
                      />
                  </View>

                  <View style={styles.input}>
                      <Text style={[styles.label, inputLabelStyle]}>
                        {translation ? translation.translation.calculators.calculators.water.PlntAge : ""}
                      </Text>
                      <TextInput
                        keyboardType="numeric"
                        value={plantAge}
                        onChangeText={setPlantAge}
                        style={[styles.input, textInputStyle]}
                      />
                  </View>

                  <View style={styles.input}>
                      <Text style={[styles.label, inputLabelStyle]}>
                        {translation ? translation.translation.calculators.calculators.water.Number : ""}
                      </Text>
                      <TextInput
                        keyboardType="numeric"
                        value={numPlants}
                        onChangeText={setNumPlants}
                        style={[styles.input, textInputStyle]}
                      />
                  </View>

                  <View style={styles.input}>
                      <Text style={[styles.label, inputLabelStyle]}>
                        {translation ? translation.translation.calculators.calculators.water.NuteVeg : ""}
                      </Text>
                      <TextInput
                        keyboardType="numeric"
                        value={vegNutrients}
                        onChangeText={setVegNutrients}
                        style={[styles.input, textInputStyle]}
                      />
                  </View>

                  <View style={styles.input}>
                      <Text style={[styles.label, inputLabelStyle]}>
                        {translation ? translation.translation.calculators.calculators.EntFlowerAmount : ""}
                      </Text>
                      <TextInput
                        keyboardType="numeric"
                        value={flowerNutrients}
                        onChangeText={setFlowerNutrients}
                        style={[styles.input, textInputStyle]}
                      />
                  </View>

                  
              </ScrollView>


              <CalculateButton
                  theme={theme}
                  onPress={handleCalculateWater}
                  title={
                    translation && translation.translation.calculators.calculators.water.Button}/>

                  <View style={styles.resultContainer}>

                      <Text style={[styles.result, resultInputStyle]}>
                        {waterNeeded
                          ? `${translation && translation.translation.calculators.calculators.water.Est} `
                          : ''}
                      </Text>
                      <Text style={[styles.result, resultInputStyle]}>{`${waterNeeded} ${
                        translation && translation.translation.calculators.calculators.water.Liters
                      }`}</Text>

                      <Text style={[styles.result, resultInputStyle]}>
                        {vegAnswer
                          ? `${
                              translation &&
                              translation.translation.calculators.calculators.water.EstNuteVeg
                            } `
                          : ''}
                      </Text>
                      <Text style={[styles.result, resultInputStyle]}>{`${vegAnswer} ${
                        translation && translation.translation.calculators.calculators.water.Ml
                      }`}</Text>
                      <Text style={[styles.result, resultInputStyle]}>
                        {flowerAnswer
                          ? `${
                              translation &&
                              translation.translation.calculators.calculators.water.EstNuteFlower
                            } `
                          : ''}
                      </Text>
                      <Text style={[styles.result, resultInputStyle]}>
                        {`${flowerAnswer} ${
                          translation && translation.translation.calculators.calculators.water.Ml
                        }`}
                      </Text>
                  </View>
          </View>         
          <ModalBackButton translation={translation} theme={theme} setModalVisible={setModalVisible}/>
          {!isEntitled && <AdBanner></AdBanner>}
      </View>   
      
  </Modal>
  );
};

export default WaterCalc;

const styles = StyleSheet.create({
  calculatorContainer:{height:"100%" ,width:"100%"},
  form: { marginVertical:5,flex:1},
  resultContainer: {},
  input: {margin: 4},
  label: { fontFamily: 'Poppins-Regular', marginLeft:5},
  result: {
    fontFamily: 'Poppins-SemiBold', marginLeft:5
  },
  subResult:{},
  scrollView:{height:400},
  instruction:{fontSize:11,fontFamily:"Poppins-Regular",textAlign:"center",
  },
  scrollInstruction:{fontSize:11,fontFamily:"Poppins-Regular",textAlign:"center",marginBottom:5}
  
}
);
