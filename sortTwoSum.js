/*
Input: [-5, 1, 3, 6, 7], -2      => Output: [0,2]
Input: [1, 9, 10], 8      =>  Output: [-1,-1]

Time Complexity: O(N)
Auxiliary Space Complexity: O(1)

*/


function twoSum(arr,target){

  let minIndex = 0;
  let maxIndex = arr.length - 1;
  let result = [-1,-1]

  while(minIndex < maxIndex){
    let minValue = arr[minIndex];
    let maxValue = arr[maxIndex];
    let sum = minValue + maxValue;

    if( sum === target){
      result[0] = minIndex;
      result[1] = maxIndex;
      return result;
    }

    if( sum < target){
      minIndex++;
    }

    if(sum > target){
      maxIndex--;
    }

  }


  return result;

}

console.log(twoSum([1, 9, 10], 8 ));