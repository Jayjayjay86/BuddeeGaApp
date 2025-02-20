import { View, Text, StyleSheet, ToastAndroid, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import ModalBackButton from '../buttons/ModalBackButton'
import DeleteGrowButton from '../buttons/DeleteGrowButton'
import AffirmButton from '../buttons/AffirmButton'
import GrowName from '../inputs/GrowName'
import GrowFlowerTime from '../inputs/GrowFlowerTime'
import { createGrow, removeGrow, updateGrow } from '../../utils/database/grows'
import ConfirmDeleteGrow from '../../screens/modal/ConfirmDeleteGrow'
import EstDryDuration from '../inputs/EstDryDuration'
import GrowSelector from '../pickers/GrowSelector'
import FlowerPhaseDuration from '../inputs/FlowerPhaseDuration'
import VegPhaseDuration from '../inputs/VegPhaseDuration'
import ProposedVegDuration from '../inputs/ProposedVegDuration'
import DryPhaseDuration from '../inputs/DryPhaseDuration'
import BackButton from '../buttons/BackButton'
import { defaultGrowObject } from '../../utils/Misc'

const GrowForm = ({ pressBack,purpose,icons,theme,translation,isDarkMode,
                      selectedGrow,
                         navigation}) => {
    const textColor = {color: theme.core.text}
    const greyBackground = {backgroundColor:theme.core.grey}
    const [confirmVisible, setConfirmVisible] = useState(false)
    const [growObject, setGrowObject] = useState(selectedGrow[0])
  

    const  handleDeleteGrow = async () => {
      await removeGrow(growObject.id)
    
      ToastAndroid.show(translation ? translation.translation.core.GrowRemoved : "", ToastAndroid.BOTTOM);
      
      setConfirmVisible(false)
    
      navigation.navigate('Grows');
    }
    const handleCreate = async () => {
        try {
          if (growObject.name === '') {
            ToastAndroid.show(translation ? translation.translation.core.EnterName : "", ToastAndroid.BOTTOM);
            return;
          }
          if (growObject.strainFloweringDuration === '') {
            ToastAndroid.show(translation ? translation.translation.core.EnterFlower: "", ToastAndroid.BOTTOM);
            return;
          }
          if (growObject.estimatedDryingDuration === '') {
            ToastAndroid.show(translation ? translation.translation.core.EnterDuration: "", ToastAndroid.BOTTOM);
            return;
          }
          if (growObject.currentPhase === "In Veg") {
            if (growObject.veggingDurationInDays === '') {
                ToastAndroid.show(translation ? translation.translation.core.EnterDuration: "", ToastAndroid.BOTTOM);
                return;
              }
              if (growObject.proposedVeggingDuration === '') {
                ToastAndroid.show(translation ? translation.translation.core.EnterDuration: "", ToastAndroid.BOTTOM);
                return;
              }
          } else if (growObject.currentPhase === "In Flower") {
            if (growObject.floweringDurationInDays === '') {
                ToastAndroid.show(translation ? translation.translation.core.EnterDuration: "", ToastAndroid.BOTTOM);
                return;
              }
          }
          else if (growObject.currentPhase === "In Flower") {
            if (growObject.dryingDurationInDays === '') {
                ToastAndroid.show(translation ? translation.translation.core.EnterDuration: "", ToastAndroid.BOTTOM);
                return;
              }
          } 
          
          await createGrow(growObject)
       
          ToastAndroid.show(translation ? translation.translation.core.NewGrow: "", ToastAndroid.BOTTOM);
          setGrowObject({...defaultGrowObject})
          navigation.navigate("Grows")
          
        } catch (error) {
          console.error(error)
          ToastAndroid.show(translation ? translation.translation.core.Problem: "", ToastAndroid.BOTTOM);
        }
    
        
      };

    const handleSaveChanges = async () => {
        if (growObject.name === '') {
            ToastAndroid.show(translation ? translation.translation.core.EnterName: "", ToastAndroid.BOTTOM);
            return;
          }
          if (growObject.strainFloweringDuration === '') {
            ToastAndroid.show(translation ? translation.translation.core.EnterFlower: "", ToastAndroid.BOTTOM);
            return;
          }
          if (growObject.estimatedDryingDuration === '') {
            ToastAndroid.show(translation ? translation.translation.core.EnterDuration: "", ToastAndroid.BOTTOM);
            return;
          }
          if (growObject.currentPhase === "In Veg") {
            if (growObject.veggingDurationInDays === '') {
                ToastAndroid.show(translation ? translation.translation.core.EnterDuration: "", ToastAndroid.BOTTOM);
                return;
              }
              if (growObject.proposedVeggingDuration === '') {
                ToastAndroid.show(translation ? translation.translation.core.EnterDuration: "", ToastAndroid.BOTTOM);
                return;
              }
          } else if (growObject.currentPhase === "In Flower") {
            if (growObject.floweringDurationInDays === '') {
                ToastAndroid.show(translation ? translation.translation.core.EnterDuration: "", ToastAndroid.BOTTOM);
                return;
              }
          }
          else if (growObject.currentPhase === "In Flower") {
            if (growObject.dryingDurationInDays === '') {
                ToastAndroid.show(translation ? translation.translation.core.EnterDuration: "", ToastAndroid.BOTTOM);
                return;
              }
          } 
    
      
      await updateGrow(growObject)

      ToastAndroid.show(translation ? translation.translation.core.Changes: "", ToastAndroid.BOTTOM);
      navigation.navigate('Grows');
    };

    return (
      
        <View style={styles.formContainer}>   

            <View style={styles.inputsContainer}>

                <View style={styles.inputContainer}>
                    <Text style={[styles.label,textColor,greyBackground]}>{translation && translation.translation.core.FormName}</Text>  
                    <View style={styles.innerContainer}>
                        <GrowName icons={icons} theme={theme} translation={translation} isDarkMode={isDarkMode}
                                                  growObject={growObject} setGrowObject={setGrowObject}
                                                  placeholder={translation && translation.translation.core.Tap}/>
                    </View>
                </View>

                <View style={styles.inputContainer}>
                    <Text style={[styles.label,textColor,greyBackground]}>{translation && translation.translation.core.FlowerTi} ({translation.translation.core.Days})</Text>
                        <View style={styles.innerContainer}>
                            <GrowFlowerTime icons={icons} theme={theme} translation={translation} isDarkMode={isDarkMode} 
                                                        growObject={growObject} setGrowObject={setGrowObject} 
                                                        placeholder={translation && translation.translation.core.Tap}/>
                        </View>   
                  </View>
                  
                  <View style={styles.inputContainer}>
                      <Text style={[styles.label,textColor,greyBackground]}>{translation.translation.core.EstDryTime} ({translation.translation.core.Days})</Text>
                          <View style={styles.innerContainer}>
                              <EstDryDuration  icons={icons} theme={theme} translation={translation} isDarkMode={isDarkMode} 
                                                growObject={growObject} setGrowObject={setGrowObject}  
                                                placeholder={translation && translation.translation.core.Tap}/> 
                          </View>
                  </View>  
                        
                  <View style={styles.inputContainer}>
                      <Text style={[styles.label,textColor,greyBackground]}>{translation.translation.core.Current}</Text>
                          <View style={styles.innerContainer}>

                          <GrowSelector icons={icons} theme={theme} translation={translation} isDarkMode={isDarkMode}
                                        growObject={growObject} setGrowObject={setGrowObject} 
                                        label={translation && translation.translation.core.Tap} cancelText={translation && translation.translation.core.Cancel}/>
                          </View> 
                  </View>  
                    
                  <View style={styles.changePhase}>

                      {growObject.currentPhase === "In Flower" && 
                          <View style={styles.inputContainer}>
                              <Text style={[styles.label,textColor,greyBackground]}>{translation.translation.core.FloweringTimePhase} ({translation.translation.core.Days})</Text>
                                  <View style={styles.innerContainer}>
                                      <FlowerPhaseDuration  icons={icons} theme={theme} translation={translation} isDarkMode={isDarkMode} 
                                                        growObject={growObject} setGrowObject={setGrowObject}  
                                                        placeholder={translation && translation.translation.core.Tap}
                                      /> 
                                  </View>
                          </View>  
                      }

                      {growObject.currentPhase === "In Veg" && 
                          <>
                            <View style={styles.inputContainer}>
                                <Text style={[styles.label,textColor,greyBackground]}>{translation.translation.core.VeggingTimePhase} </Text>
                                    <View style={styles.innerContainer}>
                                        <VegPhaseDuration  icons={icons} theme={theme} translation={translation} isDarkMode={isDarkMode} 
                                                            growObject={growObject} setGrowObject={setGrowObject}  
                                                            placeholder={translation && translation.translation.core.Tap}/> 
                                    </View>
                            </View>  
                            <View style={styles.inputContainer}>
                                <Text style={[styles.label,textColor,greyBackground]}>{translation.translation.core.TotalVeggingTime} ({translation.translation.core.Days})</Text>
                                    <View style={styles.innerContainer}>
                                        <ProposedVegDuration icons={icons} theme={theme} translation={translation} isDarkMode={isDarkMode} 
                                                      growObject={growObject} setGrowObject={setGrowObject}  
                                                      placeholder={translation && translation.translation.core.Tap}/> 
                                    </View>
                              </View>
                          </>
                      }
                      {growObject.currentPhase === "Drying" && 
                          <View style={styles.inputContainer}>
                              <Text style={[styles.label,textColor,greyBackground]}>{translation.translation.core.DryingDuration} ({translation.translation.core.Days})</Text>
                              <View style={styles.innerContainer}>
                                  <DryPhaseDuration  icons={icons} theme={theme} translation={translation} isDarkMode={isDarkMode} 
                                                              growObject={growObject} setGrowObject={setGrowObject}  
                                                              placeholder={translation && translation.translation.core.Tap}/> 
                              </View>
                          </View>  
                      }
                  
                  </View>

                        
                  <View style={styles.buttonsContainer}>
                 
                      <AffirmButton translation={translation}theme={theme} label={translation && translation.translation.core.Edit} onPress={()=>{
                        purpose === "edit" ? handleSaveChanges() : handleCreate()}}/>
                      <BackButton pressBack={pressBack}translation={translation} theme={theme} icons={icons}
                                                    navigation={navigation}/>
                      {purpose === "edit" && 
                          <DeleteGrowButton icons={icons} theme={theme} translation={translation} isDarkMode={isDarkMode}onPress={setConfirmVisible}/>
                      }
                    
                     
                </View>
                  
            </View>
            
            <ConfirmDeleteGrow icons={icons} theme={theme} translation={translation} isDarkMode={isDarkMode} 
                                    isVisible={confirmVisible} setisVisible={setConfirmVisible}
                                    handleDelete={handleDeleteGrow}/>
        </View> 
              
          
        )
    }

export default GrowForm

const styles = StyleSheet.create({

    container: {alignItems: 'center', justifyContent: 'center'},
    phaseDayContainer:{flexDirection:"column"},
    buttonsContainer:{flexDirection:"row", alignSelf:"center",alignItems:"center"},
    formContainer: {marginHorizontal:10,marginTop: 15,flex:1 ,padding:5
    },
    inputsContainer:{flex:1},
    inputContainer:{flexDirection:'row',alignItems:"center",width:"100%",},
    innerContainer:{flex:1,alignSelf:"center"},
    label:{borderRadius:5,flex:1, fontSize:13, fontFamily:"Poppins-Light",padding:5,paddingVertical:10,marginRight:10},
    name: {flex: 1},
    nameText: {
      fontFamily: 'Poppins-Regular',
      fontSize: 15,
     
    },
    bin: {},
    binImage: {width: 45, height: 45},
  });
  