function suppliesForShool(input){
    let penP=Number(input[0]);
    let markersP=Number(input[1]);
    let preparatL=Number(input[2]);
    let pro=Number(input[3]);
    let pen=penP*5.80;
    let markers=markersP*7.20;
    let preparat=preparatL*1.20;
    let totall=pen+markers+preparat;
    let procent=pro/100
    let totallProcent=totall-(totall*procent)
    console.log(totallProcent)


}
suppliesForShool(["2","3","4","25"])