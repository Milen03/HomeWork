function santasHoliday(input) {
    let days = Number(input[0]);
    let roomType = input[1];
    let ocenka = input[2]

    let nights = days - 1;
    let pricePerNight = 0;


    switch (roomType) {
        case 'room for one person':
            pricePerNight = 18
            break;
        case 'apartment':
            pricePerNight = 25
            break;
        case 'president apartment':
            pricePerNight = 35
            break;
    }

    let totalPrice = nights * pricePerNight;

    if (nights > 15) {
        if (roomType === "apartment") {
            totalPrice *= 0.50;
        } else if (roomType === "president apartment") {
            totalPrice *= 0.80;
        }
    } else if (nights >= 10) {
        if (roomType === "apartment") {
            totalPrice *= 0.65;
        } else if (roomType === "president apartment") {
            totalPrice *= 0.85;
        }
    } else if (nights < 10) {
        if (roomType === "apartment") {
            totalPrice *= 0.70;
        }
    }

    if (ocenka === "positive") {
        totalPrice *= 1.25;
    } else if (ocenka === "negative") {
        totalPrice *= 0.90;
    }
    console.log(totalPrice.toFixed(2));

}
santasHoliday([`14`,
    `apartment`,
    ` positive`,
])