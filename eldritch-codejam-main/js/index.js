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
const zames = document.querySelector('.zames')
zames.addEventListener('click', whatTheBossNaw);



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
    deleteArrey()

    getDifficulties(wichBlueCards, wichBrownCards, wichGreenCards)



}



function getDifficulties(wichBlueCards, wichBrownCards, wichGreenCards) {
    const whichLevelActiv = ((document.querySelector('.difficulties__item-active').className).split(' '))[0]
    if (whichLevelActiv == 'super-easy') {
        showSuperEasyLevel(wichBlueCards, wichBrownCards, wichGreenCards)
    } else if (whichLevelActiv == 'easy') {
        showEasyLevel(wichBlueCards, wichBrownCards, wichGreenCards)
    } else if (whichLevelActiv == 'normal') {
        showNormalLevel(wichBlueCards, wichBrownCards, wichGreenCards)
    } else if (whichLevelActiv == 'hard') {
        showHardLevel(wichBlueCards, wichBrownCards, wichGreenCards)
    } else if (whichLevelActiv == 'super-hard') {
        showSuperHardLevel(wichBlueCards, wichBrownCards, wichGreenCards)
    }
}








function deleteArrey() {

    // arrForBlue.splice(0, arrForBlue.length - 1)
    // arrForBrown.splice(0, arrForBrown.length)
    // arrForGreen.splice(0, arrForGreen.length)
    console.log(arrForBlue.length);
    for (let i = 0; i < arrForBlue.length; i++) {
        arrForBlue.pop()
        console.log(arrForBlue.length);
    }
    for (let i = 0; i < arrForBrown.length; i++) {
        arrForBrown.pop()
    }
    for (let i = 0; i < arrForGreen.length; i++) {
        arrForGreen.pop()
    }
    return
}

let whichHave


function shawWhichCards(a, b) {
    whichHave = 0
    for (let i = 0; i < a.length; i++) {
        if (a[i].difficulty == b) {
            whichHave++

        }
    }

    return whichHave;

}
let arrForBlue = []
let arrForBrown = []
let arrForGreen = []

//superEasyLevel
function showSuperEasyLevel(wichBlueCards, wichBrownCards, wichGreenCards) {
    //blue
    // cardsBlue

    let cardsBluTwo = cardsBlue.slice(0, cardsBlue.length)

    while (arrForBlue.length < wichBlueCards) {
        let random = Math.floor(Math.random() * (cardsBluTwo.length))
        if (cardsBluTwo[random].difficulty == 'easy') {
            arrForBlue.push(cardsBluTwo[random])
            cardsBluTwo.splice(random, 1);
        }

    }
    console.log(cardsBlue.length);
    //brown
    // cardsBrown


    // function brown(wichBrownCards) {

    //     let arrForBrownTwo = cardsBrown.slice(0, cardsBrown.length) 

    //     shawWhichCards(arrForBrownTwo, 'easy')
    //     while (arrForBrown.length < wichBrownCards && arrForBrown.length < whichHave - 1) {
    //         let random = Math.floor(Math.random() * (arrForBrownTwo.length - 1))

    //         if (arrForBrownTwo[random].difficulty == 'easy') {
    //             arrForBrown.push(arrForBrownTwo[random])
    //             arrForBrownTwo.splice(random, 1);


    //         }
    //     }
    //     if (arrForBrown.length != wichBrownCards) {

    //         while (arrForBrown.length < wichBrownCards) {
    //             let random = Math.floor(Math.random() * (arrForBrownTwo.length - 1))

    //             if (arrForBrownTwo[random].difficulty == 'normal') {
    //                 arrForBrown.push(arrForBrownTwo[random])
    //                 arrForBrownTwo.splice(random, 1);
    //             }
    //         }
    //     }
    // }
    // error


    // brown(wichBrownCards)
    //Green

    function green(wichGreenCards) {


        let cardsGreenTwo = cardsGreen.slice(0, cardsGreen.length)




        console.log(cardsGreenTwo);
        shawWhichCards(cardsGreenTwo, 'easy')
        while (arrForGreen.length < wichGreenCards && arrForGreen.length < whichHave) {
            let random = Math.floor(Math.random() * (cardsGreenTwo.length - 1))

            if (cardsGreenTwo[random].difficulty == 'easy') {
                arrForGreen.push(cardsGreenTwo[random])
                cardsGreenTwo.splice(random, 1);

            }
        }
        if (arrForGreen.length != wichGreenCards) {

            while (arrForGreen.length < wichGreenCards) {
                let random = Math.floor(Math.random() * (cardsGreenTwo.length - 1))
                if (cardsGreenTwo[random].difficulty == 'normal') {
                    arrForGreen.push(cardsGreenTwo[random])
                    cardsGreenTwo.splice(random, 1);
                }
            }
        }
    }
    green(wichGreenCards)
    console.log(arrForGreen);
}

//EasyLevel
function showEasyLevel(wichBlueCards, wichBrownCards, wichGreenCards) {

    //blue
    // cardsBlue

    function blue(wichBlueCards) {
        while (arrForBlue.length < wichBlueCards) {
            let random = Math.floor(Math.random() * (cardsBlue.length - 1))
            console.log(random);
            if (!(cardsBlue[random].difficulty == 'hard')) {
                arrForBlue.push(cardsBlue[random])
                cardsBlue.splice(random, 1);
            }

        }
    }

    blue(wichBlueCards)

    //brown
    // cardsBrown

    function brown(wichBrownCards) {
        while (arrForBrown.length < wichBrownCards) {
            let random = Math.floor(Math.random() * (cardsBrown.length))
            if (!(cardsBrown[random].difficulty == 'hard')) {
                arrForBrown.push(cardsBrown[random])
                cardsBrown.splice(random, 1);
            }

        }
    }
    brown(wichBrownCards)

    //Green
    // cardsGreen
    function green(wichGreenCards) {
        while (arrForGreen.length < wichGreenCards) {
            let random = Math.floor(Math.random() * (cardsGreen.length))
            if (!(cardsGreen[random].difficulty == 'hard')) {
                arrForGreen.push(cardsGreen[random])
                cardsGreen.splice(random, 1);
            }

        }
    }
    green(wichGreenCards)



}

//normal
function showNormalLevel(wichBlueCards, wichBrownCards, wichGreenCards) {
    //blue
    // cardsBlue

    function blue(wichBlueCards) {
        while (arrForBlue.length < wichBlueCards) {
            let random = Math.floor(Math.random() * (cardsBlue.length - 1))
            console.log(random);
            if (cardsBlue[random].difficulty) {
                arrForBlue.push(cardsBlue[random])
                cardsBlue.splice(random, 1);
            }

        }
    }

    blue(wichBlueCards)

    //brown
    // cardsBrown

    function brown(wichBrownCards) {
        while (arrForBrown.length < wichBrownCards) {
            let random = Math.floor(Math.random() * (cardsBrown.length))
            if (cardsBrown[random].difficulty) {
                arrForBrown.push(cardsBrown[random])
                cardsBrown.splice(random, 1);
            }

        }
    }
    brown(wichBrownCards)

    //Green
    // cardsGreen
    function green(wichGreenCards) {
        while (arrForGreen.length < wichGreenCards) {
            let random = Math.floor(Math.random() * (cardsGreen.length))
            if (cardsGreen[random].difficulty) {
                arrForGreen.push(cardsGreen[random])
                cardsGreen.splice(random, 1);
            }

        }
    }
    green(wichGreenCards)

}

//hard
function showHardLevel(wichBlueCards, wichBrownCards, wichGreenCards) {

    //blue
    // cardsBlue

    function blue(wichBlueCards) {
        while (arrForBlue.length < wichBlueCards) {
            let random = Math.floor(Math.random() * (cardsBlue.length - 1))
            console.log(random);
            if (!(cardsBlue[random].difficulty == 'easy')) {
                arrForBlue.push(cardsBlue[random])
                cardsBlue.splice(random, 1);
            }

        }
    }

    blue(wichBlueCards)

    //brown
    // cardsBrown

    function brown(wichBrownCards) {
        while (arrForBrown.length < wichBrownCards) {
            let random = Math.floor(Math.random() * (cardsBrown.length))
            if (!(cardsBrown[random].difficulty == 'easy')) {
                arrForBrown.push(cardsBrown[random])
                cardsBrown.splice(random, 1);
            }

        }
    }
    brown(wichBrownCards)

    //Green
    // cardsGreen
    function green(wichGreenCards) {
        while (arrForGreen.length < wichGreenCards) {
            let random = Math.floor(Math.random() * (cardsGreen.length))
            if (!(cardsGreen[random].difficulty == 'easy')) {
                arrForGreen.push(cardsGreen[random])
                cardsGreen.splice(random, 1);
            }

        }
    }
    green(wichGreenCards)

}
//SuperHard
function showSuperHardLevel(wichBlueCards, wichBrownCards, wichGreenCards) {
    //blue
    // cardsBlue
    while (arrForBlue.length < wichBlueCards) {
        let random = Math.floor(Math.random() * (cardsBlue.length))
        if (cardsBlue[random].difficulty == 'hard') {
            arrForBlue.push(cardsBlue[random])
            cardsBlue.splice(random, 1);
        }

    }

    //brown
    // cardsBrown

    function brown(wichBrownCards) {
        shawWhichCards(cardsBrown, 'hard')
        while (arrForBrown.length < wichBrownCards && arrForBrown.length < whichHave) {
            let random = Math.floor(Math.random() * (cardsBrown.length - 1))

            if (cardsBrown[random].difficulty == 'hard') {
                arrForBrown.push(cardsBrown[random])
                cardsBrown.splice(random, 1);

            }
        }
        if (arrForBrown.length != wichBrownCards) {

            while (arrForBrown.length < wichBrownCards) {
                let random = Math.floor(Math.random() * (cardsBrown.length - 1))
                if (cardsBrown[random].difficulty == 'normal') {
                    arrForBrown.push(cardsBrown[random])
                    cardsBrown.splice(random, 1);
                }
            }
        }
    }
    console.log(arrForBrown);
    brown(wichBrownCards)
        //     //Green

    function green(wichGreenCards) {
        console.log(arrForGreen.length);
        shawWhichCards(cardsGreen, 'hard')
        while (arrForGreen.length < wichGreenCards && arrForGreen.length < whichHave) {
            let random = Math.floor(Math.random() * (cardsGreen.length - 1))
            if (cardsGreen[random].difficulty == "hard") {
                arrForGreen.push(cardsGreen[random])
                cardsGreen.splice(random, 1);

            }
        }

        if (arrForGreen.length != wichGreenCards) {
            while (arrForGreen.length < wichGreenCards) {
                let random = Math.floor(Math.random() * (cardsGreen.length - 1))
                if (cardsGreen[random].difficulty == 'normal') {
                    arrForGreen.push(cardsGreen[random])
                    cardsGreen.splice(random, 1);
                }
            }
        }
    }
    green(wichGreenCards)


}



let GlobalArrey = []

const mixArrey = {
    data: [],
    add: function(addData) {
        this.data.push(addData.cardFace)
    },
    del: function() {
        return this.data.pop()
    },


}


const ImgCards = document.querySelector('.ImgCards')
const ImgCard = document.querySelector('.ImgCard')



function shawImeges() {
    const img = new Image();
    img.src = './assets/mythicCardBackground.png'
    img.onload = () => {
        ImgCards.style.backgroundImage = `url("${mixArrey.del()}")`

    };
}
ImgCard.addEventListener('click', shawImeges);
// const zames = document.querySelector('.zames')

function zamesC() {
    let numberBoss
    const nameBoss = ((document.querySelector('.boss__imem-active').className).split(' '))[0]
    nameBoss == 'azathoth' ?
        numberBoss = 0 : nameBoss == 'cthulthu' ?
        numberBoss = 1 : nameBoss == 'iogSothoth' ?
        numberBoss = 2 : nameBoss == 'shubNiggurath' ? numberBoss = 3 : console.log(error)

    let firstStage = ancients[numberBoss].firstStage
    let secondStage = ancients[numberBoss].secondStage
    let thirdStage = ancients[numberBoss].thirdStage

    asss(firstStage)
    asss(secondStage)
    asss(thirdStage)

}

// zames.addEventListener('click', zamesC);

function asss(Stage) {
    let arrBlue = []
    let arrbrawn = []
    let arrGreen = []
    let GlobalArrey = []

    function blueCards(blue) {
        while (arrBlue.length < blue) {
            let random = Math.floor(Math.random() * arrForSEasyLevelBlue.length)
            if (arrForSEasyLevelBlue[random]) {
                arrBlue.push(arrForSEasyLevelBlue[random])
                arrForSEasyLevelBlue.splice(random, 1)
            }
        }
        return symaaArr(arrBlue)
    }
    blueCards(Stage.blueCards)

    function brownCards(brown) {
        while (arrbrawn.length < brown) {
            let random = Math.floor(Math.random() * arrForSEasyLevelbrown.length)
            if (arrForSEasyLevelbrown[random]) {
                arrbrawn.push(arrForSEasyLevelbrown[random])
                arrForSEasyLevelbrown.splice(random, 1)
            }
        }
        return symaaArr(arrbrawn)
    }
    brownCards(Stage.brownCards)

    function greenCards(green) {
        while (arrGreen.length < green) {
            let random = Math.floor(Math.random() * arrForSEasyLevelGreen.length)
            if (arrForSEasyLevelGreen[random]) {
                arrGreen.push(arrForSEasyLevelGreen[random])
                arrForSEasyLevelGreen.splice(random, 1)
            }
        }
        return symaaArr(arrGreen)
    }
    greenCards(Stage.greenCards)
    console.log(arrGreen);

    function symaaArr(arr) {
        for (let i = 0; i < arr.length; i++) {
            GlobalArrey.push(arr[i])
        }
    }
    console.log(GlobalArrey);
    return zabros(GlobalArrey)


}

function zabros(GlobalArrey) {

    while (0 < GlobalArrey.length) {
        let random = Math.floor(Math.random() * GlobalArrey.length)
        if (GlobalArrey[random]) {
            mixArrey.add(GlobalArrey[random])
            GlobalArrey.splice(random, 1)
        }

    }
    if (GlobalArrey.length == 0) {
        mixArrey.add(' ')
    }
    return asss
}
console.log(mixArrey);