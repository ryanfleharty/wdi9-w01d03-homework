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
			if((3*Math.random()<=1)){
				console.log("...why does the red dot get away...");
			}
		
			if((3*Math.random()<=2)&&((3*Math.random())>1){
				console.log("....The catnip made me do it...");
			}

			if((3*Math.random()<=3)&&((3*Math.random())>2){
				console.log("...human...why you taking pictures of me");
			}
		}
	}
