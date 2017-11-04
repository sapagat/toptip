function busMatchers (chai, utils) {
  const Assertion = chai.Assertion

  Assertion.addMethod('publishedOn', function (channel, topic) {
    const bus = this._obj
    this.assert(
      bus.publicationsIn(channel, topic).length > 0,
      `expected publication on ${channel}, ${topic}`,
      `did not expected publication ${channel}, ${topic}`
    )
  })

  Assertion.addMethod('sentInData',  function (key, value) {
    const bus = this._obj
    const sent = bus.lastPublication.data[key]
    this.assert(
      equalMessage(value, sent),
      `expected ${value} to be sent as ${key} on last publication`,
      `expected ${value} not to be sent as ${key} on last publication`
    )
  })

  function equalMessage (expected, sent) {
    let same = true
    Object.keys(expected).forEach(function(key) {
      if(expected[key] != sent[key])
        same = false
    })
    return same
  }
}

module.exports = busMatchers
