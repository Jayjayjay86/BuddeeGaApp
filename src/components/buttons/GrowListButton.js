import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, TextBase, TouchableOpacity, View } from 'react-native';
import { getAge } from '../../utils/Misc';
import { progressCalculationDrying, progressCalculationFlower, progressCalculationVeg } from '../../utils/calculations';
import ProgressBar from '../loading/ProgressBar';
import { getWeeks } from '../../utils/Misc';
const GrowListButton = ({itemIndex,navigation,item,theme,icons,handleSelectGrow,translation}) => {
  const textColor={color:theme.core.text}
  const [daysRemaining,setDaysRemaining]=useState(0)
  const [cappedProgress,setCappedProgress]=useState(0)
 
  useEffect(()=>{
    if (item.currentPhase === "In Veg") {
      const data = progressCalculationVeg(item)
      setCappedProgress(data.progress /100)
      setDaysRemaining(data.completed)
    } else if (item.currentPhase === "In Flower") {
      const data = progressCalculationFlower(item)
      setCappedProgress(data.progress /100)
      setDaysRemaining(data.completed)
    } else if (item.currentPhase === "Drying") {
      const data = progressCalculationDrying(item)
      setCappedProgress(data.progress /100)
      setDaysRemaining(data.completed)
    }
   
  },[cappedProgress])
  
  return (
    
        <TouchableOpacity style={[styles.ButtonContainer]} onPress={() => {handleSelectGrow(item.id,itemIndex);}}>
            <View style={styles.leftContainer}>
                  <Image style={styles.ButtonImage} source={icons.core.plant} />
            </View>

            <View style={styles.rightContainer}>
                  <View style={styles.rightTopContainerContainer}>

                  <Text style={[styles.name,textColor]}>{item.name}</Text>
                  </View>

                  <View style={styles.rightBottomContainer}>
                    {item.currentPhase === "In Veg" && <>
                      <Text style={[styles.descriptionText,textColor]}>{translation && translation.translation.core.DateStarted}: {new Date(item.createdOn).toLocaleDateString()}</Text>
                      {translation && translation.translation.core.Code === "fr" ?
                       <>
                          <Text style={[styles.descriptionText,textColor]}>{translation && translation.translation.core.PhaseLast}:</Text>
                          <Text>{new Date(item.lastPhaseChange.date).toLocaleDateString()}</Text>
                        </> : 
                        <Text style={[styles.descriptionText,textColor]}>{translation && translation.translation.core.PhaseLast}: {new Date(item.lastPhaseChange.date).toLocaleDateString()}</Text>
                      }
                      
                        <Text style={[styles.descriptionText,textColor]}>{translation && translation.translation.core.TotalAge}: {Number(getAge(new Date(item.createdOn)) + Number(item.veggingDurationInDays))} {translation && translation.translation.core.Days} ({translation && translation.translation.core.Week} {(getWeeks(Number(getAge(new Date(item.createdOn)) + Number(item.veggingDurationInDays))))})</Text>
                        <Text style={[styles.descriptionText,textColor]}>{translation && translation.translation.core.Current}: {translation.translation.phase["In Veg"]} </Text>
                        <ProgressBar color={theme.core.green} unfilledColor={theme.core.grey}theme={theme} translation={translation} item={item} cappedProgress={cappedProgress} daysRemaining={daysRemaining}/>
                        
                        </>
                    }


                     {item.currentPhase === "In Flower" && <>
                      <Text style={[styles.descriptionText,textColor]}>{translation && translation.translation.core.DateStarted}: {new Date(item.createdOn).toLocaleDateString()}</Text>
                      {translation && translation.translation.core.Code === "fr" ?
                       <>
                          <Text style={[styles.descriptionText,textColor]}>{translation && translation.translation.core.PhaseLast}:</Text>
                          <Text>{new Date(item.lastPhaseChange.date).toLocaleDateString()}</Text>
                        </> : 
                        <Text style={[styles.descriptionText,textColor]}>{translation && translation.translation.core.PhaseLast}: {new Date(item.lastPhaseChange.date).toLocaleDateString()}</Text>
                      }
                      <Text style={[styles.descriptionText,textColor]}>{translation && translation.translation.core.TotalAge}: {Number(getAge(new Date(item.createdOn))+ Number(item.veggingDurationInDays) + Number(item.floweringDurationInDays))} {translation && translation.translation.core.Days}</Text>
                      <Text style={[styles.descriptionText,textColor]}>{translation && translation.translation.core.Current}: {translation.translation.phase["In Flower"]} </Text>
                      <ProgressBar color={theme.core.green}  unfilledColor={theme.core.grey}theme={theme} translation={translation} item={item} cappedProgress={cappedProgress} daysRemaining={daysRemaining}/>
                        </>
                    }


                     {item.currentPhase === "Drying" && <>
                      <Text style={[styles.descriptionText,textColor]}>{translation && translation.translation.core.DateStarted} {new Date(item.createdOn).toLocaleDateString()}</Text>
                       

                      {translation && translation.translation.core.Code === "fr" ?
                       <>
                          <Text style={[styles.descriptionText,textColor]}>{translation && translation.translation.core.PhaseLast}:</Text>
                          <Text>{new Date(item.lastPhaseChange.date).toLocaleDateString()}</Text>
                        </> : 
                        <Text style={[styles.descriptionText,textColor]}>{translation && translation.translation.core.PhaseLast}: {new Date(item.lastPhaseChange.date).toLocaleDateString()}</Text>
                      }
                        <Text style={[styles.descriptionText,textColor]}>{translation && translation.translation.core.TotalAge} {Number(getAge(new Date(item.createdOn)) + Number(item.dryingDurationInDays) + Number(item.floweringDurationInDays) + Number(item.veggingDurationInDays))} {translation && translation.translation.core.Days}</Text>
                        
                        <Text style={[styles.descriptionText,textColor]}>{translation && translation.translation.core.Current} {translation.translation.phase.Drying} </Text>
                        <ProgressBar color={theme.core.green} unfilledColor={theme.core.grey}theme={theme} translation={translation} item={item} cappedProgress={cappedProgress} daysRemaining={daysRemaining}/>
                         
                        </>
                    }
                   
                 
                  </View>
           
            
           </View>
           

        
        </TouchableOpacity>
  
  )
}


const styles = StyleSheet.create({
  ButtonContainer:{
      marginVertical:5,
      paddingVertical:5,
      display:"flex",
      flexDirection:"row",
      width:"100%",
    
    },
    progressContainer:{
      flexDirection:"row",alignItems:"center",justifyContent:"center"},
    progressBar:{width:100},
    leftContainer:{
      marginTop:20,
      alignItems:"center",
      justifyContent:"center",
      padding:10,
      width:"25%",
      height:120
    },

    rightContainer:{
     
   
     
    },

    rightTopContainerContainer:{ 
      display:'flex',
      alignItems:"center",
      justifyContent:"center",
     
    },

    rightBottomContainer:{
      width:"100%",
      paddingHorizontal:30,
      paddingBottom:10,
     
   
  
    },

    ButtonImage: {
      alignContent: 'center',
      justifyContent: 'center',
      width: 100,
      height: 100,
    },
    name:{
      fontFamily:"Poppins-SemiBold",
      fontSize:20,
      marginBottom:5
    
    },
    descriptionText:{
      fontFamily:"Poppins-Regular",
      fontSize:12,
     
},
    progressText:{
          fontFamily:"Poppins-Regular",
          fontSize:12,
         
    }
  });
export default GrowListButton;
