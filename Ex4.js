let j = 0;
let totalCalmas = 0;
let totalMNervosas = 0;
let totalHAgressivos = 0;
let totalOCalmos = 0;
let totalNervosos40 = 0;
let totalCalmos18 = 0;


while (j < 150) {
  const idadeText = prompt('Digite qual é idade: ');
  const idade = Number(idadeText);
  const sexoText = prompt('Escolha o Sexo entre:\n\n1 - Homem\n2 - Mulher\n3 - Outros');
  const sexo = Number(sexoText);
  const humorText = prompt('Escolha a opção do humor:\n\n1 - Calmo\n2 - Nervoso\n3 - Agressivo');
  const humor = Number(humorText);

  if (humor == 1) {
    totalCalmas++;
  }

  if (sexo == 2 && humor == 2) {
    totalMNervosas++;
  }

  if (sexo == 1 && humor == 3) {
    totalHAgressivos++;
  }

  if (sexo == 3 && humor == 1) {
    totalOCalmos++;
  }

  if (humor == 2 && idade > 40) {
    totalNervosos40++;
  }

  if (humor == 1 && idade < 18) {
    totalCalmos18++;
  }

  j++;
}
document.write(`\nO total de pessoas calmas é <br>${totalCalmas}`);
document.write(`\nO total de mulheres nervosas é <br>${totalMNervosas}`);
document.write(`\nO total de homens agressivos é <br>${totalHAgressivos}`);
document.write(`\nO total de outros calmos é <br>${totalOCalmos}`);
document.write(`\nO total de nervosos com mais de 40 anos é <br>${totalNervosos40}`);
document.write(`\nO total de calmos até 18 anos é <br>${totalCalmos18}`);