let array = [3, 5, 7, 2, 9, 1, 5, 4, 11, 0]
let aux

for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
        
        if(array[j] > array[i]) {
            aux = array[j]
            array[j] = array[i]
            array[i] = aux
        }
    }
}

console.log(array)