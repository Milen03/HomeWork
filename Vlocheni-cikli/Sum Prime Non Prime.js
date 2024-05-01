function sumPrimeNonPrime(input){
let index=0;
let comanda=input[index]
index++
let prime=0;
let nonPrime=0;

while(comanda!=="stop"){
    let num=Number(comanda)
    
if(num<0){
    console.log(`Number is negative.`);
    comanda=input[index]
    index++
    continue;
}
if(num===1){
    prime+=num
    comanda=input[index]
    index++
    continue;
}
let isPrime=true
for(let i=2;i<num;i++){
    if(num%i===0){
isPrime=false
break;
    }
}

if(isPrime){
    prime+=num
}else{
    nonPrime+=num
}

    comanda=input[index]
    index++
}

console.log(`Sum of all prime numbers is: ${prime}`);
console.log(`Sum of all non prime numbers is: ${nonPrime}`);
}
sumPrimeNonPrime(["3",

"9",

"0",

"7",

"19",

"4",

"stop"])