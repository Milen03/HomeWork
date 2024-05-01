function sumSeconds(input){
    let first=Number(input[0]);
    let second= Number(input[1]);
    let tre=Number(input[2]);
    
    let totalTime=first+second+tre;
    let min=Math.floor(totalTime/60);
    let sec=totalTime%60;
    if(sec<10){
        console.log(`${min}:0${sec}`);
    }else{
        console.log(`${min}:${sec}`);
    }
}
sumSeconds(["50",
"50",
"49"])




