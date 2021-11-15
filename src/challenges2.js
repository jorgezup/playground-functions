// Desafio 10
function techList(arrayTechs, name) {
  const arrayObj = []
  if (!arrayTechs.length) {
    return "Vazio!"
  }
  for (let tech in arrayTechs) {
    arrayObj.push({
      "tech": arrayTechs.sort()[tech],
      "name": name
    })
  }
  return arrayObj
}

// Desafio 11
function generatePhoneNumber(numbers) {
  function checkArray(numbers) {
    let count = {}

    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] < 0 || numbers[i] > 9) {
        return false
      }
      else {
        if (count[numbers[i]]) {
          count[numbers[i]] += 1
          if (count[numbers[i]] > 2) {
            return false
          }
        }
        else {
          count[numbers[i]] = 1
        }
      }
    }
    return true
  }

  function generate(numbers) {
    let newNumber = ''
    for (let i = 0; i < numbers.length; i++) {
      if (i === 0) {
        newNumber += '('
        newNumber += numbers[i]
      }
      else if (i === 2) {
        newNumber += ')'
        newNumber += ' '
        newNumber += numbers[i]
      }
      else if (i === 7) {
        newNumber += '-'
        newNumber += numbers[i]
      } else {
        newNumber += numbers[i]
      }
    }
    return newNumber
  }

  if (numbers.length !== 11) {
    return 'Array com tamanho incorreto.'
  }

  if (checkArray(numbers)) {
    return generate(numbers)
  }
  else {
    return 'não é possível gerar um número de telefone com esses valores'
  }



}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
