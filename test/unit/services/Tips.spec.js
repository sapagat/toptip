import TestBus from '../helpers/TestBus'
import TipsService from '../../../src/services/Tips'
import Collection from '../../../src/services/Tips/Collection'

describe('Tips Service', () => {
  let bus
  let collection

  beforeEach(() => {
    bus = new TestBus()
    collection = new Collection()
    new TipsService(bus, collection)
  })

  it('provides the list of registered tips', () => {
    let tip = aTip()
    bus.publish('tips', 'store.tip', { tip })

    bus.publish('tips', 'fetch.list')

    expect(bus).to.have.publishedOn('tips', 'list.ready')
    let tipList = bus.lastDataIn('tips', 'list.ready')
    expect(tipList[0]).to.include(tip)
  })

  it('register tips', () => {
    let tip = aTip()

    bus.publish('tips', 'store.tip', { tip })

    expect(bus).to.have.publishedOn('tips', 'tip.stored')
  })

  it('retrieves tips', () => {
    let tip = aTip()
    bus.publish('tips', 'store.tip', {tip})
    let storedTip = bus.lastDataIn('tips','tip.stored').tip

    bus.publish('tips', 'retrieve.tip', { id: storedTip.id })

    expect(bus).to.have.publishedOn('tips', 'tip.ready')
    expect(bus).to.have.sentInData('tip', storedTip)
  })

  it('registers a reaction to a tip', () => {
    let tip = aTip()
    bus.publish('tips', 'store.tip', {tip})
    let storedTip = bus.lastDataIn('tips','tip.stored').tip

    bus.publish('tips', 'save.reaction', { id: storedTip.id, reaction: 'Lovely'})

    expect(bus).to.have.publishedOn('tips', 'tip.updated')
    let updatedTip = storedTip
    updatedTip.reaction = 'Lovely'
    expect(bus).to.have.sentInData('tip', updatedTip)
  })

  it('removes tips', () => {
    let tip = aTip()
    bus.publish('tips', 'store.tip', {tip})
    let storedTip = bus.lastDataIn('tips','tip.stored').tip

    bus.publish('tips', 'delete.tip', { id: storedTip.id })

    expect(bus).to.have.publishedOn('tips', 'tip.deleted')
  })

  function aTip () {
    return {
      name: 'A_NAME',
      address: 'AN_ADDRESS',
      message: 'A_MESSAGE',
      advisor: 'AN_ADVISOR'
    }
  }
})
