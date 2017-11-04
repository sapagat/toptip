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
    this.subscribeTo('tips', 'tip.deleted', () => {
      this.askForList()
    })
  }

  start () {
    this.askForList()
  }

  askForList () {
    this.publish('tips', 'fetch.list')
  }

  goToRegistry () {
    this.publish('router', 'go.registry')
  }

  goToReview (data) {
    this.publish('router', 'go.review', { id: data.id })
  }

  keepList (target, source) {
    target.splice(0, target.length)

    source.forEach((element) => { target.push(element) })
  }

  delete (id) {
    this.publish('tips', 'delete.tip', {id})
  }
}

export default MainNucleus
