// ========== DATA MERGER UTILITY ==========
// Merges new CSV data with existing data, removing duplicates

/**
 * Creates a unique fingerprint for a trip row based on its key fields.
 * Uses arrival time + distance + consumption as the unique identifier.
 * Supports both raw CSV rows and processed trip objects.
 */
function getTripFingerprint(row) {
  // Support both raw CSV format and processed trip format
  const date = row['arrival time'] || row['data de chegada'] || row['arrival date'] || row.date || '';
  const distanceRaw = row['distance (km)'] || row['distância'] || row.distance || '0';
  const consumptionRaw = row['avg. consumption (kwh/100 km)'] || row['consumo'] || row.consumption || '0';

  // Normalize values: convert to numbers and round to avoid floating point issues
  // Also handle comma as decimal separator (European format)
  const distance = parseFloat(String(distanceRaw).replace(',', '.')) || 0;
  const consumption = parseFloat(String(consumptionRaw).replace(',', '.')) || 0;

  // Round to 1 decimal place for consistent comparison
  const distanceNorm = Math.round(distance * 10) / 10;
  const consumptionNorm = Math.round(consumption * 10) / 10;

  return `${date}|${distanceNorm}|${consumptionNorm}`;
}

/**
 * Reconstructs raw data format from processed trips (rawTrips from backup).
 * This allows old backups without rawData to still support merging.
 * Creates objects in the format that processUploadedData expects.
 * @param {Array} rawTrips - Processed trip objects from backup.data.rawTrips
 * @returns {Array} - Data in a format compatible with both merging and processing
 */
export function reconstructRawDataFromTrips(rawTrips = []) {
  return rawTrips.map(trip => ({
    // Use the standard CSV header format that processUploadedData expects
    'arrival time': trip.date,
    'distance (km)': String(trip.distance),
    'avg. consumption (kwh/100 km)': String(trip.consumption),
    'average speed (km/h)': String(trip.speed || 0),
    // Also keep the simple keys for fingerprinting
    date: trip.date,
    distance: trip.distance,
    consumption: trip.consumption,
    speed: trip.speed
  }));
}

/**
 * Merges new trip data with existing data, removing duplicates.
 * @param {Array} existingData - Existing raw CSV rows
 * @param {Array} newData - New raw CSV rows to merge
 * @returns {Object} - { merged: Array, stats: { total, new, duplicates } }
 */
export function mergeRawData(existingData = [], newData = []) {
  // Build a Set of existing fingerprints for O(1) lookup
  const existingFingerprints = new Set(
    existingData.map(row => getTripFingerprint(row))
  );

  let duplicates = 0;
  const newUniqueRows = [];

  for (const row of newData) {
    const fingerprint = getTripFingerprint(row);
    if (existingFingerprints.has(fingerprint)) {
      duplicates++;
    } else {
      newUniqueRows.push(row);
      existingFingerprints.add(fingerprint); // Prevent duplicates within new data too
    }
  }

  const merged = [...existingData, ...newUniqueRows];

  return {
    merged,
    stats: {
      total: merged.length,
      existing: existingData.length,
      new: newUniqueRows.length,
      duplicates
    }
  };
}

/**
 * Sorts raw data by arrival time (newest first for display, oldest first for processing)
 * @param {Array} data - Raw CSV rows
 * @param {string} order - 'asc' or 'desc'
 * @returns {Array} - Sorted data
 */
export function sortByDate(data, order = 'asc') {
  return [...data].sort((a, b) => {
    const dateA = a['arrival time'] || a['data de chegada'] || a['arrival date'] || '';
    const dateB = b['arrival time'] || b['data de chegada'] || b['arrival date'] || '';

    // Parse dates for comparison
    const parseDate = (str) => {
      // ISO format: 2025-11-09T13:22:52Z
      const isoMatch = str.match(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})/);
      if (isoMatch) {
        return new Date(isoMatch[1], parseInt(isoMatch[2]) - 1, isoMatch[3], isoMatch[4], isoMatch[5]);
      }
      // Portuguese format: dd/mm/yyyy HH:MM
      const ptMatch = str.match(/(\d{2})\/(\d{2})\/(\d{4})\s+(\d{2}):(\d{2})/);
      if (ptMatch) {
        return new Date(ptMatch[3], parseInt(ptMatch[2]) - 1, ptMatch[1], ptMatch[4], ptMatch[5]);
      }
      return new Date(0);
    };

    const timeA = parseDate(dateA).getTime();
    const timeB = parseDate(dateB).getTime();

    return order === 'asc' ? timeA - timeB : timeB - timeA;
  });
}
