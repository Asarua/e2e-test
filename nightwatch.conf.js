module.exports = {
  src_folders: ['src/__test__/e2e'],
  output_folder: 'reports',
  webdriver: {
    start_process: true,
    server_path: 'node_modules/.bin/chromedriver',
    port: 8080
  },
  test_settings: {
    default: {
      selenium_port: 8080,
      selenium_hostL: 'localhost',
      desiredCapabilities: {
        browserName: 'chrome'
      }
    },
    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true
      }
    }
  }
}