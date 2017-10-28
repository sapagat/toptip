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
      this.find(data.id)
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

  find (id) {
    let tip = this.tips.find((stored) => {
      return stored.id === parseInt(id)
    })
    this.bus.publish('tips', 'tip.ready', {tip})
  }

  generateId () {
    let incremenetalId = this.tips.length + 1
    return incremenetalId
  }
}

export default TipsService
