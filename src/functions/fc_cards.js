import {clubDeck,heartDeck,diamondDeck,spadeDeck} from './decks.js';
let decks = [diamondDeck,heartDeck,clubDeck,spadeDeck];
let naipeIcons = ['♦️','♥️','♠️','♣️'];   
let maoInicial = [];

export function distribuirMaos(){
    let naipedDeck = chooseDeckandNaipeCard();
    let carta1 = {
        value: naipedDeck.deckCard,
        naipe: naipedDeck.naipeIcon
    }
    naipedDeck = chooseDeckandNaipeCard();
    let carta2  = {
        value: naipedDeck.deckCard,
        naipe: naipedDeck.naipeIcon
    }
    maoInicial.push(carta1,carta2);
    return maoInicial;
}

export function flop(){
    let flopCards = [];
    let naipedDeck = chooseDeckandNaipeCard();
    let carta1 = {
        value: naipedDeck.deckCard,
        naipe: naipedDeck.naipeIcon
    }
    naipedDeck = chooseDeckandNaipeCard();
    let carta2 = {
        value: naipedDeck.deckCard,
        naipe: naipedDeck.naipeIcon
    }
    naipedDeck = chooseDeckandNaipeCard();
    let carta3 = {
        value: naipedDeck.deckCard,
        naipe: naipedDeck.naipeIcon
    }
    flopCards.push(carta1,carta2,carta3);
    return flopCards;
}

export function cartasRestantes(){
    let cartas = 0;
    for(let i = 0; i < decks.length; i++){
        cartas += decks[i].length;
    }
    let relatorioCartas = {
        diamondDeck: {
            value: decks[0],
            qtd: decks[0].length
        },
        heartDeck: {
            value: decks[1],
            qtd: decks[1].length
        },
        clubDeck: {
            value: decks[2],
            qtd: decks[2].length
        },
        spadeDeck: {
            value: decks[3],
            qtd: decks[3].length
        },
        cartas
    }
    return relatorioCartas;
}

function chooseDeckandNaipeCard(){
    let choosedDeck = Math.floor(Math.random()*decks.length);
    let naipedDeck = {
        deckCard : '',
        naipeIcon : '',
    };
    let rand = Math.floor(Math.random()*decks[choosedDeck].length);
    switch(choosedDeck){
        case 0: //Diamond
            naipedDeck = {
                deckCard: decks[choosedDeck][rand],
                naipeIcon: naipeIcons[0]
            }
            break;
        case 1: //Heart
            naipedDeck = {
                deckCard: decks[choosedDeck][rand],
                naipeIcon: naipeIcons[1]
            }
            break;
        case 2://Spade
            naipedDeck = {
                deckCard: decks[choosedDeck][rand],
                naipeIcon: naipeIcons[2]
            }
            break;
        case 3://Club
            naipedDeck = {
                deckCard: decks[choosedDeck][rand],
                naipeIcon: naipeIcons[3]
            }
            break;
    }
    decks[choosedDeck].splice(rand,1);
    return naipedDeck;
}