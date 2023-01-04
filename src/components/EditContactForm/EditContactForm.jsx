import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeContact, fetchContacts } from 'redux/contactsOperations';
import { getContacts } from 'redux/selectors';
import { Btn } from 'utils/commonStyles';
import { editContactsCheking } from 'utils/contactsChecking';
import { Backdrop } from './EditContactForm.styled';

export const EditContactFrom = ({ id, name, number }) => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    document.querySelector('#name-changer').value = name;
    document.querySelector('#num-changer').value = number;
  }, [name, number]);

  const closeModal = e => {
    if (e.target !== e.currentTarget) {
      return;
    }
    const modal = document.querySelector('.edit-contact-modal');
    modal.classList.remove('opened');
  };

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const contactData = {
      name: form.elements.name.value,
      number: form.elements.number.value,
    };
    console.log('contactData', contactData);

    const inContactList = contacts.filter(contact =>
      editContactsCheking(contact, contactData, id)
    ).length;

    if (!inContactList) {
      dispatch(changeContact({ id, contactData }));

      dispatch(fetchContacts());
      document.querySelector('.edit-contact-modal').classList.remove('opened');
    }
  };

  return (
    <Backdrop className="edit-contact-modal" onClick={closeModal}>
      <form className="edit-contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name-changer">{name}</label>
        <input
          type="text"
          name="name"
          id="name-changer"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

        <label htmlFor="num-changer">{number}</label>
        <input
          type="tel"
          name="number"
          id="num-changer"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          required
        />

        <div className="btns-wrapper">
          <Btn type="submit">Save</Btn>

          <Btn type="button" onClick={closeModal}>
            Cancel
          </Btn>
        </div>
      </form>
    </Backdrop>
  );
};
