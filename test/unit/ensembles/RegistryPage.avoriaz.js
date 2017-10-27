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

  it('redirects to  once a tip has been stored', () => {
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

  function aTip () {
    return { name: 'Bar Manolo'}
  }

  function expectPublicationMadeOn (channel, topic) {
    let publications = bus.publicationsIn(channel,topic)
    expect(publications).not.to.be.empty
  }

  function lastDataIn (channel, topic) {
    return bus.lastDataIn(channel, topic)
  }
})
