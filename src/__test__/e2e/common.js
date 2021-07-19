function assertTitle(browser, title) {
  if (!browser || !title) throw new Error('【assertTitle error】：请填写完整！')
  browser.assert.title(title)
}

exports = {
  assertTitle
}