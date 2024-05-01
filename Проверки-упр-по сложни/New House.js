function newHouse(input){
let floars=input[0];  //"Roses", "Dahlias", "Tulips", "Narcissus", "Gladiolus"
let brfloars=Number(input[1])
let beget=Number(input[2])

let price =0;

switch(floars){
    case "Roses":
    price=brfloars*5.00 
    if(brfloars>80){
        price=price*0.90
    } 
    break;  
    case "Dahlias" : 
    price=brfloars*3.80
    if(brfloars>90){
        price=price*0.85
    }
    break; 
    case   "Tulips":
    price=brfloars*2.80 
    if(brfloars>80){
        price=price*0.85
    }
    break;    
    case  "Narcissus":
    price=brfloars*3.00
    if(brfloars<120){
        price=price*1.15
    }

    break;     
    case    "Gladiolus": 
    price=brfloars*2.50
    if(brfloars<80){
        price=price*1.20
    }
    break; 
}
let diff=Math.abs(beget-price)
if (beget>=price){
    console.log(`Hey, you have a great garden with ${brfloars} ${floars} and ${diff.toFixed(2)} leva left.`);
}else{
    console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`);
}
}
newHouse(["Roses",

"55",

"250"])