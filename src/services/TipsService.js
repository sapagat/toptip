class TipsService {
  constructor (bus) {
    this.bus = bus
    this.tips = []

    this.subscribe()
  }

  subscribe () {
    this.bus.subscribe('tips', 'fetch.list', () => {
      this.provideList()
    })
    this.bus.subscribe('tips', 'store.tip', (data) => {
      this.store(data.tip)
    })
    this.bus.subscribe('tips', 'retrieve.tip', (data) => {
      this.retrieve(data.id)
    })
    this.bus.subscribe('tips', 'save.reaction', (data) => {
      let tipId = data.id
      let reaction = data.reaction
      this.saveReaction(tipId, reaction)
    })
  }

  provideList () {
    this.bus.publish('tips', 'list.ready', this.tips)
  }

  store (tip) {
    tip['id'] = this.generateId()

    this.tips.push(tip)

    this.bus.publish('tips', 'tip.stored', {tip})
  }

  retrieve (id) {
    let tip = this.find(id)
    this.bus.publish('tips', 'tip.ready', {tip})
  }

  saveReaction (id, reaction) {
    let tip = this.find(id)
    tip.reaction = reaction

    this.bus.publish('tips', 'tip.updated', { tip })
  }

  find (id) {
    let tip = this.tips.find((stored) => {
      return stored.id === parseInt(id)
    })
    return tip
  }

  generateId () {
    let incremenetalId = this.tips.length + 1
    return incremenetalId
  }
}

export default TipsService
