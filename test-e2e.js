const { spawn } = require('child_process')
process.env.NODE_ENV = 'test-e2e'

let options = process.argv.slice(2)

if (!~options.indexOf('--config')) {
  options = [...options, ...['--config', 'nightwatch.conf.js']]
}
if (!~options.indexOf('--env')) {
  options = [...options, ...['--env', 'chrome']]
}
if (!~options.indexOf('--reporter')) {
  options = [...options, ...['--reporter', './html-reporter.js']]
}

const runner = spawn('./node_modules/.bin/nightwatch', options, { stdio: 'inherit' })

runner.on('exit', code => {
  process.exit(code)
})

runner.on('error', err => {
  throw err
})