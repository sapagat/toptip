import Bus from '../infrastructure/Bus'
import Navigator from '../infrastructure/Navigator'

class MainCore {
  constructor () {
    this.tips = []
  }

  goods () {
    return {
      tips: this.tips
    }
  }

  subscribe () {
    Bus.subscribe('tips', 'list.ready', (tips) => {
      tips.forEach((tip) => { this.tips.push(tip) })
    })
  }

  start () {
    Bus.publish('tips', 'fetch.list')
  }

  goToRegistry () {
    Navigator.goTo('/registry')
  }

  goToReview (data) {
    Navigator.goTo('/review/' + data.id)
  }
}

export default MainCore