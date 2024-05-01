function sumNumbers(input){
    let num=Number(input[0]);
    let index=1;
    let N=Number(input[index])
    index++;
    let Numbers=0;

    while(N<=num){
    Numbers+=N

    N=Number(input[index]);
    index++
    
}
console.log(Numbers);
}
sumNumbers(["20", "1", "2", "3", "4", "5", "6"])