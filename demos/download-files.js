const https = require('https')
const progress = require('progress-string')
const diffy = require('diffy')({fullscreen: true})
const trim = require('diffy/trim+newline')
const input = require('diffy/input')({
  style: (pre, cursor, post) => pre + '[' + (cursor || ' ') + ']' + post
})

let total = 0
const renders = []

input.on('update', () => diffy.render())
input.on('enter', function (url) {
  const dl = {url}
  https.get(url, function (res) {
    dl.bytes = 0
    dl.total = Number(res.headers['content-length'])
    dl.bar = progress({total: dl.total})
    diffy.render()
    res.on('data', function (data) {
      dl.bytes += data.length
      total += data.length
      diffy.render()
    })
  })

  renders.push(render)
  render()

  function render () {
    if (!dl.bar) return 'Downloading ' + url + '\n'
    return '[' + dl.bar(dl.bytes) + '] ' + dl.bytes + '/' + dl.total + '\n'
  }
})

diffy.render(function () {
  return trim(`
    Welcome to bulk downloader

    Download file: ${input.line()}

    You are currently downloading:

    ${renders.map(r => r()).join('') || '(none)'}

    You have downloaded ${total} bytes in total. Have a good day!
  `)
})
