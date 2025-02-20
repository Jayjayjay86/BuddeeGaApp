import {View, ToastAndroid, StyleSheet} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {useTheme} from '../utils/Theme/ContextManager';
import {useEntitlement } from '../utils/context/Entitlement';
import {useTranslation} from '../utils/Locales/TranslationContext';
import {useFocusEffect} from '@react-navigation/native';
import GrowStatusBar from '../components/statusbars/StatusBar';
import LoadingIndicator from '../components/loading/LoadingIndicator';
import { screenContainer } from '../utils/Theme/Styles';
import AdBanner from '../components/banners/AdBanner';
import BackButton from '../components/buttons/BackButton';
import Encouragement from '../components/banners/Encouragement';
import { getUserSettings } from '../utils/database/UserSettings';
import { createReceipt } from '../utils/database/Receipts';
import { finishTransaction, getProducts, requestPurchase } from 'react-native-iap';
import { UPGRADE_PRODUCT_SKU } from '../utils/Misc';

export default function Upgrade({navigation}) {
  const {theme, icons, isDarkMode} = useTheme();
  const {entitlement}  = useEntitlement();
  const translation = useTranslation()
  const [isLoading, setIsLoading] = useState(true)
  const backgroundColor = {backgroundColor:theme.core.background}
  const [userSettings, setUserSettings] = useState([])
  const [products, setProducts] = useState([])
  const pressBack = () => {
    navigation.goBack();
  };
  const handlePurchase = async (sku) => {
 
    try {
      const purchase = await requestPurchase({ skus: [sku] });
      if (purchase) {
      
        
        await createReceipt({purchaseDetails: purchase});
        
      }
      else {
        console.log("payment Cancelled")
        ToastAndroid.show("Payment Cancelled",ToastAndroid.BOTTOM)
      }
    } 
    catch (err) {
      console.log("purcase cancelled",err)
      
    }
  };
  
  const loadData = async () => {
    try {
      const availableProducts = await getProducts({skus:UPGRADE_PRODUCT_SKU});
            setProducts(availableProducts)
            


      const settings = await getUserSettings();
      setUserSettings(settings[0])
  } catch (error) {
    console.error(error)
  } finally {
  setIsLoading(false)
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
 
  if (isLoading) {
    return <LoadingIndicator translation={translation} theme={theme} />;
  }

  return (
    <View style={[screenContainer, backgroundColor]}>
      <GrowStatusBar theme={theme} isDarkMode={isDarkMode}/>
      <View style={styles.listContainer}>
        {/* nothing bought */}
      {entitlement === 0 && <>
        <Encouragement userSettings={userSettings} handlePress={()=>handlePurchase("adfree_tier1")} theme={theme} translation={translation} text={translation.translation.core.AdFree} buttonText={"1.99"} />
        <Encouragement userSettings={userSettings} handlePress={()=>handlePurchase("5grows_tier2")} theme={theme} translation={translation} text={translation.translation.core.Grows5} buttonText={"3.99"} />
        <Encouragement userSettings={userSettings} handlePress={()=>handlePurchase("unlimited_tier3")} theme={theme} translation={translation} text={translation.translation.core.Unlimited} buttonText={"9.99"} />    
      </>}
       {/* adfree purchased */}
      {entitlement === 1 && <>
        <Encouragement userSettings={userSettings} handlePress={()=>{ToastAndroid.show("Already Purchased", ToastAndroid.BOTTOM)}} theme={theme} translation={translation} text={translation.translation.core.AdFree} buttonText={"1.99"} />
        <Encouragement userSettings={userSettings} handlePress={()=>{handlePurchase("5grows_tier1.5")}} theme={theme} translation={translation} text={translation.translation.core.Grows5} buttonText={"3.99"} />
        <Encouragement userSettings={userSettings} handlePress={()=>{handlePurchase("unlimited_tier2.5")}} theme={theme} translation={translation} text={translation.translation.core.Unlimited} buttonText={"9.99"} />
      </>}
      {/* 5grows purchased */}
      {entitlement === 2 && <>
        <Encouragement userSettings={userSettings} handlePress={()=>{ToastAndroid.show("Already Purchased", ToastAndroid.BOTTOM)}} theme={theme} translation={translation} text={translation.translation.core.AdFree} buttonText={"1.99"} />
        <Encouragement userSettings={userSettings} handlePress={()=>{ToastAndroid.show("Already Purchased", ToastAndroid.BOTTOM)}} theme={theme} translation={translation} text={translation.translation.core.Grows5} buttonText={"3.99"} />
        <Encouragement userSettings={userSettings} handlePress={()=>{handlePurchase("unlimited_tier3.5")}} theme={theme} translation={translation} text={translation.translation.core.Unlimited} buttonText={"9.99"} />
      </>}
        {/* unlimited purchased */}
      {entitlement === 3 && <>
        <Encouragement userSettings={userSettings} handlePress={()=>{ToastAndroid.show("Already Purchased", ToastAndroid.BOTTOM)}} theme={theme} translation={translation} text={translation.translation.core.AdFree} buttonText={"1.99"} />
        <Encouragement userSettings={userSettings} handlePress={()=>{ToastAndroid.show("Already Purchased", ToastAndroid.BOTTOM)}} theme={theme} translation={translation} text={translation.translation.core.Grows5} buttonText={"3.99"} />
        <Encouragement userSettings={userSettings} handlePress={()=>{ToastAndroid.show("Already Purchased", ToastAndroid.BOTTOM)}} theme={theme} translation={translation} text={translation.translation.core.Unlimited} buttonText={"9.99"} />
      </>}
      {entitlement === 5 && <>
        <Encouragement userSettings={userSettings} handlePress={()=>{ToastAndroid.show("Cannot Purchase (Testing)", ToastAndroid.BOTTOM)}} theme={theme} translation={translation} text={translation.translation.core.AdFree} buttonText={"1.99"} />
        <Encouragement userSettings={userSettings} handlePress={()=>{ToastAndroid.show("Cannot Purchase (Testing)", ToastAndroid.BOTTOM)}} theme={theme} translation={translation} text={translation.translation.core.Grows5} buttonText={"3.99"} />
        <Encouragement userSettings={userSettings} handlePress={()=>{ToastAndroid.show("Cannot Purchase (Testing)", ToastAndroid.BOTTOM)}} theme={theme} translation={translation} text={translation.translation.core.Unlimited} buttonText={"9.99"} />
      </>}
      {entitlement === 6 && <>
        <Encouragement userSettings={userSettings} handlePress={()=>{ToastAndroid.show("Cannot Purchase", ToastAndroid.BOTTOM)}} theme={theme} translation={translation} text={translation.translation.core.AdFree} buttonText={"1.99"} />
        <Encouragement userSettings={userSettings} handlePress={()=>{ToastAndroid.show("Cannot Purchase", ToastAndroid.BOTTOM)}} theme={theme} translation={translation} text={translation.translation.core.Grows5} buttonText={"3.99"} />
        <Encouragement userSettings={userSettings} handlePress={()=>{ToastAndroid.show("Cannot Purchase", ToastAndroid.BOTTOM)}} theme={theme} translation={translation} text={translation.translation.core.Unlimited} buttonText={"9.99"} />
      </>}
       
      </View>

      <View style={{marginVertical:10}}>
        <BackButton pressBack={pressBack}translation={translation} theme={theme} icons={icons}
                      navigation={navigation}/>
        </View>
        {entitlement === 0 && entitlement !== null && entitlement !== undefined && <AdBanner></AdBanner>}
    </View>
  );
}
const styles = StyleSheet.create({
  listContainer:{flex:1, marginTop:10, alignItems:"center", justifyContent:"center"},
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
