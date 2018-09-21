import Vue from 'vue'
import Vuex from 'vuex'
import { DEFAULTFORM, COMPONENTLIST } from '../util/dictionary.js'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        FORM: DEFAULTFORM,
        CURRENTEDIT: DEFAULTFORM[0]
    },
    mutations: {
        addField (state, id) {
            state.FORM.push(COMPONENTLIST.find((item) => {
                return item.id === id
            }))
        },
        editField (state, index) {
            state.CURRENTEDIT = state.FORM[index]
        },
        addOption (state) {
            state.CURRENTEDIT.options.push({
                label: '新选项',
                value: '1'
            })
        },
        removeOption (state, index) {
            state.CURRENTEDIT.options.splice(index, 1)
        },
        addRow (state) {
            state.CURRENTEDIT.rows.push({
                label: '新问题',
                name: ''
            })
        },
        removeRow (state, index) {
            state.CURRENTEDIT.rows.splice(index, 1)
        }
    }
})

export default store