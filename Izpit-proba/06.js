function findValidNumber(n) {
    for (let a = 1; a <= 9; a++) {
        for (let b = 9; b >= a; b--) {
            for (let c = 0; c <= 9; c++) {
                for (let d = 9; d >= c; d--) {
                    let sum = a + b + c + d;
                    let product = a * b * c * d;
                    
                    if (sum === product && n % 10 === 5) {
                        return `${a}${b}${c}${d}`;
                    } else if (product / sum === 3 && n % 3 === 0) {
                        return `${d}${c}${b}${a}`;
                    }
                }
            }
        }
    }
    
    return "Nothing found";
    console.log(findValidNumber(123)); // Изход: 8191
}

// Примерни извиквания на функцията:


