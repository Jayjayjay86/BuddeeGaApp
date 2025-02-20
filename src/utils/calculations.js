export const calculateC02 = (l,w,h,ambientPPM,targetPPM,isSealed,airChanges,setResult) =>{
    // Constants
  const ppmToGramsPerM3 = 0.00198; // Conversion factor for ppm to grams/m³
  const cubicFeetToCubicMeters = 0.0283168; // Conversion from ft³ to m³

  const volumeFt3 = w * h * l; // ft³
  const volumeM3 = volumeFt3 * cubicFeetToCubicMeters; // m³


  const co2RequiredGrams = 
    volumeM3 * (targetPPM - ambientPPM) * ppmToGramsPerM3;
  console.log(w,h,l,ambientPPM,targetPPM,isSealed)
  if (isSealed) {
  
    setResult( {
      totalCO2Grams: co2RequiredGrams.toFixed(2),
      hourlyLossGrams: 0,
      
    })
  } else {
    const hourlyLossGrams = 
      volumeM3 * airChanges * (targetPPM - ambientPPM) * ppmToGramsPerM3;

    setResult( {
      totalCO2Grams: co2RequiredGrams.toFixed(2),
      hourlyLossGrams: hourlyLossGrams.toFixed(2),
      
    })
}
}

export  const calculateElectric = (w,r,daysFlower,weeksVeg,setAnswer) => {
    const hoursFlower = Number(daysFlower) * 24;
    const hoursVeg = Number(weeksVeg) * 7 * 24; 
    const totalHours = hoursVeg + hoursFlower;

    const answer = ((w * totalHours) / 1000) * r
    setAnswer(answer.toFixed(2));
  }
  
  export const calculateLight = (w, l, setWattage) => {
    const area = w * l; // Area in square feet or square meters
  
    // Define wattage per square foot for small and large spaces
    const baseWattagePerSquareFoot = 450; // Adjust base wattage for 2x2 to 1200W
    const maxWattagePerSquareFoot = 333; // Wattage scaling for larger spaces (e.g., 4x4)
  
    // Calculate wattage with incremental scaling
    let wattsPerSquareFoot = baseWattagePerSquareFoot - (area - 4) * 5;  // Gradually reduce for larger areas
  
    // Limit wattage per square foot to a realistic maximum for large spaces
    wattsPerSquareFoot = Math.max(wattsPerSquareFoot, maxWattagePerSquareFoot);
  
    const estimatedWattage = area * wattsPerSquareFoot;
    setWattage(estimatedWattage.toFixed(2));
  };
   
export const calculateWater = (vegWeeks,flowerDays,plantAge,numPlants,vegNutrients,flowerNutrients,
    setWaterNeeded,setVegAnswer,setFlowerAnswer
) => {
const vw = parseFloat(vegWeeks);
const fd = parseFloat(flowerDays);
const age = parseFloat(plantAge);
const plants = parseFloat(numPlants);
const vegNutrition = parseFloat(vegNutrients);
const flowerNutrition = parseFloat(flowerNutrients);
let waterRate = 0;
if (age <= 14) {
waterRate = 0.05;
} else if (age <= 66) {
waterRate = 0.0714;
} else {
waterRate = 0.02;
}

const totalWater = (vw * 700 + fd) * waterRate * plants;
const totalVegNutrients = totalWater * vegNutrition;
const totalFlowerNutrients = fd * flowerNutrition * plants;

setWaterNeeded(totalWater.toFixed(2));
setVegAnswer(totalVegNutrients.toFixed(2));
setFlowerAnswer(totalFlowerNutrients.toFixed(2));
}

export const calculateYield = (wattage, vegWeeks, flowerDays, setResult) => {
  const w = Number(wattage);
  const vw = Number(vegWeeks);
  const fd = Number(flowerDays);

  // Constants
  const baseYieldPerWatt = 0.8; // Base efficiency (grams per watt for optimal conditions)
  const diminishingFactor = 0.0002; // Gentler diminishing returns factor
  const highWattageBoost = 1.2; // Boost for wattage > 2000W setups

  // Effective grow time in weeks
  const growWeeks = vw + fd / 7;

  // Diminishing returns for wattage
  const effectiveWattage = w > 1000
    ? 1000 + Math.log10(w - 1000 + 10) * (w - 1000) * (1 - diminishingFactor * (w - 1000))
    : w;

  // Boost yield slightly for very high-wattage setups
  const boostedYield = w > 2000 ? effectiveWattage * highWattageBoost : effectiveWattage;

  // Final yield calculation
  let yields = boostedYield * growWeeks * baseYieldPerWatt;

  // Cap yield based on wattage
  const maxEfficiency = w > 2000 ? 0.8 : 0.5; // Higher max efficiency for large setups
  yields = Math.min(yields, w * maxEfficiency);

  setResult(yields.toFixed(2));
};

  export const progressCalculationVeg = (item) => {
    try {
      const daysIntoVeg = Number(item.veggingDurationInDays)
    
      const startDate = new Date(item.startedOn);
    
      const proposedVegTime = Number(item.proposedVeggingDuration);
     
      const today = new Date();
      const daysSinceStart = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));
    
      const progressPercentage = (daysSinceStart / proposedVegTime) * 100;
      const cappedProgress = Math.min(progressPercentage, 100);
     
      const daysRemaining = Math.max(proposedVegTime - daysSinceStart, 0)
    
      const daysCompleted = proposedVegTime - daysRemaining
    
  
      return {progress:cappedProgress.toFixed(2) ,remaining:daysRemaining,completed:daysCompleted}
    } catch (error) {
      console.error("error @ calculations-progress: ", error)

    }
  }
  export const progressCalculationFlower = (item) => {
    try {
      const daysIntoFlowering = Number(item.floweringDurationInDays)
      const flowerDate = new Date(item.lastPhaseChange.date);
      const floweringTime = Number(item.strainFloweringDuration);
      const today = new Date();
      const daysSinceFloweringStart = Math.floor((today - flowerDate) / (1000 * 60 * 60 * 24)) + daysIntoFlowering;
      const progressPercentage = (daysSinceFloweringStart / floweringTime) * 100;
      const cappedProgress = Math.min(progressPercentage, 100);
      const daysRemaining = Math.max(floweringTime - daysSinceFloweringStart, 0)
      const daysCompleted = floweringTime - daysRemaining
  
      return {progress:cappedProgress.toFixed(2) ,remaining:daysRemaining,completed:daysCompleted}
    } catch (error) {
      console.error("error @ calculations-progress: ", error)

    }
  }
  export const progressCalculationDrying = (item) => {
    try {
      const daysIntoDrying =  Number(item.dryingDurationInDays)
      const dryingStarted = new Date(item.lastPhaseChange.date);
      const dryingTime = Number(item.estimatedDryingDuration);
      const today = new Date();
      const daysSinceDryingStart = Math.floor((today - dryingStarted ) / (1000 * 60 * 60 * 24)) + daysIntoDrying;
      const progressPercentage = (daysSinceDryingStart / dryingTime) * 100;
      const cappedProgress = Math.min(progressPercentage, 100);
      const daysRemaining = Math.max(dryingTime - daysSinceDryingStart, 0)
      const daysCompleted = dryingTime - daysRemaining
  
      return {progress:cappedProgress.toFixed(2) ,remaining:daysRemaining,completed:daysCompleted}
    } catch (error) {
      console.error("error @ calculations-progress: ", error)

    }
  }