import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Form } from 'components/Form/Form';
import closeMenu from 'utils/additionalMenuClosing';
import { StyledH2 } from 'utils/commonStyles';

const Contacts = () => {
  return (
    <>
      <StyledH2 onClick={closeMenu}>Contacts</StyledH2>
      <Form />
      <Filter />
      <ContactList />
    </>
  );
};

export default Contacts;
