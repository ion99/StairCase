function StairCase(n){
	let y = [];
	let x = [];
	for(let i = 0; i<n; i++){
		while(x.length < n){
			x.push(" ");
		}
		x.shift();
		x.push("#");
		console.log(x.join(''));
	}
}

//StairCase(6)
