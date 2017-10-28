import Navigator from '@/infrastructure/Navigator'
import Bus from '@/infrastructure/Bus'
import RegistryCore from '@/core/RegistryCore'

describe('RegistryCore', () => {
  let testable

  before(() => {
    testable = new RegistryCore()
    stub(Navigator, 'goTo')
  })

  after(() => {
    Bus.reset()
  })

  it('redirects to the main page once a tip has been stored', () => {
    testable.subscribe()

    Bus.publish('tips','tip.stored')

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
    stub(Bus, 'publish')
    const tip = aTip()

    testable.tip = tip

    testable.storeTip()

    expect(Bus.publish).to.have.been.calledWith('tips', 'store.tip', {tip})
  })

  it('redirects to the main page', () => {
    testable.goToMain()

    expect(Navigator.goTo).to.have.been.calledWith('/')
  })

  function aTip () {
    return { name: 'Bar Manolo'}
  }
})

