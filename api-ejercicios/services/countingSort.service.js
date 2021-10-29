/**
 * COUNTING SORT
 */

 const countingSort = (items, min, max) => {
    let i = min;
  
    let sizeCountArray = max + 1;
    let countArray = [];
    let itemsTemp = [];
    // Crear el vector inicializandolo con los ceros
    for (i; i < sizeCountArray; i++) {
      countArray[i] = 0;
    }
  
    // Recorrer y contar los elementos del vector inicial
    let size = items.length;
    for (let i = 0; i < size; i++) {
      let element = (Math.round(items[i] / max)) % 10;
      countArray[element] += 1;
    }
    
    for (i = 1; i < 10; i++) {
        countArray[i] += countArray[i - 1];
        
    }
            

    // Ordernar los elementos de acuerdo al countArray
    let j = 0;
    for (i = min - 1 ; i >= 0; i--) {
        let m =(Math.round(items[i] / max)) % 10;
        itemsTemp[countArray[m] - 1] = items[i];
        countArray[m]--;
    }
  
    return itemsTemp;
  };
  
  module.exports = countingSort;