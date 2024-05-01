function smallShop(input){
let item = input[0]
let city = input[1]
let qrx = Number(input[2])

let price=0;

switch(city){
    case "Sofia":
if(item==="coffee"){
    price=qrx*0.5;
}else if(item==="water"){
price=qrx*0.8
}else if (item==="beer"){
    price=qrx*1.2
}else if(item==="sweets"){
    price=qrx*1.45
}else if(item==="peanuts"){
    price=qrx*1.60
}
    break;

    case "Plovdiv":
        if(item==="coffee"){
            price=qrx*0.4;
        }else if(item==="water"){
        price=qrx*0.7
        }else if (item==="beer"){
            price=qrx*1.15
        }else if(item==="sweets"){
            price=qrx*1.30
        }else if(item==="peanuts"){
            price=qrx*1.50
        }
    break;

    case "Varna":
        if(item==="coffee"){
            price=qrx*0.45;
        }else if(item==="water"){
        price=qrx*0.7
        }else if (item==="beer"){
            price=qrx*1.10
        }else if(item==="sweets"){
            price=qrx*1.35
        }else if(item==="peanuts"){
            price=qrx*1.55
        }
    break;
    
}
console.log(price);
}
smallShop(["coffee","Varna","2"])