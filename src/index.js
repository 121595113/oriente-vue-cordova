// list here all supported plugins
const pluginsList = [
  'cordova-plugin-camera',
  'cordova-plugin-device',
  'cordova-plugin-geolocation',
  'cordova-plugin-contacts',
  'cordova-plugin-chrome-apps-sockets-tcp',
  'cordova-plugin-oriente-axios',
  'cordova-plugin-oriente-router',
  'cordova-plugin-sms'
]

exports.install = (Vue, options) => {
  // declare global Vue.cordova object
  Vue.cordova = Vue.cordova || {
    deviceready: false,
      plugins: []
  }

  Vue.prototype.$cordova = Vue.prototype.$cordova || {}
  // Cordova events wrapper
  Vue.prototype.$cordova.on = (eventName, cb) => {
    document.addEventListener(eventName, cb, false)
  }

  // let Vue know that deviceready has been triggered
  document.addEventListener('deviceready', () => {
    Vue.cordova.deviceready = true
  }, false)

  // load supported plugins
  pluginsList.forEach(pluginName => {
    let plugin = require('./plugins/' + pluginName)
    plugin.install(Vue, options, pluginLoaded => {
      if (pluginLoaded) {
        Vue.cordova.plugins.push(pluginName)
      }
      if (Vue.config.debug) {
        console.log('[VueCordova]', pluginName, '→', pluginLoaded ? 'loaded' : 'not loaded')
      }
    })
  })

}
