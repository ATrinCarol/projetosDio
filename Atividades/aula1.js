let precoCombustivel = 5.79, kmMedioPorLitro = 12, distanciaDaViagemKm = 1580;
const consumoLitros = distanciaDaViagemKm / kmMedioPorLitro;
const valorFinalViagem = consumoLitros * precoCombustivel;

console.log(consumoLitros);
console.log(valorFinalViagem.toFixed(2));