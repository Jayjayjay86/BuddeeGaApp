import {StyleSheet, View} from 'react-native';
import React from 'react';
import ModalSelector from 'react-native-modal-selector';
import {overlayStyles} from '../../utils/Theme/Styles'
import { useTranslation } from '../../utils/Locales/TranslationContext';
const LoadingLanguageSelector = ({
  translation,
  userOptions,
  setUserOptions,
}) => {
  const {setTranslation} = useTranslation();
  return (
    <View style={styles.formInput}>
      <ModalSelector
        style={styles.modalSelector}
        data={translation.core && translation.languages}
        initValue={userOptions.userLanguage}
        onChange={language => {
          setUserOptions(prevState =>({
            ...prevState,
            userLanguage: language.key,
          }));
          setTranslation(language.key);
         
        }}
        listType={'SCROLLVIEW'}
        animationType={'fade'}
        overlayStyle={overlayStyles}
        cancelText={translation.core && translation.core.Cancel}
      />
    </View>
  );
};

export default LoadingLanguageSelector;

const styles = StyleSheet.create({
  formInput: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  modalSelector: {width: 200},
});
