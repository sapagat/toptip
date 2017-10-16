import { expect } from 'chai'
import TestBus from './helpers/TestBus'
import TipsService from '../../src/services/TipsService'

describe('Tips Service', () => {
  let bus

  beforeEach(() => {
    bus = new TestBus()
    new TipsService(bus)
  })

  it('provides the list of registered tips', () => {
    let tip = aTip()
    bus.publish('tips', 'store.tip', { tip })


    bus.publish('tips', 'fetch.list')

    expectPublicationMadeOn('tips', 'list.ready')
    expect(lastDataIn('tips', 'list.ready')[0]).to.include(tip)
  })

  it('register tips', () => {
    let tip = aTip()

    bus.publish('tips', 'store.tip', { tip })

    expectPublicationMadeOn('tips', 'tip.stored')
  })

  function aTip () {
    return {
      name: 'A_NAME',
      address: 'AN_ADDRESS',
      message: 'A_MESSAGE',
      advisor: 'AN_ADVISOR'
    }
  }

  function expectPublicationMadeOn (channel, topic) {
    let publications = bus.publicationsIn(channel,topic)
    expect(publications).not.to.be.empty
  }

  function lastDataIn (channel, topic) {
    return bus.lastDataIn(channel, topic)
  }
})