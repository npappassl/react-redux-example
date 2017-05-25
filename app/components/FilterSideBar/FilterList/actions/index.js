import types from 'actions/types';

export const appendFilter = function(filter, type) {
        return function(dispatch) {
            dispatch(((filter, type) => {
                return {
                    type: types.APPLICATIONS_APPLY_FILTER,
                    payload: {
                        filter: filter,
                        type: type
                    }
                };
            })(filter,type));
        };
};
