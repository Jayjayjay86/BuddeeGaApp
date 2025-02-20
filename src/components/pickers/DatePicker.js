import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import DatePicker from 'react-native-date-picker';

const DateSelector = ({
  icons, theme, isDarkMode, translation,
  setDateVisible,dateVisible,
  growObject,setGrowObject,
  title,cancel,confirm,label
}) => {
  const textColor = {color:theme.core.text}
  return (
    <View style={styles.container}>
  
      <TouchableOpacity style={styles.link}
        onPress={() => {
          setDateVisible(prevState => !prevState);
        }}>
        <Text style={[styles.dateMarker,textColor]}>
      {  new Date(growObject.date).toLocaleDateString()}
        </Text>
      </TouchableOpacity>


      <DatePicker
          
          theme={isDarkMode ? 'dark' : 'light'}
          title={title}
          cancelText={cancel}
          confirmText={confirm}
          locale={translation ? translation.translation.core.Code : "en"}
          mode="date"
          date={new Date(growObject.date)}
          modal
          open={dateVisible}
          onConfirm={date => {
            setDateVisible(false);
            setGrowObject(prevState => ({...prevState, date:date}));
          }}
          onCancel={() => {
            setDateVisible(false);
          }}
        />
      
      
    </View>
  );
};

export default DateSelector;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',

    margin: 5,
    link:{},
  },
  dateMarker:{borderBottomWidth:1},
  label: {},
  datePick:{borderBottomWidth:1,borderColor:"black"}
});
