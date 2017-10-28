import Navigator from '../infrastructure/Navigator'
import Nucleus from './Nucleus'

class MainNucleus extends Nucleus {
  constructor (bus) {
    super(bus)

    this.tips = []
  }

  data () {
    return {
      tips: this.tips
    }
  }

  subscribe () {
    this.subscribeTo('tips', 'list.ready', (tips) => {
      tips.forEach((tip) => { this.tips.push(tip) })
    })
  }

  start () {
    this.publish('tips', 'fetch.list')
  }

  goToRegistry () {
    Navigator.goTo('/registry')
  }

  goToReview (data) {
    Navigator.goTo('/review/' + data.id)
  }
}

export default MainNucleus
