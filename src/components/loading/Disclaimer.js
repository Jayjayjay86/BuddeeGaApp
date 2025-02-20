import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';

import LoadingLanguageSelector from './LoadingLanguageSelector';
import { useTranslation } from '../../utils/Locales/TranslationContext';
import { useTheme } from '../../utils/Theme/ContextManager';

const Disclaimer = ({
  pressAccept,
  pressDecline,
  userOptions,
  setUserOptions,
}) => {
  const {theme, icons, isDarkMode} = useTheme();
  const {translation, setTranslation} = useTranslation();
  const requestBackgroundStyles = {
    borderColor: theme.core.lightBorder,
    backgroundColor: theme.core.lessCream,
  };
  const headerTextStyle = {color: theme.core.textColor};
  const disclaimerColor = {color: theme.core.textColor};
  const termsLinkColor = {color: theme.core.textColor};
  const buttonColor = {color: theme.core.textColor};
  const acceptButtonColor = {backgroundColor: theme.core.plantGreen};
  const declineButtonColor = {backgroundColor: theme.core.deleteRed};
  return (
    <View style={[styles.container, {backgroundColor: theme.core.background}]}>
      {/* <Image style={styles.logo} source={icons.image[2]} /> */}
      <Text style={styles.languageSelect}>
        {`${
          translation.core && translation.loading.disclaimer.DisplayPage
        } ${userOptions.userLanguage}`}
      </Text>
      <LoadingLanguageSelector
        translation={translation}
        userOptions={userOptions}
        setUserOptions={setUserOptions}
      />

      <Text style={[styles.header, headerTextStyle]}>
        {translation.core && translation.loading.disclaimer.NotOlder}
      </Text>
      <Text style={[styles.request, disclaimerColor, requestBackgroundStyles]}>
        {translation.core && translation.loading.disclaimer.Request}
      </Text>
      <View style={[styles.disclaimer, requestBackgroundStyles]}>
        <Text style={[styles.disclaimerText, disclaimerColor]}>
          {translation.core &&
            translation.loading.disclaimer.DisclaimerText}
        </Text>
        <TouchableOpacity onPress={() => {}}>
          <Text style={[styles.termsLink, termsLinkColor]}>
            {translation.core && translation.loading.disclaimer.TermsLink}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity
          style={[styles.acceptButton, acceptButtonColor]}
          onPress={() => {
            pressAccept();
          }}>
          <Text style={[styles.buttonText, buttonColor]}>
            {translation.core && translation.loading.disclaimer.AcceptText}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.declineButton, declineButtonColor]}
          onPress={() => {
            pressDecline();
          }}>
          <Text style={[styles.buttonText, buttonColor]}>
            {translation.core &&
              translation.loading.disclaimer.DeclineText}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: '100%',
    margin: 10,
  },
  logo: {width: 48, height: 48, marginTop: 10},
  header: {
    marginTop: 10,
    fontFamily: 'Poppins-Bold',
    fontSize: 27,
  },
  request: {
    fontFamily: 'Poppins-Light',
    fontSize: 17,
    borderRadius: 10,
    margin: 15,
    textAlign: 'center',
    padding: 8,
    borderWidth: 1,
  },
  disclaimer: {
    marginHorizontal: 15,
    marginTop: 10,
    marginBottom: 15,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingTop: 5,
    borderWidth: 1,
  },
  disclaimerText: {
    fontFamily: 'Poppins-Light',
    fontSize: 17,
    textAlign: 'center',
  },
  termsLink: {
    fontFamily: 'Poppins-SemiBoldItalic',
    fontSize: 17,
    textAlign: 'center',
  },
  buttons: {marginTop: 80},
  acceptButton: {borderRadius: 20},
  declineButton: {borderRadius: 20, marginTop: 5},

  buttonText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 19,
    padding: 10,
    paddingTop: 12,
    paddingHorizontal: 20,
  },
});
export default Disclaimer;
