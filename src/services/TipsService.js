import Service from './Service'

class TipsService extends Service {
  constructor (bus) {
    super(bus)

    this.tips = []
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
  }

  provideList () {
    this.publish('tips', 'list.ready', this.tips)
  }

  store (tip) {
    tip['id'] = this.generateId()

    this.tips.push(tip)

    this.publish('tips', 'tip.stored', {tip})
  }

  retrieve (id) {
    let tip = this.find(id)
    this.publish('tips', 'tip.ready', {tip})
  }

  saveReaction (id, reaction) {
    let tip = this.find(id)
    tip.reaction = reaction

    this.publish('tips', 'tip.updated', { tip })
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
