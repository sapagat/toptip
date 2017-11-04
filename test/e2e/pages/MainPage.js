const assert = require('chai').assert

class MainPage {
  constructor () {
    this.validate()
  }

  header () {
    return $('h1').getText()
  }

  firstTip () {
    let element = $('.TipCard')

    assert.isTrue(element.isExisting())

    return new TipCard(element)
  }

  addButton() {
    return $('#add_tip')
  }

  tipMenu () {
    let element = $('.Menu')
    assert.isTrue(element.isExisting(), 'Tip Menu')

    return new TipMenu(element)
  }

  validate () {
    assert.equal(this.header(), 'Tips')
    assert.isTrue(this.addButton().isExisting())
  }
}

class TipCard {
  constructor (element){
    this.element = element
  }

  name () {
    let name = this.element.$('.TipCard-header')
    assert.isTrue(name.isExisting())

    return name.getText()
  }

  address () {
    let address = this.element.$('.TipCard-address')
    assert.isTrue(address.isExisting())

    return address.getText()
  }

  message () {
    let message = this.element.$('.TipCard-advise')
    assert.isTrue(message.isExisting())

    return message.getText()
  }

  advisor () {
    let advisor = this.element.$('.TipCard-advisor')
    assert.isTrue(advisor.isExisting())

    return advisor.getText()
  }

  reaction () {
    let reaction = this.element.$('.TipCard-footer')
    assert.isTrue(reaction.isExisting())

    return reaction.getText()
  }

  displayMenu () {
    let button = this.element.$('.TipCard-menuButton')
    assert.isTrue(button.isExisting(), 'Menu button')

    button.click()
  }
}

class TipMenu {
  constructor (element){
    this.element = element
  }

  choose (option) {
    this.element.click(`.Menu-item*=${option}`)
  }
}

module.exports = MainPage
