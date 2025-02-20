import React, { useEffect, useState } from 'react';
import { StyleSheet,  View,Image, Text, TouchableOpacity, ScrollView } from 'react-native';

import LanguagePicker from '../pickers/LanguagePicker';
import ThemePicker from '../pickers/ThemePicker';
import ClearRecordsButton from '../buttons/ClearRecordsButton';
import DeveloperDetailsButton from '../buttons/DeveloperDetailsButton';
import { developerInfo } from '../../utils/Misc';
import EntitlementPicker from '../pickers/EntitlementPicker';
const SettingsList = ({ loadData,handleTapping,entitlement,translation, theme,icons,
                        userSettings, setUserSettings, setSettingsChanged,
                        setConfirmVisible,navigation}) => {
    
    const [developerDetailsOpen,setDevloperDetails] = useState(false)
   
    const FDirection = {flexDirection:translation.translation.Code === "spn" ? "row" : "column",
      alignItems:translation.translation.Code === "spn" ? "center" : "left",

    }
    const buttonStyle = {backgroundColor:theme.core.grey,borderColor:theme.core.border}
    const textColor = {color:theme.core.text}
    const handlePressButton = () =>{
      navigation.navigate("Upgrade")
    }
    console.log(entitlement,translation.translation.tiers.AdFree)
    
    return (
      <ScrollView>
      {translation.translation.core.Code === "hbr" ? (
        
          <View style={styles.list}>
            
              <View style={styles.inputContainer}>
                  
                  <View style={styles.innerContainer}>
                  <LanguagePicker icons={icons} translation={translation} theme={theme}
                                  userSettings={userSettings} setUserSettings={setUserSettings} setSettingsChanged={setSettingsChanged}/>
                  </View>
                  <Text style={[styles.label,textColor]}>{translation && translation.translation.core.Language}</Text>
              </View>

              <View style={styles.inputContainer}>
                
                    <View style={styles.innerContainer}>
                        <ThemePicker  icons={icons} translation={translation} theme={theme}
                                      userSettings={userSettings} setUserSettings={setUserSettings} setSettingsChanged={setSettingsChanged}/>
                    </View>
                    <Text style={[styles.label,textColor]}>{translation && translation.translation.core.Theme}</Text>
              </View>  

              <View style={styles.inputContainer}>
                
                    <View style={styles.innerContainer}>
                        <ClearRecordsButton icons={icons} translation={translation} theme={theme}
                                            title={translation && translation.translation.core.Clear} setConfirmVisible={setConfirmVisible} />
                      </View>
                    <Text style={[styles.label,textColor]}>{translation && translation.translation.core.DeleteData}</Text>
              </View>  

              <View style={styles.inputContainer}>
               
                <View style={styles.innerContainer}>
                  
                    <DeveloperDetailsButton loadData={loadData}icons={icons} translation={translation} theme={theme} handleTapping={handleTapping}
                                          title={developerDetailsOpen ? translation && translation.translation.core.Hide :translation && translation.translation.core.Show} setConfirmVisible={setDevloperDetails} />
                      
                      
                     
                      

                </View>
                <Text style={[styles.label,textColor]}>{translation && translation.translation.core.Developer}:</Text>
                      
          </View>  
          {developerDetailsOpen && 
                      <View style={styles.inputContainer}>
                      
                          <View style={styles.innerContainer}>
                          <View style={styles.developerDetails}>
                            <View style={styles.detailNameBar}>
                            <Text style={[styles.developerLabel,textColor]}>{translation && translation.translation.core.FormName}</Text>
                            <Text style={[styles.developerName,textColor]}>{developerInfo.name}</Text>
                            </View>
                            <View style={[styles.detailBar,FDirection]}>
                            <Text style={[styles.developerLabel,textColor]}>{translation && translation.translation.core.Email}</Text>
                            <Text style={[styles.developerEmail,textColor]}>{developerInfo.email}</Text>
                            </View>
                            <View style={styles.detailNameBar}>
                            <Text style={[styles.developerLabel,textColor]}>{translation && translation.translation.core.Support}</Text>
                            <Text style={[styles.developerName,textColor]}>{developerInfo.support}</Text>
                            </View>
                          </View>
                          </View>
                          <Text style={[styles.label,textColor]}></Text>
                    </View >  
                          
                      }
                <View style={styles.inputContainer}>
                   
                        <View style={styles.innerContainer}>

                          {entitlement &&  <View style={[styles.statusContainer,buttonStyle]}><Text style={[styles.statusbuttonText,textColor]}>{status}</Text></View>}
                         
                        </View>
                        <Text style={[[styles.label,textColor],textColor]}>{translation && translation.translation.core.Status}:</Text>
              </View>  
              {entitlement < 3 && <View style={styles.inputContainer}>
                
                    <View style={styles.innerContainer}>
                    <TouchableOpacity onPress={()=>{handlePressButton()}}style={[styles.buttonContainer,buttonStyle]}>
                      <Text style={[styles.buttonText,textColor]}>{translation && translation.translation.core.Upgrade}</Text>
                    </TouchableOpacity>
                    </View>
                    <Text style={[styles.label,textColor]}>{translation && translation.translation.core.RemoveAds}</Text>
              </View>  }
              
        

          
          </View>
          ) 
          : 
          (   
          <View style={styles.list}>
            
          <View style={styles.inputContainer}>
              <Text style={[styles.label,textColor]}>{translation && translation.translation.core.Language}:</Text>
                  <View style={styles.innerContainer}>
                      <LanguagePicker icons={icons} translation={translation} theme={theme}
                                      userSettings={userSettings} setUserSettings={setUserSettings} setSettingsChanged={setSettingsChanged}/>
                  </View>
                  
          </View>
          
          <View style={styles.inputContainer}>
              <Text style={[styles.label,textColor]}>{translation && translation.translation.core.Theme}:</Text>
                  <View style={styles.innerContainer}>
                      <ThemePicker  icons={icons} translation={translation} theme={theme}
                                userSettings={userSettings} setUserSettings={setUserSettings} setSettingsChanged={setSettingsChanged}/>
                  </View>
              
          </View>  

          <View style={styles.inputContainer}>
            <Text style={[styles.label,textColor]}>{translation && translation.translation.core.DeleteData}:</Text>
                <View style={styles.innerContainer}>
                <ClearRecordsButton icons={icons} translation={translation} theme={theme}
                                    title={translation && translation.translation.core.Clear} setConfirmVisible={setConfirmVisible} />
                </View>
                
          </View >  

          <View style={styles.inputContainer}>
                <Text style={[styles.label,textColor]}>{translation && translation.translation.core.Developer}:</Text>
                <View style={styles.innerContainer}>
                  
                    <DeveloperDetailsButton handleTapping={handleTapping} icons={icons} translation={translation} theme={theme}
                                          title={developerDetailsOpen ? translation && translation.translation.core.Hide :translation && translation.translation.core.Show} setConfirmVisible={setDevloperDetails} />
                      
                      
                     
                      

                </View>
                      
          </View>  
          {developerDetailsOpen && 
                      <View style={styles.inputContainer}>
                      <Text style={[styles.label,textColor]}></Text>
                          <View style={styles.innerContainer}>
                          <View style={styles.developerDetails}>
                            <View style={styles.detailNameBar}>
                            <Text style={[styles.developerLabel,textColor]}>{translation && translation.translation.core.FormName}</Text>
                            <Text style={[styles.developerName,textColor]}>{developerInfo.name}</Text>
                            </View>
                            <View style={[styles.detailBar,FDirection]}>
                            <Text style={[styles.developerLabel,textColor]}>{translation && translation.translation.core.Email}</Text>
                            <Text style={[styles.developerEmail,textColor]}>{developerInfo.email}</Text>
                            </View>
                            <View style={styles.detailNameBar}>
                            <Text style={[styles.developerLabel,textColor]}>{translation && translation.translation.core.Support}</Text>
                            <Text style={[styles.developerName,textColor]}>{developerInfo.support}</Text>
                            </View>
                          </View>
                          </View>
                          
                    </View >  
                          
                      }
                <View style={styles.inputContainer}>
                    <Text style={[[styles.label,textColor],textColor]}>{translation && translation.translation.core.Status}:</Text>
                        <View style={styles.innerContainer}>

                          {entitlement === 0 &&  <View style={[styles.statusContainer,buttonStyle]}><Text style={[styles.statusbuttonText,textColor]}>{translation && translation.translation.tiers.Free}</Text></View>}
                          {entitlement === 1 &&  <View style={[styles.statusContainer,buttonStyle]}><Text style={[styles.statusbuttonText,textColor]}>{translation && translation.translation.tiers.AdFree}</Text></View>}
                          {entitlement === 2 &&  <View style={[styles.statusContainer,buttonStyle]}><Text style={[styles.statusbuttonText,textColor]}>{translation && translation.translation.tiers.Grows5}</Text></View>}
                          {entitlement === 3 &&  <View style={[styles.statusContainer,buttonStyle]}><Text style={[styles.statusbuttonText,textColor]}>{translation && translation.translation.tiers.Unlimited}</Text></View>}
                          {entitlement === 5 &&  <View style={[styles.statusContainer,buttonStyle]}><Text style={[styles.statusbuttonText,textColor]}>{translation && translation.translation.core.Tester}</Text></View>}
                          {entitlement === 6 &&  <View style={[styles.statusContainer,buttonStyle]}><Text style={[styles.statusbuttonText,textColor]}>{translation && translation.translation.core.Developer}</Text></View>}
                        </View>
                  
              </View>  
              {!entitlement < 3 && <View style={styles.inputContainer}>
                <Text style={[styles.label,textColor]}>{translation && translation.translation.core.RemoveAds}</Text>
                    <View style={styles.innerContainer}>
                    <TouchableOpacity onPress={()=>{handlePressButton()}}style={[styles.buttonContainer,buttonStyle]}>
                      <Text style={[styles.buttonText,textColor]}>{translation && translation.translation.core.Upgrade}</Text>
                    </TouchableOpacity>
                    </View>
                  
              </View>  }
              {entitlement === 6 && <View style={styles.inputContainer}>

              
                <Text style={[styles.label,textColor]}>{translation && translation.translation.core.EntitlementLvl}</Text>
                  <View style={styles.innerContainer}>
                      <EntitlementPicker  icons={icons} translation={translation} theme={theme}
                                userSettings={userSettings} setUserSettings={setUserSettings} setSettingsChanged={setSettingsChanged}/>
                  </View>

                </View>   
                }
              {entitlement === 5 && <View style={styles.inputContainer}>

              
                    <Text style={[styles.thanks,textColor]}>{translation && translation.translation.core.ThanksTester}</Text>
                     

                    </View>   
                    }
          </View>) }

          
                      
           
           
      </ScrollView>
      
    );
}

const styles = StyleSheet.create({
  developerDetails:{},
  buttonContainer:{ alignSelf:"center",width:200,borderWidth:1, borderRadius:5, alignItems:"center",justifyContent:"center",height:48, marginHorizontal:2},
  detailContainer:{margin:10},
  detailNameBar:{},
  detailBar:{},
  developerName:{fontFamily:"Poppins-BoldItalic",fontSize:12},
  developerEmail:{fontFamily:"Poppins-BoldItalic",fontSize:12},
  developerLabel:{fontFamily:"Poppins-Italic", fontSize:12},
  container: {},
  list:{alignItems: 'center',height:"70%", margin:10},
  phaseDayContainer:{flexDirection:"column"},
  buttonsContainer:{flexDirection:"row", width:'100%', alignItems:"center"},
  
  buttonText:{fontSize:13,fontFamily:"Poppins-Bold",textAlign:"center", textAlignVertical:"center"},
  formContainer: {margin:15,marginTop: 15,  height:"90%"},
  inputsContainer:{height:"90%"},
  inputContainer:{flexDirection:'row',alignItems:"center",width:"100%",marginVertical:10, justifyContent:"center", 
  },
  innerContainer:{flex:1},
  statusLabel:{fontSize:16,fontFamily:"Poppins-SemiBold", alignItems:"center",justifyContent:"center",
    },
  label:{flex:1, fontFamily: 'Poppins-Regular',
    fontSize: 15,},
  thanks:{flex:1, fontFamily: 'Poppins-Regular',marginTop:10,
      fontSize: 15,textAlign:"center"},
  name: {flex: 1},
  nameText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
  },
  logoImage: {
    alignSelf: 'center',
    width: 80,
    height: 80,
    borderRadius: 20,
    padding: 20,
    margin: 30,
   
  },
  bin: {},
  binImage: {width: 45, height: 45},
  
  
  buttonContainer:{ borderWidth:1, borderRadius:5, alignItems:"center",justifyContent:"center"},
  buttonText:{fontSize:16,fontFamily:"Poppins-Light",textAlign:"center", textAlignVertical:"center",marginVertical:9,marginHorizontal:15},
  statusContainer:{ borderWidth:1, borderRadius:5, alignItems:"center",justifyContent:"center"},
  statusbuttonText:{width:130,fontSize:16,fontFamily:"Poppins-Light",textAlign:"center", textAlignVertical:"center",marginVertical:9,marginHorizontal:15}
});

export default SettingsList;
