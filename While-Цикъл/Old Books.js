function oldBooks(input){
let myBook=input[0];


let index=1;
let serBooks=input[index]
index++;

let countBooks=0;
let bookIsFound=false;

while(serBooks!=="No More Books"){
    if(myBook===serBooks){
        bookIsFound=true;
        break;
    }
countBooks++;

    serBooks=input[index];
    index++
}
if(bookIsFound===false){
console.log("The book you search is not here!");
console.log(`You checked ${countBooks} books.`);
}else
{
    console.log(`You checked ${countBooks} books and found it.`);
}


}
oldBooks(["The Spot",

"Hunger Games",

"Harry Potter",

"Torronto",

"Spotify",

"No More Books"])