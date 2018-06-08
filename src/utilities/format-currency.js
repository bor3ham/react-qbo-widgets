function formatCurrency(value, sign, decimals) {
  if (value === null || typeof value === 'undefined') {
    return ''
  }
  return `${sign}${value.toLocaleString(undefined, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })}`
}

export default formatCurrency
