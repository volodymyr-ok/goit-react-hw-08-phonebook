import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Form } from 'components/Form/Form';
import { HoveredWord, StyledH2 } from 'utils/commonStyles';

const Contacts = () => {
  return (
    <>
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
      <Form />
      <Filter />
      <ContactList />
    </>
  );
};

export default Contacts;
