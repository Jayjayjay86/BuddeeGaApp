import AsyncStorage from '@react-native-async-storage/async-storage';

const dataBaseName = 'us'

export const createUserSettings = async newObject => {
  try {
    const unparsedArray = await AsyncStorage.getItem(dataBaseName);

    const parsed = unparsedArray
      ? JSON.parse(unparsedArray)
      : [];
    if (parsed.length > 1) {
      Promise.reject(0);
    }
    const settings = {
      id: 0,
      created: new Date().toISOString(),
      userLanguage: newObject.userLanguage,
      preferDarkMode: newObject.preferDarkMode,
      entitlement: newObject.entitlement,
   
    };
    parsed.push(settings);

    await AsyncStorage.setItem(dataBaseName, JSON.stringify(parsed));

    return Promise.resolve(true);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getUserSettings = async () => {
  try {
    const unparsed = await AsyncStorage.getItem(dataBaseName);
    return Promise.resolve(unparsed ? JSON.parse(unparsed) : []);
  } catch (error) {
    return Promise.reject(`Error get options: ${error}`);
  }
};

export const updateUserSettings = async object => {
  try {
    const userSettings = await AsyncStorage.getItem(dataBaseName);
    const parsed = userSettings ? JSON.parse(userSettings) : [];

    const updated = parsed.map(setting =>
      setting.id === 0 ? {...setting, ...object} : setting,
    );

    const updatedString = JSON.stringify(updated);

    await AsyncStorage.setItem(dataBaseName, updatedString);

    if (userSettings !== updatedString) {
      return Promise.resolve();
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

export const destroyUserSettings = async () => {
  try {
    await AsyncStorage.removeItem(dataBaseName);
    return Promise.resolve(true);
  } catch (error) {
    return Promise.reject(error);
  }
};
