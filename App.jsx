import React, {useState, useEffect, useRef} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './src/utils/navigation/navigationStack';
import {createUserSettings,  getUserSettings} from './src/utils/database/UserSettings'
import {ThemeProvider} from './src/utils/Theme/ContextManager';
import TranslationProvider from './src/utils/Locales/TranslationContext';
import { EntitlementProvider } from './src/utils/context/Entitlement';
import LoadingScreen from './src/components/loading/LoadingScreen';
import mobileAds from 'react-native-google-mobile-ads';
import {
  initConnection,
  purchaseErrorListener,
  purchaseUpdatedListener,
  getAvailablePurchases,
  flushFailedPurchasesCachedAsPendingAndroid,
} from 'react-native-iap';
import { DefaultUserSettingsObject } from './src/utils/Misc';
import { createReceipt } from './src/utils/database/Receipts';



function App() {

  const purchaseUpdateSubscription = useRef();
  const purchaseErrorSubscription = useRef();
  const [appIsReady, setAppIsReady] = useState()
  const [userSettings, setUserSettings] = useState(DefaultUserSettingsObject)
  const [purchases,setPurchases] = useState([])


  const checkUserEntitlements = async (purchasesArray) => {
    let entitlementScore = 0
      try {
          if (!purchasesArray || purchasesArray.length < 1) {
        
          } else {
            purchasesArray.forEach(purchase => {
              switch (purchase.productId) {
                case "adfree_tier1":
                  entitlementScore = 1
                 
                  break
                  case "5grows_tier1.5":
                  case "5grows_tier2":
                  entitlementScore = 2
                 
                  break
                case "unlimited_tier2.5":
                case "unlimited_tier3":
                case "unlimited_tier3.5":
                  entitlementScore = 3
                  break
                default:
                    break
              }
            }
          )
          }
      } catch (error) {
          console.error('Error checking user entitlements:', error);
      }
      return entitlementScore
  }

  useEffect(() => {
    const prepareApp = async () => {
  
      setAppIsReady(false);
      
        try {
         
          const purchasesData = await getAvailablePurchases();

          setPurchases(purchasesData)

          const entitlementScore = await checkUserEntitlements(purchasesData)

         
          const settings = await getUserSettings();
         
          if (settings.length < 1) {
           
            const newUserSettings = {...DefaultUserSettingsObject, userLanguage:"en", entitlement:entitlementScore}
            await createUserSettings(newUserSettings)

            setUserSettings(newUserSettings);
            return
          } else {
            console.log("else",entitlementScore)
            const userEntitlement = settings[0].entitlement
            if (userEntitlement < entitlementScore) { 
              setUserSettings({...settings[0],entitlement:entitlementScore});
            }
            else {
              setUserSettings({...settings[0],entitlement:userEntitlement});
            }
          }
          
          
          
          await mobileAds().initialize();
        

          await initConnection();
         

          await flushFailedPurchasesCachedAsPendingAndroid();
          
          
          
        } catch (error) {
          console.error('Error preparing preparing App:', error);
        }
        finally {
         
          setAppIsReady(true);
        }
        };

      prepareApp();
    }, []);
 

  useEffect(() => {
    purchaseUpdateSubscription.current = purchaseUpdatedListener(async (purchase) => {
   
      if (!appIsReady) {
        console.warn("Purchase update received before app was ready.");
        return;
      }
      console.log("HERE WE GO AGAIN")
      const receipt = purchase.transactionReceipt;
      if (receipt) {
        try {
          await finishTransaction({ purchase, isConsumable: false });
          console.log('OLDER!  Transaction finished successfully');
        } catch (error) {
          console.error('Error finishing transaction:', error);
        }
        await createReceipt({purchaseDetails:purchase})
      } else {
        console.log('No transaction receipt found.');
      }
    });
    return () => {
      if (purchaseUpdateSubscription.current) {
        purchaseUpdateSubscription.current.remove();
      }
    };
  }, []);


  useEffect(() => {
    purchaseErrorSubscription.current = purchaseErrorListener(async (error) => {
      await createReceipt({errors:error})
      if (!appIsReady) {
        console.warn("Purchase update received before app was ready.");
        return;
      }

      if (error.code === 'E_USER_CANCELLED') {
       
        console.log('purchase canelled',error)
      } else {
        console.error('Purchase failed:', error);
        
      }
    });

    return () => {
      if (purchaseErrorSubscription.current) {
        purchaseErrorSubscription.current.remove();
      }
    };
  }, []);
  

  const userTheme = userSettings.preferDarkMode;
  const userTranslation = userSettings.userLanguage;
  console.log("checker",userSettings.entitlement)
  const userEntitlement = Number(userSettings.entitlement)
 
  



  return (
    <EntitlementProvider userEntitlement = {userEntitlement}>
          <ThemeProvider userTheme={userTheme}>
              <TranslationProvider userTranslation={userTranslation}>
                { !appIsReady ? (<LoadingScreen />) : (
                                                        <NavigationContainer >
                                                        <StackNavigator />
                                                        </NavigationContainer> 
                                                      )
                }
              </TranslationProvider>
            </ThemeProvider>
    </EntitlementProvider>
  );
}
export default App;