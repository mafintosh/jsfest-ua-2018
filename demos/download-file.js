const https = require('https')
const diff = require('ansi-diff')()
const progress = require('progress-string')

log('Downloading file ...')

https.get('https://speed.hetzner.de/100MB.bin', function (res) {
  let bytes = 0
  const total = Number(res.headers['content-length']) 
  const bar = progress({total})
  res.on('data', function (data) {
    bytes += data.length
    render()
  })

  function render () {
    log('[' + bar(bytes) + '] ' + bytes  + '/' + total)
  }
})

function log (msg) {
  process.stdout.write(diff.update(msg))
}
