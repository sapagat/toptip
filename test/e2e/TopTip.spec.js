const expect = require('chai').expect
const MainPage = require('./pages/MainPage')

describe('TopTip', () => {
  let page

  it('is displaying the list of registerd tips', () => {
    goToMainPage()

    expectTipsToBeListed()
  })

  function goToMainPage () {
    browser.url('/')

    page = new MainPage()
  }

  function expectTipsToBeListed () {
    expect(page.firstTip().name()).equal('Bar Aragon')
    expect(page.firstTip().address()).equal('Barón de San Petrillo (Beni)')
    expect(page.firstTip().message()).contain('You must try the handed ice')
    expect(page.firstTip().advisor()).equal('Manel')
  }
})
