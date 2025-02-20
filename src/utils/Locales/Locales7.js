export const fr = {
  core :{
    Code: "fr",
    AddGrow: "Ajouter une nouvelle culture",
    Back: "Retour",
    Cancel: "Annuler",
    Delete: "Supprimer",
    DateStart: "Date de début",
    Age: "Âge",
    Phase: "Phase",
    Days: "jours",
    Date: "Date",
    FormName: "Nom",
    FlowerTi: "Temps de floraison",
    Current: "Phase actuelle",
    PhaseDur: "Durée de la phase",
    Tap: "Appuyez ici",
    Confirm: "Confirmer",
    Create: "Créer",
    Edit: "Modifier",
    Name: "Nom",
    Loading: "Chargement...",
    Language: "Langue",
    Theme: "Thème",
    DeleteData: "Supprimer la base de données",
    Clear: "Effacer tous les enregistrements.",
    DateStarted: "Date de début de la culture",
    DeleteRecords: "Êtes-vous sûr de vouloir supprimer tous les enregistrements?",
    DeleteGrow: "Êtes-vous sûr de vouloir supprimer cette culture?",
    Adproblem: "Un problème est survenu.",
    NewGrow: "Nouvelle culture enregistrée.",
    EnterDuration: "Veuillez entrer la durée.",
    EnterFlower: "Veuillez entrer le temps de floraison.",
    EnterName: "Veuillez entrer le nom.",
    Changes: "Modifications enregistrées.",
    SaveChange:"Enregistrer les modifications",

    Developer:"Développeur",
    Email: "Email",
    Hide:"Masquer",
    Show:"Afficher",

    Dark:"Mode sombre",
    Light:"Mode clair",
    RemoveAds:"Supprimer les publicités",
    Upgrade:"Mise à niveau",
    Support:"Support et questions",

    DateCreated:"Date de création",
    FlowerDate:"Date de floraison" ,
    TotalAge:"Âge total",

    Upgrade: "Mettre à niveau",
    RemoveAds: "Supprimer les publicités",
    AdFreeTier: "Supprimer toutes les publicités",
    MediumTier: "Enregistrer jusqu'à 5 cultures",
    UnlimitedTier: "Enregistrer un nombre illimité de cultures",
    EstDryTime: "Temps de séchage estimé",
    FloweringTimePhase: "Durée de la phase de floraison",
    VeggingTimePhase: "Durée de la phase de croissance",
    TotalVeggingTime: "Durée totale de croissance proposée",
    DryingDuration: "Durée du séchage",
    GrowUpdated: "Culture mise à jour",
    GrowRemoved: "Culture supprimée",
    ChangePhase: "Changer de phase",
    AllGrowsGone: "Toutes les cultures ont été supprimées",
    Error: "Erreur!",
    UpgradeTo2: "Mettez à niveau pour créer plus de 2 cultures",
    UpgradeTo5: "Mettez à niveau pour créer plus de 5 cultures",

    PurchaseSuccess:"Achat réussi! Merci!",
    PurcaseFail:"Achat échoué",
    AdFree: "Niveau sans publicité",
    Grows5: "Niveau 5 cultures",
    Unlimited: "Niveau cultures illimitées",
    DateStarted: "Date de début",
    PhaseLast: "Dernier changement de phase",
    Status:"Statut",
    ScrollDown:"Faites défiler vers le bas",
    Week:"semaine",

    TestMode: "Mode test",
    DeveloperMode: "Mode développeur",
    Tester: "Testeur",
    Developer: "Développeur",
    EntitlementLvl: "Niveau de droits:",
    ThanksTester: "Merci d'être testeur"
    
},tiers:{
  Free:"Niveau gratuit",
  AdFree:"Niveau sans pub",
  Grows5:"Niveau 5 pousses",
  Unlimited:"Niveau illimité"
},
languages: [
  {key: 'en', label: 'Anglais'},
  {key: 'th', label: 'Thaï'},
  {key: 'fr', label: 'Français'},
  {key: 'hbr', label: 'Hébreu'},
  {key: 'hi', label: 'Hindi'},
  {key: 'spn', label: 'Espagnol'},
  {key: 'de', label: 'Allemand'},
  {key: 'it', label: 'Italien'},
],
languageChoice: {
  'en': 'Anglais',
  'th': 'Thaï',
  'fr': 'Français',
  'hbr': 'Hébreu',
  'hi': 'Hindi',
  'spn': 'Espagnol',
  'de': 'Allemand',
  'it': 'Italien',
},
phase:{
  "In Veg":"En croissance",
  "In Flower":"En floraison",
  "Drying":"En séchage",
    data:[
      { key: "In Veg", label: "En croissance" }, // "In Veg"
      { key: "In Flower", label: "En floraison" },  // "In Flower"
      { key: "Drying", label: "En séchage" }     // "Hanging"
  ]
},
theme:{
  data:[
    { key: 'light', label: 'Mode clair' }, // "Light-Mode"
    { key: 'dark', label: 'Mode sombre' }  // "Dark-Mode"
]
},

menuList:[
  {
      Id: 'grows',
      Title: "Cultures",
      Description: [
          "Enregistrer les dates importantes.",
          "Suivre les phases.",
          "Modifier et supprimer."
      ]
  },
  {
      Id: 'calculator',
      Title: "Calculatrices",
      Description: [
          "Calculer les quantités d'eau et de nutriments.",
          "Quantité de CO2 et éclairage.",
          "Estimer le rendement potentiel."
      ]
  },
  {
      Id: 'settings',
      Title: "Paramètres",
      Description: [
          "Définir la langue",
          "Choisir un thème",
          "Effacer la base de données"
      ]
  }
],
    calculators: {
      calculatorDescriptions: {
        Co2: "Calculez le taux de supplémentation en CO₂ par heure pour la culture en intérieur",
        Yield: "Calculateur de rendement pour estimer le poids potentiel de la récolte en fonction des watts, des semaines de croissance et des jours de floraison",
        Light: "Calculateur de lumière pour estimer la puissance nécessaire en fonction des dimensions de l'espace de culture",
        Water: "Calculateur de consommation d'eau pour estimer les besoins en eau et en nutriments en fonction de l'âge de la plante et du cycle",
        Elec: "Calculateur de consommation d'électricité pour estimer les coûts énergétiques en fonction des watts, du temps d'utilisation et des tarifs",
      },
      calculators: {
        CalcCO2: 'Calculer le CO2 nécessaire',
        EntRate: "'Entrer le taux.',",
        GwH: 'Hauteur depuis le sol (m)',
        GwL: "Hauteur de l'espace de croissance (m)",
        GwW: "Largeur de l'espace de croissance (m)",
        EntHeight: 'Entrer une hauteur.',
        EntLength: 'Entrer une longueur.',
        EntWidth: 'Entrer une largeur.',
        Calc: 'Calculer',
        EntFlowerAmount: 'Entrer la quantité de nutriments pour la floraison.',
        EntNutrientAmount:
          'Entrer la quantité de nutriments pour la végétation.',
        EntNumber: 'Entrer le nombre de plantes.',
        EntAge: "Entrer l'âge de la plante.",
        EntWattage: 'Entrer la puissance en watts.',
        EntWeeks: 'Entrer le nombre de semaines en végétation.',
        EntDays: 'Entrer le nombre de jours en floraison.',
        HeadTxt: 'Calculatrices',
        Co2: 'Calculateur de CO2',
        Final: 'Calculateur de rendement final',
        Light: "Calculateur d'éclairage",
        Water: "Calculateur d'utilisation de l'eau",
        ElecCalc: "Calculateur d'électricité",
        elec: {
          Watts: 'Watts',
          Day: 'Jours Fleur',
          Week: 'Semaines Veg',
          Rate: 'Tarif (Kw/H)',
          Button: 'Calculer le Coût de l Électricité',
          Answer: 'Réponse',
        },
        light: {
          Width: 'Largeur (m)',
          Length: 'Longueur (m)',
          Height: 'Hauteur par rapport au sol (m)',
          Est: 'Puissance estimée',
          Watts: 'watts',
        },
        co2: {
          EnvLength: 'Longueur de l Environnement (m)',
          EnvWidth: 'Largeur de l Environnement (m)',
          EnvHeight: 'Hauteur de l Environnement (m)',
          Button: 'Calculer le CO2 Nécessaire',
          Result: 'CO2 Nécessaire',
          Ppm: 'ppm',
        },
        yield: {
          Wattage: 'Puissance',
          VegWeeks: 'Semaines de Veg',
          FlowerDays: 'Jours de Fleur',
          Button: 'Calculer le Rendement Final',
          Est: 'Rendement Final estimé',
          Grams: 'grammes',
        },
        water: {
          TimeVeg: 'Temps de Veg. (Semaines)',
          TimeFl: 'Temps de Fleur (Jours)',
          PlntAge: 'Âge de la Plante au Début de Veg. (Jours)',
          Number: 'Nombre de Plantes',
          NuteVeg: 'Nutriments par Litre en Veg. (ml)',
          NuteFlower: 'Nutriments par Litre en Fleur (ml)',
          Button: 'Calculer',
          Est: 'Eau Estimée Nécessaire',
          Liters: 'litres',
          EstNuteVeg: 'Nutriments Estimés Nécessaires en Veg',
          EstNuteFlower: 'Nutriments Estimés Nécessaires en Fleur',
          Ml: 'ml',
        },
      },
      charts: {
        HeaderText: 'Graphiques',
        Ph: 'Graphique de pH',
        Vpd: 'Graphique de VPD',
        VpdExplain: 'Explication du VPD',
      },
    },

}

