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
      this.tip.id = data.tip.id
    })
    this.subscribeTo('tips', 'tip.updated', () => {
      this.goToMain()
    })
  }

  start () {
    let tipId = Navigator.id()
    this.publish('tips', 'retrieve.tip', { id: tipId })
  }

  saveable () {
    return !this.isEmpty(this.tip.reaction)
  }

  saveReaction () {
    let payload = {
      id: this.tip.id,
      reaction: this.tip.reaction
    }
    this.publish('tips', 'save.reaction', payload)
  }

  goToMain () {
    Navigator.goTo('/')
  }

  isEmpty (field) {
    return field === undefined || field === ''
  }
}

export default ReviewNucleus
