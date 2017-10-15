const expect = require('chai').expect
const MainPage = require('./pages/MainPage')
const RegistryPage = require('./pages/RegistryPage')

describe('A TopTip user', () => {
  let page

  it('can see the list of registered tips', () => {
    goToMainPage()

    expectTipsToBeListed()
  })

  describe('when registering a new tip', () => {
    beforeEach(() => {
      goToRegistry()
    })

    it('can cancel and go back to the list', () => {
      page.cancelButton().click()

      expectToBeInMainPage()
    })
  })

  function goToMainPage () {
    browser.url('/')

    page = new MainPage()
    return page
  }

  function goToRegistry () {
    let mainPage = goToMainPage()

    mainPage.addButton().click()

    page = new RegistryPage()
    return page
  }

  function expectTipsToBeListed () {
    expect(page.firstTip().name()).equal('Bar Aragon')
    expect(page.firstTip().address()).equal('Barón de San Petrillo (Beni)')
    expect(page.firstTip().message()).contain('You must try the handed ice')
    expect(page.firstTip().advisor()).equal('Manel')
  }

  function expectToBeInMainPage () {
    expect(browser.element('body').getText()).to.contain('Tips')
  }
})
