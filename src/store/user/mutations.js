const mutations = {

    ADD_USER: (state, user) => {
        state.users.push(user);
    },
    REMOVE_USER: (state, userId) => {
        let index = state.users.findIndex(user => user.id === userId);
        if(index !== -1) {
            state.users.splice(index, 1)
        }
    },
};

export default mutations;