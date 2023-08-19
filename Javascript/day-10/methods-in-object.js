let obj = {
    name:'Kavi',
    display:function(sal){
        console.log(`${this.name} earning ${sal} rupee`)
    },
    printAge(age){
        console.log(`${this.name} is ${age} year old`)
    }
}

obj.display(20)
obj.printAge(25)