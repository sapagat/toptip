class Nucleus {
  constructor (bus) {
    this.bus = bus
  }

  data () { return {} }

  start () {}

  subscribe () {}

  publish (channel, topic, data) {
    this.bus.publish(channel, topic, data)
  }

  subscribeTo (channel, topic, callback) {
    this.bus.subscribe(channel, topic, callback)
  }
}

export default Nucleus
