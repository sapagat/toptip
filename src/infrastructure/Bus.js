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
    postal.subscribe({
      channel,
      topic,
      callback
    })
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
