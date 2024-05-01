function timeMinutes (input){
    let hours=Number(input[0]);
    let minets=Number(input[1]);
    let allTime=hours*60+minets+15;

    let h=Math.floor(allTime/60);
    let m=allTime%60;
    if(h>23){
        h=0
    }

    if(m<10){
        console.log(`${h}:0${m}`);
    }else{console.log(`${h}:${m}`);}

}
timeMinutes(["0", "01"])