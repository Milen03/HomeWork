function yardGreening(input){
    let kvGreening=Number(input[0]);
    let price= kvGreening*7.61;
    let dicoumd=price*0.18;
    let totallPrice=price-dicoumd;
    console.log("The final price is: "+totallPrice + " "+"lv")
    console.log("The discount is: "+dicoumd+" "+ "lv")

}
yardGreening(["150"])