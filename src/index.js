// list here all supported plugins
const pluginsList = [
  'cordova-plugin-camera',
  'cordova-plugin-device',
  'cordova-plugin-geolocation',
  'cordova-plugin-contacts',
  'cordova-plugin-chrome-apps-sockets-tcp',
  'cordova-plugin-sms'
]

exports.install = (Vue, options) => {
  // declare global Vue.prototype.$cordova object
  Vue.prototype.$cordova = Vue.prototype.$cordova || {
    deviceready: false,
      plugins: []
  }

  // Cordova events wrapper
  Vue.prototype.$cordova.on = (eventName, cb) => {
    document.addEventListener(eventName, cb, false)
  }

  // let Vue know that deviceready has been triggered
  document.addEventListener('deviceready', () => {
    Vue.prototype.$cordova.deviceready = true
  }, false)

  // load supported plugins
  pluginsList.forEach(pluginName => {
    let plugin = require('./plugins/' + pluginName)
    plugin.install(Vue, options, pluginLoaded => {
      if (pluginLoaded) {
        Vue.prototype.$cordova.plugins.push(pluginName)
      }
      if (Vue.config.debug) {
        console.log('[VueCordova]', pluginName, '→', pluginLoaded ? 'loaded' : 'not loaded')
      }
    })
  })

}
