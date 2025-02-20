import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const acceptDisclaimerButton = ({message, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{message}</Text>
    </TouchableOpacity>
  );
};

export default acceptDisclaimerButton;

const styles = StyleSheet.create({});
