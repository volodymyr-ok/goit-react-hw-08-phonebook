import { useEffect, useState } from 'react';
import contactsCheking from 'utils/contactsChecking';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/contactsOperations';
import { StyledForm } from 'utils/commonStyles';
import { StyledWrapper } from './Form.styled';
import { FiUserPlus } from 'react-icons/fi';
import { VscAdd, VscChromeMinimize } from 'react-icons/vsc';

export const Form = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [isCreatorOpened, setIsCreatorOpened] = useState(false);

  useEffect(() => {
    document.querySelector('#ctreator-form').classList.toggle('opend');
  }, [isCreatorOpened]);

  const toggleCreator = () => {
    setIsCreatorOpened(!isCreatorOpened);

    document.querySelector('#creator').classList.toggle('opend');
    document.querySelector('.creator-wrap').classList.toggle('opend');
  };

  const handleChange = event => {
    switch (event.currentTarget.name) {
      case 'name':
        setName(event.currentTarget.value);
        break;
      case 'number':
        setNumber(event.currentTarget.value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    const inContactList = contacts.filter(contact =>
      contactsCheking(contact, { name, number })
    ).length;

    if (!inContactList) {
      toggleCreator();
      dispatch(addContact({ name, number }));
    }

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <StyledWrapper id="ctreator-form">
      <button className="creator-btn" type="button" onClick={toggleCreator}>
        {isCreatorOpened ? (
          <>
            <span>Hide creator</span>
            <VscChromeMinimize />
          </>
        ) : (
          <>
            <span>Create contact</span>
            <VscAdd />
          </>
        )}
      </button>
      <div className="creator-wrap">
        <StyledForm onSubmit={handleSubmit} id="creator">
          <label>
            Name
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label>
            Number
            <input
              type="tel"
              name="number"
              value={number}
              onChange={handleChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>

          <button type="submit" className="submit-btn">
            Add contact
            <FiUserPlus />
          </button>
        </StyledForm>
      </div>
    </StyledWrapper>
  );
};
