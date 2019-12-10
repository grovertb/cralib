'use strict'

const Conf = require('conf')
const { name } = require('../package')

module.exports = new Conf({
  projectName: name
})
