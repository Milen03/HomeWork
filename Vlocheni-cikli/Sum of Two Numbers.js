function sumOfTwoNumbers(input){
let firsNumber=Number(input[0]);
let endNumber=Number(input[1]);
let magicNum=Number(input[2]);
let combinacion=0;
let isFound=false;

for(let i=firsNumber;i<=endNumber;i++){
    for(let j=firsNumber;j<=endNumber;j++){
combinacion++;
if(i+j===magicNum){
    console.log(`Combination N:${combinacion} (${i} + ${j} = ${magicNum})`);
    isFound=true
    break;
}
    }
    if(isFound){
        break;
   
}
}
if(isFound===false){
    console.log(`${combinacion} combinations - neither equals ${magicNum}`);
}
}
sumOfTwoNumbers(["88", "888", "2000"])