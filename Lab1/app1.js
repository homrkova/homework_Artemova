let a;
let b;
let c;
let temp = true;

while(temp){
	a = Number(prompt("Enter numbera a"));
	b = Number(prompt("Enter numbera b"));
	c = Number(prompt("Enter numbera c"));
	if(a == a && b == b && c == c) {
		temp = false;
	}
	else {
		alert('Введите еще раз');
	}
}
if(a != 0 && b != 0 && c != 0 || a != 0 && b != 0 && c == 0 || a != 0 && b == 0 && c != 0){
	let D = b * b - 4 * a * c;
	if(D > 0){
		let sqrD = Math.sqrt(D);
		let x1 = ((-b) - sqrD) / 2 * a;
		let x2 = ((-b) + sqrD) / 2 * a;
		alert(Math.floor(x1 * 100) / 100 + " " + Math.floor(x2 * 100) / 100);
	}
	else if (D == 0){
		let sqrD = Math.sqrt(D);
		let x1 = (-b) / 2 * a;
		alert(Math.floor(x1 * 100) / 100);
	}
	else {
		let sqrD = Math.sqrt(D * (-1));
		let x1 = Math.floor(((-b)/2 *a) * 100) / 100 + "-" + Math.floor((sqrD / 2 * a) * 100) / 100 + "i";
		let x2 = Math.floor(((-b)/2 *a) * 100) / 100 + "+" +  Math.floor((sqrD / 2 * a) * 100) / 100 + "i";
		alert(x1 + " " + x2);
	}
}
else if (a == 0 && b == 0 && c != 0 || a == 0 && b != 0 && c != 0 || a == 0 && b != 0 && c == 0){
	alert('Не верное равенство');
}
else {
	alert('Точно уравнение?');
}

	