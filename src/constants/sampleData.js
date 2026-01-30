// ========== SAMPLE DATA (minimal demo set) ==========
export const SAMPLE_DATA = {
  summary: {
    totalTrips: 14,
    totalChargeCycles: 14,
    totalDistance: 231,
    totalEnergy: 59.8,
    avgTripDistance: 16.5,
    avgConsumption: 25.9,
    avgTripsPerCharge: 1.0,
    shortTripsPct: 50.0,
    avgTripsPerMonth: 1.6,
    avgKmPerMonth: 26.0
  },
  hourData: [
    { hour: '08', trips: 3, distance: 36 },
    { hour: '13', trips: 2, distance: 34 },
    { hour: '15', trips: 2, distance: 19 },
    { hour: '18', trips: 3, distance: 46 },
    { hour: '20', trips: 4, distance: 96 }
  ],
  dayData: [
    { day: 'Sat', trips: 4, distance: 70, avgDist: 17.5, consumption: 24.5 },
    { day: 'Sun', trips: 3, distance: 37, avgDist: 12.3, consumption: 27.8 },
    { day: 'Mon', trips: 2, distance: 35, avgDist: 17.5, consumption: 25.2 },
    { day: 'Thu', trips: 3, distance: 50, avgDist: 16.7, consumption: 26.1 },
    { day: 'Fri', trips: 2, distance: 39, avgDist: 19.5, consumption: 25.4 }
  ],
  tripTypes: [
    { type: 'Short (5-10km)', count: 7, consumption: 28.2, color: '#f97316' },
    { type: 'Medium (10-20km)', count: 3, consumption: 24.1, color: '#eab308' },
    { type: 'Long (20-50km)', count: 4, consumption: 23.8, color: '#22c55e' }
  ],
  monthlyData: [
    { month: 'Apr', trips: 2, cycles: 1, distance: 39, consumption: 21.9 },
    { month: 'May', trips: 1, cycles: 2, distance: 8, consumption: 26.7 },
    { month: 'Jun', trips: 3, cycles: 1, distance: 44, consumption: 27.3 },
    { month: 'Jul', trips: 1, cycles: 1, distance: 22, consumption: 23.6 },
    { month: 'Aug', trips: 1, cycles: 2, distance: 13, consumption: 23.1 },
    { month: 'Oct', trips: 1, cycles: 1, distance: 33, consumption: 22.8 },
    { month: 'Nov', trips: 2, cycles: 2, distance: 14, consumption: 28.6 },
    { month: 'Dec', trips: 2, cycles: 2, distance: 31, consumption: 27.9 },
    { month: 'Jan', trips: 1, cycles: 2, distance: 28, consumption: 24.2 }
  ],
  speedEfficiency: [
    { range: '0-20 km/h', consumption: 29.0, trips: 4 },
    { range: '20-40 km/h', consumption: 25.5, trips: 7 },
    { range: '40-60 km/h', consumption: 23.8, trips: 3 }
  ],
  seasonalData: [
    { season: 'Spring', consumption: 23.5, trips: 3, distance: 47, color: '#84cc16' },
    { season: 'Summer', consumption: 25.5, trips: 5, distance: 79, color: '#f59e0b' },
    { season: 'Autumn', consumption: 26.4, trips: 3, distance: 47, color: '#ea580c' },
    { season: 'Winter', consumption: 26.6, trips: 3, distance: 59, color: '#3b82f6' }
  ],
  dailyData: [
    { period: '2025-04-12', label: '04-12', trips: 1, distance: 33, avgConsumption: 20.0, energy: 6.6 },
    { period: '2025-04-13', label: '04-13', trips: 1, distance: 6, avgConsumption: 23.8, energy: 1.4 },
    { period: '2025-06-21', label: '06-21', trips: 2, distance: 29, avgConsumption: 27.0, energy: 7.8 },
    { period: '2025-11-09', label: '11-09', trips: 1, distance: 8, avgConsumption: 26.7, energy: 2.1 }
  ],
  weeklyData: [
    { period: '2025-W15', label: 'W15', trips: 2, distance: 39, avgConsumption: 21.9, energy: 8.5 },
    { period: '2025-W25', label: 'W25', trips: 2, distance: 29, avgConsumption: 27.0, energy: 7.8 },
    { period: '2025-W45', label: 'W45', trips: 2, distance: 14, avgConsumption: 28.6, energy: 4.0 }
  ],
  bestTrip: {
    date: '2025-04-12',
    distance: 33,
    consumption: 20.0,
    speed: 36
  },
  worstTrip: {
    date: '2025-06-21',
    distance: 6,
    consumption: 31.4,
    speed: 31
  },
  rawTrips: []
};
