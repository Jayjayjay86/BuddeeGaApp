import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import * as Progress from 'react-native-progress';

const ProgressBar = ({cappedProgress,theme,translation,item,daysRemaining,unfilledColor,color}) => {
  const textColor={color:theme.core.text}
  return (
    <View style={styles.progressContainer}>
            <Text style={styles.progressText}></Text>
            <Progress.Bar unfilledColor={unfilledColor} color={color}
            style={styles.progressBar} progress={cappedProgress}  />
            {item.currentPhase === "In Veg" && <Text style={[styles.progressText,textColor]}>
                {" "}{daysRemaining}/{item.proposedVeggingDuration} ({translation && translation.translation.core.Days})
            </Text>}
            {item.currentPhase === "In Flower" && <Text style={[styles.progressText,textColor]}>
                {" "}{daysRemaining}/{item.strainFloweringDuration} ({translation && translation.translation.core.Days})
            </Text>}
            {item.currentPhase === "Drying" && <Text style={[styles.progressText,textColor]}>
                {" "}{daysRemaining}/{item.estimatedDryingDuration} ({translation && translation.translation.core.Days})
            </Text>}
           
    </View>
  )
}

export default ProgressBar

const styles = StyleSheet.create({
    progressContainer:{
        flexDirection:"row",alignItems:"center",marginVertical:5},
      progressBar:{width:100},
})