const lines = Array(15).join('=============================================\n')
const diff = require('ansi-diff')()
setInterval(function () {
  const buf = diff.update(lines + '\ntime is ' + new Date() + '\n' + lines)
  process.stdout.write(buf)
}, 10)
