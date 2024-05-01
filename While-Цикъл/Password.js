function password(input){
let name =input[0];
let password=input[1]

let index=2;
let countPass=input[index];
index++;

while(countPass!==password){
    countPass=input[index];
    index++;
}
console.log(`Welcome ${name}!`);
}
password(["Nakov",

"1234",

"Pass",

"1324",

"1234"])