function familyTrip(input) {
    let bugeget = Number(input[0]);
    let countNiths = Number(input[1]);
    let priceNiths = Number(input[2]);
    let procent = Number(input[3]);


    if (countNiths > 7) {
        priceNiths *= 0.95;
    }
    let haitNiats = countNiths * priceNiths;
    
       
    let dopRazhodi = bugeget * procent / 100
    let finalProcent = bugeget - dopRazhodi
    let diff = Math.abs(finalProcent - haitNiats)
    if(haitNiats<=finalProcent){
        console.log(`Ivanovi will be left with ${diff.toFixed(2)} leva after vacation.`);
    }else{console.log(`${diff.toFixed(2)} leva needed.`);}
    

    
}
familyTrip([` 500`,

    `7`,

    `66`,

    `15`])

   


