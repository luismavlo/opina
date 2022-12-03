export const capitalize = (phrase = '') => {
  if (typeof phrase != 'string') {
    throw TypeError('El argumento debe ser una cadena de texto')
  }

  let words = phrase.split(' ');

  return words.map(word => word[0].toUpperCase() + word.slice(1)).join(' ')
}
