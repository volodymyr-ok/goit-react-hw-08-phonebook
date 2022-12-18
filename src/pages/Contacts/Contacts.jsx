// import { FaRegAddressBook } from 'react-icons/fa';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Form } from 'components/Form/Form';
import { StyledH2 } from 'utils/theme';

const Contacts = () => {
  return (
    <>
      <StyledH2>Phonebook</StyledH2>
      <Form />
      <StyledH2>Contacts</StyledH2>
      <Filter />
      <ContactList />
    </>
  );
};

export default Contacts;
