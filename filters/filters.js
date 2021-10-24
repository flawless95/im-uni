export const formatterTenThousand = (val) => {
	const num = parseFloat(val)
	if (num >= 100000) {
		return parseInt(num/10000) + 'W'
	} else {
		return parseInt(num)
	}
}