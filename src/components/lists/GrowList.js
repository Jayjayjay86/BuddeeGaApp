import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { useState } from 'react';
import GrowListButton from '../buttons/GrowListButton';

const GrowList = ({entitlement,navigation,translation,icons,theme,growArray,handleSelectGrow}) => {
  
  const handleEntitlement = (skl) => {
      switch (skl) {
        case "free_tier":
          return growArray.slice(0,2)
        case "adfree_tier1":
          return growArray.slice(0,2)
        case "5grows_tier2":
          return growArray.slice(0,5)
        case "unlimited_tier3":
          return growArray
        default:
          return growArray.slice(0,1)
    }
    
  }


  return (
    <ScrollView style={styles.GrowList}>


 
       
           <>
            {entitlement < 1 && <>{ handleEntitlement("free_tier").map((item, itemIndex) => (
                <GrowListButton  itemIndex={itemIndex} translation={translation}handleSelectGrow={handleSelectGrow}key={itemIndex} item={item} icons={icons} theme={theme} navigation={navigation}/>))}</>
            }
            {entitlement === 1  && <>{ handleEntitlement("adfree_tier1").map((item, itemIndex) => (
                <GrowListButton   itemIndex={itemIndex} translation={translation}handleSelectGrow={handleSelectGrow}key={itemIndex} item={item} icons={icons} theme={theme} navigation={navigation}/>))}</>
            }
                    {entitlement === 2 && <>{ handleEntitlement("5grows_tier2").map((item, itemIndex) => (
                <GrowListButton  itemIndex={itemIndex} translation={translation}handleSelectGrow={handleSelectGrow}key={itemIndex} item={item} icons={icons} theme={theme} navigation={navigation}/>))}</>
            }
                    {entitlement  === 3 && <>{ handleEntitlement("unlimited_tier3").map((item, itemIndex) => (
                <GrowListButton  itemIndex={itemIndex} translation={translation}handleSelectGrow={handleSelectGrow}key={itemIndex} item={item} icons={icons} theme={theme} navigation={navigation}/>))}</>
            }
                    {entitlement  === 5 && <>{ handleEntitlement("unlimited_tier3").map((item, itemIndex) => (
                <GrowListButton  itemIndex={itemIndex} translation={translation}handleSelectGrow={handleSelectGrow}key={itemIndex} item={item} icons={icons} theme={theme} navigation={navigation}/>))}</>
            }
            {entitlement  === 6 && <>{ handleEntitlement("unlimited_tier3").map((item, itemIndex) => (
                <GrowListButton  itemIndex={itemIndex} translation={translation}handleSelectGrow={handleSelectGrow}key={itemIndex} item={item} icons={icons} theme={theme} navigation={navigation}/>))}</>
            }
          </>
         
          
       
      
    
        
          
        
      
    </ScrollView>
  );
};

export default GrowList;

const styles = StyleSheet.create({
  container: {marginTop: 20, marginHorizontal: 10, height: '100%'},
  display: {alignItems: 'center', justifyContent:"center" },
  GrowList: {height:"84%" },
  noObjectImage:{ margin: 20,borderRadius:10},
  encouragement:{flexDirection:"row",marginHorizontal:0,alignItems:"center", height:80, borderWidth:1},
  textAD:{fontSize:22,
    fontFamily:"Poppins-SemiBold",
    flex:1,
    textAlign:"center"
  },
  upgrade:{borderRadius:3,borderWidth:1,marginRight:10,padding:2,alignItems:"Center",justifyContent:"center"},
  upgradeText:{fontSize:22,fontFamily:"Poppins-SemiBold",padding:10}
});
