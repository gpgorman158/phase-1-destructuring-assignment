const farmAnimals = 'cow horse sheep pig chicken';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

let {song2, song4} = nestedMuppet.album.theMuppetMovie;
console.log(song2 +" "+ song4);
let {nestedJob, nestedPartner} = nestedMuppet;
console.log(nestedJob);

let [moo, neigh, baa, oink, cluck] = farmAnimals.split(' ');
console.log(neigh);
let [bessie, ,dolly,babe,little] = farmAnimals.split(' ');
console.log(bessie);
let [blackAndWhite, ,black,pink, ] = farmAnimals.split(' ');
console.log(black);
let [red,orange,yellow,green,blue,indigo,violet] = colors;
console.log(red);
let [r,o,y,g,b,indg,v] = colors;
console.log(v);

let {partner,muppetName,color,song,job} = muppet;
console.log(muppetName);

// Strings

// 1. Use destructuring to assign appropriate variables based on the sounds animals make.

// 2. Bolt horse wandered off, give four animals, name them bessie, dolly, babe, and little.

// 3. . Let's use color variables of blackAndWhite, black, and pink.

// Arrays

// 4. Use destructuring to assign appropriate variables using the color names.

// 5.  using the first letter of each color as the variable names.

// 6. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg. 

// Objects

// 7. Use destructuring to assign all variables using the keys as the variable names

// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner