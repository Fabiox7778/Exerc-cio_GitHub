function calcularMedia(arr){
    let media = 0;
    let soma = 0;
    for(let i = 0; i < arr.length ; i++){
        soma += arr[i];
        media = soma / arr.length;
    }
    return media;
}
console.log(calcularMedia([2, 3, 3, 5, 7,10]));