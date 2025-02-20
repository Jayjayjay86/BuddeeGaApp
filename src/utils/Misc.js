

export const developerInfo = {name:"John Sullivan",email:"buddeedevjohn@gmail.com",support:"supportbuddee@gmail.com"}
export const UPGRADE_PRODUCT_SKU = ['adfree_tier1',
                                    '5grows_tier1.5',
                                    '5grows_tier2',
                                    'unlimited_tier2.5',
                                    'unlimited_tier3',
                                    'unlimited_tier3.5']


export const calculateDaysDifference = startDate => {
  const start = new Date(startDate);
  const today = new Date();
  const timeDiff = today - start;
  return Math.floor(timeDiff / (1000 * 60 * 60 * 24));
};

export const getAge = startLife => {
  const today = new Date();
  const millisecondsPerDay = 1000 * 60 * 60 * 24;
  return Math.floor((today - startLife) / millisecondsPerDay);
};
export const DefaultUserSettingsObject = {
  userLanguage: 'en',
  preferDarkMode: false,
  purchaseDetails:[],
}; 
export const defaultGrowObject = {
  name: "",
  currentPhase: "In Veg",
  lastPhaseChange:{date:new Date(),lastPhase:"In Veg"},
  estimatedDryingDuration:"",
  strainFloweringDuration: "",
  proposedVeggingDuration: "",
  veggingDurationInDays:"",
  floweringDurationInDays:"",
  dryingDurationInDays:""
}
export const getWeeks = (days) => {
 
  return (days / 7).toFixed(1);
}

export const languageNames = (language, setNewUserOptions, newUserOptions) => {
  switch (language.label) {
    case 'English':
      setNewUserOptions({
        ...newUserOptions,
        preferredLanguage: 'en',
      });
      break;
    case 'อังกฤษ':
      setNewUserOptions({
        ...newUserOptions,
        preferredLanguage: 'en',
      });
      break;
    case 'Thai':
      setNewUserOptions({
        ...newUserOptions,
        preferredLanguage: 'th',
      });
      break;
    case 'ไทย':
      setNewUserOptions({
        ...newUserOptions,
        preferredLanguage: 'th',
      });
      break;
    case 'Spanish':
      setNewUserOptions({
        ...newUserOptions,
        preferredLanguage: 'sp',
      });
      break;
    case 'French':
      setNewUserOptions({
        ...newUserOptions,
        preferredLanguage: 'fr',
      });
      break;
    case 'Hindu':
      setNewUserOptions({
        ...newUserOptions,
        preferredLanguage: 'hind',
      });
      break;
  }
};
export const dummy = [
  
  { 
    id:"0",
    name:"fff",
    flowerTime:'65', 
    date:new Date(), 
    currentPhase:"flower" , 
    phaseDuration:'2'
  },
  { 
    id:"1",
    name:"hhh",
    flowerTime:'80', 
    date:new Date(), 
    currentPhase:"veg" , 
    phaseDuration:'5'
  },
  { 
    id:"2",
    name:"yyy",
    flowerTime:'77', 
    date:new Date(), 
    currentPhase:"flower" , 
    phaseDuration:'10'
  },
  { 
      id:"3",
      name:"fff",
      flowerTime:'65', 
      date:new Date(), 
      currentPhase:"flower" , 
      phaseDuration:'2'
    },
    { 
      id:"4",
      name:"hhh",
      flowerTime:'80', 
      date:new Date(), 
      currentPhase:"veg" , 
      phaseDuration:5
    },
    { 
      id:"5",
      name:"yyy",
      flowerTime:'77', 
      date:new Date(), 
      currentPhase:"flower" , 
      phaseDuration:'10'
    },
    { 
      id:"6",
      name:"fff",
      flowerTime:'65', 
      date:new Date(), 
      currentPhase:"flower" , 
      phaseDuration:'2'
    },
    { 
      id:"7",
      name:"hhh",
      flowerTime:'80', 
      date:new Date(), 
      currentPhase:"veg" , 
      phaseDuration:'5'
    },
    { 
      id:"8",
      name:"yyy",
      flowerTime:'77', 
      date:new Date(), 
      currentPhase:"flower" , 
      phaseDuration:'10'
    },
  
  ]