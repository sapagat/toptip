class TipsService {
  constructor (bus) {
    this.bus = bus
    this.subscribe()
  }

  subscribe () {
    this.bus.subscribe('tips', 'fetch.list', () => {
      this.provideList()
    })
  }

  provideList () {
    this.bus.publish('tips', 'list.ready', this.stubbedTipsList())
  }

  stubbedTipsList () {
    return [
      { id: 1, name: 'Bar Aragon', address: 'Barón de San Petrillo (Beni)', advisor: 'Manel', message: 'You must try the handed ice' },
      { id: 2, name: 'Plaerdemavida', address: 'Compte d\'Altea', advisor: 'Eduardo Sebastian', message: 'Sassera, vino blanco' }
    ]
  }
}

export default TipsService
