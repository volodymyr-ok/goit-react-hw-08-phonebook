import { Btn } from 'utils/commonStyles';
import {
  MdLogout,
  MdOutlineLightMode,
  MdOutlineNightlight,
} from 'react-icons/md';
import { Backdrop } from './UserMenuModal.styled';

export const UserMenuModal = () => {
  const closeModal = ({ target }) => {
    const userMenuBackdrop = document.querySelector('.user-menu-backdrop');
    const modalContainer = document.querySelector('.modal-container');

    if (target === modalContainer || target === userMenuBackdrop) {
      document.querySelector('.user-menu-backdrop').classList.remove('shown');
    }
  };

  const preventiveLogoutModal = () => {
    const userMenuBackdrop = document.querySelector('.user-menu-backdrop');

    userMenuBackdrop.classList.remove('shown');
    document.querySelector('.backdrop-logout').classList.add('shown');
  };

  return (
    <Backdrop className="user-menu-backdrop" onClick={closeModal}>
      <div className="modal-container">
        <div className="user-menu-modal">
          <Btn className="theme-toggle">
            <span className="dark active">
              <MdOutlineNightlight size={20} />
            </span>
            <span className="light">
              <MdOutlineLightMode size={20} />
            </span>
          </Btn>

          <Btn
            className="logout-btn"
            type="button"
            onClick={preventiveLogoutModal}
          >
            LogOut
            <MdLogout />
          </Btn>
        </div>
      </div>
    </Backdrop>
  );
};
