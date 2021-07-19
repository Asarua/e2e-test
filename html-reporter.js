const HtmlReporter = require('nightwatch-html-reporter')
const reporter = new HtmlReporter({
  openBrowser: true,
  reportsDirectory: __dirname + '/reports/'
})

module.exports = {
  write(results, options, done) {
    reporter.fn(results, done)
  }
}