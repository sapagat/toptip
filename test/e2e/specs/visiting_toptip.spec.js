describe('TopTip', () => {
  afterEach((browser, done) => {
    browser.end(() => { done() })
  })

  it('displays the main page', (browser) => {
    const devServer = browser.globals.devServerURL
    browser.url(devServer)

    browser.assert.containsText('h1','Tips')
  })
})
