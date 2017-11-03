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
    this.subscribeTo('router', 'details.ready', (data) => {
      this.askForTip(data.id)
    })
    this.subscribeTo('tips', 'tip.ready', (data) => {
      this.keepData(this.tip, data.tip)
    })
    this.subscribeTo('tips', 'tip.updated', () => {
      this.goToMain()
    })
  }

  start () {
    this.publish('router', 'provide.details')
  }

  askForTip (tipId) {
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
    this.publish('router', 'go.main')
  }

  keepData (target, source) {
    Object.assign(target, source)
  }

  isEmpty (field) {
    return field === undefined || field === ''
  }
}

export default ReviewNucleus
