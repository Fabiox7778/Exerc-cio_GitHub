function inverterArray(array) {
    let arrayRevertida = [];
    for (let i = array.length - 1; i >= 0; i--) {
        arrayRevertida.push(array[i]);
    }
    return arrayRevertida;
}
let array = [10, 20, 40, 60, 80];
let arrayRevertida = inverterArray(array);
console.log(array);
console.log(arrayRevertida);