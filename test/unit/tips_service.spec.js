import { expect } from 'chai'
import TestBus from './helpers/TestBus'
import TipsService from '../../src/services/TipsService'

describe('Tips Service', () => {
  it('provides the list of registered tips', () => {
    const bus = new TestBus()
    new TipsService(bus)

    bus.publish('tips', 'fetch.list')

    const publications = bus.publicationsIn('tips','list.ready')
    expect(publications).not.to.be.empty
    const firstTip = bus.lastDataIn('tips','list.ready')[0]
    expect(firstTip).to.include({
      id: 1,
      name: 'Bar Aragon',
      address: 'Barón de San Petrillo (Beni)',
      advisor: 'Manel',
      message: 'You must try the handed ice'
    })
  })
})