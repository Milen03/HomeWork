function walking (input){
let krChel=10000;
let index=0;
let command=input[index];
index++;
let stepCouter=0;

while(command!=="Going home"){
let naDen=Number(command);
stepCouter+=naDen
if(krChel<=stepCouter){

break;
}

command=input[index]
index++

}
if(command==="Going home"){
    let step=Number(input[index])
    index++
    stepCouter+=step
}
let diff=Math.abs(stepCouter-krChel)
if(krChel<=stepCouter){
    console.log("Goal reached! Good job!");
    console.log(`${diff} steps over the goal!`);

    }else{
        console.log(`${diff} more steps to reach goal.`);
    }

}
walking(["1000",

"1500",

"2000",

"6500"])