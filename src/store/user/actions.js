const actions = {

    addUser({ commit }, user) {
        commit('ADD_USER', user)
    },

    removeUser({ commit }, user) {
        commit('REMOVE_USER', user.id);
    },
};

export default actions;