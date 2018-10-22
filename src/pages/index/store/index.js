import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import user from './modules/user'
import getters from './getters'

Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
       customerMarker:'', //存放客户列表弹窗marker的值
        testNumber:0
    },
    mutations:{
        setcustomerMarker(state, payload) { //
            state.customerMarker = payload;
        },
        increment (state,payload) {
            state.testNumber++;
        }
    },
    modules: {
        app,
        user
    },
    getters
})

export default store
