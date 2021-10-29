const countingSort = require("./countingSort.service");

const radixSort = (array) => {
    let max = maxNumber(array);
    let cifras = max.toString().length;

    for (let exp = 1; max / exp > 0; exp *= 10) {
        array = countingSort(array,array.length,exp);
    }
}

const maxNumber = (array) => {

    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i]>max) {
            max = array[i];
        }
    }
    return max;
}

let array = [21,0,5,16];
radixSort(array);