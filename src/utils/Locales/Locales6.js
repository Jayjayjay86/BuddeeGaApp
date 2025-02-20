export const it = {
  core: {
    Code: "it",
    AddGrow: "Aggiungi Nuovo Grow",
    Back: "Indietro",
    Cancel: "Annulla",
    Delete: "Elimina",
    DateStart: "Data di Inizio",
    Age: "Età : ",
    Phase: "Fase: ",
    Days: "giorni",
    Date: "Data",
    FormName: "Nome",
    FlowerTi: "Tempo di Fioritura",
    Current: "Fase Corrente",
    PhaseDur: "Durata della Fase",
    Tap: "Tocca Qui",
    Confirm: "Conferma",
    Create: "Crea",
    Edit: "Modifica",
    Name: "Nome",
    Loading: "Caricamento...",
    Language: "Lingua",
    Theme: "Tema",
    DeleteData: "Elimina Database:",
    Clear: "Cancella Tutti i Registri.",
    DateStarted: "Data di Inizio della Coltivazione:",
    DeleteRecords: "Sei sicuro di voler eliminare tutti i registri?",
    DeleteGrow: "Sei sicuro di voler eliminare questa coltivazione?",
    Adproblem: "Si è verificato un problema.",
    NewGrow: "Nuova Coltivazione Salvata.",
    EnterDuration: "Inserisci la Durata.",
    EnterFlower: "Inserisci il Tempo di Fioritura.",
    EnterName: "Inserisci il Nome.",
    Changes: "Modifiche Salvate.",
    SaveChange:"Salva modifiche",

    Developer:"Sviluppatore",
    Email: "Email",
    Hide:"Nascondi",
    Show:"Mostra",

    Dark:"Modalità scura",
    Light:"Modalità chiara",
    RemoveAds:"Rimuovi annunci",
    Upgrade:"Aggiorna",
    Support:"Supporto e domande",

    DateCreated:"Date de création",
    FlowerDate:"Date de floraison" ,
    TotalAge:"Âge total",

    Upgrade: "Aggiorna",
    RemoveAds: "Rimuovi annunci",
    AdFreeTier: "Rimuovi tutti gli annunci",
    MediumTier: "Registra fino a 5 coltivazioni",
    UnlimitedTier: "Registra coltivazioni illimitate",
    EstDryTime: "Tempo di essiccazione stimato",
    FloweringTimePhase: "Tempo nella fase di fioritura",
    VeggingTimePhase: "Tempo nella fase di crescita",
    TotalVeggingTime: "Tempo totale di crescita proposto",
    DryingDuration: "Durata dell'essiccazione",
    GrowUpdated: "Coltivazione aggiornata",
    GrowRemoved: "Coltivazione rimossa",
    ChangePhase: "Cambia fase",
    AllGrowsGone: "Tutte le coltivazioni sono state rimosse",
    Error: "Errore!",
    UpgradeTo2: "Aggiorna per creare più di 2 coltivazioni",
    UpgradeTo5: "Aggiorna per creare più di 5 coltivazioni",

    PurchaseSuccess:"Acquisto riuscito! Grazie!",
    PurcaseFail:"Acquisto fallito",
    AdFree: "Livello senza pubblicità",
    Grows5: "Livello fino a 5 coltivazioni",
    Unlimited: "Livello coltivazioni illimitate",
    DateStarted: "Data di inizio",
    PhaseLast: "Ultima modifica fase",
    Status:"Stato",
    ScrollDown:"Scorri verso il basso",
    Week:"settimana",

    TestMode: "Modalità di prova",
    DeveloperMode: "Modalità sviluppatore",
    Tester: "Tester",
    Developer: "Sviluppatore",
    EntitlementLvl: "Livello di autorizzazione:",
    ThanksTester: "Grazie per essere un tester"
    
},tiers:{
  Free:"Livello gratuito",
  AdFree:"Livello senza pubblicità",
  Grows5:"Livello per 5 coltivazioni",
  Unlimited:"Livello illimitato"
},
languages: [
  {key: 'en', label: 'Inglese'},
  {key: 'th', label: 'Thai'},
  {key: 'fr', label: 'Francese'},
  {key: 'hbr', label: 'Ebraico'},
  {key: 'hi', label: 'Indù'},
  {key: 'spn', label: 'Spagnolo'},
  {key: 'de', label: 'Tedesco'},
  {key: 'it', label: 'Italiano'},
],
languageChoice: {
  'en': 'Inglese',
  'th': 'Thai',
  'fr': 'Francese',
  'hbr': 'Ebraico',
  'hi': 'Indù',
  'spn': 'Spagnolo',
  'de': 'Tedesco',
  'it': 'Italiano',
},
phase:{
  "In Veg":"In Crescita",
  "In Flower":"In Fioritura",
  "Drying":"In Essiccazione",
    data:[
      { key: "In Veg", label: "In Crescita" }, // "In Veg"
      { key: "In Flower", label: "In Fioritura" }, // "In Flower"
      { key: "Drying", label: "In Essiccazione" } // "Hanging"
  ]
},
theme:{
  data:[
    { key: 'light', label: 'Modalità Chiara' }, // "Light-Mode"
    { key: 'dark', label: 'Modalità Scura' }   // "Dark-Mode"
]
},

menuList:[
  {
      Id: 'grows',
      Title: "Coltivazioni",
      Description: [
          "Registra le date importanti.",
          "Tieni traccia delle fasi.",
          "Modifica ed elimina."
      ]
  },
  {
      Id: 'calculator',
      Title: "Calcolatori",
      Description: [
          "Calcola le quantità di acqua e nutrienti.",
          "Quantità di CO2 e illuminazione.",
          "Stima il rendimento potenziale."
      ]
  },
  {
      Id: 'settings',
      Title: "Impostazioni",
      Description: [
          "Imposta la lingua",
          "Scegli il tema",
          "Pulisci il database"
      ]
  }
],
    calculators: {
      calculatorDescriptions: {
        Co2: "Calcola il tasso di integrazione del CO₂ per ora per la coltivazione indoor",
        Yield: "Calcolatore del rendimento per stimare il peso potenziale del raccolto in base a watt, durata della fase vegetativa e della fioritura",
        Light: "Calcolatore della luce per stimare la potenza necessaria in base alle dimensioni dello spazio di coltivazione",
        Water: "Calcolatore del consumo d'acqua per stimare le necessità di acqua e nutrienti in base all'età della pianta e al ciclo",
        Elec: "Calcolatore del consumo elettrico per stimare i costi energetici in base a watt, tempo di funzionamento e tariffe",
      },
      calculators: {
        CalcCO2: 'Calcola CO2 Necessario',
        EntRate: "'Inserire Tariffa.',",
        GwH: 'Altezza dal Pavimento (m)',
        GwL: 'Altezza Spazio di Crescita (m)',
        GwW: 'Larghezza Spazio di Crescita (m)',
        EntHeight: 'Inserisci Altezza.',
        EntLength: 'Inserisci Lunghezza.',
        EntWidth: 'Inserisci Larghezza.',
        Calc: 'Calcola',
        EntFlowerAmount: 'Inserisci Quantità Nutriente per Fioritura.',
        EntNutrientAmount: 'Inserisci Quantità Nutriente per Vegetazione.',
        EntNumber: 'Inserisci Numero di Piante.',
        EntAge: 'Inserisci Età della Pianta.',
        EntWattage: 'Inserisci Wattaggio.',
        EntWeeks: 'Inserisci Settimane in Vegetazione.',
        EntDays: 'Inserisci Giorni in Fioritura.',
        HeadTxt: 'Calcolatori',
        Co2: 'Calcolatore CO2',
        Final: 'Calcolatore Resa Finale',
        Light: 'Calcolatore Illuminazione',
        Water: "Calcolatore Uso dell'Acqua",
        ElecCalc: 'Calcolatore Elettricità',
        elec: {
          Watts: 'Watt',
          Day: 'Giorni di Fioritura',
          Week: 'Settimane di Vegetazione',
          Rate: 'Tariffa (Kw/ora)',
          Button: 'Calcola Costo Elettrico',
          Answer: 'Risposta',
        },
        light: {
          Width: 'Larghezza (m)',
          Length: 'Lunghezza (m)',
          Height: 'Altezza dal suolo (m)',
          Est: 'Wattaggio Stimato',
          Watts: 'watt',
        },
        co2: {
          EnvLength: 'Lunghezza Ambiente (m)',
          EnvWidth: 'Larghezza Ambiente (m)',
          EnvHeight: 'Altezza Ambiente (m)',
          Button: 'Calcola CO2 Necessario',
          Result: '`CO2 Necessario',
          Ppm: 'ppm',
        },
        yield: {
          Wattage: 'Wattaggio',
          VegWeeks: 'Settimane di Vegetazione',
          FlowerDays: 'Giorni di Fioritura',
          Button: 'Calcola Resa Finale',
          Est: 'Resa Finale Stimata',
          Grams: 'grammi',
        },
        water: {
          TimeVeg: 'Tempo di Vegetazione (Settimane)',
          TimeFl: 'Tempo di Fioritura (Giorni)',
          PlntAge: "Età della Pianta all'Inizio della Vegetazione (Giorni)",
          Number: 'Numero di Piante',
          NuteVeg: 'Nutrienti per Litro in Vegetazione (ml)',
          NuteFlower: 'Nutrienti per Litro in Fioritura (ml)',
          Button: 'Calcola',
          Est: 'Acqua Necessaria Stimata:',
          Liters: 'litri',
          EstNuteVeg: 'Nutrienti Necessari Stimati in Vegetazione',
          EstNuteFlower: 'Nutrienti Necessari Stimati in Fioritura',
          Ml: 'ml',
        },
      },
      charts: {
        HeaderText: 'Grafici',
        Ph: 'Grafico pH',
        Vpd: 'Grafico VPD',
        VpdExplain: 'VPD Spiegato',
      },
    },
}