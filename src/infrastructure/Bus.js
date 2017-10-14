import postal from 'postal'

class Bus {
  static publish (channel, topic, data) {
    postal.publish({
      channel,
      topic,
      data
    })
  }

  static subscribe (channel, topic, callback) {
    postal.subscribe({
      channel,
      topic,
      callback
    })
  }
}

export default Bus
