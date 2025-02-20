export const de = {
  core : {
    Code: "de",
    AddGrow: "Neues Wachstum hinzufügen",
    Back: "Zurück",
    Cancel: "Abbrechen",
    Delete: "Löschen",
    DateStart: "Startdatum",
    Age: "Alter",
    Phase: "Phase",
    Days: "Tage",
    Date: "Datum",
    FormName: "Name",
    FlowerTi: "Blütezeit",
    Current: "Aktuelle Phase",
    PhaseDur: "Phasen-Dauer",
    Tap: "Hier tippen",
    Confirm: "Bestätigen",
    Create: "Erstellen",
    Edit: "Bearbeiten",
    Name: "Name",
    Loading: "Lädt...",
    Language: "Sprache",
    Theme: "Thema",
    DeleteData: "Datenbank löschen",
    Clear: "Alle Datensätze löschen.",
    DateStarted: "Startdatum des Wachstums",
    DeleteRecords: "Möchten Sie wirklich alle Datensätze löschen?",
    DeleteGrow: "Möchten Sie dieses Wachstum wirklich löschen?",
    Adproblem: "Ein Problem ist aufgetreten.",
    NewGrow: "Neues Wachstum gespeichert.",
    EnterDuration: "Bitte Dauer eingeben.",
    EnterFlower: "Bitte Blütezeit eingeben.",
    EnterName: "Bitte Namen eingeben.",
    Changes: "Änderungen gespeichert.",
    SaveChange:"Änderungen speichern",

    Developer:"Entwickler:",
    Email: "E-Mail",
    Hide:"Verbergen	",
    Show:"Anzeigen",

    Dark:"Dunkelmodus",
    Light:"Hellmodus",
    RemoveAds:"Werbung entfernen",
    Upgrade:"Upgrade",
    Support:"Unterstützung und Anfragen",

    DateCreated:"Erstellungsdatum: ",
    FlowerDate:"Blühdatum" ,
    TotalAge:"Gesamtalter",

    Upgrade: "Upgrade",
    RemoveAds: "Werbung entfernen",
    AdFreeTier: "Alle Werbeanzeigen entfernen",
    MediumTier: "Bis zu 5 Anbaueinträge speichern",
    UnlimitedTier: "Unbegrenzt viele Anbaueinträge speichern",
    EstDryTime: "Geschätzte Trocknungszeit",
    FloweringTimePhase: "Zeit in der Blütephase",
    VeggingTimePhase: "Zeit in der Wachstumsphase",
    TotalVeggingTime: "Gesamte vorgeschlagene Wachstumszeit",
    DryingDuration: "Trocknungsdauer",
    GrowUpdated: "Anbau aktualisiert",
    GrowRemoved: "Anbau entfernt",
    ChangePhase: "Phase ändern",
    AllGrowsGone: "Alle Anbaueinträge entfernt",
    Error: "Fehler!",
    UpgradeTo2: "Upgrade, um mehr als 2 Anbaueinträge zu erstellen",
    UpgradeTo5: "Upgrade, um mehr als 5 Anbaueinträge zu erstellen",

    PurchaseSuccess:"Kauf erfolgreich! Vielen Dank!",
    PurcaseFail:"Kauf fehlgeschlagen",
    AdFree: "Werbefreie Stufe",
    Grows5: "Stufe für 5 Anbaueinträge",
    Unlimited: "Stufe für unbegrenzte Anbaueinträge",
    DateStarted: "Startdatum",
    PhaseLast: "Letzte Phasenänderung",
    Status:"Status",
    ScrollDown:"Nach unten scrollen",
    Week:"Woche",

    TestMode: "Testmodus",
    DeveloperMode: "Entwicklermodus",
    Tester: "Tester",
    Developer: "Entwickler",
    EntitlementLvl: "Berechtigungsstufe:",
    ThanksTester: "Vielen Dank, dass Sie Tester sind"
    
},tiers:{
  Free:"Kostenlose Stufe",
  AdFree:"Werbefreie Stufe",
  Grows5:"Stufe für 5 Anbauten",
  Unlimited:"Unbegrenzte Stufe"
},
languages: [
  {key: 'en', label: 'Englisch'},
  {key: 'th', label: 'Thailändisch'},
  {key: 'fr', label: 'Französisch'},
  {key: 'hbr', label: 'Hebräisch'},
  {key: 'hi', label: 'Hindu'},
  {key: 'spn', label: 'Spanisch'},
  {key: 'de', label: 'Deutsch'},
  {key: 'it', label: 'Italienisch'},
],
languageChoice: {
  'en': 'Englisch',
  'th': 'Thailändisch',
  'fr': 'Französisch',
  'hbr': 'Hebräisch',
  'hi': 'Hindu',
  'spn': 'Spanisch',
  'de': 'Deutsch',
  'it': 'Italienisch',
},
phase:{
  "In Veg":"In der Wachstumsphase",
  "In Flower":"In der Blütephase",
  "Drying":"Zum Trocknen aufgehängt",
    data: [
      { key: "In Veg", label: "In der Wachstumsphase" }, // "In Veg"
      { key: "In Flower", label: "In der Blütephase" },     // "In Flower"
      { key: "Drying", label: "Zum Trocknen aufgehängt" } // "Hanging"
  ]
},
theme:{
  data:[
    { key: 'light', label: 'Lichtmodus' },  // "Light-Mode"
    { key: 'dark', label: 'Dunkelmodus' }   // "Dark-Mode"
]
},

menuList:[
  {
      Id: 'grows',
      Title: "Wachstum",
      Description: [
          "Wichtige Daten aufzeichnen.",
          "Phasen verfolgen.",
          "Bearbeiten und löschen."
      ]
  },
  {
      Id: 'calculator',
      Title: "Rechner",
      Description: [
          "Wasser- und Nährstoffmengen berechnen.",
          "CO2-Menge und Beleuchtung.",
          "Potenzielle Erträge schätzen."
      ]
  },
  {
      Id: 'settings',
      Title: "Einstellungen",
      Description: [
          "Sprache einstellen",
          "Thema wählen",
          "Datenbank löschen"
      ]
  }
],
calculators: {
  calculatorDescriptions: {
    Co2: "Berechne die CO₂-Supplementierungsrate pro Stunde für Innenraumzucht",
    Yield: "Ertragsrechner zur Schätzung des potenziellen Erntegewichts basierend auf Watt, Wachstums- und Blühdauer",
    Light: "Lichtrechner zur Schätzung der benötigten Wattzahl basierend auf den Abmessungen des Anbauraums",
    Water: "Wasserverbrauchsrechner zur Schätzung des Wasser- und Nährstoffbedarfs basierend auf Pflanzenalter und Zyklus",
    Elec: "Stromverbrauchsrechner zur Schätzung der Energiekosten basierend auf Watt, Betriebsstunden und Tarifen",
  },
    calculators: {
        CalcCO2: 'Benötigte CO2 berechnen',
        EntRate: 'Rate eingeben.',
        GwH: 'Höhe vom Boden (m)',
        GwL: 'Höhe des Anbaubereichs (m)',
        GwW: 'Breite des Anbaubereichs (m)',
        EntHeight: 'Höhe eingeben',
        EntLength: 'Länge eingeben',
        EntWidth: 'Breite eingeben',
        Calc: 'Berechnen',
        EntFlowerAmount: 'Menge an Blütendünger eingeben',
        EntNutrientAmount: 'Menge an Gemüsedünger eingeben',
        EntNumber: 'Anzahl der Pflanzen eingeben',
        EntAge: 'Alter der Pflanze eingeben',
        EntWattage: 'Wattzahl eingeben',
        EntWeeks: 'Wochen in der Vegetationsphase eingeben',
        EntDays: 'Tage in der Blühphase eingeben',
        HeadTxt: 'Rechner',
        Co2: 'CO2-Rechner',
        Final: 'Endgültiger Ertrag-Rechner',
        Light: 'Beleuchtungsrechner',
        Water: 'Wasserverbrauchsrechner',
        ElecCalc: 'Stromverbrauchsrechner',
        elec: {
          Watts: 'Watt',
          Day: 'Tage in der Blüte:',
          Week: 'Wochen in der Vegetationsphase:',
          Rate: 'Rate (Kw/h)',
          Button: 'Stromkosten berechnen',
          Answer: 'Antwort',
        },
        light: {
          Width: 'Breite (m)',
          Length: 'Länge (m)',
          Height: 'Höhe über dem Boden (m)',
          Est: 'Geschätzte Leistung (Watt)',
          Watts: 'Watt',
        },
        co2: {
          EnvLength: 'Länge des Umgebung (m)',
          EnvWidth: 'Breite des Umgebung (m)',
          EnvHeight: 'Höhe des Umgebung (m)',
          Button: 'CO2-Bedarf berechnen',
          Result: 'CO2 benötigt: ',
          Ppm: 'ppm',
        },
        yield: {
          Wattage: 'Leistung (Watt)',
          VegWeeks: 'Wochen in der Vegetationsphase',
          FlowerDays: 'Tage in der Blühphase',
          Button: 'Endgültigen Ertrag berechnen',
          Est: 'Geschätzter Endgültiger Ertrag',
          Grams: 'Gramm',
        },
        water: {
          TimeVeg: 'Zeit in der Vegetationsphase (Wochen)',
          TimeFl: 'Zeit in der Blühphase (Tage)',
          PlntAge: 'Pflanzenalter zu Beginn der Vegetationsphase (Tage)',
          Number: 'Anzahl der Pflanzen',
          NuteVeg: 'Nährstoffe pro Liter in der Vegetationsphase (ml)',
          NuteFlower: 'Nährstoffe pro Liter in der Blühphase (ml)',
          Button: 'Berechnen',
          Est: 'Geschätzter Wasserbedarf',
          Liters: 'Liter',
          EstNuteVeg: 'Geschätzte benötigte Nährstoffe in der Vegetationsphase',
          EstNuteFlower: 'Geschätzte benötigte Nährstoffe in der Blühphase',
          Ml: 'ml',
        },
      },
      charts: {
        HeaderText: 'Diagramme',
        Ph: 'pH-Diagramm',
        Vpd: 'VPD-Diagramm',
        VpdExplain: 'VPD erklärt',
      },
    },

}

