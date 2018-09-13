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


