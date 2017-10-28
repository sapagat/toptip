import Navigator from '../infrastructure/Navigator'
import Bus from '../infrastructure/Bus'
import Core from './Core'

class ReviewCore extends Core {
  constructor () {
    super()

    this.tip = {}
  }

  data () {
    return {
      tip: this.tip
    }
  }

  subscribe () {
    Bus.subscribe('tips', 'tip.ready', (data) => {
      this.tip = data.tip
    })
  }

  start () {
    let tipId = Navigator.id()
    Bus.publish('tips', 'retrieve.tip', { id: tipId })
  }

  goToMain () {
    Navigator.goTo('/')
  }
}

export default ReviewCore
