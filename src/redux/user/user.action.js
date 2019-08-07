import userActionTypes from './user.types';

export const setCurrentUser = user => ({
    type: userActionTypes.SET_USER,
    payload: user
})