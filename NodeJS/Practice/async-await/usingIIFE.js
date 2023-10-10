// IIFE -> Immediately Invoked Function
async function getName(){
    return 'Faizan'
}

(async () => {
    const name = await getName();
    console.log(name)
})()