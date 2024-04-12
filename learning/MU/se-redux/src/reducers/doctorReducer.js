import { ADD_DOCTOR, FETCH_DOCTOR_SUCCESS, DELETE_DOCTOR } from './doctorActions';

const initialState = {
items: [
    {
        id: 1,
        name: 'Dr. Glassman'
    },
    {
        id: 2,
        name: 'Dr. Park'
    },
    {
        id: 3,
        name: 'Dr. Shawn'
    }
]
};

const reducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_DOCTOR:
            return { ...state, items: [...state.items, action.payload]};
        case DELETE_DOCTOR:
            return{
                ...state,
                items: state.items.filter(doctor => doctor.id !== action.payload)
            }
        case FETCH_DOCTOR_SUCCESS:
            return {
                ...state,
                items: action.payload
            }
        default:
            return state;
    }
}

export default reducer;