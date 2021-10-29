/**
 * utilizando couting sort
 */

 const countingSort = require("../algoritmos-ordenamiento/countingSort");
 const radixSort = (array, cont, base, maximumNumberDigits) => 
 {
     let tempArray = [];
     tempArray.length = 10;
     tempArray.fill(0)
     if(cont == maximumNumberDigits)
     {
         return array;
     }
     for (let i = 0; i < array.length; i++) 
     {
        let digit = 0;
         if(base == 10)
         {
             digit = array[i] % base;
         }
         else
         {
             digit = ((array[i] % base) - (array[i] % (base/10)))/(base/10);
         }
         if(Array.isArray(tempArray[digit]))
         {
             tempArray[digit].push(array[i]);
         }
         else
         {
             tempArray[digit] = [];
             tempArray[digit].push(array[i]);
         }
         let max = calculateBiggest(tempArray[digit], 0, tempArray[digit][0], 0);
         countingSort(tempArray[digit], 0, max)
     }
     //console.log(tempArray);
     array = organizeArray(tempArray, array, 0, 0);
     //console.log(array);
     base *= 10;
     return radixSort(array, ++cont, base, maximumNumberDigits);
 }
 
 const RadixSort = (array) => 
 {
     //let biggestNumber = calculateBiggest(array,0,0,0);
     biggestNumber = Math.max(...array);
     let newBig = biggestNumber.toString().length;
     //encontrar maximumNumberDigits ayudará para tener el número de iteraciones del algoritmo
     let maximumNumberDigits = newBig;
     return radixSort(array, 0, 10, maximumNumberDigits);
 }
 
 //Reorganiza los elementos del array
 const organizeArray = (tempArray, array, i, cont) => 
 {
     if(cont == tempArray.length)
     {
         return array;
     }
     if(tempArray[cont] != 0)
     {
         for (let j = 0; j < tempArray[cont].length; j++) 
         {
             array[i] = tempArray[cont][j];
             i++;    
         }
     }
     return organizeArray(tempArray, array, i, ++cont);
 }
 
 const calculateBiggest = (array, i, biggestNumber, cont) => 
 {
     if(cont == array.length)
     {
         return biggestNumber;
     }
     if(array[i] > biggestNumber)
     {
         biggestNumber = array[i];
     }
     return calculateBiggest(array, ++i, biggestNumber, ++cont);
 }

 console.log(RadixSort([620,15,43,128]));