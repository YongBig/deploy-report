import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        language: localStorage.getItem('changeLang') ? localStorage.getItem('changeLang') : 'zh-CN',
    },
    getters: {},
    mutations: {
        // 同步操作直接修改state里面的数据
        setLanguage: (state, data) => {
            state.language = data;
            localStorage.setItem('changeLang', data);
        },
    },
    actions: {},
    modules: {}
})
