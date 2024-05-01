function hotelRoom(input){
let mound=input[0];//May, June, July, August, September или October
let night=Number(input[1]);

let apatmenPrice=0;
let stydioPrice=0;
if(mound==="May" || mound==="October"){
stydioPrice=night*50;
apatmenPrice=night*65;
if(night>7 && night<=14){
    stydioPrice=stydioPrice*0.95;
}else if(night>14){
    stydioPrice=stydioPrice*0.70
}
}
else if(mound==="June" || mound==="September"){
stydioPrice=night*75.20;
apatmenPrice=night*68.70;
if(night>14){
    stydioPrice=stydioPrice*0.80
}
}
else if(mound==="July" || mound==="August"){
stydioPrice=night*76;
apatmenPrice=night*77;

}
if(night>14){
    apatmenPrice=apatmenPrice*0.90
}
console.log(`Apartment: ${apatmenPrice.toFixed(2)} lv.`);
console.log(`Studio: ${stydioPrice.toFixed(2)} lv.`);
}
hotelRoom(["May",

"15"])