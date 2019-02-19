/** Store module to handle hunt **/

import Vue from 'vue'
import _ from "lodash";

export default {
    namespaced: true,
    // ----------------------------------------------------------------------------------
    state: {
        hunts: {}
    },
    // ----------------------------------------------------------------------------------
    getters: {
        getHunts: state => state.hunts,
        getHuntById: (state) => (id) => {
            return state.hunts.find(hunt => hunt.id === id)
        }
    },
    // ----------------------------------------------------------------------------------
    mutations: {
        SET: (state, hunts) => {
            // Set all hunts.
            Vue.set(state, 'hunts', hunts)
        }
    },
    // ----------------------------------------------------------------------------------
    actions: {
        SET_CLUE_STATE: (context, id) => {
            // TODO: given a clue id set the complete state.
        },
        SET_ACTIVE_HUNT: (context, id) => {
            // TODO: given a clue id set the complete state.
        },
    }

}