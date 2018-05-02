export default (state = [], action) => {
    switch (action.type) {
        case 'API_FETCH_MESSAGE':
            return [...state, action.payload ];
    }

    return state;
}