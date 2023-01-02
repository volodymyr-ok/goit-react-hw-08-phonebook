// import { FaRegAddressBook } from 'react-icons/fa';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Form } from 'components/Form/Form';
import { HoveredWord, StyledH2 } from 'utils/commonStyles';

const Contacts = () => {
  return (
    <>
      <StyledH2>
        <HoveredWord>
          <span>P</span>
          <span>h</span>
          <span>o</span>
          <span>n</span>
          <span>e</span>
          <span>b</span>
          <span>o</span>
          <span>o</span>
          <span>k</span>
        </HoveredWord>
      </StyledH2>
      <Form />
      <StyledH2>
        <HoveredWord>
          <span>C</span>
          <span>o</span>
          <span>n</span>
          <span>t</span>
          <span>a</span>
          <span>c</span>
          <span>t</span>
          <span>s</span>
        </HoveredWord>
      </StyledH2>
      <Filter />
      <ContactList />
    </>
  );
};

export default Contacts;
