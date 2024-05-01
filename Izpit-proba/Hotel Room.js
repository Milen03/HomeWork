function hotelRooms(input) {
    let monts = input[0]
    let night = Number(input[1])

    let studioPrice = 0;
    let aprtamentPrice = 0;

    //May, June, July, August, September или October

    switch (monts) {
        case `May`:
        case `October`:
            studioPrice = 50 * night;
            aprtamentPrice = 65 * night;
            if (night > 14) {
                studioPrice *= 0.7
            } else if (night > 7) {
                studioPrice *= 0.95
            }

            break;
        case `June`:
        case `September`:
            studioPrice = 75.20 * night;
            aprtamentPrice = 68.70 * night;
            if (night > 14) {
                studioPrice *= 0.80
            }

            break;
        case `July`:
        case `August`:
            studioPrice = 76 * night
            aprtamentPrice = 77 * night
            break;
    }
    if (night > 14) {
        aprtamentPrice *= 0.9}
        console.log(`Apartment: ${aprtamentPrice.toFixed(2)} lv.`);
        console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
    

}
hotelRooms(["June",

"14"])