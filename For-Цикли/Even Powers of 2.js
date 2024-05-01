function evenPowersOf2(input){
    let n =Number(input[0]);
    let sum=0

    for(let i=0;i<=n;i+=2){
sum=Math.pow(2,i)
        console.log(sum);
    }
}
evenPowersOf2(["3"])