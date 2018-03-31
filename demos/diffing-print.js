const diff = require('ansi-diff')()

let out = diff.update('hello world')
process.stdout.write(out)

setTimeout(function () {
out = diff.update('hello world')
process.stdout.write(out)
}, 1000)

setTimeout(function () {
out = diff.update('hello WORLD')
process.stdout.write(out)
}, 2000)
