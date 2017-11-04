class Nucleus {
  constructor (bus) {
    this.bus = bus

    this.subscriptions = []
  }

  data () { return {} }

  start () {}

  subscribe () {}

  unsubscribe () {
    this.subscriptions.forEach((subscription) => {
      this.bus.unsubscribe(subscription)
    })
  }

  publish (channel, topic, data) {
    this.bus.publish(channel, topic, data)
  }

  subscribeTo (channel, topic, callback) {
    let subscription = this.bus.subscribe(channel, topic, callback)
    this.subscriptions.push(subscription)
  }
}

export default Nucleus
