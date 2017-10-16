const assert = require('chai').assert

class RegistryPage {
  constructor () {
    this.validate()

    this.theForm = new Form($('.Form'))
  }

  form () {
    return this.theForm
  }

  saveButton () {
    let element = $('#save_button')

    assert.isTrue(element.isExisting(), 'Save button')

    return element
  }

  cancelButton () {
    return $('#cancel_button')
  }

  validate () {
    assert.isTrue(this.cancelButton().isExisting(), 'Cancel button exists')
    assert.isFalse(this.saveButton().isEnabled(), 'Save button disabled')
  }
}

class Form {
  constructor (element) {
    this.element = element

    this.validate()
  }

  fillName (value) {
    this.nameInput().setValue(value)
  }

  nameInput () {
    return this.element.$('#name')
  }

  fillAddress (value) {
    return this.addressInput().setValue(value)
  }

  addressInput () {
    return this.element.$('#address')
  }

  fillMessage (value) {
    return this.messageInput().setValue(value)
  }

  messageInput () {
    return this.element.$('#message')
  }

  advisorInput () {
    return this.element.$('#advisor')
  }

  fillAdvisor (value) {
    return this.advisorInput().setValue(value)
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