import { StyleSheet, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import { removeGrow, updateGrow } from '../../utils/database/grows';
import { useTranslation } from '../utils/Locales/TranslationContext';
import { useTheme } from '../utils/Theme/ContextManager';
import { useEntitlement } from '../utils/context/Entitlement';
import LoadingIndicator from '../components/loading/LoadingIndicator';

import { useFocusEffect } from '@react-navigation/native';
import AdBanner from '../components/banners/AdBanner';
import { screenContainer } from '../utils/Theme/Styles';
import GrowForm from '../components/forms/GrowForm';

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
  navigation,route
}) => {
  const {selectedGrow} = route.params ?? [];
  const {entitlement,toggleEntitlement}  =useEntitlement();
  const {theme, icons, isDarkMode} = useTheme();
  const translation = useTranslation()
  const [isLoading, setIsLoading] = useState(true)
  const backgroundColor = {backgroundColor:theme.core.background}
  const [dateVisible, setDateVisible] = useState()
  const calculatorContainerStyle = {height:"100%" ,width:"100%",
    backgroundColor:theme.core.background}
    const pressBack = () => {
      navigation.goBack();
    };

  async function loadData() {
        setIsLoading(true);
        try {
      
          
        } catch (error) {
    
          console.error(`Error @ EditGrows.loadDATASettings.`,error)
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
            
                      <GrowForm pressBack={pressBack} purpose={"edit"} icons={icons} theme={theme} translation={translation} isDarkMode={isDarkMode}
                      dateVisible={dateVisible} setDateVisible={setDateVisible}
                      navigation={navigation}
                      selectedGrow={selectedGrow}
                      
                  
                      />{entitlement === 0 && entitlement !== null && entitlement !== undefined && <AdBanner></AdBanner>}
             
        </View>
           
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
