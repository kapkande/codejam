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
    whatTheBossNaw()
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



console.log(ancients[0])

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
    const greenBrownCards = numberBoss.firstStage.greenCards + numberBoss.secondStage.greenCards + numberBoss.thirdStage.greenCards

    getDifficulties(wichBlueCards, wichBrownCards, greenBrownCards)
}







// let arrNormalCardsBlue = []
// let arrSEasyCardsBlue = []
// let SEasyCardsBlue = []

// let arrNormalCardsBrown = []
// let arrSEasyCardsBrown = []
// let SEasyCardsBrown = []

// let arrNormalCardsGreen = []
// let arrSEasyCardsGreen = []
// let SEasyCardsGreen = []


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
    // function pereborSEasy(wichBlueCards, wichBrownCards, wichGreenCards) {
    //     //wichBlueCards
    //     for (let i = 0; i < cardsBlue.length; i++) {
    //         if (cardsBlue[i].difficulty == 'easy') {
    //             SEasyCardsBlue.push(cardsBlue[i])

//         }

//     }

//     while (arrSEasyCardsBlue.length < wichBlueCards && SEasyCardsBlue.length > 0) {
//         let random = Math.floor(Math.random() * SEasyCardsBlue.length)
//         if (SEasyCardsBlue[random] != '') {
//             arrSEasyCardsBlue.push(SEasyCardsBlue[random])
//         }
//         SEasyCardsBlue.splice(random, 1);
//     }



//     if (arrSEasyCardsBlue.length != wichBlueCards) {
//         for (let i = 0; i < cardsBlue.length; i++) {
//             if (cardsBlue[i].difficulty == 'normal') {
//                 arrNormalCardsBlue.push(cardsBlue[i])
//             }
//         }

//         while (arrSEasyCardsBlue.length < wichBlueCards && arrNormalCardsBlue.length > 0) {
//             let random = Math.floor(Math.random() * arrNormalCardsBlue.length)
//             if (arrNormalCardsBlue[random] != '') {
//                 arrSEasyCardsBlue.push(arrNormalCardsBlue[random])
//             }
//             arrNormalCardsBlue.splice(random, 1);
//         }

//     }

//     // wichBrownCards
//     for (let i = 0; i < cardBrown.length; i++) {
//         if (cardBrown[i].difficulty == 'easy') {
//             SEasyCardsBrown.push(cardBrown[i])

//         }

//     }

//     while (arrSEasyCardsBrown.length < wichBrownCards && SEasyCardsBrown.length > 0) {
//         let random = Math.floor(Math.random() * SEasyCardsBrown.length)
//         if (SEasyCardsBrown[random] != '') {
//             arrSEasyCardsBrown.push(SEasyCardsBrown[random])
//         }
//         SEasyCardsBrown.splice(random, 1);
//     }


//     if (arrSEasyCardsBrown.length != wichBrownCards) {
//         for (let i = 0; i < cardBrown.length; i++) {
//             if (cardBrown[i].difficulty == 'normal') {
//                 arrNormalCardsBrown.push(cardBrown[i])
//             }
//         }

//         while (arrSEasyCardsBrown.length < wichBrownCards && arrNormalCardsBrown.length > 0) {
//             let random = Math.floor(Math.random() * arrNormalCardsBrown.length)
//             if (arrNormalCardsBrown[random] != '') {
//                 arrSEasyCardsBrown.push(arrNormalCardsBrown[random])
//             }
//             arrNormalCardsBrown.splice(random, 1);
//         }

//     }

//     // greenBrownCards
//     for (let i = 0; i < cardsGreen.length; i++) {
//         if (cardsGreen[i].difficulty == 'easy') {
//             SEasyCardsGreen.push(cardsGreen[i])

//         }

//     }

//     while (arrSEasyCardsGreen.length < wichGreenCards && SEasyCardsGreen.length > 0) {
//         let random = Math.floor(Math.random() * SEasyCardsGreen.length)
//         if (SEasyCardsGreen[random] != '') {
//             arrSEasyCardsGreen.push(SEasyCardsGreen[random])
//         }
//         SEasyCardsGreen.splice(random, 1);
//     }

//     if (arrSEasyCardsGreen.length != wichGreenCards) {
//         for (let i = 0; i < cardsGreen.length; i++) {
//             if (cardsGreen[i].difficulty == 'normal') {
//                 arrNormalCardsGreen.push(cardsGreen[i])
//             }
//         }

//         while (arrSEasyCardsGreen.length < wichGreenCards && arrNormalCardsGreen.length > 0) {
//             let random = Math.floor(Math.random() * arrNormalCardsGreen.length)
//             if (arrNormalCardsGreen[random] != '') {
//                 arrSEasyCardsGreen.push(arrNormalCardsGreen[random])
//             }
//             arrNormalCardsGreen.splice(random, 1);
//         }

//     }

// }


function getDifficulties(wichBlueCards, wichBrownCards, wichGreenCards) {
    const getActiveItem = ((document.querySelector('.difficulties__item-active').className).split(' '))[0]
    if (getActiveItem == 'super-easy') {
        showSuperEasyLevel(wichBlueCards, wichBrownCards, wichGreenCards)
    }

}

superEasy.addEventListener('click', getDifficulties);
easy.addEventListener('click', getDifficulties);
normal.addEventListener('click', getDifficulties);
hard.addEventListener('click', getDifficulties);
superHard.addEventListener('click', getDifficulties);


let arrForSEasyLevelBlue = []

//superEasyLevel

function showSuperEasyLevel(wichBlueCards, wichBrownCards, wichGreenCards) {

    while (arrForSEasyLevelBlue < 2) {
        let random = Math.floor(Math.random() * (arrEasyCardsBlue.length - 1))
        arrForSEasyLevelBlue.push(arrEasyCardsBlue[random])
        arrNormalCardsBlue.splice(arrEasyCardsBlue, 1);
    }
}
console.log(arrForSEasyLevelBlue);