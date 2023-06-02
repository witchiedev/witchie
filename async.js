const { readFile, writeFile } = require('fs')
console.log('start')
readFile('./content/first.txt', 'utf8', (err, result) => {
  if(err) {
    console.log(err)
    return
  }
  const first = result;
  readFile('./content/subfolder/text.txt', 'utf8', (err, result)=>{
    if(err) {
      console.log(err)
      return
    }
    const second = result;
    writeFile('./content/result-async.txt', `${first}, ${second}`, (err, result) => {
      if(err) {
        console.log(err)
        return
      }
      console.log('done with this task')
    })
  }
)})

console.log('starting the next task')