function* rangeGenerator(start = 0, end = 100, step=1){
    let iterationCount = 0;
    for(let i = start;i < end; i += step){
        iterationCount++
        yield i
    }
    return iterationCount
}

const myGenerator = rangeGenerator(0,10);
console.log(myGenerator.next())
console.log(myGenerator.next())
console.log(myGenerator.next())
console.log(myGenerator.next())
console.log(myGenerator.next())
console.log(myGenerator.next())
console.log(myGenerator.next())
console.log(myGenerator.next())
console.log(myGenerator.next())
console.log(myGenerator.next())
console.log(myGenerator.next())
console.log(myGenerator.next())

function *generatorIt(){
    console.log('First Name')
    yield 'First Yield'
    console.log('Second Name')
    yield 'Second Yield'
}

let g = generatorIt();
console.log(g.next())  //First Name
                       //{value: 'First Yield', done: false}
console.log(g.next())   // Second Name
                        // {value: 'Second Yield', done: false}
console.log(g.next())    // {value: undefined, done: true}



//  Loop over generator -->>
function *generatorIt1(){
    yield 'First Yield'
    yield 'Second Yield'
    yield 'Third Yield'
}

let g1 = generatorIt1();
for(let value of g1){
    console.log(value)  // First yield, Second yield, Third yield
}

function *generatorIt2(){
    let nextNum =300;
    while(true){
        yield(nextNum++);
    }
}

let g2  = generatorIt2()
console.log(g2.next().value)    //300
console.log(g2.next().value)    //301
console.log(g2.next().value)    //302
console.log(g2.next().value)    //303
console.log(g2.next().value)    //304
console.log(g2.next().value)    //305
console.log(g2.next().value)    //306
console.log(g2.next().value)    //307
console.log(g2.next().value)    //308
console.log(g2.next().value)    //309
for(let value of g2){   
    if(value > 316) break;
    console.log(value)   //310, 311, 312, 313, 314, 315, 316
}
