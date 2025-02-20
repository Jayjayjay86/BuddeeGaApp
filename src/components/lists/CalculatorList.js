import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View,Image, Text } from 'react-native';
import CalculatorButton from '../buttons/CalculatorButton';

const CalculatorList = ({translation, theme,icons,setCo2Modal,setWaterModal,setElectricModal,setYieldModal,setLightModal}) => {
    return (
        <View style={{}}>

        <CalculatorButton theme={theme} title={translation.translation.calculators.calculators.Co2} 
        description={translation.translation.calculators.calculatorDescriptions.Co2} handlePressButton={setCo2Modal}/>
        <CalculatorButton theme={theme} title={translation.translation.calculators.calculators.Final} icons={icons} 
        description={translation.translation.calculators.calculatorDescriptions.Yield} handlePressButton={setYieldModal}/>
        <CalculatorButton theme={theme} title={translation.translation.calculators.calculators.Light} icons={icons} 
        description={translation.translation.calculators.calculatorDescriptions.Light} handlePressButton={setLightModal}/>
        <CalculatorButton theme={theme} title={translation.translation.calculators.calculators.Water} icons={icons} 
        description={translation.translation.calculators.calculatorDescriptions.Water} handlePressButton={setWaterModal}/>
        <CalculatorButton theme={theme} title={translation.translation.calculators.calculators.ElecCalc} icons={icons} 
        description={translation.translation.calculators.calculatorDescriptions.Elec} handlePressButton={setElectricModal}/>
       
      </View>
    );
}

const styles = StyleSheet.create({

})

export default CalculatorList;
