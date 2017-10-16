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
  }

  provideList () {
    this.bus.publish('tips', 'list.ready', this.tips)
  }

  store (tip) {
    this.tips.push(tip)
    this.bus.publish('tips', 'tip.stored')
  }
}

export default TipsService
