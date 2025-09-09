// Ton estimation perso avec gestion fatigue
export function estimatePerformance(distance, elevation, refTime) {
  // coef lié au dénivelé
  const coefElev = 1 + elevation / 1000;

  // base estimation sans fatigue
  let time = refTime * (distance / 10) * coefElev;

  // facteur de fatigue (exponentiel doux)
  // jusqu'à 20 km : pas d’impact
  // au-delà : +3% par tranche de 10 km
  if (distance > 20) {
    const fatigueFactor = 1 + 0.03 * Math.floor((distance - 20) / 10);
    time *= fatigueFactor;
  }

  return time;
}

// Estimation élite (inchangée)
export function estimateElite(distance, elevation) {
  let baseSpeed = 14; // km/h
  const climbFactor = elevation / distance / 100;
  let adjSpeed = baseSpeed - 0.65 * climbFactor * 10;
  if (adjSpeed < 4) adjSpeed = 4;

  const timeH = distance / adjSpeed;
  return timeH * 60; // en minutes
}
