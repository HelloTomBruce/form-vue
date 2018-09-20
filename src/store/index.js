import Vue from 'vue'
import Vuex from 'vuex'
import { DEFAULTFORM, COMPONENTLIST } from '../util/dictionary.js'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        FORM: DEFAULTFORM
    },
    mutations: {
        addField (state, id) {
            state.FORM.push(COMPONENTLIST.find((item) => {
                return item.id === id
            }))
        }
    }
})

export default store