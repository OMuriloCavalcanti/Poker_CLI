import {distribuirMaos, flop, cartasRestantes} from './functions/fc_cards.js';
let maoJogador = distribuirMaos();
console.log('Mão do jogador');
maoJogador.forEach(card =>{
    console.log(card);
});
console.log('-------------------\noutro jogadores');
distribuirMaos();
distribuirMaos();
distribuirMaos();
distribuirMaos();
distribuirMaos();
distribuirMaos();
distribuirMaos();
distribuirMaos();
let cartas = cartasRestantes();
console.log(`${cartas.cartas} cartas restantes`);
console.log('Round do flop');
let flopStep = flop();
cartas = cartasRestantes();
flopStep.forEach(flopCard => {
    console.log(flopCard);
});
console.log(`${cartas.cartas} cartas restantes`);
console.log('-----------')
console.log(cartas);