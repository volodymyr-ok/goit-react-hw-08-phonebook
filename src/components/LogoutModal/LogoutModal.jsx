import { useDispatch } from 'react-redux';
import { logOut } from 'redux/authOperations';
import { Btn } from 'utils/commonStyles';
import { Backdrop, Modal } from './LogoutModal.styled';

export const LogoutModal = () => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    const backdrop = document.querySelector('.backdrop-logout');

    backdrop.classList.remove('shown');
    dispatch(logOut());
  };
  const closeModal = () => {
    const backdrop = document.querySelector('.backdrop-logout');

    backdrop.classList.remove('shown');
  };

  return (
    <Backdrop className="backdrop-logout" onClick={closeModal}>
      <Modal className="logout-modal">
        <p>Are you sure, you wanna leave?</p>

        <div>
          <Btn className="yes" onClick={handleLogOut}>
            Yes
          </Btn>
          <Btn className="no" onClick={closeModal}>
            No
          </Btn>
        </div>
      </Modal>
    </Backdrop>
  );
};
