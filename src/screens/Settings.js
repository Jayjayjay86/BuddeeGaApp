import { View, StyleSheet, Image, ToastAndroid } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import BackButton from "../components/buttons/BackButton"
import { useTranslation } from '../utils/Locales/TranslationContext'
import { useTheme } from '../utils/Theme/ContextManager'
import LoadingIndicator from '../components/loading/LoadingIndicator'
import { destroyUserSettings, getUserSettings, updateUserSettings } from '../utils/database/UserSettings'
import { useFocusEffect } from '@react-navigation/native'
import ConfirmDeleteDatabase from './modal/ConfirmDeleteDatabase'
import GrowStatusBar from '../components/statusbars/StatusBar'
import SaveSettingsButton from '../components/buttons/SaveSettingsButton'
import SettingsList from '../components/lists/SettingsList'
import { screenContainer } from '../utils/Theme/Styles'
import AdBanner from '../components/banners/AdBanner'
import { useEntitlement } from '../utils/context/Entitlement'

const Settings = ({navigation}) => {
  const {entitlement,toggleEntitlement}  = useEntitlement();
  const translation = useTranslation()
  const {theme, icons, isDarkMode} = useTheme();
  const borderColor ={borderColor:theme.core.border}
  const backgroundColor = {backgroundColor:theme.core.background}
  const [userSettings, setUserSettings] = useState([])
  const [userEntitlementState, setUserEntitlementState] = useState(entitlement)
  const [isLoading, setIsLoading] = useState(true)
  const [confirmVisible, setConfirmVisible] = useState(false)
  const [settingsChanged,setSettingsChanged] = useState(false)
  const [tapCount, setTapCount] = useState(0);
  const [tapTimer,setTapTimer] = useState(null);
  const [userEntitlementStatus,setUserEntitlementStatus] = useState()

 

  const handleTapping = async () => {
    // Increment the tap count
    setTapCount((prevCount) => prevCount + 1);

    // Clear any existing timer
    if (tapTimer) {
      clearTimeout(tapTimer);
    }

    // Start/reset the timer to reset the count after 2 seconds
    const newTimer = setTimeout(() => {
      setTapCount(0); // Reset tap count
    }, 2000);
    setTapTimer(newTimer);

    // Activate superuser mode if 10 taps are reached
    if (tapCount + 1 === 7) {
      clearTimeout(newTimer); // Clear timer to avoid reset
      
     
      // Trigger superuser mode here
      setUserEntitlementState(5)
      await updateUserSettings({...userSettings,entitlement:5})
      await toggleEntitlement(5)
      ToastAndroid.show("Tester Mode Activated",ToastAndroid.BOTTOM);
     
    }
    if (tapCount + 1 === 14) {
      clearTimeout(newTimer); 
      setTapCount(0); 
     
      // Trigger superuser mode here
      setUserEntitlementState(6)
      await updateUserSettings({...userSettings,entitlement:6})
      await toggleEntitlement(6)
      ToastAndroid.show("Developer Mode Activated",ToastAndroid.BOTTOM);
      
    }
  };

  const pressBack = () => {
    navigation.navigate("Home");
  };
  const handleSettingsUpdated = () =>{
    try {
      updateUserSettings(userSettings)
      setSettingsChanged(false)
      ToastAndroid.show(translation ? translation.translation.core.Changes : "",
         ToastAndroid.BOTTOM);

    } catch (error) {
      
      console.error(`Error @ Settings.updateUserSettings.`,error)
    }
   
  }
 
  async function loadData() {
   
    try {
      const userSettingsObject = await getUserSettings()
      setUserSettings(userSettingsObject[0])
    } catch (error) {
    
      console.error(`Error @ Settings.LoadData.`,error)
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
    return <LoadingIndicator icons={icons} translation={translation} theme={theme} />;
  }
  console.log("settings",userEntitlementStatus)

  return (
    <View style={[screenContainer,backgroundColor]}>
        <GrowStatusBar  theme={theme} isDarkMode={isDarkMode}/>
        <Image style={[styles.logoImage,borderColor]} source={icons.core.buddee}/>
              <View style={styles.listContainer}>
              <SettingsList loadData={loadData}handleTapping={handleTapping}entitlement={entitlement} navigation={navigation}translation={translation} theme={theme} icons={icons}
                      confirmVisible={confirmVisible} setConfirmVisible={setConfirmVisible} setSettingsChanged={setSettingsChanged}
                      setUserSettings={setUserSettings} userSettings={userSettings}/>
              </View>
       
        
        <View style={styles.buttonsContainer}>
            <BackButton pressBack={pressBack} translation={translation} theme={theme} icons={icons} navigation={navigation}/>
            {settingsChanged && 
              <SaveSettingsButton translation={translation} theme={theme} icons={icons}
                                  onPress={handleSettingsUpdated}/>
            }
        </View>
        {userEntitlementState === 0 && userEntitlementState !== null && userEntitlementState !== undefined && <AdBanner></AdBanner>}
        <ConfirmDeleteDatabase  translation={translation} theme={theme}
                                isVisible={confirmVisible}setisVisible={setConfirmVisible}/>
    </View>
  )
}

export default Settings

const styles = StyleSheet.create({


  listContainer:{flex:1},
  buttonsContainer:{flexDirection:"row", width:'100%', alignItems:"center", marginVertical:10},
  logoImage: {
    alignSelf: 'center',
    width: 80,
    height: 80,
    borderRadius: 20,
    padding: 20,
    margin: 30,
    borderWidth:1,
  },

});
