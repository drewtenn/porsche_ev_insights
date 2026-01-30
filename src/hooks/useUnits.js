import { useMemo } from 'react';
import { UNIT_SYSTEMS, CURRENCIES, FUEL_CONSUMPTION_FORMATS, ELECTRIC_CONSUMPTION_FORMATS } from '../constants/units';
import { convertDistance, convertSpeed, convertFuelConsumption, convertElectricConsumption } from '../utils/unitConvert';

export function useUnits(unitSystem, currency, fuelConsFormat, elecConsFormat) {
  return useMemo(() => {
    const sys = UNIT_SYSTEMS[unitSystem];
    const curr = CURRENCIES[currency];

    // Get the format objects
    const fuelFormats = unitSystem.startsWith('imperial')
      ? FUEL_CONSUMPTION_FORMATS.imperial
      : FUEL_CONSUMPTION_FORMATS.metric;
    const elecFormats = unitSystem.startsWith('imperial')
      ? ELECTRIC_CONSUMPTION_FORMATS.imperial
      : ELECTRIC_CONSUMPTION_FORMATS.metric;

    const fuelFormat = fuelFormats.find(f => f.id === fuelConsFormat) || fuelFormats[0];
    const elecFormat = elecFormats.find(f => f.id === elecConsFormat) || elecFormats[0];

    return {
      dist: (km) => {
        const converted = convertDistance(km, unitSystem);
        return {
          value: converted,
          formatted: `${converted.toLocaleString(undefined, { maximumFractionDigits: 1 })} ${sys.distance}`
        };
      },
      speed: (kmh) => {
        const converted = convertSpeed(kmh, unitSystem);
        return {
          value: converted,
          formatted: `${converted.toLocaleString(undefined, { maximumFractionDigits: 0 })} ${sys.speed}`
        };
      },
      fuelCons: (lPer100km) => {
        const converted = convertFuelConsumption(lPer100km, fuelConsFormat);
        return {
          value: converted,
          formatted: `${converted.toLocaleString(undefined, { maximumFractionDigits: 1 })} ${fuelFormat.label}`
        };
      },
      elecCons: (kwhPer100km) => {
        const converted = convertElectricConsumption(kwhPer100km, elecConsFormat);
        return {
          value: converted,
          formatted: `${converted.toLocaleString(undefined, { maximumFractionDigits: 1 })} ${elecFormat.label}`
        };
      },
      money: (amount) => `${curr.symbol}${amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
      distUnit: sys.distance,
      speedUnit: sys.speed,
      fuelConsUnit: fuelFormat.label,
      elecConsUnit: elecFormat.label,
      currencySymbol: curr.symbol
    };
  }, [unitSystem, currency, fuelConsFormat, elecConsFormat]);
}
