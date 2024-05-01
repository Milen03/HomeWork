function accountBalance(input){
    let index=0;
    let deposit=input[index];
    index++;

       let balance=0;

       while(deposit!=="NoMoreMoney"){
        let plusPari=Number(deposit);
        if(plusPari<0){
            console.log(`Invalid operation!`);
            break;
        }
        balance+=plusPari
       console.log(`Increase: ${plusPari.toFixed(2)}`);
       deposit=input[index]
       index++
       }
       console.log(`Total: ${balance.toFixed(2)}`);
    }

accountBalance(["120", "45.55", "-150"])