module.exports = {
  testBaidu(browser) {
    browser
      .url('https://www.baidu.com')
      .maximizeWindow()
      .assert.title('百度一下,你就知道')
      .pause(2000)

    browser.end()
  }
}