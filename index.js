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

  let distanceValue = start-destination<0 ? start-destination*(-1)* blocksInFeet:start-destination* blocksInFeet;
  return distanceValue;
}

function calculatesFarePrice(start, destination){


}
