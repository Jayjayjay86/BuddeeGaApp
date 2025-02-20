import {Modal, StyleSheet,View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';

import { useTranslation } from '../utils/Locales/TranslationContext';
import { useTheme } from '../utils/Theme/ContextManager';
import { useEntitlement } from '../utils/context/Entitlement';
import LoadingIndicator from '../components/loading/LoadingIndicator';

import { useFocusEffect } from '@react-navigation/native';

import AdBanner from '../components/banners/AdBanner';
import { screenContainer } from '../utils/Theme/Styles';
import { defaultGrowObject } from '../utils/Misc';
import GrowForm from '../components/forms/GrowForm';


const AddGrow = ({
  navigation,

}) => {
  const {entitlement,}  =useEntitlement();
  const {theme, icons, isDarkMode} = useTheme();
  const translation = useTranslation()
  const [isLoading, setIsLoading] = useState(true)
  const backgroundColor = {backgroundColor:theme.core.background}
  const [dateVisible, setDateVisible] = useState()
  const pressBack = () => {
    navigation.goBack();
  };
 

  async function loadData() {
    setIsLoading(true);
    try {
     
      
    } catch (error) {

      console.error(`Error @ AddGrow.loadDATASettings.`,error)
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
           
                <GrowForm pressBack={pressBack} purpose={"add"} icons={icons} theme={theme} translation={translation} isDarkMode={isDarkMode}
                        dateVisible={dateVisible} setDateVisible={setDateVisible}
                       navigation={navigation}  selectedGrow={[defaultGrowObject]}
                        />
                          {entitlement === 0 && entitlement !== null && entitlement !== undefined && <AdBanner></AdBanner>}
          </View>
              
       
      
  
  );
};

export default AddGrow;

const styles = StyleSheet.create({
  innerStyle: { justifyContent: 'center'},
  container: {alignItems: 'center', justifyContent: 'center'},
  header: {},
  headerText: {},
  strainItem: {margin: 10, flexDirection: 'row', alignItems: 'center'},
  name: {flex: 1},
  nameText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 25,
    justifyContent: 'center',
  },
  bin: {},
  binImage: {width: 45, height: 45},
});
