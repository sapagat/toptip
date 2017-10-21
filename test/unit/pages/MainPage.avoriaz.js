import MainPage from '@/pages/MainPage'
import { mount } from 'avoriaz'

describe('MainPage', () => {
  it('displays a tip list', () => {
    const wrapper = mount(MainPage, {
      propsData: { tips : someTips() }
    })

    expect(wrapper.html()).to.contain('La Lola')
    expect(wrapper.html()).to.contain('Port Saplaya')
    expect(wrapper.html()).to.contain('Bravas muy pro!')
    expect(wrapper.html()).to.contain('Pucho')
  })

  it('asks to go to the registry', () => {
    const wrapper = mount(MainPage)
    stub(wrapper.vm, '$emit')

    wrapper.first('#add_tip').trigger('click')

    expect(wrapper.vm.$emit).to.have.been.calledWith('goToRegistry')
  })

  function someTips () {
    return [
      {
        name: 'La Lola',
        address: 'Port Saplaya',
        message: 'Bravas muy pro!',
        advisor: 'Pucho'
      }
    ]
  }
})
