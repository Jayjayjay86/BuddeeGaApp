import React from 'react';
import { StyleSheet, View } from 'react-native';
import HomeMenuButton from '../buttons/HomeMenuButton';

const MenuList = ({navigation,translation,icons,theme}) => {
 
  return (
        <View style={styles.HomeMenuList}>

        {translation.translation.menuList &&
          translation.translation.menuList.map((item) => (
            <HomeMenuButton key={item.Id} item={item} icons={icons} translation={translation} theme={theme} navigation={navigation}/>
          ))}
       
       
          </View>
    );
}

const styles = StyleSheet.create({})

export default MenuList;
