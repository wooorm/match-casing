'use strict'

module.exports = casing

function casing(value, base) {
  var length
  var index
  var char
  var rest
  var cap

  if (base.toUpperCase() === base) {
    return value.toUpperCase()
  }

  if (base.toLowerCase() === base) {
    return value.toLowerCase()
  }

  length = base.length
  index = -1

  while (++index < length) {
    char = base.charAt(index)

    if (char.toUpperCase() !== char.toLowerCase()) {
      rest = base.slice(index + 1)

      cap = char === char.toUpperCase() && rest === rest.toLowerCase()
      break
    }
  }

  if (cap) {
    length = value.length
    index = -1

    while (++index < length) {
      char = value.charAt(index).toUpperCase()

      if (char !== char.toLowerCase()) {
        return (
          value.slice(0, index) + char + value.slice(index + 1).toLowerCase()
        )
      }
    }
  }

  return value
}
