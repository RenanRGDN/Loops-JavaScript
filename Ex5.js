let mais = 0
let numero = 0 

do{
    numero = parseInt(prompt('Digite um número:'));
    mais++
}
while(numero!=0);
document.write(`A soma dos números digitados foram ${mais}`);