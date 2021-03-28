/**
 * Transform the case in `value` (`string`) to match that of `base` (`string`).
 *
 * @param {string} value
 * @param {string} base
 * @returns {string}
 */
export function matchCasing(value, base) {
  var index = -1
  /** @type {string} */
  var char
  /** @type {string} */
  var rest
  /** @type {boolean} */
  var cap

  if (base.toUpperCase() === base) {
    return value.toUpperCase()
  }

  if (base.toLowerCase() === base) {
    return value.toLowerCase()
  }

  while (++index < base.length) {
    char = base.charAt(index)

    if (char.toUpperCase() !== char.toLowerCase()) {
      rest = base.slice(index + 1)
      cap = char === char.toUpperCase() && rest === rest.toLowerCase()
      break
    }
  }

  if (cap) {
    index = -1

    while (++index < value.length) {
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
