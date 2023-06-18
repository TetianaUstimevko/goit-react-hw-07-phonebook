export const selectContacts = (state) => state.contacts.contacts;
export const selectFilter = (state) => state.contacts.filter;
// Вибірка стану завантаження
export const selectLoading = (state) => state.contacts.isLoading;
// Вибірка стану помилки
export const selectError = (state) => state.contacts.error;