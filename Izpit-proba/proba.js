
function calculateStayPrice(days, roomType, review) {
    let nights = days - 1;
    let pricePerNight = 0;
    let days=Number(input[0])
    let roomType=input[1]
    let review=input[2]
    

    switch (roomType) {
        case "room for one person":
            pricePerNight = 18.00;
            break;
        case "apartment":
            pricePerNight = 25.00;
            break;
        case "president apartment":
            pricePerNight = 35.00;
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

    if (review === "positive") {
        totalPrice *= 1.25;
    } else if (review === "negative") {
        totalPrice *= 0.90;
    }

    return totalPrice.toFixed(2);
}

// Примерни входни данни:
console.log(calculateStayPrice(14, "apartment", "positive")); // Примерен изход: 264.06
console.log(calculateStayPrice(30, "president apartment", "negative")); // Примерен изход: 730.80
console.log(calculateStayPrice(12, "room for one person", "positive")); // Примерен изход: 247.50
console.log(calculateStayPrice(2, "apartment", "positive")); // Примерен изход: 21.88
