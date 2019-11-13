export function isDateValid(d: Date): boolean {
  // d = new Date('invalid')
  // > d
  // Invalid Date
  // > Number.isNaN(d)
  // false
  // > d.getTime()
  // NaN
  // >
  return Number.isNaN(d.getTime());
}
