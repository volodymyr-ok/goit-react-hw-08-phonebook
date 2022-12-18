import axios from 'axios';
// axios.defaults.baseURL = 'https://639cc68442e3ad69273be0ba.mockapi.io/contacts';

export const fetchContacts = async () => {
  const response = await axios.get('/contacts');
  return response;
};

export const addContact = async data => {
  const response = await axios.post('/contacts', data);
  return response;
};

export const deleteContact = async id => {
  const response = await axios.delete(`/contacts/${id}`);
  return response;
};
