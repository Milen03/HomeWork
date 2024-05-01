function Histogram(input){
    let index=0;
    let n=Number(input[index]);
    index++

    let coundP1=0;
    let coundP2=0;
    let coundP3=0;
    let coundP4=0;
    let coundP5=0;

    for(let i=0;i<n;i++){
        let curretNumber=Number(input[index]);
        index++


        if(curretNumber<200){
            coundP1++
        } else if(curretNumber<=399){
            coundP2++
        }else if(curretNumber<=599){
            coundP3++
        }else if(curretNumber<=799){
            coundP4++
        }else{
            coundP5++
        }
  
    }
    let p1=coundP1/n*100
    let p2=coundP2/n*100
    let p3=coundP3/n*100
    let p4=coundP4/n*100
    let p5=coundP5/n*100


    console.log(`${p1.toFixed(2)}%`);
    console.log(`${p2.toFixed(2)}%`);
    console.log(`${p3.toFixed(2)}%`);
    console.log(`${p4.toFixed(2)}%`);
    console.log(`${p5.toFixed(2)}%`);

}
Histogram(["14", "53", "7", "56", "180", "450", "920", "12", "7", "150", "250", "680", "2", "600", "200"])