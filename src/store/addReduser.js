const defaultState = {
       name:'',
       money: 0,
       total: 0,
};

export const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_MONEY':
            return {
                ...state,
                name: action.payload.name,
                money: action.payload.money,
                total: action.payload.money,
            };
        case 'UPDATE_TOTAL':
            return {
                ...state,
                total: state.total+action.payload,
            };
        case  'DELL_TOTAL':
            return {
                ...state,
                total: state.total-action.payload
            }
        case 'DELL':
            return defaultState
        default:
            return state
    }

}
