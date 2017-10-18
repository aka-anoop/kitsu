import Vue from 'vue'
import Vuex from 'vuex'

import * as getters from './getters'

import assetTypes from './modules/assettypes'
import assets from './modules/assets'
import breakdown from './modules/breakdown'
import shots from './modules/shots'
import login from './modules/login'
import main from './modules/main'
import people from './modules/people'
import user from './modules/user'
import productions from './modules/productions'
import taskTypes from './modules/tasktypes'
import tasks from './modules/tasks'

Vue.use(Vuex)

let modules = {
  assetTypes,
  assets,
  breakdown,
  login,
  main,
  people,
  productions,
  shots,
  tasks,
  taskTypes,
  user
}

export default new Vuex.Store({
  getters,
  strict: true,
  modules: modules
})
