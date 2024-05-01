function personalTitles(input){
let age =Number(input[0]);
let gander=input[1];

switch(gander){
    case "m":
if(age>=16){
    console.log("Mr.");
}else{
    console.log("Master");
}
    break;
    case "f":
        if (age>=16){
            console.log("Ms.");
        }else{
            console.log("Miss");
        }

    break;
}
}
personalTitles(["17", "m"])