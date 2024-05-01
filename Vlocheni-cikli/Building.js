function building (input){
    let floor =Number(input[0]);
    let  rooms =Number(input[1]);

    for(let i=floor;i>=1;i--){
        let printLine='';
        for(let j=0;j<rooms;j++){
            if(i===floor){
                printLine+=`L${i}${j} `
            }else if(i % 2 === 0){
                printLine+=`O${i}${j} `;
            }else{
                printLine+= `A${i}${j} `;  
               
            }
        }
        console.log(printLine);
    }
   
}
building(["6",

"4"])