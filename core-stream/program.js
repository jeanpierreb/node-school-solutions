//console.log('beep boop')

const fs = require('fs')
//Lesson 2
//fs.createReadStream(process.argv[2]).pipe(process.stdout)

//Lesson 3
//process.stdin.pipe(process.stdout)

//Lesson 4
process.stdin.pipe(n=>n.toUpperCase()).pipe(process.stdout)
