function basketballEquipmens(input){
    let yearsForTren=Number(input[0]);
    let shoes=yearsForTren*0.60;
    let tshir=shoes*0.80;
    let ball=tshir/4;
    let accesoalrs=ball/5;
    let totall= yearsForTren+shoes+tshir+ball+accesoalrs;
    console.log(totall)
}
basketballEquipmens(["365"])