// The Scavenger Hunts Configuration data.
import data from '../assets/data/app.json'
// TODO: make the app data filename/path configurable?

export default {
    install(Vue, options) {
        Vue.prototype.$app = data;
    }
}