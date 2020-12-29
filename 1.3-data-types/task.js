function calculateTotalMortgage(percent, contribution, amount, date) {

	if ( isNaN(+percent) ) {
		alert('Параметр: "процентная ставка" содержит неправильное значение: ' + percent)
	}  else {
		percent = +percent;
	}

	if ( isNaN(+contribution) ) {
		alert('Параметр: "первоначальный взнос" содержит неправильное значение: ' + contribution)
	}  else {
		contribution = +contribution;
	}

	if ( isNaN(+amount) ) {
		alert('Параметр: "сумма кредита" содержит неправильное значение: ' + amount)
	}  else {
		amount = +amount;
	}
  let n = (11-new Date().getMonth()) + ((date.getFullYear() - new Date().getFullYear()) - 1)*12 + (date.getMonth() + 1); // количество месяцев
	let s = amount - contribution; // тело кредита
	let p = percent/120000; // 1/12 процентной ставки
	let paymentPerMonth = s*(p+p/((Math.pow((1+p),n))-1));
	let payment = (paymentPerMonth*n).toFixed(2);
	payment = +payment;
  return payment;
}

function getGreeting(name) {
	if (name === "" || name === undefined) {
		name = "Аноним";
		console.log("Аноним");
	} else {
		console.log(name);
	}
  return "Привет, мир! Меня зовут " + name + ".";
}
