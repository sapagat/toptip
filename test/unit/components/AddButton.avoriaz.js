import AddButton from '@/components/AddButton'
import { mount } from 'avoriaz'

describe('AddButton', () => {
  it('redirects to /registry', () => {
    const router = { push() {} }
    stub(router, 'push')

    const wrapper = mount(AddButton, {
      globals: {
        $router: router
      }
    })

    wrapper.first('#add_tip').trigger('click')

    expect(router.push).to.have.been.calledWith('/registry')
  })
})
