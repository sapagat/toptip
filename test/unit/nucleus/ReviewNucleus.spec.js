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

    expectPublicationMadeOn('tips', 'retrieve.tip')
    expect(lastDataIn('tips', 'retrieve.tip').id).to.equal('AN_ID')
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

  function expectPublicationMadeOn (channel, topic) {
    let publications = bus.publicationsIn(channel,topic)
    expect(publications).not.to.be.empty
  }

  function lastDataIn (channel, topic) {
    return bus.lastDataIn(channel, topic)
  }
})