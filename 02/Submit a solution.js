function submitASolution(input){
    let deposit =Number(input[0]);
    let srokdeposit=Number(input[1]);
    let yearlih=Number(input[2]);


    let lih = deposit*(yearlih/100);
    let litmond= lih/12
   let ednlih=litmond*srokdeposit;
   let totall=deposit+ednlih
    console.log(totall)
}
submitASolution(["200","3","5.7"])