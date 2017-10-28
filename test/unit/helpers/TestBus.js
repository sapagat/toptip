class TestBus {
  constructor () {
    this.subscriptions = {}
    this.publications = {}
    this.lastPublication = {}
  }

  subscribe (channel, topic, callback) {
   this.subscriptions[channel] = this.subscriptions[channel] || {}
   this.subscriptions[channel][topic] = this.subscriptions[channel][topic] || []

   this.subscriptions[channel][topic].push(callback)
  }

  publish (channel, topic, data) {
    this.lastPublication = { channel, topic, data }
    this.recordPublication(channel, topic, data)
    this.performPublication(channel, topic, data)
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

  performPublication (channel, topic, data) {
    if (!this.subscriptions[channel]) return
    if (!this.subscriptions[channel][topic]) return

    for (const callback of this.subscriptions[channel][topic]) {
      callback(data)
    }
  }
}

export default TestBus
