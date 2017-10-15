const assert = require('chai').assert

class RegistryPage {
  constructor () {
    this.validate()

    this.form = new Form($('.Form'))
  }

  cancelButton () {
    return $('#cancel_button')
  }

  validate () {
    assert.isTrue(this.cancelButton().isExisting())
  }
}

class Form {
  constructor (element) {
    this.element = element

    this.validate()
  }

  nameInput () {
    return this.element.$('#name')
  }

  addressInput () {
    return this.element.$('#address')
  }

  messageInput () {
    return this.element.$('#message')
  }

  advisorInput () {
    return this.element.$('#advisor')
  }

  validate () {
    this.assertFieldExists(this.nameInput(),'name');
    this.assertFieldExists(this.addressInput(),'address');
    this.assertFieldExists(this.messageInput(),'message');
    this.assertFieldExists(this.advisorInput(),'advisor');
  }

  assertFieldExists (field, name) {
    assert.isTrue(field.isExisting(), `Field ${name} exists in form`)
  }
}

module.exports = RegistryPage