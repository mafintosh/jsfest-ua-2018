const diffy = require('diffy')()
const trim = require('diffy/trim+newline')

setInterval(() => diffy.render(), 100)

diffy.render(function() {
  return trim(`
    hello ...
    time is ${new Date()}
    that is all
  `)
})
