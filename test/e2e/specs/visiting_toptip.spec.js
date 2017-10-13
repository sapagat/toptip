describe('TopTip', () => {
  afterEach((browser, done) => {
    browser.end(() => { done() })
  })

  it('is displaying the list of registerd tips', (browser) => {
    const devServer = browser.globals.devServerURL
    browser.url(devServer)

    browser.assert.containsText('h1','Tips')

    browser.expect.element('.TipCard').text.to.contain('Bar Aragon')
  })
})
