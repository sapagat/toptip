import Navigator from '@/infrastructure/Navigator'
import TestBus from '../helpers/TestBus'
import RegistryNucleus from '@/nucleus/RegistryNucleus'

describe('RegistryNucleus', () => {
  let testable
  let navigatorStub
  let bus

  beforeEach(() => {
    bus = new TestBus()
    testable = new RegistryNucleus(bus)
    navigatorStub = stub(Navigator, 'goTo')
  })

  afterEach(() => {
    if(navigatorStub) navigatorStub.restore()
  })

  it('redirects to the main page once a tip has been stored', () => {
    testable.subscribe()

    bus.publish('tips', 'tip.stored')

    expect(Navigator.goTo).to.have.been.calledWith('/')
  })

  it('says when a tip is storable', () => {
    testable.tip = {
      name: 'La murta',
      address: 'Mursia'
    }

    expect(testable.storable()).to.equal(true)
  })

  it('stores the tip', () => {
    const tip = aTip()
    testable.tip = tip

    testable.storeTip()

    expect(bus).to.have.publishedOn('tips','store.tip')
    expect(bus).to.have.sentInData('tip', tip)
  })

  it('redirects to the main page', () => {
    testable.goToMain()

    expect(Navigator.goTo).to.have.been.calledWith('/')
  })

  function aTip () {
    return { name: 'Bar Manolo'}
  }
})

