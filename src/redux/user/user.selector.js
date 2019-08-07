import { createSelector } from 'reselect';

const selectUser = state => state.user;

export const selectUserProfile = createSelector(
    [selectUser],
    user => user.currentUser
)