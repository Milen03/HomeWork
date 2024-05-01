function trekkingMania(input) {
    
   
    let grop = Number(input[0])
  
    let musala = 0;
    let monblak = 0;
    let kilimadharo = 0;
    let K2 = 0;
    let everest = 0;

for(let i = 1;i<=grop;i++){
    let alpinists=Number(input[i])
   

    if(alpinists<=5){
        musala+=alpinists
    }else if(alpinists<=12){
        monblak+=alpinists
    }else if(alpinists<=25){
        kilimadharo+=alpinists
    }else if(alpinists<=40){
        K2+=alpinists
    }else {
        everest+=alpinists
    }

  

}
let allAlpinist=musala+monblak+kilimadharo+K2+everest;

let procentMusala=(musala/allAlpinist)*100;
let procentMonblak=(monblak/allAlpinist)*100;
let procentKilimadharo=(kilimadharo/allAlpinist)*100;
let procentK2=(K2/allAlpinist)*100
let procentEverest=(everest/allAlpinist)*100;
console.log(`${procentMusala.toFixed(2)}%`);
console.log(`${procentMonblak.toFixed(2)}%`);
console.log(`${procentKilimadharo.toFixed(2)}%`);
console.log(`${procentK2.toFixed(2)}%`);
console.log(`${procentEverest.toFixed(2)}%`);

}
trekkingMania(["10","10", "5","1","100","12","26", "17", "37","40","78"])