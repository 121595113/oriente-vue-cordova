exports.install = function (Vue, options, cb) {
  document.addEventListener('deviceready', () => {

    if (typeof cordova === 'undefined' || typeof cordova.plugins === 'undefined' || typeof cordova.plugins.router === 'undefined') {
      return cb(false)
    }

    // pass through the sms object
    Vue.prototype.$cordova.router = cordova.plugins.router

    return cb(true)

  }, false)
}
