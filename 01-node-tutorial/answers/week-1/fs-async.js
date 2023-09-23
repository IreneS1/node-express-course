const {writeFile} = require('fs');

console.log('start')

    const filePath = '../temporary/fileB.txt'
        writeFile(filePath, 'I am writing to file B',
    (err) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('File created and line 1 written successfully!');

        writeFile(filePath, 'This is my second sentence', { flag: 'a'},
        (err) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log('Line 2 appended succeddfully!')
        })
        writeFile(filePath, 'Last sentence', { flag: 'a'}, 
        (err) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log('Line 3 appended succeddfully!')
        })
    })

    console.log('end')
