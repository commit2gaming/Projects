// Format passed number using two decimals
formatTwoDecimals = (number) => {
	return Math.round(number * 100).toFixed(2)/100;
}

formatDate = (date) => {
	const d = `
	${date.getMonth()+ 1}-
	${date.getDate()}-
	${date.getFullYear()}`;
	return d;
}