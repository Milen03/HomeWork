function cleaverLily(input){
let age=Number(input[0]);
let priceOfWhingmashine=Number(input[1]);
let toyPrice=Number(input[2]);
 
let money=0;
let toys=0;
let curretMoney=10

 for(let i =1;i<=age;i++){
if(i%2==0){
    money+=curretMoney;
    curretMoney+=10;
    money--;
}else{
    toys++;
}

 }
 money+=toys*toyPrice;
 let diff=Math.abs(money-priceOfWhingmashine);
 if(money>=priceOfWhingmashine){
    console.log(`Yes! ${diff.toFixed(2)}`);
 }else{
    console.log(`No! ${diff.toFixed(2)}`);
 }

}
cleaverLily(["10",

"170.00",

"6"])