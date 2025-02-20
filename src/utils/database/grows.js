import AsyncStorage from '@react-native-async-storage/async-storage';
import 'react-native-get-random-values';
import uuid from 'react-native-uuid';



const dataBaseName = 'gr'
const MILLISECONDS_IN_A_DAY = 86400000;
export const createGrow = async object => {
  const uniqueId = uuid.v4();
  const createdOn = new Date();

  let startedOn = null
  let changedOn = null
  let lastPhaseChange = new Date()

  if (object.currentPhase === "In Flower") {
    changedOn = new Date(createdOn.getTime() - Number(object.floweringDurationInDays) * MILLISECONDS_IN_A_DAY)
    const totalAgeDays = Number(object.veggingDurationInDays) + Number(object.floweringDurationInDays);
    startedOn = new Date(createdOn.getTime() - totalAgeDays * MILLISECONDS_IN_A_DAY);
    lastPhaseChange = { date:changedOn,
                        lastPhase:"In Veg"
                      }

  }
   
  else if  (object.currentPhase === "Drying") {
    changedOn = new Date(createdOn.getTime() - Number(object.dryingDurationInDays) * MILLISECONDS_IN_A_DAY)
    const totalAgeDays = Number(object.veggingDurationInDays) + Number(object.floweringDurationInDays)+ Number(object.dryingDurationInDays);
    startedOn = new Date(createdOn.getTime() - totalAgeDays * MILLISECONDS_IN_A_DAY);
    lastPhaseChange = { date:changedOn,
                        lastPhase:"In Flower"
    }
  } 
  
  else {
    changedOn = new Date(createdOn.getTime() - Number(object.veggingDurationInDays) * MILLISECONDS_IN_A_DAY)
    startedOn = new Date(createdOn.getTime() - Number(object.veggingDurationInDays) * MILLISECONDS_IN_A_DAY);
    lastPhaseChange = { date:changedOn,
                        lastPhase:"In Veg"
    }
  }

  try {
    const dataArray = await AsyncStorage.getItem(dataBaseName);
    const parsedArray = dataArray ? JSON.parse(dataArray) : [];

    const combinedOperationObject = {
      id: uniqueId,
      createdOn: createdOn,
      startedOn:startedOn,
      lastPhaseChange:lastPhaseChange,
      ...object,
    };
    parsedArray.push(combinedOperationObject);

    await AsyncStorage.setItem(dataBaseName, JSON.stringify(parsedArray));

    
    return Promise.resolve(combinedOperationObject);

  } catch (error) {
    return Promise.reject(error);
  }
};



export const getGrows = async () => {
  try {
    const unparsedArray = await AsyncStorage.getItem(dataBaseName);
    return Promise.resolve(unparsedArray ? JSON.parse(unparsedArray) : []);
  } catch (error) {
    return Promise.reject(`Error Fetching - grow-list: ${error}`);
  }
};

export const getGrowById = async id => {
  try {
    const unparsedGrows = await AsyncStorage.getItem(dataBaseName);
    const parsedGrows = unparsedGrows
      ? JSON.parse(unparsedGrows)
      : [];

    const Grow = parsedGrows.filter(object => object.id === id);

    if (Grow) {
      return Promise.resolve(Grow);
    } else {
      return Promise.reject();
    }
  } catch (error) {
    return Promise.reject();
  }
};

export const updateGrow = async object => {
  const today = new Date()
  const oldGrow = await getGrowById(object.id)
  const lastPhase = {date:today, lastPhase:oldGrow[0].currentPhase}

  const newObject = {...object, lastPhaseChange:lastPhase}
  try {
    
    
    const Grows = await AsyncStorage.getItem(dataBaseName);
    const parsedArray = Grows ? JSON.parse(Grows) : [];

    const updatedGrows = parsedArray.map(Grow =>
      Grow.id === object.id ? {...Grow, ...newObject} : Grow,
    );

    const updatedGrowsString = JSON.stringify(updatedGrows);

    await AsyncStorage.setItem(dataBaseName, updatedGrowsString);

    if (Grows !== updatedGrowsString) {
      return Promise.resolve(true);
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

export const destroyGrows = async () => {
  try {
    await AsyncStorage.removeItem(dataBaseName);
    return Promise.resolve(true);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const removeGrow = async GrowId => {
  try {
    const Grows = await AsyncStorage.getItem(dataBaseName);
    const parsedArray = Grows ? JSON.parse(Grows) : [];
    const updatedGrows = parsedArray.filter(
      Grow => Grow.id !== GrowId,
    );
    if (parsedArray.length > updatedGrows.length) {
      await AsyncStorage.setItem(
        dataBaseName,
        JSON.stringify(updatedGrows),
      );
      return Promise.resolve([true, GrowId]);
    }
  } catch (error) {
    return Promise.reject([false, error]);
  }
};
