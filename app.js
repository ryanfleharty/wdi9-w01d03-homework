//Q1. for loop 1 through 20

	for (let i=1;i<=20;i++){
		console.log(i);
	}

//Q2. log only even 0 through 200

	for (let i =0;i<=200;i++){
		if(i%2==0){
			console.log(`${i} is even`);
		}
	}

//Q3. Love me * 20

	for (let i = 0; i <20;i++){
		console.log("Love me, pet me! HSSSSSSS!");
		if(i%2===0){
			let ran = Math.random();
			if((3*ran<=1)){
				console.log("...why does the red dot get away...");
			}
		
			if((3*ran<=2)&&((3*ran)>1)){
				console.log("....The catnip made me do it...");
			}

			if((3*ran<=3)&&((3*ran)>2)){
				console.log("...human...why you taking pictures of me");
			}
		}
	}

//Q4. Fizz Buzz

	for (let i =1;i<=100;i++){
		if (i%3 ===0){
			console.log('fizz');
			if(i%5 === 0){
			console.log('buzz');
			}
		}
		else if ( i%5 ===0){
			console.log('buzz');
		}
		else{
			console.log(i);
		}
	}

//Q5. Getting to know you 

	const shahzad = ["Shahzad", 1000, "Austin"];
	const jim = ["Jim", 16, "All cities"];
	const reuben = ["Reuben", 22, "Durham"];
	const daniel = ["Daniel", 186, "Dallas"];
	const ryan = ["Ryan", 65, "Denver"];

	shahzad.splice(0,1, "Gameboy");
	jim[1] += 1;
	ryan[2] = "Gotham City";
	reuben.pop();
	reuben.push("Chicago");
	jim.pop();
	jim.push("Cleveland", "Detroit", "Columbus");
	jim.splice(2,1);

//Q6. Yell at Toitles

	const turts = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];

	for (let i =0; i<turts.length ; i++){
		let upper = turts[i].toUpperCase();
		console.log(upper);
	}
	
	for (let i = 0; i<turts.length; i++){
		let toggle = turts[i].toLowerCase().split("");
		for (let j = 0; j<toggle.length;j++){
			if (j%2 == 1){
				toggle[j] = toggle[j].toUpperCase();
			}
		}
		console.log(toggle.join(""));
	}
