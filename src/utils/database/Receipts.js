import AsyncStorage from '@react-native-async-storage/async-storage';
import 'react-native-get-random-values';
import uuid from 'react-native-uuid';

const dataBaseName = 're'


export const createReceipt = async object => {
  const uniqueId = uuid.v4();
  const createdOn = new Date();
  try {
    const dataArray = await AsyncStorage.getItem(dataBaseName);
    const parsedArray = dataArray ? JSON.parse(dataArray) : [];

    const combinedOperationObject = {
      id: uniqueId,
      createdOn: createdOn,
      ...object,
    };
    parsedArray.push(combinedOperationObject);

    await AsyncStorage.setItem(dataBaseName, JSON.stringify(parsedArray));

    
    return Promise.resolve(combinedOperationObject);

  } catch (error) {
    return Promise.reject(error);
  }
};

export const getReceipts = async () => {
  try {
    const unparsedArray = await AsyncStorage.getItem(dataBaseName);
    return Promise.resolve(unparsedArray ? JSON.parse(unparsedArray) : []);
  } catch (error) {
    return Promise.reject(`Error Fetching - Receipt-list: ${error}`);
  }
};

export const destroyReceipts = async () => {
  try {
    await AsyncStorage.removeItem(dataBaseName);
    return Promise.resolve(true);
  } catch (error) {
    return Promise.reject(error);
  }
};

