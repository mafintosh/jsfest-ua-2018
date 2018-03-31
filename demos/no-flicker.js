const lines = Array(15).join('=============================================\n')
const diff = require('ansi-diff')()
let size = 0
setInterval(function () {
  const buf = diff.update(lines + '\ntime is ' + new Date() + '\n' + lines + 'copy me ' + size)
  size = buf.length
  process.stdout.write(buf)
}, 1000)
