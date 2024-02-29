// selecting elements

// // buttons
const rollDiceBtn = document.getElementById('roll-Dice')
const restartGame = document.getElementById('restart-Game')
const holdCurrentP = document.getElementById('hold-Current-P')

// // elements
const diceImg = document.getElementsByClassName('dice-Img')[0]

// scores elements
const playerOneCurrentScore = document.getElementsByClassName(
  'player-1-current-score'
)[0]
const playerTwOCurrentScore = document.getElementsByClassName(
  'player-2-current-score'
)[0]

// scores elements all time
const playerOneScoresAllTime = document.getElementsByClassName(
  'player-One-Scores-All-Time'
)[0]
const playerTwoScoresAllTime = document.getElementsByClassName(
  'player-Two-Scores-All-Time'
)[0]

// global variables
let userOneScore = 0
let userTwoScore = 0
let currentScore = 0
let userOnePlaying = true

// rollDice function
const rollDice = () => {
  const dice = Math.floor(Math.random() * 6) + 1

  if (dice === 1) {
    currentScore = 0
    playerOneCurrentScore.textContent = currentScore
    playerTwOCurrentScore.textContent = currentScore
    if (userOnePlaying) {
      userOnePlaying = false
    } else {
      userOnePlaying = true
    }
    console.log('current playing user ', userOnePlaying)
  }

  diceImg.src = `./assets/dice-${dice}.png`

  if (userOnePlaying === true) {
    currentScore += dice
    playerOneCurrentScore.textContent = currentScore
    console.log('this is current score', currentScore)
    console.log('user one playing', userOnePlaying)
    console.log('user one scores', userOneScore)
  }
  if (!userOnePlaying) {
    currentScore += dice
    playerTwOCurrentScore.textContent = currentScore
    console.log('this is current score', currentScore)
    console.log('user Two playing', userOnePlaying)
    console.log('user Two scores', userTwoScore)
  }
}

// hold current users scores
const holdUserScores = () => {
  if (userOnePlaying) {
    userOneScore += currentScore
    playerOneScoresAllTime.textContent = userOneScore
    userOnePlaying = false
    playerOneCurrentScore.textContent = 0
  } else {
    userTwoScore += currentScore
    playerTwoScoresAllTime.textContent = userTwoScore
    userOnePlaying = true
    playerTwOCurrentScore.textContent = 0
  }
  currentScore = 0
}

const restGame = () => {
  userOneScore = 0
  userTwoScore = 0
  currentScore = 0
  playerOneCurrentScore.textContent = 0
  playerTwOCurrentScore.textContent = 0
  playerOneScoresAllTime.textContent = 0
  playerTwoScoresAllTime.textContent = 0
  userOnePlaying = true
}

holdCurrentP.addEventListener('click', () => {
  holdUserScores()
})
rollDiceBtn.addEventListener('click', () => {
  rollDice()
})

restartGame.addEventListener('click', () => {
  restGame()
})
