import Navigator from '../infrastructure/Navigator'
import Nucleus from './Nucleus'

class RegistryNucleus extends Nucleus {
  constructor (bus) {
    super(bus)

    this.tip = {}
  }

  data () {
    return {
      tip: this.tip
    }
  }

  subscribe () {
    this.subscribeTo('tips', 'tip.stored', () => {
      this.goToMain()
    })
  }

  storeTip () {
    this.publish('tips', 'store.tip', { tip: this.tip })
  }

  storable () {
    if (this.isEmpty(this.tip.name)) return false
    if (this.isEmpty(this.tip.address)) return false

    return true
  }

  goToMain () {
    Navigator.goTo('/')
  }

  isEmpty (field) {
    return field === undefined || field === ''
  }
}

export default RegistryNucleus
