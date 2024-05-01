function toyShop(input){
    let safari=Number(input[0]);
    let puzzelsCound=Number(input[1])
    let dolsCound=Number(input[2])
    let bearCound=Number(input[3])
    let minions =Number(input[4])
    let buss=Number(input[5])
    let totalCound=puzzelsCound+dolsCound+bearCound+minions+buss
    let totalPrice=puzzelsCound*2.60+dolsCound*3.00+bearCound*4.10+minions*8.20+buss*2.00;
    if(totalCound>=50){
        totalPrice=totalPrice*0.75
    }
    totalPrice=totalPrice*0.90
    let diff=Math.abs(totalPrice-safari)
    if(totalPrice>=safari){
        console.log(`Yes! ${diff.toFixed(2)} lv left.`);
    }else{console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`);}
}
toyShop(["320",
"8",
"2",
"5",
"5",
"1"])

