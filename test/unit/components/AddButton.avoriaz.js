import AddButton from '@/components/AddButton'
import { mount } from 'avoriaz'

describe('AddButton', () => {
  it('handles clicks', () => {
    const handler = stub()
    const wrapper = mount(AddButton, {
      propsData: { onClick: handler }
    })

    wrapper.first('#add_tip').trigger('click')

    expect(handler).to.have.been.called
  })
})
