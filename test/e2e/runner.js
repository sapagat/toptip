process.env.NODE_ENV = 'testing'
var server = require('../../build/dev-server.js')

server.ready.then(() => {
  var opts = process.argv.slice(2)
  var spawn = require('cross-spawn')
  var runner = spawn('./node_modules/.bin/wdio', opts, { stdio: 'inherit' })

  runner.on('exit', function (code) {
    server.close()
    process.exit(code)
  })

  runner.on('error', function (err) {
    server.close()
    throw err
  })
})
