import ReviewPageEnsemble from '@/ensembles/ReviewPage'
import { mount } from 'avoriaz'
import { onlySonOf } from '../helpers/OnlySon'

describe('ReviewPage Ensemble', () => {
  let router
  let wrapper

  beforeEach(() => {
    router = { push() {} }
    stub(router, 'push')

    wrapper = mount(ReviewPageEnsemble, {
      globals: {
        $router: router
      }
    })
  })

  it('redirects to main page when notified by its only son', () => {
    onlySonOf(wrapper).fire('goBack')

    expectRedirectionMadeTo('/')
  })

  function expectRedirectionMadeTo (path) {
    expect(router.push).to.have.been.calledWith(path)
  }
})
