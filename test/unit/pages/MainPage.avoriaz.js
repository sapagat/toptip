import MainPage from '@/pages/MainPage'
import { mount } from 'avoriaz'

describe('MainPage', () => {
  let router

  before(() => {
    router = { push() {} }
    stub(router, 'push')
  })

  it('redirects to /registry by clicking the add button', () => {
    const wrapper = mount(MainPage, {
      globals: {
        $router: router
      }
    })

    wrapper.first('#add_tip').trigger('click')

    expect(router.push).to.have.been.calledWith('/registry')
  })
})
