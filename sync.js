const { readFileSync, writeFileSync, read } = require('fs')

console.log('start')

const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/subfolder/text.txt', 'utf-8')

writeFileSync(
  './content/result-sync.txt',
  `Here is the result: ${first} ${second}`,
  {flag: 'a'}
)

console.log('done with this task')
console.log('starting the next one')