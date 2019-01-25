import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state: {
            counter: 0
        },
        
        mutations: {
            increment (state) {
                state.counter++
            }
        },

        actions: {
            nuxtServerInit ({ commit }, { req }) {
                const backroadPages = require.context('@/pages', true, /\/backroads\/.*\.vue$/)
                const maps = require.context('@/pages', true, /\/backroads\/.*\.json$/)
                console.log(backroadPages.keys());
                console.log(maps.keys());
            }
        }
    })
}

export default createStore
