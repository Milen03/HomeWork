function fruitShop(input){
let fruit = input[0]
let days=input[1]
let qrx=Number(input[2])

let price=0;
switch(days){
    case "Monday":
if(fruit==="banana"){
    price=qrx*2.50
}
else if(fruit==="apple"){
price=qrx*1.20
}
else if(fruit==="orange"){
    price=qrx*0.85
}else if(fruit==="grapefruit"){
price=qrx*1.45}
else if(fruit==="kiwi"){
price=qrx*2.70}
else if(fruit==="pineapple"){
price=qrx*5.50}
else if(fruit==="grapes"){
price=qrx*3.85}else { //here
    console.log("error");
    return;
}
    break;

    case "Tuesday":
        if(fruit==="banana"){
            price=qrx*2.50
        }
        else if(fruit==="apple"){
        price=qrx*1.20
        }
        else if(fruit==="orange"){
            price=qrx*0.85
        }else if(fruit==="grapefruit"){
        price=qrx*1.45}
        else if(fruit==="kiwi"){
        price=qrx*2.70}
        else if(fruit==="pineapple"){
        price=qrx*5.50}
        else if(fruit==="grapes"){
        price=qrx*3.85}else { //here
            console.log("error");
            return;
        }
    break;

    case "Wednesday":
        if(fruit==="banana"){
            price=qrx*2.50
        }
        else if(fruit==="apple"){
        price=qrx*1.20
        }
        else if(fruit==="orange"){
            price=qrx*0.85
        }else if(fruit==="grapefruit"){
        price=qrx*1.45}
        else if(fruit==="kiwi"){
        price=qrx*2.70}
        else if(fruit==="pineapple"){
        price=qrx*5.50}
        else if(fruit==="grapes"){
        price=qrx*3.85}else { //here
            console.log("error");
            return;
        }
    break;

    case "Thursday":
        if(fruit==="banana"){
            price=qrx*2.50
        }
        else if(fruit==="apple"){
        price=qrx*1.20
        }
        else if(fruit==="orange"){
            price=qrx*0.85
        }else if(fruit==="grapefruit"){
        price=qrx*1.45}
        else if(fruit==="kiwi"){
        price=qrx*2.70}
        else if(fruit==="pineapple"){
        price=qrx*5.50}
        else if(fruit==="grapes"){
        price=qrx*3.85}else { //here
            console.log("error");
            return;
        }
    break;

    case "Friday":
        if(fruit==="banana"){
            price=qrx*2.50
        }
        else if(fruit==="apple"){
        price=qrx*1.20
        }
        else if(fruit==="orange"){
            price=qrx*0.85
        }else if(fruit==="grapefruit"){
        price=qrx*1.45}
        else if(fruit==="kiwi"){
        price=qrx*2.70}
        else if(fruit==="pineapple"){
        price=qrx*5.50}
        else if(fruit==="grapes"){
        price=qrx*3.85}else { //here
            console.log("error");
            return;
        }
    break;

    case "Saturday":
        if(fruit==="banana"){
            price=qrx*2.70
        }
        else if(fruit==="apple"){
        price=qrx*1.25
        }
        else if(fruit==="orange"){
            price=qrx*0.90
        }else if(fruit==="grapefruit"){
        price=qrx*1.60}
        else if(fruit==="kiwi"){
        price=qrx*3.00}
        else if(fruit==="pineapple"){
        price=qrx*5.60}
        else if(fruit==="grapes"){
        price=qrx*4.20}else { //here
            console.log("error");
            return;
        }
    break;

    case "Sunday":
        if(fruit==="banana"){
            price=qrx*2.70
        }
        else if(fruit==="apple"){
        price=qrx*1.25
        }
        else if(fruit==="orange"){
            price=qrx*0.90
        }else if(fruit==="grapefruit"){
        price=qrx*1.60}
        else if(fruit==="kiwi"){
        price=qrx*3.00}
        else if(fruit==="pineapple"){
        price=qrx*5.60}
        else if(fruit==="grapes"){
        price=qrx*4.20}else { //here
            console.log("error");
            return;
        }
    break;



    default:
        console.log("error");
        break;

}


    console.log(price.toFixed(2));
}


fruitShop(["tomato", "Monday", "0.5"])