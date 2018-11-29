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

//5.
const shahzad = ["Shahzad", 1000, "Austin"];
const jim = ["Jim", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const daniel = ["Daniel", 186, "Dallas"];
const ryan = ["Ryan", 65, "Denver"];

shahzad[0] = "Gameboy";
daniel[1] = daniel[1]++;
ryan[2] = "Gotham City";
reuben.splice(2,1);
reuben.push("Chicago");
jim.splice(2,1,"Lisbon","Porto","Amadora");
jim.splice(2,1);

//6.
const turtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];
for(i=0;i<turtles.length;i++){
  console.log(turtles[i].toUpperCase());
}
for(let i=0;i<turtles.length;i++){
  let turtle = "";
  for(let j=0;j<turtles[i].length;j++){
    if(j%2 == 0){
      turtle = turtle.concat(turtles[i].substr(j,1).toUpperCase())
    }
    else{
      turtle = turtle.concat(turtles[i].substr(j,1).toLowerCase())
    }
  }
  console.log(turtle);
}
