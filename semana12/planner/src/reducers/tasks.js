const initialState = {
    mon: [],
    tue: [],
    wed: [],
    thu: [],
    fri: [],
    sat: [],
    sun: [],
    isLoading: false
}

export const tasks = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_TASKS':
            return {...state, mon: action.payload.mon,tue: action.payload.tue,wed: action.payload.wed,thu: action.payload.thu,fri: action.payload.fri,sat: action.payload.sat,sun: action.payload.sun,}
        case 'CHANGE_LOADING_STATUS':
            return { ...state, isLoading: !state.isLoading }
        default:
            return state
    }
}

