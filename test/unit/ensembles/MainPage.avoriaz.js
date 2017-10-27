import MainPageEnsemble from '@/ensembles/MainPage'
import { mount } from 'avoriaz'
import TestBus from '../helpers/TestBus'
import { onlySonOf } from '../helpers/OnlySon'

describe('MainPage Ensemble', () => {
  let router
  let bus
  let wrapper

  beforeEach(() => {
    bus = new TestBus()
    router = { push() {} }
    stub(router, 'push')

    wrapper = mount(MainPageEnsemble, {
      globals: {
        $router: router,
        $bus: bus
      }
    })
  })

  it('asks for the tips list once mounted', () => {
    expectPublicationMadeOn('tips', 'fetch.list')
  })

  it('binds tips to its only son', () => {
    const list = [{ name: 'La Murta' }]

    wrapper.setData({tips: list})

    expect(onlySonOf(wrapper).property('tips')).to.eq(list)
  })

  it('saves the tips list when ready', () => {
    const list = [{ name: 'La Murta' }]

    bus.publish('tips', 'list.ready', list)

    expect(wrapper.vm.tips).to.equals(list)
  })


  it('redirects to /registry when notified from its only son', () => {
    onlySonOf(wrapper).fire('goToRegistry')

    expectRedirectionMadeTo('/registry')
  })

  it('redirects to the review page when notified by its only son', () => {
    onlySonOf(wrapper).fire('goToReview')

    expectRedirectionMadeTo('/review')
  })

  function expectPublicationMadeOn (channel, topic) {
    let publications = bus.publicationsIn(channel,topic)
    expect(publications).not.to.be.empty
  }

  function expectRedirectionMadeTo (path) {
    expect(router.push).to.have.been.calledWith(path)
  }
})
