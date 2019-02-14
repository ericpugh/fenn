// The Scavenger Hunts Configuration data.
import data from '../assets/data/app.json'

export default {
    install(Vue, options) {
        Vue.prototype.$app = data;
    }
}