function equalSumsEvenOddPosition(input){
let firstNum=Number(input[0])
let secondNum=Number(input[1])
let prindLine=''
for(let i=firstNum;i<=secondNum;i++){
    let curredNum=""+i;
    let oddSum=0;
    let evenSum=0;
    for(let j =0;j<curredNum.length;j++  )
    curedDigital=Number(curredNum.charAt(j));
if(j%2===0){
evenSum+=curedDigital
}else{
    oddSum+=curedDigital
}
if(evenSum===oddSum){
    prindLine+=`${i}`
}

}
console.log(prindLine);
}
equalSumsEvenOddPosition(["123456",
"124000"])