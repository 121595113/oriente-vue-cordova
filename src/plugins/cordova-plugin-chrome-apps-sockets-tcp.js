exports.install = function (Vue, options, cb) {
  document.addEventListener('deviceready', () => {

    if (typeof chrome === 'undefined' || typeof chrome.sockets === 'undefined' || typeof chrome.sockets.tcp === 'undefined') {
      return cb(false)
    }

    // pass through the object
    Vue.prototype.$cordova.chromeSocketsTcp = chrome.sockets.tcp

    return cb(true)

  }, false)
}
