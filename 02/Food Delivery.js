function foodDelivery (input){
    let chiken=Number(input[0]);
    let fish=Number(input[1]);
    let vegan=Number(input[2]);

    let chikenPrice=chiken*10.35;
    let fishPrice=fish*12.40;
    let veganPrice=vegan*8.15;
    let totall= chikenPrice+fishPrice+veganPrice;
    let desert= totall*0.20;
    let totallDesert=totall+desert+2.50;
    console.log(totallDesert);
}
foodDelivery(["2","4","3"])