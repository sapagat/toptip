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
    this.publish('router', 'go.registry')
  }

  goToReview (data) {
    this.publish('router', 'go.review', { id: data.id })
  }

  keepList (target, source) {
    source.forEach((element) => { target.push(element) })
  }
}

export default MainNucleus
