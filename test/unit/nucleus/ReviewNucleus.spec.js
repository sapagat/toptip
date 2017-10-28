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
    let tip = aTip()

    bus.publish('tips', 'tip.ready', { tip })

    expect(testable.tip).to.equal(tip)
  })

  it('redirects to main page', () => {
    testable.goToMain()

    expect(Navigator.goTo).to.have.been.calledWith('/')
  })

  function aTip () {
    return {
      name: 'Pub Pob'
    }
  }
})