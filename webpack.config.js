const nodeExternals = require('webpack-node-externals')
const path = require('path')

module.exports = {
  target: 'node',
  externals: [nodeExternals()],
}
