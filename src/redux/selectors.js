export const getContacts = state => state.contacts.items;
export const getFilter = state => state.filter.value;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUserName = state => state.auth.user.name;
export const selectIsRefreshing = state => state.auth.isRefreshing;
