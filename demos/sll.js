const log = require('single-line-log').stdout
setInterval(function () {
  log('time is ' + new Date())
}, 1000)
