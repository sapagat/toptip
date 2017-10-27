import RegistryPageEnsemble from '@/ensembles/RegistryPage'
import { mount } from 'avoriaz'
import TestBus from '../helpers/TestBus'
import { onlySonOf } from '../helpers/OnlySon'

describe('RegistryPage Ensemble', () => {
  let routerStub
  let router = { push () {} }
  let bus
  let wrapper

  beforeEach(() => {
    bus = new TestBus()
    routerStub = stub(router, 'push')

    wrapper = mount(RegistryPageEnsemble, {
      globals: {
        $bus: bus,
        $router: router
      }
    })
  })

  afterEach(() => {
    if(routerStub) routerStub.restore()
  })

  it('binds a tip to its only son', () => {
    const tip = aTip()

    wrapper.setData({tip})

    expect(onlySonOf(wrapper).property('tip')).to.eq(tip)
  })

  it('says to its only son when the tip is storable', () => {
    wrapper.setData({tip: aCompleteTip()})

    expect(onlySonOf(wrapper).property('storable')).to.eq(true)
  })

  it('says to its only son when the tip is not storable', () => {
    wrapper.setData({tip: anIncompleteTip()})

    expect(onlySonOf(wrapper).property('storable')).to.eq(false)
  })

  it('stores the tip when notified by its only son', () => {
    const tip = aTip()
    wrapper.setData({tip})

    onlySonOf(wrapper).fire('storeTip', tip)

    expectPublicationMadeOn('tips', 'store.tip')
    const tipStored = lastDataIn('tips','store.tip').tip
    expect(tipStored).to.equal(tip)
  })

  it('redirects to the main page once a tip has been stored', () => {
    const tip = aTip()

    bus.publish('tips', 'tip.stored')

    expectRedirectionMadeTo('/')
  })

  it('goes back to main page when notified by its only son', () => {
    onlySonOf(wrapper).fire('goBack')

    expectRedirectionMadeTo('/')
  })

  function aTip () {
    return { name: 'Bar Manolo'}
  }

  function aCompleteTip () {
    return { name: 'Bar Manolo', address: 'Alboraya' }
  }

  function anIncompleteTip () {
    return {
      name: 'Bar Manolo'
    }
  }

  function expectPublicationMadeOn (channel, topic) {
    let publications = bus.publicationsIn(channel,topic)
    expect(publications).not.to.be.empty
  }

  function lastDataIn (channel, topic) {
    return bus.lastDataIn(channel, topic)
  }

  function expectRedirectionMadeTo (path) {
    expect(router.push).to.have.been.calledWith(path)
  }
})
