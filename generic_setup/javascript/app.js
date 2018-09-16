console.log("Javascript is working!");

//1.
for (let i = 1; i <21; i++){
  console.log(i);
}
//2.
for (let i = 2; i < 200; i++){
  if(i % 2 == 0){
    console.log(i);
  }
}
//3.
for (let i = 0; i <20; i++){
  console.log("Love me, pet me! HSSSSSS!");
  if (i % 2 == 0){
    let which_message = Math.random();
    if (which_message >= 0 && which_message <= .33){
      console.log("Human... why are you taking pictures of me?");
    }
    if (which_message > .33 && which_message < .66){
      console.log("The catnip made me do it");
    }
    else{
      console.log("Why does the red dot always get away?");
    }
  }
}
//4.
for (let i = 1; i< 101 ;i++){
  if (i % 3 == 0 && i% 5 == 0){
    console.log ("FizzBuzz");
  }
  else if (i % 3){
    console.log("Fizz");
  }
  else if (i % 5){
    console.log("Buzz");
  }
  if (!(i % 5 == 0) && !(i % 3 == 0)){ //for some reason I couldn't determine trying
  //to use else or else if for this made it so nothing inside executed
    console.log(i);
  }

}
