import { estimatePerformance, estimateElite } from "./estimator.js";



function runEstimation() {
  if (totalDistance === 0 || totalElevation === 0) {
    document.getElementById("results").innerHTML =
      "<p>⚠️ Charge un fichier GPX avant d’estimer</p>";
    return;
  }

  const refTime = 300; // minutes (exemple: 5h sur 10 km plat, à ajuster)

  // Ton estimation perso
  const estUser = estimatePerformance(totalDistance, totalElevation, refTime);

  // Estimation élite
  const estPro = estimateElite(totalDistance, totalElevation);

  document.getElementById("results").innerHTML = `
    <h3>Résultats</h3>
    <p>📏 Distance : ${totalDistance.toFixed(1)} km</p>
    <p>⛰️ D+ : ${Math.round(totalElevation)} m</p>
    <p>👤 Estimation perso : ${Math.round(estUser)} min (~${(estUser/60).toFixed(1)} h)</p>
    <p>⭐ Estimation élite : ${Math.round(estPro)} min (~${(estPro/60).toFixed(1)} h)</p>
  `;
}
