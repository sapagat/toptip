import ReviewNucleus from '@/nucleus/ReviewNucleus'
import Navigator from '@/infrastructure/Navigator'
import Bus from '@/infrastructure/Bus'

describe('ReviewNucleus', () => {
  let navigatorStub
  let testable
  let busStub

  beforeEach(() => {
    testable = new ReviewNucleus()
    navigatorStub = stub(Navigator, 'goTo')
  })

  afterEach(() => {
    if(navigatorStub) navigatorStub.restore()
    if(busStub) busStub.restore()
    Bus.reset()
  })

  it('starts by asking for the tip to review', () => {
    busStub = stub(Bus, 'publish')
    location.hash = '/review/AN_ID'

    testable.start()

    expect(Bus.publish).to.have.been.calledWith(
      'tips',
      'retrieve.tip',
      {id: 'AN_ID'}
    )
  })

  it('keeps the tip when available', () => {
    testable.subscribe()
    let tip = aTip()

    Bus.publish('tips', 'tip.ready', { tip })

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