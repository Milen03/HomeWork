function projectsCreation(input){
    let nameArchitect= input[0];
    let timeForMake=input[1]*3
    let projects=input[1];
    console.log(`The architect ${nameArchitect} will need ${timeForMake} hours to complete ${projects} project/s.`)
}
projectsCreation(['George',4])