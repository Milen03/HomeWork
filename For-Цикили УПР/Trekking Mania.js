function trekkingMania(input){
    
    
      let groupNumber = Number(input[0]);
    
     
    
      let musala = 0;
    
      let montblanc = 0;
    
      let kilimanjaro = 0;
    
      let K2 = 0;
    
      let everest = 0;
    
     
    
      for (let i = 1; i <= groupNumber; i++) {
    
        let alpinists = Number(input[i]);
    
        if (alpinists <= 5) {
    
          musala += alpinists;
    
        } else if (alpinists <= 12) {
    
          montblanc += alpinists;
    
        } else if (alpinists <= 25) {
    
          kilimanjaro += alpinists;
    
        } else if (alpinists <= 40) {
    
          K2 += alpinists;
    
        } else {
    
          everest += alpinists;
    
        }
    
      }
    
      let allAlpinists = musala + montblanc + kilimanjaro + K2 + everest;
    
      let percentMusala = (musala / allAlpinists) * 100;
    
      let percentMontblanc = (montblanc / allAlpinists) * 100;
    
      let percentKilimanjaro = (kilimanjaro / allAlpinists) * 100;
    
      let percentK2 = (K2 / allAlpinists) * 100;
    
      let percentEverest = (everest / allAlpinists) * 100;
    
      console.log(`${percentMusala.toFixed(2)}%`);
    
      console.log(`${percentMontblanc.toFixed(2)}%`);
    
      console.log(`${percentKilimanjaro.toFixed(2)}%`);
    
      console.log(`${percentK2.toFixed(2)}%`);
    
      console.log(`${percentEverest.toFixed(2)}%`);
    
    }

trekkingMania(["5",

"25",

"41",

"31",

"250",

"6"])