const getName = async () =>{
    return 'Faizan'
    // throw new Error('Something went wrong')
}
async function main (){
    try {
        const name= await getName()
        console.log('Got the name',name)
    } catch (error) {
        console.log('I got the error :', error.message)
    }
}
main()