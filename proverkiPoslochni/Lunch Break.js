function lunchBreak(input){
    let films=input[0];
    let epizot=Number(input[1]);
    let breaks=Number(input[2]);

    let timeToLunch=breaks/8;
    let otih=breaks/4;
    let totatlTime=breaks-timeToLunch-otih;
    let diff=Math.abs(totatlTime-epizot)
    if(totatlTime>=epizot){
        console.log(`You have enough time to watch ${films} and left with ${Math.ceil(diff)} minutes free time.`);
    } else if (totatlTime<epizot) {
        console.log(`You don't have enough time to watch ${films}, you need ${Math.ceil(diff)} more minutes.`);
    }
   
}
lunchBreak(["Teen Wolf",

"48",

"60"])