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
function highestCount(arrayNumbers) {
  //https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/max
  const highestNumber = Math.max(...arrayNumbers)
  let count = 0
  for (const n of arrayNumbers) {
    if (n === highestNumber) {
      count++
    }
  }
  return count
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  const distCat1 = Math.abs(mouse - cat1)
  const distCat2 = Math.abs(mouse - cat2)
  if (distCat1 === distCat2) {
    return "os gatos trombam e o rato foge"
  }
  else if (distCat1 > distCat2) {
    return "cat2"
  }
  else {
    return "cat1"
  }
}

// Desafio 8
function fizzBuzz(arrayNumbers) {
  const newArray = []
  for (n of arrayNumbers) {
    if (n % 3 === 0 && n % 5 !== 0) {
      newArray.push('fizz')
    }
    else if (n % 5 === 0 && n % 3 !== 0) {
      newArray.push('buzz')
    }
    else if (n % 3 === 0 && n % 5 === 0) {
      newArray.push('fizzBuzz')
    }
    else {
      newArray.push('bug!')
    }
  }
  return newArray
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
