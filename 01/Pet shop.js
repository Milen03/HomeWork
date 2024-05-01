function petShop(input){
    let dog = Number(input[0]);
    let cats=Number(input[1]);
    let dogCash=dog*2.50;
    let catsCash=cats*4;
    let totall=catsCash+dogCash
    console.log(totall,'lv')
}
petShop(["5","4"])