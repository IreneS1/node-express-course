const {readFileSync, writeFileSync} = require('fs');

const sentences = ['this is my first sentence', 'second sentence', 'Last sentence to file']

for (let i = 0; i < sentences.length; i++) {
    writeFileSync('../temporary/fileA.txt', `${sentences[i]}`, { flag: 'a' })
}

const fileContent = readFileSync('../temporary/fileA.txt', 'utf8');

console.log(fileContent);