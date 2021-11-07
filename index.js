/**
 * Transform the case in `value` (`string`) to match that of `base` (`string`).
 *
 * @param {string} value
 * @param {string} base
 * @returns {string}
 */
export function matchCasing(value, base) {
  let index = -1
  let cap = false

  if (base.toUpperCase() === base) {
    return value.toUpperCase()
  }

  if (base.toLowerCase() === base) {
    return value.toLowerCase()
  }

  while (++index < base.length) {
    const char = base.charAt(index)

    if (char.toUpperCase() !== char.toLowerCase()) {
      const rest = base.slice(index + 1)
      cap = char === char.toUpperCase() && rest === rest.toLowerCase()
      break
    }
  }

  if (cap) {
    index = -1

    while (++index < value.length) {
      const char = value.charAt(index).toUpperCase()

      if (char !== char.toLowerCase()) {
        return (
          value.slice(0, index) + char + value.slice(index + 1).toLowerCase()
        )
      }
    }
  }

  return value
}
