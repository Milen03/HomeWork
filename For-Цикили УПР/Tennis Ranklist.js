function tennisRanklist(input){
    let index=0;
let brTornaments=Number(input[index]);
index++;
let startetPoints=Number(input[index]);

index++;

let coundsPoints=0;

let countWiner=0;

for(let i=0;i<brTornaments;i++){
    let winPoint=input[index];
    index++;
    switch(winPoint){
case "W":coundsPoints+=2000;
countWiner++
break;
case "F":coundsPoints+=1200;break;
case "SF":coundsPoints+=720;break;
    }
    

}
let finalPoits=startetPoints+coundsPoints;
let averege=Math.floor(coundsPoints/brTornaments);
    let procentr=countWiner/brTornaments*100;
    console.log(`Final points: ${finalPoits}`);
    console.log(`Average points: ${averege}`);
    console.log(`${procentr.toFixed(2)}%`);

}
tennisRanklist(["5",

"1400",

"F",

"SF",

"W",

"W",

"SF"])