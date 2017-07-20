'use strict'
/*


*/


function plusOne(arr){

  let result = 0;

  for(let i = 0; i < arr.length; i++){
     result += Math.pow(10,i)*arr[arr.length-1-i]; 
  }

  result++;
  return result.toString().split('');
}





