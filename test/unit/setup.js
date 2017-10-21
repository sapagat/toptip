const chai = require('chai')
const sinonChai= require('sinon-chai')
chai.use(sinonChai)
global.expect = chai.expect

const avoriaz = require('avoriaz')
global.mount = avoriaz.mount

const sinon = require('sinon')
global.stub = sinon.stub

require('jsdom-global')()
