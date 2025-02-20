import { View, Text, StyleSheet, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import GrowSelector from '../pickers/GrowSelector'
import ModalBackButton from '../buttons/ModalBackButton'
import AffirmButton from '../buttons/AffirmButton'
import GrowName from '../inputs/GrowName'
import GrowFlowerTime from '../inputs/GrowFlowerTime'
import { createGrow } from '../../utils/database/grows'
import VegPhaseDuration from '../inputs/VegPhaseDuration'
import DryPhaseDuration from '../inputs/DryPhaseDuration'
import EstDryDuration from '../inputs/EstDryDuration'
import FlowerPhaseDuration from '../inputs/FlowerPhaseDuration'
import { defaultGrowObject } from '../../utils/Misc'
import ProposedVegDuration from '../inputs/ProposedVegDuration'
import BackButton from '../buttons/BackButton'

const AddGrowForm = ( 
                   { navigation,icons,theme,translation,isDarkMode}) => {
  const textColor={color:theme.core.text}
  const [growObject, setGrowObject] = useState(defaultGrowObject)

  const handleCreate = async () => {
    try {
      if (growObject.name === '') {
        ToastAndroid.show(translation ? translation.translation.core.EnterName : "", ToastAndroid.BOTTOM);
        return;
      }
      if (growObject.flowerTime === '') {
        ToastAndroid.show(translation ? translation.translation.core.EnterFlower: "", ToastAndroid.BOTTOM);
        return;
      }
      if (growObject.phaseDuration === '') {
        ToastAndroid.show(translation ? translation.translation.core.EnterDuration: "", ToastAndroid.BOTTOM);
        return;
      }

      await createGrow(growObject)
      await loadData()
      ToastAndroid.show(translation ? translation.translation.core.NewGrow: "", ToastAndroid.BOTTOM);
      setGrowObject({...defaultGrowObject})
      navigation.navigate("Grows")
      
    } catch (error) {
      console.error(error)
      ToastAndroid.show(translation ? translation.translation.core.Problem: "", ToastAndroid.BOTTOM);
    }

    
  };
  return (

  <View style={styles.formContainer}>   

      <View style={styles.inputsContainer}>

         
  
      <View style={styles.inputContainer}>
          <Text style={[styles.label,textColor]}>{translation ? translation.translation.core.FormName : ""}</Text>  
          <View style={styles.innerContainer}>
                <GrowName icons={icons} theme={theme} translation={translation} isDarkMode={isDarkMode}
                          growObject={growObject} setGrowObject={setGrowObject}
                          placeholder={translation ?  translation.translation.core.Tap : ""}
                />
          </View>
      </View>
        {growObject.currentPhase !== "Drying" && 
        <View style={styles.inputContainer}>
        <Text style={[styles.label,textColor]}>{translation ? translation.translation.core.FlowerTi: ""}</Text>
        <View style={styles.innerContainer}>
            <GrowFlowerTime icons={icons} theme={theme} translation={translation} isDarkMode={isDarkMode} 
                            growObject={growObject} setGrowObject={setGrowObject} 
                            placeholder={translation ?  translation.translation.core.Tap : ""}
            />
        </View>   
    </View>}
      
      <View style={styles.inputContainer}>
          <Text style={[styles.label,textColor]}>{translation ?  translation.translation.core.EstDryTime :""}</Text>
              <View style={styles.innerContainer}>
                  <EstDryDuration  icons={icons} theme={theme} translation={translation} isDarkMode={isDarkMode} 
                                    growObject={growObject} setGrowObject={setGrowObject}  
                                    placeholder={translation ?  translation.translation.core.Tap : ""}
                  /> 
              </View>
      
      </View>  
  
      <View style={styles.inputContainer}>
          <Text style={[styles.label,textColor]}>{translation ?  translation.translation.core.Current : ""}</Text>
          <View style={styles.innerContainer}>
              <GrowSelector icons={icons} theme={theme} translation={translation} isDarkMode={isDarkMode}
                            growObject={growObject} setGrowObject={setGrowObject} 
                            label={translation ?  translation.translation.core.Tap : ""} cancelText={translation && translation.translation.core.Cancel}
              />
          </View>  
          
      </View>
      {growObject.currentPhase === "In Flower" && 

      <>
          
        
          <View style={styles.inputContainer}>
              <Text style={[styles.label,textColor]}>{translation ?  translation.translation.core.FloweringTimePhase : ""} ({translation.translation.core.Days})</Text>
                  <View style={styles.innerContainer}>
                      <FlowerPhaseDuration  icons={icons} theme={theme} translation={translation} isDarkMode={isDarkMode} 
                                        growObject={growObject} setGrowObject={setGrowObject}  
                                        placeholder={translation ?  translation.translation.core.Tap : ""}
                      /> 
                  </View>
          </View>  
      </>
      }
      {growObject.currentPhase === "In Veg" && 
      <>
         <View style={styles.inputContainer}>
      <Text style={[styles.label,textColor]}>{translation ?  translation.translation.core.VeggingTimePhase : ""} ({translation.translation.core.Days})</Text>
          <View style={styles.innerContainer}>
              <VegPhaseDuration  icons={icons} theme={theme} translation={translation} isDarkMode={isDarkMode} 
                                  growObject={growObject} setGrowObject={setGrowObject}  
                                  placeholder={translation ?  translation.translation.core.Tap : ""}
              /> 
          </View>
      </View>  
        <View style={styles.inputContainer}>
        <Text style={[styles.label,textColor]}>{translation ?  translation.translation.core.TotalVeggingTime :""} ({translation.translation.core.Days})</Text>
            <View style={styles.innerContainer}>
                <ProposedVegDuration icons={icons} theme={theme} translation={translation} isDarkMode={isDarkMode} 
                                  growObject={growObject} setGrowObject={setGrowObject}  
                                  placeholder={translation ?  translation.translation.core.Tap : ""}
                /> 
            </View>
    </View></>
   
      }
       {growObject.currentPhase === "Drying" && 
      <>
      
  
 <View style={styles.inputContainer}>
          <Text style={[styles.label,textColor]}>{translation ?  translation.translation.core.DryingDuration : ""}</Text>
              <View style={styles.innerContainer}>
                  <DryPhaseDuration  icons={icons} theme={theme} translation={translation} isDarkMode={isDarkMode} 
                                    growObject={growObject} setGrowObject={setGrowObject}  
                                    placeholder={translation ?  translation.translation.core.Tap : ""}
                  /> 
              </View>
      </View>  
  </>
     
      }
       <View style={styles.buttonsContainer}>
         <BackButton translation={translation} theme={theme} icons={icons}
                               navigation={navigation}/>
                
          <AffirmButton theme={theme} label={translation ? translation.translation.core.Create : ""} onPress={handleCreate}/>
         
          
      </View>
      
    </View>
   
      
  </View> 
          
      
    )
  }
  
  export default AddGrowForm
  
  const styles = StyleSheet.create({
  
      container: {alignItems: 'center', justifyContent: 'center'},
      phaseDayContainer:{flexDirection:"column"},
      buttonsContainer:{flexDirection:"row", alignSelf:"center",margin:20,alignItems:"center"},
      formContainer: {marginHorizontal:25,marginTop: 5,  height:"100%"},
      inputsContainer:{width:"100%", paddingTop:10,flex:1},
      inputContainer:{
        height:65,
        flexDirection:'row',
        alignItems:"center",
        width:"100%",
        justifyContent:"center",margin:5
      
      },
      innerContainer:{flex:1},
      label:{width:'30%', fontSize:10,  fontFamily: 'Poppins-Bold',},

      name: {flex: 1},

      nameText: {
        fontFamily: 'Poppins-Regular',
        fontSize: 15,
       
      },
      bin: {},
      binImage: {width: 45, height: 45},
    });
    