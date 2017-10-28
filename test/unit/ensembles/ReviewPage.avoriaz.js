import ReviewPageEnsemble from '@/ensembles/ReviewPage'
import { mount } from 'avoriaz'
import { onlySonOf } from '../helpers/OnlySon'
import TestBus from '../helpers/TestBus'

describe('ReviewPage Ensemble', () => {
  let router
  let wrapper
  let bus
  let route

  beforeEach(() => {
    bus = new TestBus()
    router = { push() {} }
    route = { params: { id: 'AN_ID'} }
    stub(router, 'push')

    wrapper = mount(ReviewPageEnsemble, {
      globals: {
        $bus: bus,
        $router: router,
        $route: route
      }
    })
  })

  it('asks for the tip to review once mounted', () => {
    expectPublicationMadeOn('tips', 'retrieve.tip')

    const requestedId = lastDataIn('tips','retrieve.tip').id
    expect(requestedId).to.equal('AN_ID')
  })

  it('redirects to main page when notified by its only son', () => {
    onlySonOf(wrapper).fire('goBack')

    expectRedirectionMadeTo('/')
  })

  it('keeps the tip when available', () => {
    let tip = aTip()

    bus.publish('tips', 'tip.ready', {tip})

    expect(wrapper.vm.tip).to.equal(tip)
  })

  function expectPublicationMadeOn (channel, topic) {
    let publications = bus.publicationsIn(channel,topic)
    expect(publications).not.to.be.empty
  }

  function expectRedirectionMadeTo (path) {
    expect(router.push).to.have.been.calledWith(path)
  }

  function lastDataIn (channel, topic) {
    return bus.lastDataIn(channel, topic)
  }

  function aTip() {
    return {
      id: 1,
      name: 'La murta'
    }
  }
})
