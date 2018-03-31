const diffy = require('diffy')()
const chalk = require('chalk')
const trim = require('diffy/trim+newline')
const input = require('diffy/input')({
  style: function (pre, cursor, post) {
    return pre + chalk.bgRed(cursor || ' ') + post
  }
})

const names = []

input.on('update', () => diffy.render())
input.on('enter', function (name) {
  names.push(name)
  diffy.render()
})

setInterval(() => diffy.render(), 500)

const debugs = []

diffy.render(function () {
  return trim(`
    List of cool names:
    ${names.join(', ') || '(none)'}

    Current name: ${input.line()}

    Time is ${new Date()}

    ${debugs.join('\n')}
  `)
})

debug('yolo')

function debug (m) {
  debugs.push(m)
}
