// ========== UNIT SYSTEM ==========
export const UNIT_SYSTEMS = {
  metric: {
    id: 'metric',
    label: 'Metric',
    distance: 'km',
    speed: 'km/h',
    volume: 'L'
  },
  imperial_uk: {
    id: 'imperial_uk',
    label: 'Imperial (UK)',
    distance: 'mi',
    speed: 'mph',
    volume: 'gal'
  },
  imperial_us: {
    id: 'imperial_us',
    label: 'Imperial (US)',
    distance: 'mi',
    speed: 'mph',
    volume: 'gal'
  }
};

// Consumption format options per unit system
export const FUEL_CONSUMPTION_FORMATS = {
  metric: [
    { id: 'L/100km', label: 'L/100km' },
    { id: 'km/L', label: 'km/L' }
  ],
  imperial: [
    { id: 'mpg', label: 'mpg' }
  ]
};

export const ELECTRIC_CONSUMPTION_FORMATS = {
  metric: [
    { id: 'kWh/100km', label: 'kWh/100km' },
    { id: 'km/kWh', label: 'km/kWh' }
  ],
  imperial: [
    { id: 'mi/kWh', label: 'mi/kWh' },
    { id: 'kWh/mi', label: 'kWh/mi' },
    { id: 'kWh/100mi', label: 'kWh/100mi' }
  ]
};

export const CURRENCIES = {
  EUR: { symbol: '€', label: 'Euro (€)', position: 'before' },
  USD: { symbol: '$', label: 'US Dollar ($)', position: 'before' },
  GBP: { symbol: '£', label: 'British Pound (£)', position: 'before' },
  CHF: { symbol: 'CHF', label: 'Swiss Franc (CHF)', position: 'after' },
  CAD: { symbol: 'CA$', label: 'Canadian Dollar (CA$)', position: 'before' },
  AUD: { symbol: 'A$', label: 'Australian Dollar (A$)', position: 'before' },
  JPY: { symbol: '¥', label: 'Japanese Yen (¥)', position: 'before' },
  CNY: { symbol: '¥', label: 'Chinese Yuan (¥)', position: 'before' },
  SEK: { symbol: 'kr', label: 'Swedish Krona (kr)', position: 'after' },
  NOK: { symbol: 'kr', label: 'Norwegian Krone (kr)', position: 'after' }
};

// Conversion constants
export const KM_TO_MI = 0.621371;
export const MI_TO_KM = 1.60934;
export const L_TO_UK_GAL = 0.219969;
export const L_TO_US_GAL = 0.264172;
export const UK_GAL_TO_L = 4.54609;
export const US_GAL_TO_L = 3.78541;
