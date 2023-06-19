export const selectContacts = (state) => state.list;
export const selectFilter = (state) => state.filter;
// Вибірка стану завантаження
export const selectLoading = (state) => state.isLoading;
// Вибірка стану помилки
export const selectError = (state) => state.error;