exports.install = function (Vue, options, cb) {
  document.addEventListener('deviceready', () => {

    if (typeof device === 'undefined' || typeof device.cordova === 'undefined') {
      return cb(false)
    }

    // default values
    Vue.prototype.$cordova.device = {
      cordova: null,
      model: null,
      platform: null,
      uuid: null,
      version: null,
      manufacturer: null,
      isVirtual: null,
      serial: null
    }

    Object.keys(Vue.prototype.$cordova.device).forEach(key => {
      if (typeof device[key] !== 'undefined') {
        Vue.prototype.$cordova.device[key] = device[key]
      }
    })

    return cb(true)

  }, false)
}
