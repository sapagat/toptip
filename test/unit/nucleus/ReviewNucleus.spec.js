import ReviewNucleus from '@/nucleus/ReviewNucleus'
import TestBus from '../helpers/TestBus'

describe('ReviewNucleus', () => {
  let testable
  let bus

  beforeEach(() => {
    bus = new TestBus()
    testable = new ReviewNucleus(bus)
  })

  it('starts by asking the current location', () => {
    testable.start()

    expect(bus).to.have.publishedOn('router', 'provide.details')
  })

  it('ask for the tip to review once the route id is ready', () => {
    testable.subscribe()

    bus.publish('router', 'details.ready', { id: 'AN_ID' })

    expect(bus).to.have.publishedOn('tips', 'retrieve.tip')
    expect(bus).to.have.sentInData('id', 'AN_ID')
  })

  it('keeps the tip when available', () => {
    testable.subscribe()
    let tip = { id: 'an_id '}

    bus.publish('tips', 'tip.ready', { tip })

    expect(testable.tip.id).to.equal(tip.id)
  })

  it('asks to go to the main page', () => {
    testable.goToMain()

    expect(bus).to.have.publishedOn('router', 'go.main')
  })

  it('saves the reaction of a tip', () => {
    let testTip = {
      id: 'an_id',
      reaction: 'It was a brilliant place!'
    }
    testable.tip = testTip

    testable.saveReaction()

    expect(bus).to.have.publishedOn('tips', 'save.reaction')
    expect(bus).to.have.sentInData('id', testTip.id)
    expect(bus).to.have.sentInData('reaction', testTip.reaction)
  })

  it('asks to go to the main page once the tip is updated', () => {
    testable.subscribe()

    bus.publish('tips', 'tip.updated')

    expect(bus).to.have.publishedOn('router', 'go.main')
  })

  it('says when a reaction is saveable', () => {
    testable.tip = {
      reaction: 'NOT_EMPTY'
    }

    expect(testable.saveable()).to.equal(true)
  })
})
