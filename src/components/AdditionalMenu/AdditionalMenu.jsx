import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsOperations';
import { TiDeleteOutline } from 'react-icons/ti';
import { MdOutlineCall, MdOutlineModeEditOutline } from 'react-icons/md';
import { Menu } from './AdditionalMenu.styled';
// import { useState } from 'react';

export const AdditionalMenu = ({ id, name, number }) => {
  const dispatch = useDispatch();
  // const [nameForChange, setNameForChange] = useState('');
  // const [numberForChange, setNumberForChange] = useState('');
  // const [idForChange, setIdForChange] = useState('');

  const handleEditContact = () => {
    const modal = document.querySelector('.edit-contact-modal');
    modal.classList.add('opened');
  };

  const handleDeleteContact = () => {
    dispatch(deleteContact(id));
  };

  return (
    <Menu className="additional-menu" id={name}>
      <li onClick={handleEditContact}>
        <p>Edit</p>
        <MdOutlineModeEditOutline className="editIcon" size={25} />
      </li>

      <li>
        <a href={`tel:${number}`}>
          <p>Call</p>
          <MdOutlineCall className="callIcon" size={25} />
        </a>
      </li>

      <li onClick={handleDeleteContact}>
        <p>Delete</p>
        <TiDeleteOutline className="deleteIcon" size={25} />
      </li>
    </Menu>
  );
};
