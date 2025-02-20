import React, { useCallback, useEffect, useState } from 'react';
import { Image, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native';
import BackButton from "../components/buttons/BackButton"
import GrowList from '../components/lists/GrowList';
import { useTheme } from '../utils/Theme/ContextManager';
import { useTranslation } from '../utils/Locales/TranslationContext';
import { useFocusEffect } from '@react-navigation/native';
import { destroyGrows, getGrows } from '../utils/database/grows';
import AddGrowButton from "../components/buttons/AddGrowButton"


import LoadingIndicator from '../components/loading/LoadingIndicator';
import GrowStatusBar from '../components/statusbars/StatusBar';
import { screenContainer } from '../utils/Theme/Styles';
import AdBanner from '../components/banners/AdBanner';

import { getUserSettings, updateUserSettings } from '../utils/database/UserSettings';
import Encouragement from '../components/banners/Encouragement';
import { AdInterstitial } from '../components/banners/AdInterstitial';
import { useEntitlement } from '../utils/context/Entitlement';


const Grows = ({navigation}) => {
  const { showAd, adLoaded } = AdInterstitial();
  const {entitlement,toggleEntitlement}  =useEntitlement();
  const {theme, icons, isDarkMode} = useTheme();
  const translation = useTranslation()
  const [isLoading, setIsLoading] = useState(true)
  const backgroundColor = {backgroundColor:theme.core.background}
  const [newModalVisible, setNewModalVisible] = useState(false)
  const [editModalVisible, setEditModalVisible] = useState(false)
  const [selectedGrow, setSelectedGrow] = useState(null)
  const [growArray, setGrowArray] = useState([])
  const [userSettings, setUserSettings] = useState([])

  const pressBack = () => {
    navigation.navigate("Home");
  };
  const handlePressEncouragement = () =>{
    navigation.navigate("Upgrade")
}
  

  async function loadData() {
    setIsLoading(true);
    try {
      const growArrayData = await getGrows()
      setGrowArray(growArrayData)
      
      console.log("growsENT",growArrayData)
      const userSettingsData = await getUserSettings()
      setUserSettings(userSettingsData[0])
      
    } catch (error) {

      console.error(`Error @ Grows.loadDATASettings.`,error)
    }
    setIsLoading(false);
    (growArray)
  }

  const handleSelectGrow = (id,itemIndex) => {
    try {
    if  (entitlement === 0 || itemIndex === 1) {
      // free tier 
      if (!userSettings.secondGrowAdSeen) {
        updateUserSettings({...userSettings,secondGrowAdSeen:new Date().toLocaleDateString()})
        showAd();
      } else {
        if (userSettings.secondGrowAdSeen !== new Date().toLocaleDateString()){
          updateUserSettings({...userSettings,secondGrowAdSeen:new Date().toLocaleDateString()})
          showAd();
        }
      }
    } 
        const filteredResult=growArray.filter(item => item.id === id)
       
       
        navigation.navigate("EditGrow",{selectedGrow:filteredResult})
    } catch (error) {
     
      console.error("`Error @ Grows.handleSelectGrow.",error)
    }
    
  }

  const handleAddGrow = (id) => {
    
    if (entitlement === 0) {
      // free tier 
      if (growArray.length < 2) {
     
        try {navigation.navigate("AddGrow")} catch (error) {
         
          console.error(`Error @ Grows.handleAddGrow.`,error)
        }
      } else {
        ToastAndroid.show(translation ? translation.translation.core.UpgradeTo2 : "", ToastAndroid.BOTTOM);
        return
      }
    } else {
      // paid tiers
      if (entitlement === 1) {
            if (growArray.length < 2) {
        
              try {navigation.navigate("AddGrow")} catch (error) {
               
                console.error(`Error @ Grows.handleAddGrow.`,error)
              }
            } else {
              ToastAndroid.show(translation ? translation.translation.core.UpgradeTo2:"", ToastAndroid.BOTTOM);
              return
            }
      } else if (entitlement === 2) {
            if (growArray.length < 5) {
            
              try {navigation.navigate("AddGrow")} catch (error) {
                
                console.error(`Error @ Grows.handleAddGrow.`,error)
              }
            } else {
              ToastAndroid.show(translation ? translation.translation.core.UpgradeTo5:'', ToastAndroid.BOTTOM);
              return
            }
      } else if (entitlement === 3) {
        try 
        {navigation.navigate("AddGrow")} catch (error) {
         
          console.error(`Error @ Grows.handleAddGrow.`,error)
        }
      }
      else if (entitlement === 5) {
        try 
        {navigation.navigate("AddGrow")} catch (error) {
         
          console.error(`Error @ Grows.handleAddGrow.`,error)
        }
      }
      else if (entitlement === 6) {
        try 
        {navigation.navigate("AddGrow")} catch (error) {
         
          console.error(`Error @ Grows.handleAddGrow.`,error)
        }
      }
    }
    
   
  }
 
  useEffect(() => {
    loadData();
   
  }, []);

  useFocusEffect(
    useCallback(() => {
      loadData();
    }, []),
  );

const listHeight = {width: 320, height: 340,} 
  if (isLoading) {
    return <LoadingIndicator translation={translation} theme={theme} />;
  }
  return (
      <View style={[screenContainer, backgroundColor]}>
        <GrowStatusBar  theme={theme} isDarkMode={isDarkMode}/>
        <AddGrowButton  navigation={navigation} icons={icons} translation={translation} theme={theme} 
        modalVisible={newModalVisible} setModalVisible={setNewModalVisible} 
        handleAddGrow={handleAddGrow}/>
        <View style={styles.listContainer}>
          {growArray && growArray.length > 0 ? ( <GrowList entitlement={entitlement} isDarkMode={isDarkMode}  theme={theme} navigation={navigation} icons={icons} translation={translation} 
        growArray={growArray} handleSelectGrow={handleSelectGrow}/>):( <View style={styles.container}>
                    <View style={styles.display}>
                          <Image style={[styles.noObjectImage,listHeight]} source={icons.core.noObject}/>
                    </View>
                </View>)}
       


        </View>
        {entitlement < 1 && 
        <Encouragement handlePress={handlePressEncouragement}
                       text={`${translation ? translation.translation.core.RemoveAds : ""} -->`}
                      buttonText={translation && translation.translation.core.Upgrade} 
                       navigation={navigation}theme={theme} translation={translation}/>
        }
        
       


        <View style={{marginVertical:10}}>
        <BackButton pressBack={pressBack} translation={translation} theme={theme} icons={icons}
                      navigation={navigation}/>
        </View>
       

        {entitlement === 0 && entitlement !== null && entitlement !== undefined && <AdBanner></AdBanner>}
      
      </View>
  );
}

const styles = StyleSheet.create({
  listContainer:{flex:1},
  noObjectImage:{width: 320, height: 550, margin: 20,borderRadius:10},
  encouragement:{flexDirection:"row",marginHorizontal:0,alignItems:"center", height:80, borderWidth:1},
  textAD:{fontSize:22,
    fontFamily:"Poppins-SemiBold",
    flex:1,
    textAlign:"center"
  },
  upgrade:{borderRadius:3,borderWidth:1,marginRight:10,padding:2,alignItems:"Center",justifyContent:"center"},
  upgradeText:{fontSize:22,fontFamily:"Poppins-SemiBold",padding:10}
})

export default Grows;
