'use strict'
require('./check-versions')()

const config = require('../config')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

const opn = require('opn')
const path = require('path')
const express = require('express')
const webpack = require('webpack')
const proxyMiddleware = require('http-proxy-middleware')
const webpackConfig = require('./webpack.dev.conf')

// default port where dev server listens for incoming traffic
const port = process.env.PORT || config.dev.port
// automatically open browser, if not set will be false
const autoOpenBrowser = !!config.dev.autoOpenBrowser
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
const proxyTable = config.dev.proxyTable

const app = express()
//代码加载开始
var userlist = require("../src/data/userlist.json")
var homelist = require("../src/data/homelist.json")
var mine = require("../src/data/mine.json")
var minelist = require("../src/data/minelist.json")
var prolist1 = require("../src/data/prolist1.json")   //配置获取路径
var prolist2 = require("../src/data/prolist2.json")   //配置获取路径
var prolist3 = require("../src/data/prolist3.json")   //配置获取路径
var prolist4 = require("../src/data/prolist4.json")   //配置获取路径
var prolist5 = require("../src/data/prolist5.json")   //配置获取路径
var prolist6 = require("../src/data/prolist6.json")   //配置获取路径
var prolist7 = require("../src/data/prolist7.json")   //配置获取路径
var delist = require("../src/data/delist.json")   //很多产品列表
var alone = require("../src/data/alone.json")   //很多产品列表
  //配置获取路径
var apiRoutes = express.Router()
apiRoutes.get('/userlist',function(req,res){
  res.json({
    data:userlist
  })
})
apiRoutes.get('/homelist',function(req,res){
  res.json({
    data:homelist
  })
})
apiRoutes.get('/mine',function(req,res){
  res.json({
    data:mine
  })
})
apiRoutes.get('/minelist',function(req,res){
  res.json({
    data:minelist
  })
})
apiRoutes.get('/prolist1',function(req,res){
  res.json({
    data:prolist1
  })
})
apiRoutes.get('/prolist2',function(req,res){
  res.json({
    data:prolist2
  })
})
apiRoutes.get('/prolist3',function(req,res){
  res.json({
    data:prolist3
  })
})
apiRoutes.get('/prolist4',function(req,res){
  res.json({
    data:prolist4
  })
})
apiRoutes.get('/prolist5',function(req,res){
  res.json({
    data:prolist5
  })
})
apiRoutes.get('/prolist6',function(req,res){
  res.json({
    data:prolist6
  })
})
apiRoutes.get('/prolist7',function(req,res){
  res.json({
    data:prolist7
  })
})
apiRoutes.get('/delist',function(req,res){
  res.json({
    data:delist
  })
})
apiRoutes.get('/alone',function(req,res){
  res.json({
    data:alone
  })
})

app.use("/api",apiRoutes)

//结束
const compiler = webpack(webpackConfig)

const devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})

const hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: false,
  heartbeat: 2000
})
// force page reload when html-webpack-plugin template changes
// currently disabled until this is resolved:
// https://github.com/jantimon/html-webpack-plugin/issues/680
// compiler.plugin('compilation', function (compilation) {
//   compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
//     hotMiddleware.publish({ action: 'reload' })
//     cb()
//   })
// })

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  let options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// serve pure static assets
const staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

const uri = 'http://localhost:' + port

var _resolve
var _reject
var readyPromise = new Promise((resolve, reject) => {
  _resolve = resolve
  _reject = reject
})

var server
var portfinder = require('portfinder')
portfinder.basePort = port

console.log('> Starting dev server...')
devMiddleware.waitUntilValid(() => {
  portfinder.getPort((err, port) => {
    if (err) {
      _reject(err)
    }
    process.env.PORT = port
    var uri = 'http://localhost:' + port
    console.log('> Listening at ' + uri + '\n')
    // when env is testing, don't need open it
    if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
      opn(uri)
    }
    server = app.listen(port)
    _resolve()
  })
})

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
}
