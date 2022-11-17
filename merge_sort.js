// let array = [3, 5, 7, 2, 9, 1, 6, 4, 11, 0]
// let aux, counter;
// let length = array.length
// let half = length / 2

// let arrays = []

// for (let i = 0; i < array.length; i++) {
//     arrays[i] = [array[i], array[i + 1]]
// }

// console.log(arrays)

const _mergeArrays = (a, b) => {
    const c = []

    while (a.length && b.length) {
        c.push(a[0] > b[0] ? b.shift() : a.shift())
    }

    while (a.length) {
        c.push(a.shift())
    }
    while (b.length) {
        c.push(b.shift())
    }

    return c
}

const mergeSort = (a) => {
    if (a.length < 2) return a
    const middle = Math.floor(a.length / 2)
    const a_l = a.slice(0, middle)
    const a_r = a.slice(middle, a.length)
    const sorted_l = mergeSort(a_l)
    const sorted_r = mergeSort(a_r)
    return _mergeArrays(sorted_l, sorted_r)
}