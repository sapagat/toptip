import Navigator from '../infrastructure/Navigator'
import Nucleus from './Nucleus'

class ReviewNucleus extends Nucleus {
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
    this.subscribeTo('tips', 'tip.ready', (data) => {
      this.tip = data.tip
    })
  }

  start () {
    let tipId = Navigator.id()
    this.publish('tips', 'retrieve.tip', { id: tipId })
  }

  goToMain () {
    Navigator.goTo('/')
  }
}

export default ReviewNucleus
