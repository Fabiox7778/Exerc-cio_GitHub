function filtrarNegativos(array) {
    let NovoArr = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            NovoArr.push(array[i]);
        }
    }
    return NovoArr;
}

console.log(filtrarNegativos([12, -18, 30, 20, -45]));