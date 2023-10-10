async function getName(){
    return 'Faizan'
}
async function main(){
    const name = await getName()
    console.log('Name is :', name)
}

main()