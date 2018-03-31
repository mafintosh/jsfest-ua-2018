const diffy = require('diffy')()
const trim = require('diffy/trim+newline')
const input = require('diffy/input')({
  style: (pre, cursor, post) => pre + '[' + (cursor || ' ') + ']' + post
})

const lines = []

input.on('update', () => diffy.render())
input.on('enter', line => lines.push(line))

diffy.render(function () {
  return trim(`
    Enter a name: ${input.line()}
    You have previously entered:
    ${lines.join('\n')}
  `)
})
