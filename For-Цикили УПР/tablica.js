function tablica(input){
    let num=Number(input[0]);
    

    for(let i=1;i<=10;i++){
        let balica=num*i;
        console.log(`${i} * ${num} = ${balica}`);
    }
   
}
tablica(["5"])