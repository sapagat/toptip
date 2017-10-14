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

    return new Tip(element)
  }

  validate () {
    assert.equal(this.header(), 'Tips')
  }
}

class Tip {
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
}

module.exports = MainPage