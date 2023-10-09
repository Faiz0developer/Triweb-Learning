function demoNewTarget(x){
    // console.log(new.target)
    if(new.target==undefined){
        console.log('No')
    }else{
        this.x=x
        console.log("Creating an object")
    }
    console.log('Inside fuction')
}

demoNewTarget(5)
const newObj = new demoNewTarget(6)
console.log(newObj)