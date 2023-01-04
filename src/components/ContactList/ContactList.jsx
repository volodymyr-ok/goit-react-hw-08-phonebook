import { ContactItem } from '../ContactItem/ContactItem';
import { StyledUL } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contactsOperations';
import { TbMoodEmpty } from 'react-icons/tb';
import closeMenu from 'utils/additionalMenuClosing';
import { EditContactFrom } from 'components/EditContactForm/EditContactForm';
import { useState } from 'react';

export const ContactList = () => {
  const [nameForChange, setNameForChange] = useState('Name');
  const [numberForChange, setNumberForChange] = useState('Number');
  const [idForChange, setIdForChange] = useState('');

  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = () => {
    if (contacts?.length) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filterValue)
      );
    }
  };

  return (
    <>
      <StyledUL onClick={closeMenu}>
        {filteredContacts() ? (
          filteredContacts()?.map(({ id, name, number }) => {
            return (
              <ContactItem
                key={id}
                id={id}
                name={name}
                number={number}
                changeName={setNameForChange}
                changeNumber={setNumberForChange}
                changeId={setIdForChange}
              />
            );
          })
        ) : (
          <div className="empty-list">
            <h3>There is no one here</h3>
            <TbMoodEmpty size={100} />
          </div>
        )}
      </StyledUL>

      <EditContactFrom
        name={nameForChange}
        number={numberForChange}
        id={idForChange}
      />
    </>
  );
};
