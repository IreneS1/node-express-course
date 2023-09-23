// ask about export in hw
let MY_VAR="Hi there!"

console.log(__dirname);

process.env.MY_VAR = 'hi'
console.log(process.env.MY_VAR); // returns hi
console.log(process.env);
console.log(MY_VAR);
