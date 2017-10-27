import MainPageEnsemble from '@/ensembles/MainPage'
import { mount } from 'avoriaz'
import TestBus from '../helpers/TestBus'

describe('MainPage Ensemble', () => {
  let router
  let bus

  beforeEach(() => {
    bus = new TestBus()
    router = { push() {} }
    stub(router, 'push')
  })

  it('asks for the tips list once mounted', () => {
    const wrapper = mount(MainPageEnsemble, {
      globals: {
        $bus: bus
      }
    })

    expectPublicationMadeOn('tips', 'fetch.list')
  })

  it('binds tips to its only son', () => {
    const wrapper = mount(MainPageEnsemble, {
      globals: {
        $bus: bus
      }
    })
    const list = [{ name: 'La Murta' }]

    wrapper.setData({tips: list})

    expect(wrapper.vm.$children[0].tips).to.eq(list)
  })

  it('saves the tips list when ready', () => {
    const wrapper = mount(MainPageEnsemble, {
      globals: {
        $bus: bus
      }
    })
    const list = [{ name: 'La Murta' }]

    bus.publish('tips', 'list.ready', list)

    expect(wrapper.vm.tips).to.equals(list)
  })


  it('redirects to /registry when notified from its only son', () => {
    const wrapper = mount(MainPageEnsemble, {
      globals: {
        $router: router,
        $bus: bus
      }
    })

    wrapper.vm.$children[0].$emit('goToRegistry')

    expect(router.push).to.have.been.calledWith('/registry')
  })

  function expectPublicationMadeOn (channel, topic) {
    let publications = bus.publicationsIn(channel,topic)
    expect(publications).not.to.be.empty
  }
})
