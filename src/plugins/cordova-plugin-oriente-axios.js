exports.install = function (Vue, options, cb) {
  document.addEventListener('deviceready', () => {

    if (typeof cordova === 'undefined' || typeof cordova.plugins === 'undefined' || typeof cordova.plugins.axios === 'undefined') {
      return cb(false)
    }

    // pass through the sms object
    Vue.prototype.$cordova.axios = cordova.plugins.axios.axios
    Object.assign(Vue.prototype.$cordova.axios, cordova.plugins.axios)

    return cb(true)

  }, false)
}
