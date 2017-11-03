class Service {
  constructor (bus) {
    this.bus = bus

    this.subscribe()
  }

  subscribe () {}

  subscribeTo (channel, topic, callback) {
    this.bus.subscribe(channel, topic, callback)
  }

  publish (channel, topic, data) {
    this.bus.publish(channel, topic, data)
  }
}

export default Service
