[Vue.js](https://vuejs.org/) plugin for [Cordova](https://cordova.apache.org/)

> Note : Compatible with every version of VueJS (1.x and 2.x)

# How to use

Add the NPM package to your project

```shell
npm install --save orientevue-cordova
```

Add the plugin to your Vue instance according to your setup

```javascript
// CommonJS
var Vue = require('vue');
var VueCordova = require('oriente-vue-cordova');
Vue.use(VueCordova);

// import
import Vue from 'vue'
import VueCordova from 'oriente-vue-cordova'
Vue.use(VueCordova)
```

The package provides a global 实例对象 `this.$cordova`

```javascript
console.log(this.$cordova);
```

This object provides API for the following [events](#events) and will hold the Cordova [plugins](#plugins) API objects you might be using.

> **This library is a syntax helper.** It provides an easier access to the global variables defined by Cordova.

### Demo

A repository with a [full working demo](https://github.com/kartsims/vue-cordova-demo) is available to help you bootstrap a new project or cherry-pick working code.

### Documentation

For more information, check out [http://kartsims.github.io/vue-cordova](http://kartsims.github.io/vue-cordova)

### 插件列表

- cordova-plugin-camera
- cordova-plugin-device
- cordova-plugin-geolocation
- cordova-plugin-contacts
- cordova-plugin-chrome-apps-sockets-tcp
- cordova-plugin-oriente-axios
- cordova-plugin-sms

### 其中新增

- cordova-plugin-oriente-axios
- cordova-plugin-oriente-router
