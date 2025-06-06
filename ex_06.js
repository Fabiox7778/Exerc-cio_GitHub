function calcularMedia(arr){ // função que recebe um array e retorna a média dos valores
    let media = 0;
    let soma = 0;
    for(let i = 0; i < arr.length ; i++){ // percorre o array
        soma += arr[i] // soma os valores
        media = soma / arr.length // calcula a média
    }
    return media // retorna a média
}