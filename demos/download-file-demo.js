const progress = require('progress-string')
const https = require('https')
const diff = require('ansi-diff')()

process.stdout.write(diff.update('Downloading file...'))
https.get('https://speed.hetzner.de/100MB.bin', function (res) {
  const total = Number(res.headers['content-length'])
  const bar = progress({total})
  let bytes = 0

  res.on('data', function (data) {
    bytes += data.length
    render()
  })

  render()

  function render () {
    process.stdout.write(
      diff.update('[' + bar(bytes) + ']'
      + ' ' + bytes + '/' + total
    ))
  }
})
