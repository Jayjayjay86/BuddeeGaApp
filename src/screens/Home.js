import {View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';

import {useTheme} from '../utils/Theme/ContextManager';
import {useTranslation} from '../utils/Locales/TranslationContext';

import {useFocusEffect} from '@react-navigation/native';

import MenuList from '../components/lists/MenuList';
import GrowStatusBar from '../components/statusbars/StatusBar';
import LoadingIndicator from '../components/loading/LoadingIndicator';
import { screenContainer } from '../utils/Theme/Styles';
import AdBanner from '../components/banners/AdBanner';
import { getUserSettings } from '../utils/database/UserSettings';
import { useEntitlement } from '../utils/context/Entitlement';

export default function Home({navigation}) {
  const {entitlement}  =useEntitlement();
  const {theme, icons, isDarkMode} = useTheme();
  const translation = useTranslation()
  const [isLoading, setIsLoading] = useState(true)
  const [userSettings, setUserSettings] = useState([])
  const backgroundColor = {backgroundColor:theme.core.background}

  async function loadData() {
    try {

      const settings = await getUserSettings();
      if (settings.length > 0) {
        setUserSettings(settings[0])
      }
      
      
    } catch (error) {
     
      console.error('Error @ Home.loadData.',error)
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
  console.log("Home",userSettings,entitlement)
 
  if (isLoading) {
    return <LoadingIndicator translation={translation} theme={theme} />;
  }
 
  return (
    <View style={[screenContainer, backgroundColor]}>
      <GrowStatusBar theme={theme} isDarkMode={isDarkMode}/>
      <View style={{flex:1}}>
      <MenuList navigation={navigation} translation={translation} icons={icons} theme={theme}/>
      </View>
      
      {entitlement === 0 && entitlement !== null && entitlement !== undefined && <AdBanner></AdBanner>}
    </View>
  );
}

