// Code your solution in this file!
const blocksInFeet = 264
const locationValue = 42

function distanceFromHqInBlocks(passengerLocation){

  let distanceValue = locationValue > passengerLocation ?  (locationValue-passengerLocation):(passengerLocation-locationValue);
  return distanceValue;
}

function distanceFromHqInFeet(passengerLocation){
   return distanceFromHqInBlocks(passengerLocation)*blocksInFeet;
}

function distanceTravelledInFeet(start, destination){

  let distanceValue = start-destination<0 ? (start-destination) * -1 :start-destination;
  return distanceValue*blocksInFeet;
}

function calculatesFarePrice(start, destination){
  let travelFeet = distanceTravelledInFeet(start, destination) - 100;

  if (travelFeet > 2500) {
     return  "cannot travel that far";
  } else if (2000 <=  travelFeet <= 2500 ){

  }




}
