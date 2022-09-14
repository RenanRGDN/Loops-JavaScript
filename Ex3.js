let idade = Number
let idade21 = 0
let idade50 =0

while(idade !=-99){
    idade = parseInt(prompt('Coloque a  idade: '));
    
    if(idade <21){
        idade21++
    }
    if (idade> 50){
        idade50++
    }
}
document.write (`Total de pessoas com menos de 21 anos é ${idade21}`);
document.write (`\n Total de pessoas com mais de 50 anos é ${idade50}`);