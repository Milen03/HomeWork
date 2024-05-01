function vacanacion(input){
let index=0;
let moneyForVacation=Number(input[index]);
index++;
let yourMoney=Number(input[index]);
index++;
let spendCouter=0;
let day=0;
let moneySave=true;

while(yourMoney<moneyForVacation){
    let action=input[index];
    index++;
    let money = Number(input[index])
    index++
    day++;
    switch(action){
        case "spend":
            spendCouter++;
            yourMoney-=money;
            if(yourMoney<0){
                yourMoney=0;
            }
        break;
        case "save":yourMoney+=money; 
        spendCouter=0;
        break;

    }
    if(spendCouter===5){
        console.log("You can't save the money.");
        console.log(`${day}`);
        moneySave=false
        break;
     }
}
if(moneySave){
    console.log(`You saved the money for ${day} days.`);
}

}
vacanacion(["2000",

"1000",

"spend",

"1200",

"save",

"2000"])