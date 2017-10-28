import TestBus from '../helpers/TestBus'
import Navigator from '@/infrastructure/Navigator'
import MainNucleus from '@/nucleus/MainNucleus'

describe('MainNucleus', () => {
  let testable
  let navigatorStub
  let bus

  beforeEach(() => {
    bus = new TestBus()
    testable = new MainNucleus(bus)
    navigatorStub = stub(Navigator, 'goTo')
  })

  afterEach(() => {
    if(navigatorStub) navigatorStub.restore()
  })

  it('starts asking for the tips list', () => {
    testable.start()

    expect(bus).to.have.publishedOn('tips', 'fetch.list')
  })

  it('saves the tips when available', () => {
    testable.subscribe()
    let list = [aTip()]

    bus.publish('tips','list.ready', list)

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
