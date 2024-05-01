function godzillaVsKong (input){
    let filmPrice=Number(input[0]);
    let staticBr=Number(input[1]);
    let priceOneStatic=Number(input[2]);

    let priceForOuthit=staticBr*priceOneStatic

    let decor=filmPrice*0.10;
    if(staticBr>150){
        priceForOuthit=priceForOuthit*0.90;
    }

    let totalForFilm=decor+priceForOuthit;
    let diff= Math.abs(filmPrice-totalForFilm);

    if(totalForFilm<=filmPrice){
        console.log("Action!");
        console.log(`Wingard starts filming with ${diff.toFixed(2)} leva left.`);
    }else{
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${diff.toFixed(2)} leva more.`);
    }


}

godzillaVsKong(["9587.88",
"222",
"55.68"])




