export function isDateValid(d: Date): boolean {
	// > d2
	// Invalid Date
	// > Number.isNaN(d)
	// false
	// > d2.getTime()
	// NaN
	// >
	return Number.isNaN(d.getTime());
}
