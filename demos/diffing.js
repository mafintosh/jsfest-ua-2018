const diff = require('ansi-diff')()

let out = diff.update('hello world')
console.log(1, out)

out = diff.update('hello world')
console.log(2, out)

out = diff.update('hello WORLD')
console.log(3, out)
