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
        },
        getTaskCompleted: (state, getters) => (id, taskNumber) => {
            let hunt = getters.getHuntById(id);
            return hunt.tasks[taskNumber].complete;
        },
        getHuntCompleted: (state, getters) => (id, taskNumber) => {
            let hunt = getters.getHuntById(id);
            return hunt.complete;
        }
    },
    // ----------------------------------------------------------------------------------
    mutations: {
        SET: (state, hunts) => {
            // Add initial completed state of all hunts and tasks.
            hunts.map((hunt) => {
                hunt.complete = false;
              hunt.tasks.map((task) => {
                  task.complete = false;
              })
            })
            // Store the hunts.
            Vue.set(state, 'hunts', hunts)
        },
        SET_TASK_COMPLETED: (state, payload) => {
            // TODO: This data isn't persisent. How to make it persist? possible refactor to get Hunts by array index rather than id.
            let huntIndex =  _.findIndex(state.hunts, function(hunt) { return hunt.id == payload.id; });
            state.hunts[huntIndex].tasks[payload.index].complete = true;
            Vue.set(state, 'hunts', state.hunts);
        },
        SET_HUNT_COMPLETED: (state, id) => {
            // TODO: This data isn't persisent. How to make it persist? possible refactor to get Hunts by array index rather than id.
            let huntIndex =  _.findIndex(state.hunts, function(hunt) { return hunt.id == id; });
            state.hunts[huntIndex].complete = true;
            Vue.set(state, 'hunts', state.hunts);
        },
        SET_ACTIVE_HUNT: (state, id) => {
            // TODO: given a hunt id set the hunt as active.
        }

    },
    // ----------------------------------------------------------------------------------
    actions: {}

}