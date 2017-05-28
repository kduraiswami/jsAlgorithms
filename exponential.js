
function eIncrementApproximation(seriesLimit){

  var appx = 0;

  for(var i = 0; i <= seriesLimit; i++){
    appx += 1/factorial(i);
  }

  return appx;

}

function eDecrementApproximation(seriesLimit){

  var appx = 3;

  for(var i = 2; i <= seriesLimit; i++){
    appx += -1/(factorial(i)*(i-1)*i)
  }

  return appx;

}

function factorial(limit){

  if (limit === 0){
    return 1;
  }
  else{
    return limit*factorial(limit-1);
  } 

}

console.log("2.7182818284590452353602874713527")
console.log(eIncrementApproximation(100));
console.log(eDecrementApproximation(100));