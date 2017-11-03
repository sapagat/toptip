import TestBus from '../helpers/TestBus'
import RegistryNucleus from '@/nucleus/RegistryNucleus'

describe('RegistryNucleus', () => {
  let testable
  let bus

  beforeEach(() => {
    bus = new TestBus()
    testable = new RegistryNucleus(bus)
  })

  it('asks to go to the main page once a tip has been stored', () => {
    testable.subscribe()

    bus.publish('tips', 'tip.stored')

    expect(bus).to.have.publishedOn('router', 'go.main')
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

  it('asks to go to the main page', () => {
    testable.goToMain()

    expect(bus).to.have.publishedOn('router', 'go.main')
  })

  function aTip () {
    return { name: 'Bar Manolo'}
  }
})
