function maxNumber(input){
    let index=0;
    let commad=input[index]
    index++

    let maxNum=Number.MAX_SAFE_INTEGER;

    while(commad!=="Stop"){
        let num=Number(commad)
        if(num<maxNum){
            maxNum=num;
        }
        commad=input[index]
        index++
    }
    console.log(maxNum);


}
maxNumber(["100",

"99",

"80",

"70",

"Stop"])