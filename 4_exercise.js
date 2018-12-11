let room = "billiards room";
let weapon = "";
let suspect = "Mr.Sparr";
let solved = false;

if(room === "ballroom" && suspect === "Mr. Parkes"){
   weapon = "poison";
   solved = true;
   // suspect = "Mr.Parkes";
} else if(room === "gallery" && suspect === "Mr.Van cleaves"){
   weapon = "trophy";
   solved = true;
   // suspect = "Mr.Van cleaves";
} else if(room === "billiards room" && suspect === "Mr.Sparr"){
   weapon = "pool stick";
   solved = true;
   // suspect = "Mr.Sparr";
} else if(room === "dining room" && suspect === "Mr.Kalehoff"){
   weapon = "knife";
   solved = true;
   // suspect = "Mr.Kalehoff";
}
if (solved){
  console.log(`${suspect} did it in the ${room} with the ${weapon}`);
} else {
  console.log("the murder remains unsolved");
}
