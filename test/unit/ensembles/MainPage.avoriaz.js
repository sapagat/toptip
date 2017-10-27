import MainPageEnsemble from '@/ensembles/MainPage'
import { mount } from 'avoriaz'
import Bus from '@/infrastructure/Bus'

describe('MainPage Ensemble', () => {
  let router

  beforeEach(() => {
    router = { push() {} }
    stub(router, 'push')
  })

  afterEach(() => {
    Bus.reset()
  })

  describe('once mounted', () => {
    let busStub

    before(() => {
      busStub = stub(Bus, 'publish')
    })

    after(() => {
      busStub.restore()
    })

    it('asks for the tips list', () => {
      const wrapper = mount(MainPageEnsemble)

      expect(Bus.publish).to.have.been.calledWith('tips','fetch.list')
    })
  })

  it('binds tips to its only son', () => {
    const wrapper = mount(MainPageEnsemble)
    const list = [{ name: 'La Murta' }]

    wrapper.setData({tips: list})

    expect(wrapper.vm.$children[0].tips).to.eq(list)
  })

  it('saves the tips list when ready', () => {
    const wrapper = mount(MainPageEnsemble)
    const list = [{ name: 'La Murta' }]

    Bus.publish('tips', 'list.ready', list)

    expect(wrapper.vm.tips).to.equals(list)
  })


  it('redirects to /registry when notified from its only son', () => {
    const wrapper = mount(MainPageEnsemble, {
      globals: {
        $router: router
      }
    })

    wrapper.vm.$children[0].$emit('goToRegistry')

    expect(router.push).to.have.been.calledWith('/registry')
  })
})
