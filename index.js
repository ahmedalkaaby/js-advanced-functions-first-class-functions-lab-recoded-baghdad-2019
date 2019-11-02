// Code your solution in this file!
const returnFirstTwoDrivers = function (arr){
  return [arr[0], arr[1]];
}
const returnLastTwoDrivers = function (arr){
  return [arr[arr.length-1],arr[arr.length-2]];
}

let selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

createFareMultiplier = function(int){
  return function(fare){
    return fare*int;
  }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

selectDifferentDrivers=function(arr,select){
  return select(arr);
}


