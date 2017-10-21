import MainPage from '@/pages/MainPage'
import { mount } from 'avoriaz'
import { shallow } from 'avoriaz'
import Bus from '@/infrastructure/Bus'
import Vue from 'vue'

describe('MainPage', () => {
  let router

  beforeEach(() => {
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

  describe('once mounted', () => {
    let busStub

    before(() => {
      busStub = stub(Bus, 'publish')
    })

    after(() => {
      busStub.restore()
    })

    it('asks for the tips list', () => {
      const wrapper = mount(MainPage)

      expect(Bus.publish).to.have.been.calledWith('tips','fetch.list')
    })
  })

  it('displays the tips when they are ready', () => {
    const wrapper = mount(MainPage)
    const list = [{ name: 'La Murta' }]

    Bus.publish('tips', 'list.ready', list)

    expect(wrapper.vm.tips).to.equals(list)
    return Vue.nextTick().
      then(() => { expect(wrapper.html()).to.contain('La Murta') })
  })
})
