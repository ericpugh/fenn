import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from "vuex-persist";
import hunts from "./modules/hunts";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    hunts
  },
  plugins: [new VuexPersistence().plugin]
})
