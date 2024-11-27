const dizi1 = ['a','b','c','d'];
const dizi2 = ['e','f','g','h'];
const dizi1and2 = [...dizi1,...dizi2];
console.log(dizi1and2);

const nesne1 = {icerik1:12, icerik2:34};
const nesne2 = {icerik3:56, icerik4:78};
const nesne1and2 = {...nesne1,...nesne2}
console.log(nesne1and2);