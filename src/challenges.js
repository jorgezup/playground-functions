// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true
  }
  return false
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2
}

// Desafio 3
function splitSentence(sentence) {
  return sentence.split(" ")
}

// Desafio 4
function concatName(arrayString) {
  // const lastElement = arrayString.slice(-1)
  const lastElement = arrayString[arrayString.length - 1]
  const firstElement = arrayString[0]
  return `${lastElement}, ${firstElement}`
}

// Desafio 5
function footballPoints(wins, ties) {
  const winsPoints = wins * 3
  const tiesPoints = ties * 1
  const totalPoints = winsPoints + tiesPoints
  if (wins === 0 && ties === 0) {
    return 0
  }
  return totalPoints
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
