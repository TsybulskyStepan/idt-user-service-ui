export const LOAD_USERS_SUCCESS = 'LOAD_USERS_SUCCESS';

export function loadUsers() {
    return (dispatch) => {

        fetch('http://localhost:8000/api/v1/users').then(
            response => {
                if (response.ok) {
                    return response.json();
                }
            }
        ).then(json => {
            dispatch({
                type: LOAD_USERS_SUCCESS,
                payload: json
            });
        });

    }
}