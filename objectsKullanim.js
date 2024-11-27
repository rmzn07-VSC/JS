let game = {
name: "Minecraft",
popularity: "2 Billion Downloads",
startDate: 2009,
weSay:function(){
console.log("Best game is: " + this.name);
}
};

console.log(game.name);
console.log(game.popularity);
console.log(game.startDate);
game.weSay();