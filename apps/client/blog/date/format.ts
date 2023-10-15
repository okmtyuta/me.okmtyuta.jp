export const formatDate = (date: Date) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]

  const d = date.getDate()
  const m = months[date.getMonth()]
  const y = date.getFullYear()

  if (d === 1) {
    return `${d}st ${m} ${y}`
  } else if (d === 2) {
    return `${d}nd ${m} ${y}`
  } else if (d === 3) {
    return `${d}rd ${m} ${y}`
  }
  return `${d}th ${m} ${y}`
}
