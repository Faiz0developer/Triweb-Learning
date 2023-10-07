function product(productName,price){
    this.productName = productName;
    this.price = price
}
const p1= new product('Laptop',2000000) 
// console.log(p1)
// console.log(p1.productName)

function student(sName,productName,price){
    product.call(this,productName,price)
    this.sName=sName
}

const s1= new student('Faizan','Laptop',2000000) 
console.log(s1.sName, s1.productName, s1.price)