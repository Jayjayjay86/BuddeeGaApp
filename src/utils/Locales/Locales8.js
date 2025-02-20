export const spn = {
  core:{
    Code: "spn",
    AddGrow: "Agregar nueva cosecha",
    Back: "Atrás",
    Cancel: "Cancelar",
    Delete: "Eliminar",
    DateStart: "Fecha de inicio: ",
    Age: "Edad: ",
    Phase: "Fase",
    Days: "días",
    Date: "Fecha",
    FormName: "Nombre",
    FlowerTi: "Tiempo de floración",
    Current: "Fase actual",
    PhaseDur: "Duración de la fase",
    Tap: "Toca aquí",
    Confirm: "Confirmar",
    Create: "Crear",
    Edit: "Editar",
    Name: "Nombre",
    Loading: "Cargando.",
    Language: "Idioma",
    Theme: "Tema",
    DeleteData: "Eliminar base de datos",
    Clear: "Borrar todos los registros.",
    DateStarted: "Fecha de inicio de la cosecha",
    DeleteRecords: "¿Está seguro de que desea eliminar todos los registros?",
    DeleteGrow: "¿Está seguro de que desea eliminar esta cosecha?",
    Adproblem: "Ha ocurrido un problema.",
    NewGrow: "Nueva cosecha guardada.",
    EnterDuration: "Por favor, ingrese la duración.",
    EnterFlower: "Por favor, ingrese el tiempo de floración.",
    EnterName: "Por favor, ingrese el nombre.",
    Changes: "Cambios guardados.",
     SaveChange:"Guardar cambios",

     Developer:"Desarrollador",
    Email: "Correo electrónico",
    Hide:"Ocultar",
    Show:"Mostrar",

    Dark:"Modo oscuro",
    Light:"Modo claro",
    RemoveAds:"Eliminar anuncios",
    Upgrade:"Mejorar",
    Support:"Soporte y consultas",

    DateCreated:"Fecha de creación",
    FlowerDate:"Fecha de floración" ,
    TotalAge:"Edad total",

    Upgrade: "Actualizar",
    RemoveAds: "Eliminar anuncios",
    AdFreeTier: "Eliminar todos los anuncios",
    MediumTier: "Registrar hasta 5 cultivos",
    UnlimitedTier: "Registrar cultivos ilimitados",
    EstDryTime: "Tiempo estimado de secado",
    FloweringTimePhase: "Tiempo en la fase de floración",
    VeggingTimePhase: "Tiempo en la fase de crecimiento",
    TotalVeggingTime: "Tiempo total de crecimiento propuesto",
    DryingDuration: "Duración del secado",
    GrowUpdated: "Cultivo actualizado",
    GrowRemoved: "Cultivo eliminado",
    ChangePhase: "Cambiar fase",
    AllGrowsGone: "Todos los cultivos han sido eliminados",
    Error: "¡Error!",
    UpgradeTo2: "Actualiza para crear más de 2 cultivos",
    UpgradeTo5: "Actualiza para crear más de 5 cultivos",

    PurchaseSuccess:"¡Compra exitosa! ¡Gracias!",
    PurcaseFail: "Compra fallida",
    AdFree: "Nivel sin anuncios",
    Grows5: "Nivel de 5 cultivos",
    Unlimited: "Nivel de cultivos ilimitados",
    DateStarted: "Fecha de inicio",
    PhaseLast: "Último cambio de fase",
    Status:"Estado",
    ScrollDown:"Desplazar hacia abajo",
    Week:"semana",

    TestMode: "Modo de prueba",
    DeveloperMode: "Modo desarrollador",
    Tester: "Probador",
    Developer: "Desarrollador",
    EntitlementLvl: "Nivel de derecho:",
    ThanksTester: "Gracias por ser un probador"
    
},tiers:{
  Free:"Nivel gratuito",
  AdFree:"Nivel sin anuncios",
  Grows5:"Nivel de 5 cultivos",
  Unlimited:"Nivel ilimitado"
},
languages: [
  {key: 'en', label: 'Inglés'},
  {key: 'th', label: 'Tailandés'},
  {key: 'fr', label: 'Francés'},
  {key: 'hbr', label: 'Hebreo'},
  {key: 'hi', label: 'Hindú'},
  {key: 'spn', label: 'Español'},
  {key: 'de', label: 'Alemán'},
  {key: 'it', label: 'Italiano'},


],
languageChoice: {
  'en': 'Inglés',
  'th': 'Tailandés',
  'fr': 'Francés',
  'hbr': 'Hebreo',
  'hi': 'Hindú',
  'spn': 'Español',
  'de': 'Alemán',
  'it': 'Italiano',
},
phase:{
  "In Veg":"En vegetación",
  "In Flower":"En floración",
  "Drying":"En secado" ,
    data:[
      { key: "In Veg", label: "En vegetación" }, // "In Veg"
      { key: "In Flower", label: "En floración" },  // "In Flower"
      { key: "Drying", label: "En secado"}      // "Hanging"
  ]
},
theme:{
  data:[
    { key: 'light', label: 'Modo claro' }, // "Light-Mode"
    { key: 'dark', label: 'Modo oscuro' }  // "Dark-Mode"
]
},

menuList:[
  {
      Id: 'grows',
      Title: "Cultivos",
      Description: [
          "Registrar fechas importantes.",
          "Rastrear las fases.",
          "Editar y eliminar."
      ]
  },
  {
      Id: 'calculator',
      Title: "Calculadoras",
      Description: [
          "Calcular las cantidades de agua y nutrientes.",
          "Cantidad de CO2 e iluminación.",
          "Estimar el rendimiento potencial."
      ]
  },
  {
      Id: 'settings',
      Title: "Ajustes",
      Description: [
          "Establecer idioma",
          "Elegir tema",
          "Borrar base de datos"
      ]
  }
],
    calculators: {
      calculatorDescriptions: {
        Co2: "Calcula la tasa de suplementación de CO₂ por hora para cultivos en interior",
        Yield: "Calculadora de rendimiento para estimar el peso potencial de la cosecha según el vataje, las semanas de crecimiento y los días de floración",
        Light: "Calculadora de luz para estimar el vataje necesario según las dimensiones del espacio de cultivo",
        Water: "Calculadora de uso de agua para estimar las necesidades de agua y nutrientes según la edad de la planta y el ciclo",
        Elec: "Calculadora de uso eléctrico para estimar los costos de energía según el vataje, el tiempo de funcionamiento y las tarifas",
      },
      calculators: {
        CalcCO2: 'Calcular CO2 Necesario',
        EntRate: "'Ingresar Tarifa.',",
        GwH: 'Altura Desde el Suelo (m)',
        GwL: 'Altura del Espacio de Crecimiento (m)',
        GwW: 'Ancho del Espacio de Crecimiento (m)',
        EntHeight: 'Ingresar Altura.',
        EntLength: 'Ingresar Longitud.',
        EntWidth: 'Ingresar Ancho.',
        Calc: 'Calcular',
        EntFlowerAmount: 'Ingresar Cantidad de Nutrientes para Floración.',
        EntNutrientAmount: 'Ingresar Cantidad de Nutrientes para Vegetación.',
        EntNumber: 'Ingresar Número de Plantas.',
        EntAge: 'Ingresar Edad de la Planta.',
        EntWattage: 'Ingresar Potencia (vatios).',
        EntWeeks: 'Ingresar Semanas en Vegetación.',
        EntDays: 'Ingresar Días en Floración.',
        HeadTxt: 'Calculadoras',
        Co2: 'Calculadora de CO2',
        Final: 'Calculadora de Rendimiento Final',
        Light: 'Calculadora de Iluminación',
        Water: 'Calculadora de Uso de Agua',
        ElecCalc: 'Calculadora de Electricidad',
        elec: {
          Watts: 'Vatios',
          Day: 'Días en Floración',
          Week: 'Semanas en Vegetación',
          Rate: 'Tarifa (Kw/H)',
          Button: 'Calcular Costo de Electricidad',
          Answer: 'Respuesta',
        },
        light: {
          Width: 'Ancho (m)',
          Length: 'Longitud (m)',
          Height: 'Altura desde el suelo (m)',
          Est: 'Potencia Estimada',
          Watts: 'vatios',
        },
        co2: {
          EnvLength: 'Longitud del Ambiente (m)',
          EnvWidth: 'Ancho del Ambiente (m)',
          EnvHeight: 'Altura del Ambiente (m)',
          Button: 'Calcular CO2 Necesario',
          Result: 'CO2 Necesario',
          Ppm: 'ppm',
        },
        yield: {
          Wattage: 'Potencia',
          VegWeeks: 'Semanas en Vegetación',
          FlowerDays: 'Días de Floración',
          Button: 'Calcular Rendimiento Final',
          Est: 'Rendimiento Final Estimado',
          Grams: 'gramos',
        },
        water: {
          TimeVeg: 'Tiempo en Vegetación (Semanas)',
          TimeFl: 'Tiempo en Floración (Días)',
          PlntAge: 'Edad de la Planta al Comienzo de la Vegetación (Días)',
          Number: 'Número de Plantas',
          NuteVeg: 'Nutrientes por Litro en Vegetación (ml)',
          NuteFlower: 'Nutrientes por Litro en Floración (ml)',
          Button: 'Calcular',
          Est: 'Agua Estimada Necesaria',
          Liters: 'litros',
          EstNuteVeg: 'Nutrientes Estimados Necesarios en Vegetación',
          EstNuteFlower: 'Nutrientes Estimados Necesarios en Floración',
          Ml: 'ml',
        },
      },
      charts: {
        HeaderText: 'Gráficos',
        Ph: 'Gráfico de pH',
        Vpd: 'Gráfico de VPD',
        VpdExplain: 'VPD Explicado',
      },
    },
}

