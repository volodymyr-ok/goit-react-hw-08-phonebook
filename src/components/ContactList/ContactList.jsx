import { ContactItem } from '../ContactItem/ContactItem';
import { StyledUL } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contactsOperations';
import { TbMoodEmpty } from 'react-icons/tb';
import closeMenu from 'utils/additionalMenuClosing';

export const ContactList = () => {
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
            return <ContactItem key={id} id={id} name={name} number={number} />;
          })
        ) : (
          <div className="empty-list">
            <h3>There is no one here</h3>
            <TbMoodEmpty size={100} />
          </div>
        )}
      </StyledUL>
    </>
  );
};
