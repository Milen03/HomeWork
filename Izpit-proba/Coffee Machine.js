function coffeeMachine(input) {
    let drinks = input[0]
    let sugar = input[1]
     let brNapitki = input[2]


    let coundDrinks = 0
    let price = 0;

    switch (drinks) {
        case `Espresso`:
            if (sugar === `Without`) {
                price += 0.90
            } else if (sugar === `Normal`) {
                price += 1.00
                
            } else if (sugar === `Extra`) {
                price += 1.20
            }
            coundDrinks++
            break;
        case `Cappuccino`:
            if (sugar === `Without`) {
                price += 1
               
            } else if (sugar === `Normal`) {
                price += 1.20
            } else if (sugar === `Extra`) {
                price += 1.60
            }
            coundDrinks++
            break;
        case `Tea`:
            if (sugar === `Without`) {
                price += 0.50
            } else if (sugar === `Normal`) {
                price += 0.60
            } else if (sugar === `Extra`) {
                price += 0.70
            }
            coundDrinks++
            break;
    }
let tottal=price*brNapitki
    if(sugar===`Without`){
        tottal*=0.65
    }


if(drinks===`Espresso`&&brNapitki>=5){
    tottal*=0.75
}    



    if(tottal>15){
        tottal*=0.8
    }
    console.log(`You bought ${brNapitki} cups of ${drinks} for ${tottal.toFixed(2)} lv.`);

} 
coffeeMachine([`Espresso`,
    `Without`,
    ` 10`
])