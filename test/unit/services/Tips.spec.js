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

  afterEach(() => {
    window.localStorage.clear()
  })

  describe('fetch.list', () => {
    it('publishes the list on list.ready', () => {
      let tip = aTip()
      collection.store(tip)

      bus.publish('tips', 'fetch.list')

      expect(bus).to.have.publishedOn('tips', 'list.ready')
      let tipList = bus.lastDataIn('tips', 'list.ready')
      expect(tipList[0]).to.include(tip)
    })
  })

  describe('store.tip', () => {
    it('register tips', () => {
      let tip = aTip()

      bus.publish('tips', 'store.tip', { tip })

      let stored = collection.find(tip.id)
      expect(stored.name).to.equal(tip.name)
    })

    it('publshes tip.stored', () => {
      let tip = aTip()

      bus.publish('tips', 'store.tip', { tip })

      expect(bus).to.have.publishedOn('tips', 'tip.stored')
    })
  })

  describe('retrieve.tip', () => {
    it('publishes the tip on tip.ready', () => {
      let tip = aTip()
      collection.store(tip)

      bus.publish('tips', 'retrieve.tip', { id: tip.id })

      expect(bus).to.have.publishedOn('tips', 'tip.ready')
      expect(bus).to.have.sentInData('tip', tip)
    })
  })

  describe('save.reaction', () => {
    it('registers the reaction to a tip', () => {
      let tip = aTip()
      let reaction = 'Lovely'
      collection.store(tip)

      bus.publish('tips', 'save.reaction', { id: tip.id, reaction: reaction})

      expect(collection.find(tip.id).reaction).to.equal(reaction)
    })

    it('publishes the updated tip on tip.updated', () => {
      let tip = aTip()
      let reaction = 'Lovely'
      collection.store(tip)

      bus.publish('tips', 'save.reaction', { id: tip.id, reaction: reaction})

      expect(bus).to.have.publishedOn('tips', 'tip.updated')
      let publishedTip = bus.lastPublication.data.tip
      expect(publishedTip.id).to.equal(tip.id)
      expect(publishedTip.reaction).to.equal(reaction)
    })
  })

  describe('delete.tip', () => {
    it('removes the tip', () => {
      let tip = aTip()
      collection.store(tip)

      bus.publish('tips', 'delete.tip', { id: tip.id })

      expect(collection.exists(tip.id)).to.equal(false)
    })

    it('publishes on tip.deleted', () => {
      let tip = aTip()
      collection.store(tip)

      bus.publish('tips', 'delete.tip', { id: tip.id })

      expect(bus).to.have.publishedOn('tips', 'tip.deleted')
    })
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
