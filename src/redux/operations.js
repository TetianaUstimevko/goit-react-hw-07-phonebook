import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://648f276f75a96b664444c3ef.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    try {
      const response = await axios.get(`${baseUrl}/contacts`);
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch contacts.');
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact) => {
    try {
      const response = await axios.post(`${baseUrl}/contacts`, contact);
      return response.data;
    } catch (error) {
      throw new Error('Failed to add contact.');
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId) => {
    try {
      await axios.delete(`${baseUrl}/contacts/${contactId}`);
      return contactId;
    } catch (error) {
      throw new Error('Failed to delete contact.');
    }
  }
);