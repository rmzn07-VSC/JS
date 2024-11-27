console.log("Dizi Destructuring:");

const numbers = [1, 2, 3]; const [first, second, third] = numbers; console.log(first, second, third);

console.log("Obje Destructuring:");

const car = {
model:"1980",
marka:"BMW"
};

const{model,marka} = car;
console.log(model,marka);