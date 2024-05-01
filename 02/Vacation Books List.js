function vacacionBookList(input){
    let brStr=Number(input[0]);
    let pg=Number(input[1]);
    let days=Number(input[2]);
    let pgHours=brStr/pg;
    let daysFinal=pgHours/days
    console.log(daysFinal)
}
vacacionBookList(["212","20","2"])