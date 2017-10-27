import RegistryPageEnsemble from '@/ensembles/RegistryPage'
import { mount } from 'avoriaz'
import TestBus from '../helpers/TestBus'

describe('RegistryPage Ensemble', () => {
  let routerStub
  let router = { push () {} }
  let bus

  beforeEach(() => {
    bus = new TestBus()
  })

  afterEach(() => {
    if(routerStub) routerStub.restore()
  })

  it('binds a tip to its only son', () => {
    const wrapper = mount(RegistryPageEnsemble, {
      globals: {
        $bus: bus
      }
    })
    const tip = aTip()

    wrapper.setData({tip})

    expect(wrapper.vm.$children[0].tip).to.eq(tip)
  })

  it('says to its only son when the tip is storable', () => {
    const wrapper = mount(RegistryPageEnsemble, {
      globals: {
        $bus: bus
      }
    })

    wrapper.setData({tip: aCompleteTip()})

    expect(wrapper.vm.$children[0].storable).to.eq(true)
  })

  it('says to its only son when the tip is not storable', () => {
    const wrapper = mount(RegistryPageEnsemble, {
      globals: {
        $bus: bus
      }
    })

    wrapper.setData({tip: anIncompleteTip()})

    expect(wrapper.vm.$children[0].storable).to.eq(false)
  })

  it('stores the tip when notified by its only son', () => {
    const wrapper = mount(RegistryPageEnsemble, {
      globals: {
        $bus: bus
      }
    })
    const tip = aTip()

    wrapper.setData({tip})
    wrapper.vm.$children[0].$emit('storeTip', tip)

    expectPublicationMadeOn('tips', 'store.tip')
    const tipStored = lastDataIn('tips','store.tip').tip
    expect(tipStored).to.equal(tip)
  })

  it('redirects to the main page once a tip has been stored', () => {
    routerStub = stub(router, 'push')
    const wrapper = mount(RegistryPageEnsemble, {
      globals: {
        $router: router,
        $bus: bus
      }
    })
    const tip = aTip()

    bus.publish('tips', 'tip.stored')

    expect(router.push).to.have.been.calledWith('/')
  })

  it('goes back to main page when notified by its only son', () => {
    routerStub = stub(router, 'push')
    const wrapper = mount(RegistryPageEnsemble, {
      globals: {
        $router: router,
        $bus: bus
      }
    })

    wrapper.vm.$children[0].$emit('goBack')

    expect(router.push).to.have.been.calledWith('/')
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
})
