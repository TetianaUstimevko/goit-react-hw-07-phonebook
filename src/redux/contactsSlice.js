import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://648f276f75a96b664444c3ef.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    try {
      const response = await axios.get(`${baseUrl}/contacts`
      );
      return response.data;
    } catch (error) {
      throw Error('Failed to fetch contacts.');
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async contact => {
    try {
      const response = await axios.post(
        `${baseUrl}/contacts`,
        contact
      );
      return response.data;
    } catch (error) {
      throw Error('Failed to add contact.');
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async contactId => {
    try {
      await axios.delete(
        `${baseUrl}/contacts/${contactId}`
      );
      return contactId;
    } catch (error) {
      throw Error('Failed to delete contact.');
    }
  }
);

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    list: [],
    isLoading: false,
    error: null,
    filter: '',
  },
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.list = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(addContact.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.list.push(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(deleteContact.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.list = state.list.filter(
          (contact) => contact.id !== action.payload
        );
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { setFilter } = contactsSlice.actions;

export default contactsSlice.reducer;
