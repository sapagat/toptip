import Service from './Service'

class Tips extends Service {
  constructor (bus, collection) {
    super(bus)

    this.collection = collection
  }

  subscribe () {
    this.subscribeTo('tips', 'fetch.list', () => {
      this.provideList()
    })
    this.subscribeTo('tips', 'store.tip', (data) => {
      this.store(data.tip)
    })
    this.subscribeTo('tips', 'retrieve.tip', (data) => {
      this.retrieve(data.id)
    })
    this.subscribeTo('tips', 'save.reaction', (data) => {
      let tipId = data.id
      let reaction = data.reaction
      this.saveReaction(tipId, reaction)
    })
    this.subscribeTo('tips', 'delete.tip', (data) => {
      let tipId = data.id
      this.delete(tipId)
    })
  }

  provideList () {
    this.publish('tips', 'list.ready', this.collection.all())
  }

  store (tip) {
    tip['id'] = this.generateId()

    this.collection.store(tip)

    this.publish('tips', 'tip.stored', {tip})
  }

  retrieve (id) {
    let tip = this.collection.find(id)
    this.publish('tips', 'tip.ready', {tip})
  }

  saveReaction (id, reaction) {
    let tip = this.collection.find(id)
    tip.reaction = reaction
    this.collection.store(tip)

    this.publish('tips', 'tip.updated', { tip })
  }

  delete (id) {
    this.collection.delete(id)

    this.publish('tips', 'tip.deleted')
  }

  generateId () {
    return Date.now()
  }
}

export default Tips
