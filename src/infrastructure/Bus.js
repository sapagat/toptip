import postal from 'postal'

class Bus {
  static publish (channel, topic, data = {}) {
    postal.publish({
      channel,
      topic,
      data
    })
  }

  static subscribe (channel, topic, callback) {
    return postal.subscribe({
      channel,
      topic,
      callback
    })
  }

  static unsubscribe (subscription) {
    postal.unsubscribe(subscription)
  }

  static reset () {
    postal.reset()
  }

  static debug (channel) {
    postal.subscribe({
      channel: channel,
      topic: '*.*',
      callback: (data, envelope) => {
        console.log('Envelope: ', envelope)
        console.log('Data: ', data)
      }
    })
  }
}

export default Bus
