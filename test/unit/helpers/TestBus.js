import Bus from '../../../src/infrastructure/Bus'

class TestBus {
  constructor () {
    this.subscriptions = {}
    this.publications = {}
  }

  subscribe (channel, topic, callback) {
    Bus.subscribe(channel, topic, callback)
  }

  publish (channel, topic, data) {
    this.recordPublication(channel, topic, data)
    Bus.publish(channel, topic, data)
  }

  publicationsIn (channel, topic) {
    this.publications[channel] = this.publications[channel] || {}
    this.publications[channel][topic] = this.publications[channel][topic] || []

    return this.publications[channel][topic]
  }

  lastDataIn (channel, topic) {
    const publications = this.publicationsIn(channel, topic)

    let length = publications.length
    if (!length) return

    return publications[length - 1].data
  }

  recordPublication (channel, topic, data) {
    const publications = this.publicationsIn(channel, topic)

    publications.push({ data: data})
  }
}

export default TestBus
