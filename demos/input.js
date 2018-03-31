const input = require('neat-input')()

input.on('enter', 
  line => console.log('line:', line)
)

input.on('update', 
  () => console.log('partial:', input.line())
)
