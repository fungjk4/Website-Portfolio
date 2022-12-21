document.addEventListener('DOMContentLoaded', () => {

    //card options
    const cardArray= [
        {
            name:'cow',
            img: '/MemoryGame/Images/doneCow.png'
        },
        {
            name:'cow',
            img: '/MemoryGame/Images/doneCow.png'
        },
        {
            name:'fox',
            img: '/MemoryGame/Images/DoneFox.png'
        },
        {
            name:'fox',
            img: '/MemoryGame/Images/DoneFox.png'
        },
        {
            name:'panda',
            img: '/MemoryGame/Images/donePanda.png'
        },
        {
            name:'panda',
            img: '/MemoryGame/Images/donePanda.png'
        },
        {
            name:'turtle',
            img: '/MemoryGame/Images/doneTurtle.png'
        },
        {
            name:'turtle',
            img: '/MemoryGame/Images/doneTurtle.png'
        },
        {
            name:'cat',
            img: '/MemoryGame/Images/FatCat(1).png'
        },
        {
            name:'cat',
            img: '/MemoryGame/Images/FatCat(1).png'
        }
]
})
cardArray.sort(() => 0.5 - Math.random())

const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
var cardsChosen = []
var cardsChosenId = []
var cardsWon = []

//create board
function createBoard() {
    for(let i = 0; i < cardArray.length; i++){
        var card = document.createElement('img')
        card.setAttribute('src','/MemoryGame/Images/matchComplete!.png')
        card.setAttribute('data-id', i)
        //card.addEventListener('click', flipcard)
        grid.appendChild(card)
    }
}

createBoard()

//check for matches
function checkForMatch() {
    var cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if(cardsChosen[0] === cardsChosen[1]){
        alert('You found a match')
        cards[optionOneId].setAttribute('src', '/MemoryGame/Images.matchomplete!.png')
        cards[optionTwoId].setAttribute('src', '/MemoryGame/Images.matchomplete!.png')
        cardsWon.push(cardsChosen)
    }
    else{
        //Change these two
        cards[optionOneId].setAttribute('src', '/MemoryGame/Images.matchomplete!.png')
        cards[optionTwoId].setAttribute('src', '/MemoryGame/Images.matchomplete!.png')
        alert('Sorry, try again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if(cardsWon.length === cardArray/2){
    resultDisplay.textContent = 'Congratulations! You Found it All'
    }
}

//Flip Card