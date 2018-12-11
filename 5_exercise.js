let flavour = "chocolate";
let vessel = "cone";
let toppings = "sprinkles";

if(flavour === "vanilla" || flavour === "chocolate"){
  if(vessel === "cone" || vessel === "bowl"){
    if(toppings === "sprinkles" || toppings === "peanuts"){
      console.log(`Id like two scoops of ${flavour} ice cream in a ${vessel} with ${toppings}`)
    }
  }
}
