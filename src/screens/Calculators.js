import { View, StyleSheet } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import BackButton from "../components/buttons/BackButton"
import { useTranslation } from '../utils/Locales/TranslationContext';
import { useFocusEffect } from '@react-navigation/native';

import YieldCalc from './modal/YieldCalc';
import Co2Calc from './modal/Co2Calc';
import ElecCalc from './modal/ElecCalc';
import LightingCalc from './modal/LightingCalc';
import WaterCalc from './modal/WaterCalc';
import CalculatorList from '../components/lists/CalculatorList';
import LoadingIndicator from '../components/loading/LoadingIndicator';
import GrowStatusBar from '../components/statusbars/StatusBar';
import { screenContainer } from '../utils/Theme/Styles';
import { useTheme } from '../utils/Theme/ContextManager';
import AdBanner from '../components/banners/AdBanner';
import Encouragement from '../components/banners/Encouragement';
import { getUserSettings } from '../utils/database/UserSettings';
import { useEntitlement } from '../utils/context/Entitlement';


const Calculators = ({navigation}) => {
  const {entitlement,toggleEntitlement}  =useEntitlement();
  const {theme, icons, isDarkMode} = useTheme();
  const translation = useTranslation()
  const [isLoading, setIsLoading] = useState(true)
  const [co2Modal, setCo2Modal] = useState(false)
  const [waterModal, setWaterModal] = useState(false)
  const [yieldModal, setYieldModal] = useState(false)
  const [electricModal, setElectricModal] = useState(false)
  const [lightModal, setLightModal] = useState(false)
  const [userSettings, setUserSettings] = useState([])
  const backgroundColor = {backgroundColor:theme.core.background}
  const handlePressEncouragement = () =>{
    navigation.navigate("Upgrade")
}
const pressBack = () => {
  navigation.navigate("Home");
};
  async function loadData() {
    try {
      const userSettingsObject = await getUserSettings()
      setUserSettings(userSettingsObject[0])
      
    } catch (error) {
   
      console.error(error)
    }
    setIsLoading(false);
  }

  useEffect(() => {
    loadData();
  }, []);

  useFocusEffect(
    useCallback(() => {
      loadData();
    }, []),
  );

  if (isLoading) {
    return <LoadingIndicator translation={translation} theme={theme} />;
  }
 
  return (
      <View style={[screenContainer, backgroundColor]}>
          <GrowStatusBar  theme={theme} isDarkMode={isDarkMode}/>

          <View style={styles.listContainer}>
              <CalculatorList icons={icons} theme={theme} translation={translation} 
              setCo2Modal={setCo2Modal} setYieldModal={setYieldModal} setLightModal={setLightModal} setElectricModal={setElectricModal} setWaterModal={setWaterModal}
            />
          </View>
            {entitlement < 0 && 
                <Encouragement handlePress={handlePressEncouragement}
                text={`${translation && translation.translation.core.RemoveAds} -->`} 
                buttonText={translation && translation.translation.core.Upgrade}
                theme={theme} translation={translation}/>
            }
          
          <View style={{marginVertical:10}}>
              <BackButton pressBack={pressBack} translation={translation} theme={theme} icons={icons}
                          navigation={navigation}/>
          </View>
         

          {entitlement === 0 && entitlement !== null && entitlement !== undefined && <AdBanner></AdBanner>}


          <Co2Calc isEntitled={entitlement === 0 ? false : true}  icons={icons} theme={theme} translation={translation} modalVisible ={co2Modal} setModalVisible={setCo2Modal} />
          <ElecCalc isEntitled={entitlement === 0 ? false : true}  icons={icons} theme={theme} translation={translation}  modalVisible ={electricModal} setModalVisible={setElectricModal}/>
          <WaterCalc isEntitled={entitlement === 0 ? false : true}  icons={icons} theme={theme} translation={translation}  modalVisible ={waterModal} setModalVisible={setWaterModal} />
          <LightingCalc isEntitled={entitlement === 0 ? false : true}  icons={icons} theme={theme} translation={translation}  modalVisible={lightModal} setModalVisible={setLightModal}/>
          <YieldCalc isEntitled={entitlement === 0 ? false : true}  icons={icons} theme={theme} translation={translation}  modalVisible ={yieldModal} setModalVisible={setYieldModal} />
      </View>
  );
};

const styles = StyleSheet.create({
  listContainer:{flex:1}
});

export default Calculators