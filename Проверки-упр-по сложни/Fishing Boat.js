function fishingBoat(input){
   let beget=Number(input[0]);
   let sesoen=input[1]; //"Spring", "Summer", "Autumn", "Winter"
   let brFinig=input[2];
   let moneyOfBoat=0;
    let price=0;

switch(sesoen){
    case "Spring":
moneyOfBoat=3000;
    break;
    case "Summer":
    case "Autumn":
        moneyOfBoat=4200;
    break; 
    case "Winter":
        moneyOfBoat=2600;
    break;
}
if(brFinig<=6){
  price=moneyOfBoat*0.90;
}else if(brFinig>=7 && brFinig<=11){
    price=moneyOfBoat*0.85;
}else if(brFinig>12){
    price=moneyOfBoat*0.75;
}

if(brFinig % 2===0 && sesoen !=="Autumn"){
    price=price*0.95;
}
let diff=Math.abs(beget-price)
if(beget>=price){
    console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
}else{
    console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
}
}
fishingBoat(["3000",

"Summer",

"11"])