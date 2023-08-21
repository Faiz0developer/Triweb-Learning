let arr = ['Faizan', 'Vikas', 'Swati','Haider']
let itertor1 = arr[Symbol.iterator]()
// console.log(itertor1)
console.log(itertor1.next()) //value: 'Faizan', done: false}
console.log(itertor1.next()) //value: 'Vikas', done: false}
console.log(itertor1.next()) //value: 'Swati', done: false}
console.log(itertor1.next()) //value: 'Haider', done: false}
console.log(itertor1.next()) //value: 'undefiend', done: true}

// loop over iterator
let arr1 = ['Faizan', 'Vikas', 'Swati','Haider']
let iterator2 = arr1[Symbol.iterator]()
for(const itr of iterator2){
    console.log(itr)  //Faian, Vikas, Swati, Haider
}


// custome iterator
// eg-1:
function makeRangeIterator(start=0, end=Infinity,step=1){
    let nextIndex = start;
    let iterationCount = 0;

    const rangeIterator = {
        next: function(){
            let result;
            if(nextIndex<end){
                result = {value: nextIndex, done:false}
                nextIndex +=step;
                iterationCount++;
                return result
            }
            return {value:iterationCount, done:true}
        }
    }
    return rangeIterator;
}

const myRangeIterator = makeRangeIterator(0,10)

console.log(myRangeIterator.next())


// eg-2: 
function numberIterator(arr){
    var nextNum = 0;
    return{
        next(){
            if(nextNum < arr.length){
                return{
                    value:arr[nextNum++],
                    done:false
                }
            }
            return{
                done:true
            }
        }
        }
    }

let number = [100,200,300]

let myNumberItarator = numberIterator(number)
console.log(myNumberItarator.next())
console.log(myNumberItarator.next())
console.log(myNumberItarator.next())
console.log(myNumberItarator.next())
