const lines = Array(15).join('=============================================\n')
const log = require('single-line-log').stdout
setInterval(function () {
  log(lines + '\ntime is ' + new Date() + '\n' + lines + 'copy me')
}, 10)
