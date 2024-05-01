function numberPyramid(input){
let n=Number(input[0])
let curredNum=1
let stopLup=false
for(let row=1;row<=n;row++){
let buff=""
    for(let cols=1;cols<=row;cols++){
        buff+=curredNum+" "
        curredNum++
if(curredNum>n){
stopLup=true
break;
}
    }
    console.log(buff);
    if(stopLup){
        break;
    }
}


}
numberPyramid(["15"])