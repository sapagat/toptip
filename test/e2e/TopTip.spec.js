const expect = require('chai').expect
const MainPage = require('./pages/MainPage')
const RegistryPage = require('./pages/RegistryPage')

describe('A TopTip user', () => {
  let page

  it('can keep tips in a list', () => {
    goToMainPage()

    clickAddButton()

    enterTipDetails()

    clickSaveButton()

    expectTipToBeListed()
  })

  context('when registering a new tip', () => {
    beforeEach(() => {
      goToRegistry()
    })


    it('can cancel and go back to the list', () => {
      page.cancelButton().click()

      expectToBeInMainPage()
    })
  })

  context('once she has registered a tip', () => {
    before(() => {
      goToMainPage()
      clickAddButton()
      enterTipDetails()
      clickSaveButton()
    })

    it('can give her opinion by adding a review', () => {
      page.firstTip().reviewButton().click()

      expectToBeInReviewPage()
    })
  })

  function goToMainPage () {
    browser.url('/')

    page = new MainPage()
    return page
  }

  function clickAddButton () {
    page.addButton().click()

    page = new RegistryPage()
    return page
  }

  function clickSaveButton () {
    page.saveButton().click()

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
    expect(page.firstTip().name()).equal('Tramuntana')
    expect(page.firstTip().address()).equal('Beni')
    expect(page.firstTip().message()).contain('Tienes que probar las papas con mojo illo')
    expect(page.firstTip().advisor()).equal('Morancos')
  }

  function expectToBeInMainPage () {
    expect(browser.element('body').getText()).to.contain('Tips')
  }

  function enterTipDetails () {
    page.form().fillName('Tramuntana')
    page.form().fillAddress('Beni')
    page.form().fillMessage('Tienes que probar las papas con mojo illo')
    page.form().fillAdvisor('Morancos')
  }

  function expectTipToBeListed () {
    expect(page.firstTip().name()).equal('Tramuntana')
    expect(page.firstTip().address()).equal('Beni')
    expect(page.firstTip().message()).contain('Tienes que probar las papas con mojo illo')
    expect(page.firstTip().advisor()).equal('Morancos')
  }

  function expectToBeInReviewPage () {
    expect(browser.element('body').getText()).not.to.contain('Tips')
    expect(browser.element('body').getText()).to.contain('Add your review')
  }
})
