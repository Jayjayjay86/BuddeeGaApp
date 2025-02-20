import React, {createContext, useContext, useEffect, useState} from 'react';
import {light, dark} from './Themes';

import {lightIcons, darkIcons} from './Icons';


const ThemeContext = createContext();


export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({children, userTheme}) => {

  const [theme, setTheme] = useState(userTheme ? dark:light );
  const [icons, setIcons] = useState(userTheme ? darkIcons : lightIcons);
  const toggleTheme = (preferDark) => {
    setTheme(preferDark ? dark : light);
    setIcons(preferDark ? darkIcons : lightIcons);
  };
  useEffect(() => {
    if (userTheme) {
      toggleTheme(userTheme);
    }
  }, [userTheme]);
  
  return (
    <ThemeContext.Provider value={{theme, icons, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};
