import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { Btn } from 'utils/commonStyles';
import { Backdrop } from './EditContactForm.styled';

export const EditContactFrom = () => {
  const contacts = useSelector(getContacts);
  console.log(contacts);

  const closeModal = e => {
    console.log(e.target);
    if (e.target !== e.currentTarget) {
      return;
    }
    const modal = document.querySelector('.edit-contact-modal');
    modal.classList.remove('opened');
  };

  const handleSubmit = event => {
    event.preventDefault();

    // const inContactList = contacts.filter(contact =>
    //   contactsCheking(contact, { name, number })
    // ).length;

    // if (!inContactList) {
    //   toggleCreator();
    //   dispatch(addContact({ name, number }));
    // }

    // reset();
  };

  return (
    <Backdrop className="edit-contact-modal" onClick={closeModal}>
      <form className="edit-contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name-changer">Name</label>
        <input
          type="text"
          name="name"
          id="name-changer"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

        <label htmlFor="num-changer">Number</label>
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