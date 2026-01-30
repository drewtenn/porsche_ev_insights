// ========== TAYCAN SPECIFICATIONS ==========
export const TAYCAN_SPECS = {
  batteryCapacity: 93.4,      // Gross battery capacity in kWh
  usableBattery: 83.7,        // Usable battery capacity in kWh
  officialRange: 416,         // WLTP range in km (Taycan 4 Cross Turismo)
  officialConsumption: 24.8,  // WLTP consumption kWh/100km
  co2PerKwhPortugal: 164,     // gCO2/kWh for Portugal electricity grid (2024)
  co2PerLiterPetrol: 2310,    // gCO2/L for petrol
  treeCo2PerYear: 21000,      // gCO2 absorbed per tree per year
  taycanBenchmark: {          // Typical Taycan 4 Cross Turismo owner stats
    avgConsumption: 26.5,
    winterConsumption: 30.0,
    summerConsumption: 24.0,
    highwayConsumption: 28.5,
    cityConsumption: 22.0
  }
};
