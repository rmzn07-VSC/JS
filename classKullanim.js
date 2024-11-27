class Country{
constructor(name, year){
this.name=name;
this.year=year;
}

kutla(){
console.log(`${this.name}'mizin ${this.year}. yılı kutlu olsun!!`);


}}

const bilgi = new Country("Türkiye",101);

bilgi.kutla();