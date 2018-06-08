function formatNumber(value, decimals) {
  if (value === null || typeof value === 'undefined') {
    return ''
  }
  return value.toLocaleString(undefined, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })
}

export default formatNumber
