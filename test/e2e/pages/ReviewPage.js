const assert = require('chai').assert

class ReviewPage {
  constructor () {
    this.validate()
  }

  title () {
    return $('.Section-title').getText()
  }

  saveButton () {
    let element = $('#save_button')

    assert.isTrue(element.isExisting(), 'Save button')

    return element
  }

  reactionInput () {
    let element = $('.Form input')

    assert.isTrue(element.isExisting(), 'Reaction input')

    return element
  }

  fillReaction (reaction) {
    this.reactionInput().setValue(reaction)
  }

  validate () {
    assert.equal(this.title(), 'Add your review')
  }
}


module.exports = ReviewPage