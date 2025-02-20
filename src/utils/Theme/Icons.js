
// light icons
const loadingImage = require('../../assets/images/splashscreen/transparent.png');
const backButton = require('../../assets/images/light/back.png');
const plantButton = require('../../assets/images/light/plant.png');
const calcIconImage = require('../../assets/images/light/calc.png');
const buddeeLogo = require('../../assets/images/light/buddee.png');
const moreToolsImage = require('../../assets/images/light/settings.png');
const EnvironmentImage = require('../../assets/images/light/env.png');
const noObjectImage = require('../../assets/images/light/noEnvs.png')
// dark icons
const loadingImageDark = require('../../assets/images/splashscreen/transparent.png');
const backButtonDark = require('../../assets/images/dark/back.png');
const calcIconImageDark = require('../../assets/images/dark/calc.png');
const buddeeLogoDark = require('../../assets/images/dark/buddee.png');
const plantButtonDark = require('../../assets/images/dark/plant.png');
const binImageDark = require('../../assets/images/dark/bin.png');
const moreToolsImageDark = require('../../assets/images/dark/settings.png');
const EnvironmentImageDark = require('../../assets/images/dark/env.png');
const noObjectImageDark = require('../../assets/images/dark/noEnvs.png')

export const lightIcons = {
 
    core: {
      'back':backButton,
      'grows':EnvironmentImage,
      'plant':plantButton,
      'bin':binImageDark,
      'calculator':calcIconImage,
      'buddee':buddeeLogo,
      'loading':loadingImage,
      'settings':moreToolsImage,
      'noObject':noObjectImage
  }

};
export const darkIcons = {
  core: {
    'back':backButtonDark,
    'grows':EnvironmentImageDark,
    'plant':plantButtonDark,
    'bin':binImageDark,
    'calculator':calcIconImageDark,
    'buddee':buddeeLogoDark,
    'loading':loadingImageDark,
    'settings':moreToolsImageDark,
    'noObject':noObjectImageDark
  
}

};
