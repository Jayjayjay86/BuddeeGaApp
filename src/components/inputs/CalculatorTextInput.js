import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

const CalculatorInput = ({colors, translation, setEnvObject, envObject}) => {
  const inputStyles = {borderColor: colors.envs.new.nameInputBorder};
  const textStyles = {color: colors.envs.new.nameInputBorder};

  return (
    <View style={styles.formInput}>
      {!envObject.name ? (
        <>
          <Text style={[styles.formText, textStyles]}>{translation && translation.translation.core.Name}</Text>
          <TextInput
            placeholder={translation.environments.addEnv.placeholder.Name}
            style={[styles.textInput, inputStyles]}
            onChangeText={value =>
              setEnvObject(prevState => ({...prevState, name: value}))
            }
          />
        </>
      ) : (
        <>
          <TextInput
            value={envObject.name}
            style={[styles.textInput, inputStyles]}
            onChangeText={value =>
              setEnvObject(prevState => ({...prevState, name: value}))
            }
          />
        </>
      )}
    </View>
  );
};

export default CalculatorInput;
const styles = StyleSheet.create({
  formText: {fontSize: 20, fontFamily: 'Poppins-Regular'},
  textInput: {
    fontFamily: 'Poppins-SemiBold',
    alignSelf: 'center',
    width: '90%',
    borderBottomWidth: 1,
    margin: 10,
  },
});
