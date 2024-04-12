export const ADD_DOCTOR = 'ADD_DOCTOR';
export const DELETE_DOCTOR = 'DELETE_DOCTOR';
export const FETCH_DOCTOR_SUCCESS = 'FETCH_DOCTOR_SUCCESS';

export const addDoctor = (newDoctor) => {
    return {
        type: ADD_DOCTOR,
        payload: newDoctor
    }
}

export const deleteDoctor = (id) => {
    return {
        type: DELETE_DOCTOR,
        payload: id
    }
}

export const fetchDoctor = () => {
    return (dispatch, getState) => {
        fetch('https://rest-example-node.apps.cac.preview.pcf.manulife.com/v1/doctors')
            .then((response) => response.json())
            .then((result) => dispatch(fetchDoctorSuccess(result)))
            .catch(error => console.log(`Error occured: ${error}`));
    }
}

const fetchDoctorSuccess = (data) => {
    return {
        type: FETCH_DOCTOR_SUCCESS,
        payload: data
    }
}