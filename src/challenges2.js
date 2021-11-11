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
function generatePhoneNumber() {
  // seu código aqui
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
