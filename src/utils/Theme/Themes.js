const CoreColor = {
  primary: 'rgba(172, 112, 29, 0.91)', 
  darkPrimary: 'rgba(210,180,140,0.3)',
  black: 'rgba(1,1,1,0.8)',
  blackBlue: 'rgba(1,1,45,0.9)',
  whiteBackground:"rgba(240,240,250,1)",
  whiteText:"rgba(220,220,220,0.8)",
  subWhite: 'rgba(150,136,113,1)',
  darkBackground: 'rgba(38,44,44,1)',
  plantGreen: 'rgba(0,122,0,0.3)',
  deleteRed: 'rgba(200,0,0,0.4)',
  grey: 'rgba(235,235,230,0.3)',
  softGrey: 'rgba(235,235,230,0.6)',
  softerGrey: 'rgba(235,235,230,0.1)',
};



export const light = {
  core: {
    code:"light",
    background: CoreColor.whiteBackground,
    primary: CoreColor.primary,
    text: CoreColor.black,
    subText: CoreColor.blackBlue,
    grey: CoreColor.softGrey,
    red: CoreColor.deleteRed,
    green: CoreColor.plantGreen,
    choice:CoreColor.black,
    modalBackground:CoreColor.whiteBackground,
    border:CoreColor.grey
  }
};

export const dark = {

  core: {
    code:"dark",
    background: CoreColor.darkBackground,
    primary: CoreColor.darkPrimary,
    text: CoreColor.whiteText,
    subText: CoreColor.subWhite,
    grey: CoreColor.softerGrey,
    red: CoreColor.deleteRed,
    green: CoreColor.plantGreen,
    choice:CoreColor.whiteText,
    modalBackground:CoreColor.darkBackground,
    border:CoreColor.black
  
  }
};
