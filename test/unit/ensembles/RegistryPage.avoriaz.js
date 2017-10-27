import RegistryPageEnsemble from '@/ensembles/RegistryPage'
import { mount } from 'avoriaz'
import Bus from '@/infrastructure/Bus'

describe('RegistryPage Ensemble', () => {
  let busStub
  let routerStub
  let router = { push () {} }

  beforeEach(() => {
    Bus.reset()
  })

  afterEach(() => {
    if(busStub) busStub.restore()
    if(routerStub) routerStub.restore()
  })

  it('binds a tip to its only son', () => {
    const wrapper = mount(RegistryPageEnsemble)
    const tip = aTip()

    wrapper.setData({tip})

    expect(wrapper.vm.$children[0].tip).to.eq(tip)
  })

  it('stores the tip when notified by its only son', () => {
    busStub = stub(Bus, 'publish')
    const wrapper = mount(RegistryPageEnsemble)
    const tip = aTip()

    wrapper.setData({tip})
    wrapper.vm.$children[0].$emit('storeTip', tip)

    expect(Bus.publish).to.have.been.calledWith('tips','store.tip', {tip})
  })

  it('redirects to  once a tip has been stored', () => {
    routerStub = stub(router, 'push')
    const wrapper = mount(RegistryPageEnsemble, {
      globals: {
        $router: router
      }
    })
    const tip = aTip()

    Bus.publish('tips', 'tip.stored')

    expect(router.push).to.have.been.calledWith('/')
  })

  function aTip () {
    return { name: 'Bar Manolo'}
  }
})
