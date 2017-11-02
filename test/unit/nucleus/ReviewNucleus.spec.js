import ReviewNucleus from '@/nucleus/ReviewNucleus'
import Navigator from '@/infrastructure/Navigator'
import TestBus from '../helpers/TestBus'

describe('ReviewNucleus', () => {
  let navigatorStub
  let testable
  let bus

  beforeEach(() => {
    bus = new TestBus()
    testable = new ReviewNucleus(bus)
    navigatorStub = stub(Navigator, 'goTo')
  })

  afterEach(() => {
    if(navigatorStub) navigatorStub.restore()
  })

  it('starts by asking for the tip to review', () => {
    location.hash = '/review/AN_ID'

    testable.start()

    expect(bus).to.have.publishedOn('tips', 'retrieve.tip')
    expect(bus).to.have.sentInData('id', 'AN_ID')
  })

  it('keeps the tip when available', () => {
    testable.subscribe()
    let tip = { id: 'an_id '}

    bus.publish('tips', 'tip.ready', { tip })

    expect(testable.tip.id).to.equal(tip.id)
  })

  it('redirects to main page', () => {
    testable.goToMain()

    expect(Navigator.goTo).to.have.been.calledWith('/')
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

  it('redirects to main page once tip is updated', () => {
    testable.subscribe()

    bus.publish('tips', 'tip.updated')

    expect(Navigator.goTo).to.have.been.calledWith('/')
  })

  it('says when a reaction is saveable', () => {
    testable.tip = {
      reaction: 'NOT_EMPTY'
    }

    expect(testable.saveable()).to.equal(true)
  })
})