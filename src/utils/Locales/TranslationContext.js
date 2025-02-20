import React, {createContext, useState, useContext, useEffect} from 'react';
import {en} from './Locales';
import {th} from './Locales2';
import {hbr} from './Locales3';
import {hi} from './Locales4';
import {de} from './Locales5';
import {it} from './Locales6';
import {fr} from './Locales7';
import {spn} from './Locales8';

const translations = {en, th, spn, it, de, hbr, fr, hi};

const TranslationContext = createContext();

export const useTranslation = () => useContext(TranslationContext);

export const TranslationProvider = ({
  
  defaultTranslation = 'en',
  children,
  userTranslation,
  
}) => {
  
  const [translation, setTranslation] = useState(
    userTranslation || defaultTranslation
  );

 useEffect(() => {
  if (userTranslation) {
    setTranslation(userTranslation);
  }
}, [userTranslation]);

  return (
    <TranslationContext.Provider
      value={{translation: translations[translation], setTranslation}}>
      {children}
    </TranslationContext.Provider>
  );
};

export default TranslationProvider;
