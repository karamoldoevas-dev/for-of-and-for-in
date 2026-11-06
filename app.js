// for of
// for in

const drinks=['coke', 'water', 'fanta', 'orange juice']
const fruits=[
    {title:'Dragon fruit', price:10, id:1},
    {title:'Kiwi', price:5, id:2},
    {title:'Water melon', price:20, id:3},
]

for (let drink of drinks){
    console.log(`Today we have: ${drink}`);
    
}

for (let fruit of fruits){
console.log(`This is ${fruit.title} and the price is ${fruit.price} $`);
}

const student={
    name:'John',
    age: 20,
    year: 'Senior',

}

for (let info in student) {
    console.log(info);
    
}