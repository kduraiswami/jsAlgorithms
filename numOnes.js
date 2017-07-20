// Input: [0, 0, 0, 1, 1, 1] =>  Output: 3
// Input: [0, 0, 0, 0]   =>  Output: 0
// need to find the index of the first one and then subtract that number from the length



function numOnes(arr){

  let length = arr.length;
  let minIndex = 0;
  let maxIndex = length - 1;
  let currentIndex;
  let currentElement;

  while(minIndex <= maxIndex){
    currentIndex = Math.round((minIndex + maxIndex) / 2);
    currentElement = arr[currentIndex];
    nextElement = arr[currentIndex + 1];

    if(currentElement === 0 && nextElement === 1 ){
      return length - currentIndex - 1;
    }

    if(currentElement === 0){
      minIndex = currentIndex + 1;
    }
    else{
      maxIndex = currentIndex - 1;
    }
  }

  return 0;

}


console.log(numOnes([0,0,0,0,0,1,1,1,1,1]));

