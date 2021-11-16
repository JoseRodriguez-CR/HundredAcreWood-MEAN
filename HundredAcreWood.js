//adding character from south to north and west to east

var tigger = {character: "Tigger"}; // start with just the character attribute

var pooh = {character: "Winnie the Pooh"};
tigger.north = pooh; // add more attributes, where we are actually storing the memory location for the other object
pooh.south = tigger;

var piglet = { character: "Piglet"};        // create Piglet's home object with just the character attribute
piglet.east = tigger.north;          // Piglet's east attribute is Tigger's north attribute, which is a memory address
tigger.north.west = piglet;

var bees = {character: "Bees"};
bees.west = tigger.north;
tigger.north.east = bees;

var owl = {character:"Owl"};
piglet.north = owl;

var christopherRobin = {character: "Christopher Robin"};
christopherRobin.south = tigger.north;
christopherRobin.west = piglet.north;


var rabbit = {character: "Rabbit"};
bees.north = rabbit;
christopherRobin.east = bees.north;


var gopher = {character: "Gopher"};
gopher.west = rabbit;
rabbit.east = bees.north.east;


var kanga = {character: "Kanga"};
christopherRobin.north = kanga;


var eeyore = {character: "Eeyore"};
eeyore.south = christopherRobin.north;
kanga.north = eeyore;

var heffalumps = {character: "Heffalumps"};
heffalumps.west = kanga.north;
eeyore.east = heffalumps;


console.log(tigger);
console.log(piglet);
console.log(kanga);
