// Desafio 10
function techList(arrayTechs, name) {
  const arrayObj = [];
  if (!arrayTechs.length) {
    return 'Vazio!';
  }
  for (let tech in arrayTechs) {
    if (tech) {
      arrayObj.push({
        tech: arrayTechs.sort()[tech],
        name,
      });
    }
  }
  return arrayObj;
}

// Desafio 11
function generatePhoneNumber(numbers) {
  function checkArray(numbers) {
    let count = {};

    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] < 0 || numbers[i] > 9) {
        return false;
      }

      if (count[numbers[i]]) {
        count[numbers[i]] += 1;
        if (count[numbers[i]] > 2) {
          return false;
        }
      } else {
        count[numbers[i]] = 1;
      }
    }
    return true;
  }

  function generate(numbers) {
    let newNumber = '';
    for (let i = 0; i < numbers.length; i++) {
      if (i === 0) {
        newNumber += '(';
        newNumber += numbers[i];
      } else if (i === 2) {
        newNumber += ')';
        newNumber += ' ';
        newNumber += numbers[i];
      } else if (i === 7) {
        newNumber += '-';
        newNumber += numbers[i];
      } else {
        newNumber += numbers[i];
      }
    }
    return newNumber;
  }

  if (numbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  if (checkArray(numbers)) {
    return generate(numbers);
  }

  return 'não é possível gerar um número de telefone com esses valores';
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < (lineB + lineC) && lineA < Math.abs(lineB - lineC)) {
    return false;
  }
  if (lineB < (lineA + lineB) && lineB < Math.abs(lineA - lineC)) {
    return false;
  }
  if (lineC < (lineA + lineB) && lineC < Math.abs(lineA - lineB)) {
    return false;
  }
  return true;
}

// Desafio 13
function hydrate(str) {
  let quantityOfWater = 0;
  for (let letter of str.split('')) {
    if (letter in [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) {
      quantityOfWater += Number(letter);
    }
  }
  if (quantityOfWater === 1) {
    return `${quantityOfWater} copo de água`;
  }
  return `${quantityOfWater} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
