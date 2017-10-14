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
      { id: 2, name: 'Plaerdemavida', address: 'Compte d\'Altea', advisor: 'Eduardo Sebastian', message: 'Sassera, vino blanco' },
      { id: 3, name: 'Isaac', address: 'Al costat de la placa de Beni', advisor: 'El alcalde', message: 'Orden y concierto' },
      { id: 4, name: 'Isaac', address: 'Al costat de la placa de Beni', advisor: 'El alcalde', message: 'Orden y concierto' },
      { id: 5, name: 'Isaac', address: 'Al costat de la placa de Beni', advisor: 'El alcalde', message: 'Orden y concierto' },
      { id: 6, name: 'Isaac', address: 'Al costat de la placa de Beni', advisor: 'El alcalde', message: 'Orden y concierto' },
      { id: 7, name: 'Isaac', address: 'Al costat de la placa de Beni', advisor: 'El alcalde', message: 'Orden y concierto' },
      { id: 8, name: 'Isaac', address: 'Al costat de la placa de Beni', advisor: 'El alcalde', message: 'Orden y concierto' },
      { id: 9, name: 'Isaac', address: 'Al costat de la placa de Beni', advisor: 'El alcalde', message: 'Orden y concierto' }
    ]
  }
}

export default TipsService
