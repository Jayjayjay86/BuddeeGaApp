export const hi = {
  core : {
    Code: "hi",
    AddGrow: "नया गढ़ा जोड़ें",
    Back: "वापस",
    Cancel: "रद्द करें",
    Delete: "मिटाएं",
    DateStart: "आरंभ तिथि",
    Age: "उम्र",
    Phase: "चरण",
    Days: "दिन",
    Date: "तिथि",
    FormName: "नाम",
    FlowerTi: "फूलने का समय",
    Current: "वर्तमान चरण",
    PhaseDur: "चरण की अवधि",
    Tap: "यहां टैप करें",
    Confirm: "पुष्टि करें",
    Create: "बनाएं",
    Edit: "संपादित करें",
    Name: "नाम",
    Loading: 'लोड हो रहा है',
    Language: "भाषा",
    Theme: "थीम",
    DeleteData: "डेटाबेस हटाएं",
    Clear: "सभी रिकॉर्ड मिटाएं।",
    DateStarted: "ग्रो की शुरुआत तिथि",
    DeleteRecords: "क्या आप वाकई सभी रिकॉर्ड्स मिटाना चाहते हैं?",
    DeleteGrow: "क्या आप वाकई इस गढ़े को मिटाना चाहते हैं?",
    Adproblem: "एक समस्या हुई है।",
    NewGrow: "नया गढ़ा सहेजा गया।",
    EnterDuration: "कृपया अवधि दर्ज करें।",
    EnterFlower: "कृपया फूलने का समय दर्ज करें।",
    EnterName: "कृपया नाम दर्ज करें।",
    Changes: "परिवर्तन सहेजे गए।",
    SaveChange:"परिवर्तन सहेजें",

    Developer:"डेवलपर:",
    Email: "ईमेल",
    Hide:"छुपाएं",
    Show:"दिखाएं",

    Dark:"डार्क मोड",
    Light:"लाइट मोड",
    RemoveAds:"विज्ञापन हटाएं",
    Upgrade:"अपग्रेड करें",
    Support:"सहायता और प्रश्न",

    DateCreated:"निर्माण की तारीख",
    FlowerDate:"फूल की तारीख" ,
    TotalAge:"कुल आयु: ",

    Upgrade: "अपग्रेड",
    RemoveAds: "विज्ञापन हटाएं",
    AdFreeTier: "सभी विज्ञापन हटाएं",
    MediumTier: "अधिकतम 5 उगाने का रिकॉर्ड रखें",
    UnlimitedTier: "जितने चाहें उतने उगाने का रिकॉर्ड रखें",
    EstDryTime: "अनुमानित सुखाने का समय",
    FloweringTimePhase: "फूल आने के चरण का समय",
    VeggingTimePhase: "पौधों के विकास चरण का समय",
    TotalVeggingTime: "कुल प्रस्तावित विकास समय",
    DryingDuration: "सुखाने की अवधि",
    GrowUpdated: "उगाने को अपडेट किया गया",
    GrowRemoved: "उगाने को हटा दिया गया",
    ChangePhase: "चरण बदलें",
    AllGrowsGone: "सभी उगाने हटा दिए गए",
    Error: "त्रुटि!",
    UpgradeTo2: "2 से अधिक उगाने के लिए अपग्रेड करें",
    UpgradeTo5: "5 से अधिक उगाने के लिए अपग्रेड करें",

    PurchaseSuccess:"खरीद सफल! धन्यवाद!",
    PurcaseFail:"खरीद विफल",
    AdFree: "विज्ञापन-मुक्त स्तर",
    Grows5: "5 गार्डन स्तर",
    Unlimited: "असीमित गार्डन स्तर",
    DateStarted: "आरंभ तिथि",
    PhaseLast: "अंतिम चरण परिवर्तन",
    Status:"स्थिति",
    ScrollDown:"नीचे स्क्रॉल करें",
    Week:"सप्ताह",

    TestMode: "परीक्षण मोड",
    DeveloperMode: "डेवलपर मोड",
    Tester: "परीक्षक",
    Developer: "डेवलपर",
    EntitlementLvl: "अधिकार स्तर:",
    ThanksTester: "परीक्षक होने के लिए धन्यवाद"
    
    },tiers:{
      Free:"मुफ्त स्तर",
      AdFree:"विज्ञापन मुक्त स्तर",
      Grows5:"5 उगाने का स्तर",
      Unlimited:"असीमित स्तर"
    },
languages: [
  {key: 'en', label: 'अंग्रेज़ी'},
  {key: 'th', label: 'थाई'},
  {key: 'fr', label: 'फ्रेंच'},
  {key: 'hbr', label: 'हिब्रू'},
  {key: 'hi', label: 'हिंदी'},
  {key: 'spn', label: 'स्पेनिश'},
  {key: 'de', label: 'जर्मन'},
  {key: 'it', label: 'इतालवी'},
],
languageChoice: {
  'en': 'अंग्रेज़ी',
  'th': 'थाई',
  'fr': 'फ्रेंच',
  'hbr': 'हिब्रू',
  'hi': 'हिंदी',
  'spn': 'स्पेनिश',
  'de': 'जर्मन',
  'it': 'इतालवी',
},
phase:{
  "In Veg":"वेज में",
  "In Flower":"प्रकटीकरण में",
  "Drying":"लटकता हुआ",
    data:[
      { key: "In Veg", label: "वेज में" }, // "In Veg"
      { key: "In Flower", label: "प्रकटीकरण में" }, // "In Flower"
      { key: "Drying", label: "लटकता हुआ" }    // "Hanging"
  ]
},
theme:{
  data:[
    { key: 'light', label: 'लाइट-मोड' }, // "Light-Mode"
    { key: 'dark', label: 'डार्क-मोड' }   // "Dark-Mode"
]
},

menuList:[
  {
      Id: 'grows',
      Title: "ग्रोव्स",
      Description: [
          "महत्वपूर्ण तारीखों को रिकॉर्ड करें।",
          "चरणों का ट्रैक रखें।",
          "संपादित और हटाएं।"
      ]
  },
  {
      Id: 'calculator',
      Title: "कैल्कुलेटर",
      Description: [
          "पानी और पोषक तत्वों की मात्रा की गणना करें।",
          "CO2 की मात्रा और रोशनी।",
          "संभावित उपज का अनुमान लगाएं।"
      ]
  },
  {
      Id: 'settings',
      Title: "सेटिंग्स",
      Description: [
          "भाषा सेट करें",
          "थीम चुनें",
          "डेटाबेस साफ़ करें"
      ]
  }
],
calculators: {
  calculatorDescriptions: {
    Co2: "इनडोर ग्रो के लिए प्रति घंटे CO₂ सप्लीमेंटेशन दर की गणना करें",
    Yield: "वाटेज, वेज और फूलने की अवधि के आधार पर संभावित फसल के वजन का अनुमान लगाने के लिए यील्ड कैलकुलेटर",
    Light: "ग्रो स्पेस के आयामों के आधार पर आवश्यक वाटेज का अनुमान लगाने के लिए लाइट कैलकुलेटर",
    Water: "पौधे की उम्र और चक्र के आधार पर पानी और पोषक तत्वों की आवश्यकताओं का अनुमान लगाने के लिए पानी उपयोग कैलकुलेटर",
    Elec: "वाटेज, रनटाइम और दरों के आधार पर ऊर्जा लागत का अनुमान लगाने के लिए बिजली उपयोग कैलकुलेटर",
  },
      calculators: {
        CalcCO2: 'आवश्यक CO2 की गणना करें',
        EntRate: 'दर दर्ज करें',
        GwH: 'फर्श से ऊंचाई (मीटर)',
        GwL: 'विकास क्षेत्र की ऊंचाई (मीटर)',
        GwW: 'विकास क्षेत्र की चौड़ाई (मीटर)',
        EntHeight: 'एक ऊंचाई दर्ज करें।',
        EntLength: 'एक लंबाई दर्ज करें।',
        EntWidth: 'एक चौड़ाई दर्ज करें।',
        Calc: 'गणना करें',
        EntFlowerAmount: 'फूल पोषक तत्व की मात्रा दर्ज करें।',
        EntNutrientAmount: 'सब्जी पोषक तत्व की मात्रा दर्ज करें।',
        EntNumber: 'पौधों की संख्या दर्ज करें।',
        EntAge: 'पौधे की आयु दर्ज करें।',
        EntWattage: 'वाट दर्ज करें।',
        EntWeeks: 'सप्ताह दर्ज करें।',
        EntDays: 'फूलने के दिनों को दर्ज करें।',
        HeadTxt: 'गणक',
        Co2: 'Co2 गणक',
        Final: 'अंतिम उपज गणक',
        Light: 'प्रकाश गणक',
        Water: 'पानी उपयोग गणक',
        ElecCalc: 'बिजली गणक',
        elec: {
          Watts: 'वाट्स',
          Day: 'फूलने के दिन',
          Week: 'सब्जी के सप्ताह',
          Rate: 'दर (Kw/H)',
          Button: 'बिजली लागत की गणना करें',
          Answer: 'उत्तर',
        },
        light: {
          Width: 'चौड़ाई (मीटर)',
          Length: 'लंबाई (मीटर)',
          Height: 'जमीन से ऊंचाई (मीटर)',
          Est: 'अनुमानित वाटेज',
          Watts: 'वाट्स',
        },
        co2: {
          EnvLength: 'पर्यावरण की लंबाई (मीटर)',
          EnvWidth: 'पर्यावरण की चौड़ाई (मीटर)',
          EnvHeight: 'पर्यावरण की ऊंचाई (मीटर)',
          Button: 'आवश्यक CO2 की गणना करें',
          Result: 'आवश्यक CO2',
          Ppm: 'ppm',
        },
        yield: {
          Wattage: 'वाटेज:',
          VegWeeks: 'सब्जी के सप्ताह',
          FlowerDays: 'फूल के दिन',
          Button: 'अंतिम उपज की गणना करें',
          Est: 'अनुमानित अंतिम उपज',
          Grams: 'ग्राम',
        },
        water: {
          TimeVeg: 'सब्जी का समय (सप्ताह)',
          TimeFl: 'फूलने का समय (दिन)',
          PlntAge: 'सब्जी के शुरू में पौधे की आयु (दिन)',
          Number: 'पौधों की संख्या',
          NuteVeg: 'सब्जी में प्रति लीटर पोषक तत्व (मिलीलीटर)',
          NuteFlr: 'फूल में प्रति लीटर पोषक तत्व (मिलीलीटर)',
          Button: 'गणना करें',
          Est: 'अनुमानित आवश्यक पानी',
          Liters: 'लीटर',
          EstNuteVeg: 'सब्जी में अनुमानित आवश्यक पोषक तत्व',
          EstNuteFlower: 'फूल में अनुमानित आवश्यक पोषक तत्व',
          Ml: 'मिलीलीटर',
        },
      },
      charts: {
        HeaderText: 'चार्ट्स',
        Ph: 'Ph चार्ट',
        Vpd: 'Vpd चार्ट',
        VpdExplain: 'Vpd समझाया गया',
      },
    },

}
