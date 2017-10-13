module.exports = {
  'Visiting TopTip': function (browser) {
    const devServer = browser.globals.devServerURL

    browser.url(devServer)

    browser.assert.containsText('h1', 'Tips')

    browser.end()
  }
}
