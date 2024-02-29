// selecting elements

// // buttons
const rollDiceBtn = document.getElementById('roll-Dice')
const restartGame = document.getElementById('restart-Game')
const holdCurrentP = document.getElementById('hold-Current-P')

// // elements
const diceImg = document.getElementsByClassName('dice-Img')[0]

// global variables
let userOneScore = 0
let userTwoScore = 0
let currentScore = 0
let userOnePlaying = true

const rollDice = () => {
  const dice = Math.floor(Math.random() * 6) + 1

  console.log('dice', dice)
  if (dice === 1) {
    currentScore = 0

    if (userOnePlaying) {
      userOnePlaying = false
    } else {
      userOnePlaying = true
    }
    console.log('current playing user ', userOnePlaying)
  }

  diceImg.src = `./assets/dice-${dice}.png`

  if (userOnePlaying === true) {
    console.log(dice)
    currentScore += dice
    console.log('this is current score', currentScore)
    console.log('user one playing', userOnePlaying)
  }
  if (!userOnePlaying) {
    console.log(dice)
    currentScore += dice
    console.log('this is current score', currentScore)
    console.log('user Two playing', userOnePlaying)
  }
}

rollDiceBtn.addEventListener('click', () => {
  rollDice()
})
