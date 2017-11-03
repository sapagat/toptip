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
      this.keepList(this.tips, tips)
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

  keepList (target, source) {
    source.forEach((element) => { target.push(element) })
  }
}

export default MainNucleus
