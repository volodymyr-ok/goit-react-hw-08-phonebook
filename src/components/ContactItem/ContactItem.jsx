import PropTypes from 'prop-types';
import { StyledLI } from './ContactItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsOperations';
import { TiDeleteOutline } from 'react-icons/ti';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <StyledLI>
      <p>
        <span className="name">{name}:</span>
        <span className="number">{number}</span>
      </p>

      <button type="button" onClick={() => dispatch(deleteContact(id))}>
        <TiDeleteOutline size={22} />
      </button>
    </StyledLI>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
