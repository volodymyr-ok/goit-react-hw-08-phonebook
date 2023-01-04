import { Notify } from 'notiflix/build/notiflix-notify-aio';

const contactsCheking = (contact, data) => {
  if (contact.name === data.name) {
    Notify.warning(`${data.name} is already in contacts.`);
    return contact;
  } else if (contact.number === data.number) {
    Notify.warning(
      `This number (${data.number}) is already in ${contact.name} contact.`
    );
    return contact;
  }
};

export const editContactsCheking = (contact, data, id) => {
  if (contact.id === id) {
    return;
  }

  if (contact.name === data.name) {
    Notify.warning(`${data.name} is already in contacts.`);
    return contact;
  } else if (contact.number === data.number) {
    Notify.warning(
      `This number (${data.number}) is already in ${contact.name} contact.`
    );
    return contact;
  }
};

export default contactsCheking;
