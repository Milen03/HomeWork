function oscars(input){
    let index=0;
    let name = input[index];
    index++;
    let pownci=Number(input[index]);
    index++
    let n=Number(input[index]);
    index++;


    for(let i=1;i<=n;i++){
        let namesNPownce=input[index];
        index++;
        let toqkiOtN=Number(input[index])
        index++;

        let result=namesNPownce.length*toqkiOtN/2;
        pownci+=result;
        if(pownci>1250.5){
            break;
        }
    }
    if(pownci>1250.5){
        console.log(`Congratulations, ${name} got a nominee for leading role with ${pownci.toFixed(1)}!`);

    }else{
        let diff=Math.abs(pownci-1250.5);
        console.log(`Sorry, ${name} you need ${diff.toFixed(1)} more!`);

    }
}
oscars(["Zahari Baharov",

"205",

"4",

"Johnny Depp",

"45",

"Will Smith",

"29",

"Jet Lee",

"10",

"Matthew Mcconaughey",

"39"])