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

  it('ask for a tip deletion', () => {
    let id = 1123123

    testable.delete(id)

    expect(bus).to.have.publishedOn('tips', 'delete.tip')
    expect(bus).to.have.sentInData('id', id)
  })

  it('once a tip is deleted it refreshes the list', () => {
    testable.subscribe()

    bus.publish('tips', 'tip.deleted')

    expect(bus).to.have.publishedOn('tips', 'fetch.list')
  })

  function aTip () {
    return { foo: 'bar' }
  }
})
