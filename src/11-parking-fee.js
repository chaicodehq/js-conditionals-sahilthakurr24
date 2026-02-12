/**
 * 🅿️ City Central Parking
 *
 * City Central Parking garage is the busiest in downtown. They need an
 * automated system to calculate parking fees. Different vehicle types
 * have different rates, and there's a daily maximum so customers
 * aren't overcharged.
 *
 * Rates (first hour / each additional hour):
 *   - "car":        $5 first hour, then $3/hour
 *   - "motorcycle": $3 first hour, then $2/hour
 *   - "bus":        $10 first hour, then $7/hour
 *
 * Daily Maximum (fee can never exceed this):
 *   - "car":        $30
 *   - "motorcycle": $18
 *   - "bus":        $60
 *
 * Rules:
 *   - Partial hours are rounded UP (e.g., 1.5 hours → 2 hours)
 *   - The fee should never exceed the daily maximum
 *   - If hours is 0 or negative, return -1
 *   - If vehicleType is not "car", "motorcycle", or "bus", return -1
 *
 * Examples:
 *   - car, 1 hour     → $5
 *   - car, 3 hours    → $5 + $3 + $3 = $11
 *   - car, 0.5 hours  → rounds up to 1 hour → $5
 *   - car, 24 hours   → $5 + 23×$3 = $74 → capped at $30
 *
 * @param {number} hours - Number of hours parked
 * @param {string} vehicleType - "car", "motorcycle", or "bus"
 * @returns {number} Parking fee or -1 for invalid input
 */
export function calculateParkingFee(hours, vehicleType) {
  if(hours <= 0) return -1;
  if(vehicleType !== "car" && vehicleType !== "motorcycle" && vehicleType !== "bus") return -1;

  const roundedOffHour = Math.ceil(hours);
  let price = 0;
  if(vehicleType === "car"){
    price = 5;
    const remainingHours = roundedOffHour - 1;
    const extraCharges = remainingHours * 3;
    let totalPrice = price + extraCharges;
    //checking for daily  maximum
    if(totalPrice > 30){
      return 30 ;
    }else{
      return totalPrice;
    }
  } else  if(vehicleType === "motorcycle"){
    price = 3;
    const remainingHours = roundedOffHour - 1;
    const extraCharges = remainingHours * 2;
    let totalPrice = price + extraCharges;
    //checking for daily  maximum
    if(totalPrice > 18){
      return 18;
    }else{
      return totalPrice;
    }
  } else{
    price = 10;
    const remainingHours = roundedOffHour - 1;
    const extraCharges = remainingHours * 7;
    let totalPrice = price + extraCharges;
    if(totalPrice > 60){
      return 60;
    }else{
      return totalPrice;
    }
  }
}
