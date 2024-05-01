function chrismasPreparation(input) {
    let rols = Number(input[0]);
    let plat = Number(input[1]);
    let lepilo = Number(input[2]);
    let procent = Number(input[3]);


    let rolsCena = rols * 5.80
    let platCena = plat * 7.20
    let lepiloCena = lepilo * 1.20
    let allSum = rolsCena + platCena + lepiloCena

    let problem = procent / 100
    let filaSum = allSum * problem
    console.log((allSum-filaSum).toFixed(3));
}
chrismasPreparation([`2`,
    `3`,
    `2.5`,
    `25`,
])