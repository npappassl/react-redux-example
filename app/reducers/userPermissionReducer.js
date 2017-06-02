import types from 'actions/types';
export default function userPermissionReducer(state = null, action){
    switch (action.type) {
        case types.LOAD_USER_PERMISSIONS_SUCCESS:
            return action.payload;
            break;
        default:
            return state;
    }
}
