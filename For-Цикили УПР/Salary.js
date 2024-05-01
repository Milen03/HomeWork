function salary(input){
let brOpen=Number(input[0]);
let selary=Number(input[1]);


for(let i=0;i<=brOpen+1;i++){
    let tab = String(input[i]);
    if(tab==="Facebook"){
        selary-=150;
    }else if(tab==="Instagram"){
          selary-=100
    }else if(tab==="Reddit"){
          selary-=50;
    }
   
}
if(selary<=0){
    console.log(`You have lost your salary.`);
    
}else {
    console.log(`${selary}`);
}
    


}
salary(["10",

"750",

"Facebook",

"Dev.bg",

"Instagram",

"Facebook",

"Reddit",

"Facebook",

"Facebook"])