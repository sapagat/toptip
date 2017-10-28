import Bus from '@/infrastructure/Bus'
import Navigator from '@/infrastructure/Navigator'
import MainCore from '@/cores/MainCore'

describe('MainCore', () => {
  let testable
  let navigatorStub
  let busStub

  beforeEach(() => {
    testable = new MainCore()
    navigatorStub = stub(Navigator, 'goTo')
  })

  afterEach(() => {
    if(navigatorStub) navigatorStub.restore()
    if(busStub) busStub.restore()

    Bus.reset()
  })

  it('starts asking for the tips list', () => {
    busStub = stub(Bus, 'publish')

    testable.start()

    expect(Bus.publish).to.have.been.calledWith('tips','fetch.list')
  })

  it('saves the tips when available', () => {
    testable.subscribe()
    let list = [aTip()]

    Bus.publish('tips','list.ready', list)

    expect(testable.tips[0]).to.include(aTip())
  })

  it('redirects to the registry', () => {
    testable.goToRegistry()

    expect(Navigator.goTo).to.have.been.calledWith('/registry')
  })

  it('redirects to a tip review', () => {
    testable.goToReview({id: 'AN_ID'})

    expect(Navigator.goTo).to.have.been.calledWith('/review/AN_ID')
  })

  function aTip () {
    return { foo: 'bar' }
  }
})
