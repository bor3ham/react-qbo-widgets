function parseCurrency(value, sign) {
  if (value === null || typeof value === 'undefined') {
    return null
  }
  if (typeof value === 'number') {
    value = value.toString()
  }
  let trimmed = value.toLowerCase().trim()
  if (trimmed === '') {
    return null
  }
  trimmed = trimmed.replace(sign, '')
  trimmed = trimmed.replace(/,/g, '')
  return parseFloat(trimmed)
}

export default parseCurrency
