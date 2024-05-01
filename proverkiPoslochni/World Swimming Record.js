function worldSwimmingRecord (input){
let recordS=Number(input[0]);
let metri = Number(input[1]);
let secont = Number(input[2]);

let swiming = metri*secont;
let metraPlus=Math.floor(metri/15);
let timeSlow= metraPlus*12.5;
let totalTime=swiming+timeSlow
if(recordS>totalTime){
    console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
}else
{
let diff=Math.abs(recordS-totalTime)
console.log(`No, he failed! He was ${diff.toFixed(2)} seconds slower.`);
}
}
worldSwimmingRecord(["55555.67",

"3017","5.03"])