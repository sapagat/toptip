import TestBus from '../helpers/TestBus'
import MainNucleus from '@/nucleus/MainNucleus'

describe('MainNucleus', () => {
  let testable
  let bus

  beforeEach(() => {
    bus = new TestBus()
    testable = new MainNucleus(bus)
  })

  it('starts asking for the tips list', () => {
    testable.start()

    expect(bus).to.have.publishedOn('tips', 'fetch.list')
  })

  it('keeps the tips when available', () => {
    testable.subscribe()
    let list = [aTip()]

    bus.publish('tips','list.ready', list)

    expect(testable.tips[0]).to.include(aTip())
  })

  it('asks to go to the registry', () => {
    testable.goToRegistry()

    expect(bus).to.have.publishedOn('router','go.registry')
  })

  it('asks to go to review a tip', () => {
    testable.goToReview({id: 'AN_ID'})

    expect(bus).to.have.publishedOn('router','go.review')
    expect(bus).to.have.sentInData('id', 'AN_ID')
  })

  function aTip () {
    return { foo: 'bar' }
  }
})
