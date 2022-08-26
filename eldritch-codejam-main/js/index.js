import cardsBlue from '../data/mythicCards/blue/index.js'
import cardsBrown from '../data/mythicCards/brown/index.js'
import cardsGreen from '../data/mythicCards/green/index.js'

import ancients from '../data/ancients.js'
// import difficulties from '../data/difficulties.js'

const bossAzathoth = document.querySelector('.azathoth')
const bossCthulhu = document.querySelector('.cthulthu')
const bossIogSothoth = document.querySelector('.iogSothoth')
const bossShubNiggurath = document.querySelector('.shubNiggurath')
let activeBoss











const BossTarget = (even) => {
    const target = even.target;


    let onClikBossAzathoth = ['azathoth boss__imem', 'azathoth boss__imem boss__imem-active'].includes(target.className);
    let onClikBossCthulhu = ['cthulthu boss__imem', 'cthulthu boss__imem boss__imem-active'].includes(target.className);
    let onClikBossIogSothoth = ['iogSothoth boss__imem', 'iogSothoth boss__imem boss__imem-active'].includes(target.className);
    let onClikBossShubNiggurath = ['shubNiggurath boss__imem', 'shubNiggurath boss__imem boss__imem-active'].includes(target.className);
    bossAzathoth.classList.remove('boss__imem-active')
    bossCthulhu.classList.remove('boss__imem-active')
    bossIogSothoth.classList.remove('boss__imem-active')
    bossShubNiggurath.classList.remove('boss__imem-active')


    if (onClikBossAzathoth) {
        bossAzathoth.classList.add('boss__imem-active')
        activeBoss = '1'

    }
    if (onClikBossCthulhu) {
        bossCthulhu.classList.add('boss__imem-active')
        activeBoss = '1'
    }
    if (onClikBossIogSothoth) {
        bossIogSothoth.classList.add('boss__imem-active')
        activeBoss = '1'
    }

    if (onClikBossShubNiggurath) {
        bossShubNiggurath.classList.add('boss__imem-active')
        activeBoss = '1'
    }


    difficultiesBox()
}

function reset() {
    superEasy.classList.remove('difficulties__item-active')
    easy.classList.remove('difficulties__item-active')
    normal.classList.remove('difficulties__item-active')
    hard.classList.remove('difficulties__item-active')
    superHard.classList.remove('difficulties__item-active')

}

function difficultiesBox() {

    if (activeBoss) {
        document.querySelector('.difficulties').classList.add('difficulties-active')

    } else document.querySelector('.difficulties').classList.remove('difficulties-active')
    reset()
    
}
bossAzathoth.addEventListener('click', BossTarget);
bossCthulhu.addEventListener('click', BossTarget);
bossIogSothoth.addEventListener('click', BossTarget);
bossShubNiggurath.addEventListener('click', BossTarget);






const superEasy = document.querySelector('.super-easy ')
const easy = document.querySelector('.easy')
const normal = document.querySelector('.normal')
const hard = document.querySelector('.hard')
const superHard = document.querySelector('.super-hard')
const difficulties = document.querySelectorAll('.difficulties .difficulties__item')




const BossTarget1 = (even) => {
    reset()

    const target = even.target;

    let onClik = target.className.split(' ')

    document.querySelector(`.${onClik[0]}.${onClik[1]}`).classList.add('difficulties__item-active')

    whatTheBossNaw()
}

superEasy.addEventListener('click', BossTarget1);
easy.addEventListener('click', BossTarget1);
normal.addEventListener('click', BossTarget1);
hard.addEventListener('click', BossTarget1);
superHard.addEventListener('click', BossTarget1);



const greenFirst = document.querySelector('.first-green')
const brownFirst = document.querySelector('.first-brown')
const blueFirst = document.querySelector('.first-blue')

const greenSecond = document.querySelector('.secand-green')
const brownSecond = document.querySelector('.secand-brown')
const blueSecond = document.querySelector('.secand-blue')

const greenThird = document.querySelector('.third-green')
const brownThird = document.querySelector('.third-brown')
const blueThird = document.querySelector('.third-blue')

const bossName = document.querySelector('.bossName')



function whatTheBossNaw() {
    const bossActive = document.querySelector('.boss__imem-active').className
    let nameBoss = (bossActive.split(' '))[0]
    bossName.innerHTML = nameBoss
    let numberBoss
    nameBoss == 'azathoth' ?
        numberBoss = 0 : nameBoss == 'cthulthu' ?
        numberBoss = 1 : nameBoss == 'iogSothoth' ?
        numberBoss = 2 : nameBoss == 'shubNiggurath' ? numberBoss = 3 : console.log(error)


    blockCardsFirst(ancients[numberBoss])
    blockCardsSecand(ancients[numberBoss])
    blockCardsThird(ancients[numberBoss])
    whichCardNead(ancients[numberBoss])

}




function blockCardsFirst(numberBoss) {
    let greenFirsNumber = numberBoss.firstStage.greenCards
    greenFirst.innerHTML = greenFirsNumber
    let blueFirsNumber = numberBoss.firstStage.blueCards
    blueFirst.innerHTML = blueFirsNumber
    let brownFirsNumber = numberBoss.firstStage.brownCards
    brownFirst.innerHTML = brownFirsNumber

}


function blockCardsSecand(numberBoss) {
    let greenSecondNumber = numberBoss.secondStage.greenCards
    greenSecond.innerHTML = greenSecondNumber
    let blueSecondNumber = numberBoss.secondStage.blueCards
    blueSecond.innerHTML = blueSecondNumber
    let brownSecondNumber = numberBoss.secondStage.brownCards
    brownSecond.innerHTML = brownSecondNumber

}


function blockCardsThird(numberBoss) {
    let greenThirdNumber = numberBoss.thirdStage.greenCards
    greenThird.innerHTML = greenThirdNumber
    let blueThirdNumber = numberBoss.thirdStage.blueCards
    blueThird.innerHTML = blueThirdNumber
    let brownThirdNumber = numberBoss.thirdStage.brownCards
    brownThird.innerHTML = brownThirdNumber

}



function whichCardNead(numberBoss) {
    const wichBlueCards = numberBoss.firstStage.blueCards + numberBoss.secondStage.blueCards + numberBoss.thirdStage.blueCards
    const wichBrownCards = numberBoss.firstStage.brownCards + numberBoss.secondStage.brownCards + numberBoss.thirdStage.brownCards
    const wichGreenCards = numberBoss.firstStage.greenCards + numberBoss.secondStage.greenCards + numberBoss.thirdStage.greenCards
    getDifficulties(wichBlueCards, wichBrownCards, wichGreenCards)
   
}





let arrEasyCardsBlue = []
let arrNormalCardsBlue = []
let arrHardCardsBlue = []

let arrEasyCardsBrown = []
let arrNormalCardsBrown = []
let arrHardCardsBrown = []

let arrEasyCardsGreen = []
let arrNormalCardsGreen = []
let arrHardCardsGreen = []

function findBlueCards() {
    for (let i = 0; i < cardsBlue.length; i++) {
        if (cardsBlue[i].difficulty == 'easy') {
            arrEasyCardsBlue.push(cardsBlue[i])
        } else if (cardsBlue[i].difficulty == 'normal') {
            arrNormalCardsBlue.push(cardsBlue[i])
        } else if (cardsBlue[i].difficulty == 'hard') {
            arrHardCardsBlue.push(cardsBlue[i])
        }
    }
}
findBlueCards()

function findBrownCards() {
    for (let i = 0; i < cardsBrown.length; i++) {
        if (cardsBrown[i].difficulty == 'easy') {
            arrEasyCardsBrown.push(cardsBrown[i])
        } else if (cardsBrown[i].difficulty == 'normal') {
            arrNormalCardsBrown.push(cardsBrown[i])
        } else if (cardsBrown[i].difficulty == 'hard') {
            arrHardCardsBrown.push(cardsBrown[i])

        }
    }
}
findBrownCards()

function findGreenCards() {
    for (let i = 0; i < cardsGreen.length; i++) {
        if (cardsGreen[i].difficulty == 'easy') {
            arrEasyCardsGreen.push(cardsGreen[i])
        } else if (cardsGreen[i].difficulty == 'normal') {
            arrNormalCardsGreen.push(cardsGreen[i])
        } else if (cardsGreen[i].difficulty == 'hard') {
            arrHardCardsGreen.push(cardsGreen[i])

        }
    }
}
findGreenCards()



function getDifficulties(wichBlueCards, wichBrownCards, wichGreenCards) {
    const whichLevelActiv = ((document.querySelector('.difficulties__item-active').className).split(' '))[0]
    if (whichLevelActiv == 'super-easy') {
       showSuperEasyLevel(wichBlueCards, wichBrownCards, wichGreenCards)
    }else if (whichLevelActiv == 'easy'){
        showEasyLevel(wichBlueCards, wichBrownCards, wichGreenCards)
    }else if (whichLevelActiv == 'normal'){
        showNormalLevel(wichBlueCards, wichBrownCards, wichGreenCards)
    }else if (whichLevelActiv == 'hard'){
        showHardLevel(wichBlueCards, wichBrownCards, wichGreenCards)
    }else if (whichLevelActiv == 'super-hard'){
    showSuperHardLevel(wichBlueCards, wichBrownCards, wichGreenCards)
    }
}

let arrForSEasyLevelBlue = []
let arrForSEasyLevelbrown = []
let arrForSEasyLevelGreen = []

let arrForEasyLevelBlue = []
let arrForEasyLevelbrown = []
let arrForEasyLevelGreen = []

let arrForNormelLevelBlue = []
let arrForNormelLevelBrown = []
let arrForNormelLevelGreen = []

let arrForHardLevelBlue = []
let arrForHardLevelBrown = []
let arrForHardLevelGreen = []

let arrForSHardLevelBlue = []
let arrForSHardLevelBrown = []
let arrForSHardLevelGreen = []

//superEasyLevel
function showSuperEasyLevel(wichBlueCards, wichBrownCards, wichGreenCards) {
//blue
    while (arrForSEasyLevelBlue.length < wichBlueCards) {
        let random = Math.floor(Math.random() * (arrEasyCardsBlue.length - 1))
        arrForSEasyLevelBlue.push(arrEasyCardsBlue[random])
        arrEasyCardsBlue.splice(random, 1);
    }

console.log(wichBrownCards);
//brown
while (arrForSEasyLevelbrown.length < wichBrownCards && arrEasyCardsBrown.length > 0) {
    let random = Math.floor(Math.random() * (arrEasyCardsBrown.length - 1))
    arrForSEasyLevelbrown.push(arrEasyCardsBrown[random])
    arrEasyCardsBrown.splice(random, 1);
 }
if (arrForSEasyLevelbrown.length != wichBrownCards){
    
    while (arrForSEasyLevelbrown.length < wichBrownCards) {
        let random = Math.floor(Math.random() * (arrNormalCardsBrown.length - 1))
        arrForSEasyLevelbrown.push(arrNormalCardsBrown[random])
        arrNormalCardsBrown.splice(random, 1);
     }
}
//Green
while (arrForSEasyLevelGreen.length < wichGreenCards && arrEasyCardsGreen.length > 0) {
    let random = Math.floor(Math.random() * (arrEasyCardsGreen.length - 1))
    arrForSEasyLevelGreen.push(arrEasyCardsGreen[random])
    arrEasyCardsGreen.splice(random, 1);
 }
if (arrForSEasyLevelGreen.length != wichGreenCards){
    
    while (arrForSEasyLevelGreen.length < wichGreenCards) {
        let random = Math.floor(Math.random() * (arrNormalCardsGreen.length - 1))
        arrForSEasyLevelGreen.push(arrNormalCardsGreen[random])
        arrNormalCardsGreen.splice(random, 1);
     }
}

}

//EasyLevel
function showEasyLevel(wichBlueCards, wichBrownCards, wichGreenCards){
    //blue

    function Blue(wichBlueCards){
        let random
        let activeArrey

        while (arrForEasyLevelBlue.length < wichBlueCards) {

        let choiceArr = Math.floor(Math.random() * (2))
        if (choiceArr > 0){
            random = Math.floor(Math.random() * arrEasyCardsBlue.length)
            activeArrey = arrEasyCardsBlue
        }else {
            random = Math.floor(Math.random() * arrNormalCardsBlue.length)
            activeArrey = arrNormalCardsBlue
        }

    
        arrForEasyLevelBlue.push(activeArrey[random])
            activeArrey.splice(random, 1);
        }
        return arrForEasyLevelBlue
    }
    Blue(wichBlueCards)

    function Brown(wichBrownCards){
        let random
        let activeArrey

        while (arrForEasyLevelbrown.length < wichBrownCards) {

        let choiceArr = Math.floor(Math.random() * (2))
        if (choiceArr > 0){
            random = Math.floor(Math.random() * arrEasyCardsBrown.length)
            activeArrey = arrEasyCardsBrown
        }else {
            random = Math.floor(Math.random() * arrNormalCardsBrown.length)
            activeArrey = arrNormalCardsBrown
        }

        if (activeArrey[random]){
            arrForEasyLevelbrown.push(activeArrey[random])
        }
        
        activeArrey.splice(random, 1);
        }
        return arrForEasyLevelbrown
    }
    Brown(wichBrownCards)
    
    function green(wichGreenCards){
        let random
        let activeArrey

        while (arrForEasyLevelGreen.length < wichGreenCards) {

        let choiceArr = Math.floor(Math.random() * (2))
        if (choiceArr > 0){
            random = Math.floor(Math.random() * arrEasyCardsGreen.length)
            activeArrey = arrEasyCardsGreen
        }else {
            random = Math.floor(Math.random() * arrNormalCardsGreen.length)
            activeArrey = arrNormalCardsGreen
        }

        if (activeArrey[random]){
            arrForEasyLevelGreen.push(activeArrey[random])
        }
        
        activeArrey.splice(random, 1);
        }
        return arrForEasyLevelGreen
    }
    green(wichGreenCards)

}

//normal
function showNormalLevel(wichBlueCards, wichBrownCards, wichGreenCards){
    
    //  blue
    
     function Blue(wichBlueCards){
        let random
        let activeArrey
    
        while (arrForNormelLevelBlue.length < wichBlueCards) {
    
        let choiceArr = Math.floor(Math.random() * (3))
        if (choiceArr == 0){
            random = Math.floor(Math.random() * arrEasyCardsBlue.length)
            activeArrey = arrEasyCardsBlue
        }else if (choiceArr == 1){ 
            random = Math.floor(Math.random() * arrNormalCardsBlue.length)
            activeArrey = arrNormalCardsBlue
        }else if (choiceArr == 2){ {
            random = Math.floor(Math.random() * arrHardCardsBlue.length)
            activeArrey = arrHardCardsBlue
        }
    
    
        arrForNormelLevelBlue.push(activeArrey[random])
            activeArrey.splice(random, 1);
        }
        return arrForNormelLevelBlue
    }
}
    Blue(wichBlueCards)
    
    // Brown
    function Brown(wichBrownCards){
        let random
        let activeArrey
    
        while (arrForNormelLevelBrown.length < wichBrownCards) {
    
        let choiceArr = Math.floor(Math.random() * (3))
        console.log(choiceArr);
        if (choiceArr == 0){
            random = Math.floor(Math.random() * arrEasyCardsBrown.length)
            activeArrey = arrEasyCardsBrown
        }else if(choiceArr == 1) {
            random = Math.floor(Math.random() * arrNormalCardsBrown.length)
            activeArrey = arrNormalCardsBrown
        }else if(choiceArr == 2) {
            random = Math.floor(Math.random() * arrHardCardsBlue.length)
            activeArrey = arrHardCardsBlue
        }
    
        if (activeArrey[random]){
            arrForNormelLevelBrown.push(activeArrey[random])
        }else continue 
        
        activeArrey.splice(random, 1);
        }
        return arrForNormelLevelBrown
    }
    Brown(wichBrownCards)
    
    // Green
    function green(wichGreenCards){
        let random
        let activeArrey
     
       
        while (arrForNormelLevelGreen.length < wichGreenCards) {
    
            let choiceArr = Math.floor(Math.random() * (3))
        console.log(choiceArr);
        if (choiceArr == 0){
            random = Math.floor(Math.random() * arrEasyCardsGreen.length)
            activeArrey = arrEasyCardsGreen
        }else if (choiceArr == 1) {
            random = Math.floor(Math.random() * arrNormalCardsGreen.length)
            activeArrey = arrNormalCardsGreen
        }else if (choiceArr == 2) {
            random = Math.floor(Math.random() * arrHardCardsBlue.length)
            activeArrey = arrHardCardsBlue
        }
    
        if (activeArrey[random]){
            arrForNormelLevelGreen.push(activeArrey[random])
        }else continue 
        
        activeArrey.splice(random, 1);
        }
        return arrForNormelLevelGreen
    }
    green(wichGreenCards)
}

let allArrey = []

function ollarr() {
    for(let i = 0; i < cardsBlue.length ; i++){
        allArrey.push(cardsBlue[i])
        allArrey.push(cardsGreen[i])
        allArrey.push(cardsBrown[i])
    }
}
ollarr()

//hard
function showHardLevel(wichBlueCards, wichBrownCards, wichGreenCards){

function blue (wichBlueCards) {
    for (let i = 0; arrForHardLevelBlue.length < wichBlueCards; i++){
       let random = Math.floor(Math.random() * allArrey.length)
        if (!(allArrey[random].difficulty == 'easy') && allArrey[random].color == 'blue'){
            arrForHardLevelBlue.push(allArrey[random]) 
        }else continue
        
    }
}
blue(wichBlueCards)
function green (wichGreenCards) {
    for (let i = 0; arrForHardLevelGreen.length < wichGreenCards; i++){
       let random = Math.floor(Math.random() * allArrey.length)
        if (!(allArrey[random].difficulty == 'easy') && allArrey[random].color == 'green'){
            arrForHardLevelGreen.push(allArrey[random]) 
        }else continue
        
    }
}
green(wichGreenCards)
function brown (wichBrownCards) {
    for (let i = 0; arrForHardLevelBrown.length < wichBrownCards; i++){
       let random = Math.floor(Math.random() * allArrey.length)
        if (!(allArrey[random].difficulty == 'easy') && allArrey[random].color == 'brown'){
            arrForHardLevelBrown.push(allArrey[random]) 
        }else continue
        
    }
}
brown(wichBrownCards)
}

function showSuperHardLevel(wichBlueCards, wichBrownCards, wichGreenCards){
    //blue
    function blue(){
        while (arrForSHardLevelBlue.length < wichBlueCards && arrHardCardsBlue.length > 0){
        let random = Math.floor(Math.random() * arrHardCardsBlue.length)
        arrForSHardLevelBlue.push(arrHardCardsBlue[random])
        arrHardCardsBlue.splice(arrHardCardsBlue[random], 1)

    } }
    blue()
//Brown
function brown(){
    while (arrForSHardLevelBrown.length < wichBrownCards && arrHardCardsBrown.length > 0){
    let random = Math.floor(Math.random() * arrHardCardsBrown.length)
    arrForSHardLevelBrown.push(arrHardCardsBrown[random])
    arrHardCardsBrown.splice(arrHardCardsBrown[random], 1)

}
while (arrForSHardLevelBrown.length < wichBrownCards ){
    
    let random = Math.floor(Math.random() * arrNormalCardsBrown.length)
    arrForSHardLevelBrown.push(arrNormalCardsBrown[random])
    arrNormalCardsBrown.splice(arrNormalCardsBrown[random], 1)
}}
brown()
//green
function green(){
    while (arrForSHardLevelGreen.length < wichGreenCards && arrHardCardsGreen.length > 0){
    let random = Math.floor(Math.random() * arrHardCardsGreen.length)
    arrForSHardLevelGreen.push(arrHardCardsGreen[random])
    arrHardCardsGreen.splice(arrHardCardsGreen[random], 1)

}
while (arrForSHardLevelGreen.length < wichGreenCards ){
    
    let random = Math.floor(Math.random() * arrNormalCardsGreen.length)
    arrForSHardLevelGreen.push(arrNormalCardsGreen[random])
    arrNormalCardsGreen.splice(arrNormalCardsGreen[random], 1)
}}
green()

}
console.log(arrForSHardLevelGreen);