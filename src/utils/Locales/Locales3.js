export const hbr = {
  core : {
    Code: "hbr",
    AddGrow: "הוסף גידול חדש",
    Back: "חזור",
    Cancel: "ביטול",
    Delete: "מחק",
    DateStart: "תאריך התחלה: ",
    Age: "גיל",
    Phase: "שלב",
    Days: "ימים",
    Date: "תאריך",
    FormName: "שם",
    FlowerTi: "זמן פריחה",
    Current: "שלב נוכחי",
    PhaseDur: "משך השלב",
    Tap: "לחץ כאן",
    Confirm: "אשר",
    Create: "צור",
    Edit: "ערוך",
    Name: "שם",
    Loading: "טוען...",
    Language: "שפה",
    Theme: "ערכת נושא",
    DeleteData: "מחק בסיס נתונים",
    Clear: "נקה את כל הרשומות.",
    DateStarted: "תאריך התחלת הגידול",
    DeleteRecords: "האם אתה בטוח שברצונך למחוק את כל הרשומות?",
    DeleteGrow: "האם אתה בטוח שברצונך למחוק את הגידול הזה?",
    Adproblem: "אירעה בעיה.",
    NewGrow: "הגידול החדש נשמר.",
    EnterDuration: "אנא הזן משך זמן.",
    EnterFlower: "אנא הזן זמן פריחה.",
    EnterName: "אנא הזן שם.",
    Changes: "השינויים נשמרו.",
    SaveChange:"שמור שינויים",

    Developer:"מפתח",
    Email: "אימייל",
    Hide:"הסתר",
    Show:"הצג",

    
    Dark:"מצב כהה",
    Light:"מצב בהיר",
    RemoveAds:"הסר פרסומות",
    Upgrade:"שדרג",
    Support:"תמיכה ושאלות",

    DateCreated:"תאריך יצירה",
    FlowerDate:"תאריך פריחה" ,
    TotalAge:"גיל כולל",

    Upgrade: "שדרוג",
    RemoveAds: "הסר פרסומות",
    AdFreeTier: "הסר את כל הפרסומות",
    MediumTier: "תיעוד עד 5 גידולים",
    UnlimitedTier: "תיעוד גידולים ללא הגבלה",
    EstDryTime: "זמן ייבוש משוער",
    FloweringTimePhase: "זמן שלב הפריחה",
    VeggingTimePhase: "זמן שלב הצמיחה",
    TotalVeggingTime: "זמן הצמיחה הכולל המשוער",
    DryingDuration: "משך זמן הייבוש",
    GrowUpdated: "הגידול עודכן",
    GrowRemoved: "הגידול הוסר",
    ChangePhase: "שנה שלב",
    AllGrowsGone: "כל הגידולים הוסרו",
    Error: "שגיאה!",
    UpgradeTo2: "שדרג כדי ליצור יותר מ-2 גידולים",
    UpgradeTo5: "שדרג כדי ליצור יותר מ-5 גידולים",

    PurchaseSuccess:"הרכישה הצליחה! תודה!",
    PurcaseFail:"הרכישה נכשלה",
    AdFree: "רמה ללא פרסומות",
    Grows5: "רמת 5 גידולים",
    Unlimited: "רמת גידולים ללא הגבלה",
    DateStarted: "תאריך התחלה",
    PhaseLast: "השלב שונה לאחרונה",
    Status:"סטטוס",
    ScrollDown:"גלול למטה",
    Week:"שבוע",

    TestMode: "מצב בדיקה",
    DeveloperMode: "מצב מפתח",
    Tester: "בודק",
    Developer: "מפתח",
    EntitlementLvl: "רמת זכאות:",
    ThanksTester: "תודה שאתה בודק"




},
tiers:{
  Free:"שכבה חינמית	",
  AdFree:"שכבה ללא פרסומות",
  Grows5:"שכבה ל-5 גידולים",
  Unlimited:"שכבה ללא הגבלה"
},
languages: [
  {key: 'en', label: 'אנגלית'},
  {key: 'th', label: 'תאילנדית'},
  {key: 'fr', label: 'צרפתית'},
  {key: 'hbr', label: 'עברית'},
  {key: 'hi', label: 'הינדו'},
  {key: 'spn', label: 'ספרדית'},
  {key: 'de', label: 'גרמנית'},
  {key: 'it', label: 'איטלקית'},
],
languageChoice: {
  'en': 'אנגלית',
  'th': 'תאילנדית',
  'fr': 'צרפתית',
  'hbr': 'עברית',
  'hi': 'הינדו',
  'spn': 'ספרדית',
  'de': 'גרמנית',
  'it': 'איטלקית',
},
phase:{
  "In Veg":"בשלב צמיחה",
  "In Flower": "בשלב פריחה",
  "Drying": "בתלייה",
  data : [
    { key: "In Veg", label: "בשלב צמיחה" }, // "In Veg"
    { key: "In Flower", label: "בשלב פריחה" }, // "In Flower"
    { key: "Drying", label: "בתלייה" }     // "Hanging"
]
},
theme:{
  data:[
    { key: 'light', label: 'מצב בהיר' }, // "Light-Mode"
    { key: 'dark', label: 'מצב כהה' }   // "Dark-Mode"
]
},

menuList:[
  {
      Id: 'grows',
      Title: "גידולים",
      Description: [
          "רשום תאריכים חשובים.",
          "עקוב אחרי שלבים.",
          "ערוך ומחק."
      ]
  },
  {
      Id: 'calculator',
      Title: "מחשבים",
      Description: [
          "חשב את כמות המים והחומרים המזינים.",
          "חשב את כמות ה-CO2 וההארה.",
          "הערך את התפוקה הפוטנציאלית."
      ]
  },
  {
      Id: 'settings',
      Title: "הגדרות",
      Description: [
          "קבע שפה",
          "בחר ערכת נושא",
          "נקה את מאגר הנתונים"
      ]
  }
],
calculators: {
  calculatorDescriptions: {
    Co2: "חשב את שיעור ההשלמה לשעה של CO₂ עבור גידולים פנימיים",
    Yield: "מחשבון תשואה להערכת משקל הקציר הפוטנציאלי בהתבסס על וואט, שבועות וגידול ומשך זמן פריחה",
    Light: "מחשבון תאורה להערכת הספק החשמל הדרוש על פי מידות שטח הגידול",
    Water: "מחשבון שימוש במים להערכת הצורך במים ובחומרי דישון בהתבסס על גיל הצמח והמחזור הגידול",
    Elec: "מחשבון צריכת חשמל להערכת עלויות האנרגיה בהתבסס על וואט, זמן פעולה ושיעורי תעריף",
  },
    calculators: {
        CalcCO2: 'חשב צורך ב- CO2',
        EntRate: "'הזן קצב.',",
        GwH: 'גובה מהקרקע (מטר)',
        GwL: 'אורך מרחב הצמח (מטר)',
        GwW: 'רוחב מרחב הצמח (מטר)',
        EntHeight: 'הזן גובה.',
        EntLength: 'הזן אורך.',
        EntWidth: 'הזן רוחב.',
        Calc: 'חשב',
        EntFlowerAmount: 'הזן כמות תזונה לשלב הפריחה.',
        EntNutrientAmount: 'הזן כמות תזונה לשלב הצמח.',
        EntNumber: 'הזן מספר צמחים.',
        EntAge: 'הזן גיל הצמח.',
        EntWattage: "הזן וואטג'.",
        EntWeeks: 'הזן מספר שבועות בשלב הצמח.',
        EntDays: 'הזן מספר ימים בשלב הפריחה.',
        HeadTxt: 'מחשבונים',
        Co2: 'מחשבון CO2',
        Final: 'מחשבון תוצאה סופית',
        Light: 'מחשבון תאורה',
        Water: 'מחשבון שימוש במים',
        ElecCalc: 'מחשבון חשמל',
        elec: {
          Watts: 'וואט',
          Day: 'ימים בשלב הפריחה',
          Week: 'שבועות בשלב הצמח',
          Rate: 'תעריף (קילואט-שעה)',
          Button: 'חשב עלויות חשמל',
          Answer: 'תשובה',
        },
        light: {
          Width: 'רוחב (מטר)',
          Length: 'אורך (מטר)',
          Height: 'גובה מהקרקע (מטר)',
          Est: "ספק וואטטג' משוער",
          Watts: 'וואטים',
        },
        co2: {
          EnvLength: 'אורך הסביבה (מטר)',
          EnvWidth: 'רוחב הסביבה (מטר)',
          EnvHeight: 'גובה הסביבה (מטר)',
          Button: 'חשב צורך ב- CO2',
          Result: 'CO2 נדרש',
          Ppm: 'ppm',
        },
        yield: {
          Wattage: "ספק וואטטג' משוער",
          VegWeeks: 'שבועות בשלב הצמח',
          FlowerDays: 'ימים בשלב הפריחה',
          Button: 'חשב תוצאה סופית',
          Est: 'תוצאה סופית משוערת',
          Grams: 'גרם',
        },
        water: {
          TimeVeg: 'זמן בשלב הצמח (שבועות)',
          TimeFl: 'זמן בשלב הפריחה (ימים)',
          PlntAge: 'גיל הצמח בהתחלת שלב הצמח (ימים)',
          Number: 'מספר הצמחים',
          NuteVeg: 'פירות ליטר בשלב הצמח (מ"ל)',
          NuteFlower: 'פירות ליטר בשלב הפריחה (מ"ל)',
          Button: 'חשב',
          Est: 'הצטברות המים המשוערת',
          Liters: 'ליטרים',
          EstNuteVeg: 'הפירות המשוערים הנדרשים בשלב הצמח',
          EstNuteFlower: 'הפירות המשוערים הנדרשים בשלב הפריחה',
          Ml: 'מ"ל',
        },
      },
    },

}


    


