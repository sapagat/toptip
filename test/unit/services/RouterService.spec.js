import TestBus from '../helpers/TestBus'
import RouterService from '../../../src/services/RouterService'
import Navigator from '@/infrastructure/Navigator'

describe ('Router Service', () => {
  let bus
  let navigatorStub

  beforeEach(() => {
    bus = new TestBus()
    new RouterService(bus)
    navigatorStub = stub(Navigator, 'goTo')
  })

  afterEach(() => {
    if(navigatorStub) navigatorStub.restore()
  })

  it('redirects to the registry page', () => {
    bus.publish('router', 'go.registry')

    expect(Navigator.goTo).to.have.been.calledWith('/registry')
  })

  it('redirects to the review page', () => {
    bus.publish('router', 'go.review', { id: 'AN_ID'})

    expect(Navigator.goTo).to.have.been.calledWith('/review/AN_ID')
  })

  it('redirects to the main page', () => {
    bus.publish('router', 'go.main')

    expect(Navigator.goTo).to.have.been.calledWith('/')
  })

  it('provides information about the current route', () => {
    location.hash = '/review/AN_ID'

    bus.publish('router', 'provide.details')

    expect(bus).to.have.publishedOn('router', 'details.ready')
    expect(bus).to.have.sentInData('id', 'AN_ID')
  })
})
