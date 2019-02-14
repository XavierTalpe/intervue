export const state = () => ({
    persons: [],
})

export const getters = {
    persons(state) {
        return state.persons
    },
}

export const mutations = {
    initialize(state, {persons}) {
        state.persons = persons
    },
}

export const actions = {
    initialize({commit}) {
        const persons = [
            {id: 1, name: 'Charlie'},
            {id: 2, name: 'Bob'},
            {id: 3, name: 'Alice'}
        ]

        commit('initialize', {persons})
    },

}
