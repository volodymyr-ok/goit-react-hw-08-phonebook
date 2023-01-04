import { Btn } from 'utils/commonStyles';
import {
  MdLogout,
  MdOutlineLightMode,
  MdOutlineNightlight,
} from 'react-icons/md';
import { Backdrop } from './UserMenuModal.styled';
import { useDispatch, useSelector } from 'react-redux';
import { changeTheme } from 'redux/filterSlice';
import { selectTheme } from 'redux/selectors';
import { themeChanger } from 'utils/themeChanger';
import { colors } from 'utils/theme';

export const UserMenuModal = () => {
  const dispatch = useDispatch();
  const currentTheme = useSelector(selectTheme);
  console.log(currentTheme);

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

  const toggleTheme = () => {
    if (currentTheme === 'dark') {
      dispatch(changeTheme('light'));
      const newColors = themeChanger('light');
      console.log(newColors);
      colors = Object.assign({}, colors, newColors);
    } else {
      dispatch(changeTheme('dark'));
      console.log(themeChanger('dark'));
      const newColors = themeChanger('dark');
      console.log(newColors);
      colors = Object.assign({}, colors, newColors);
    }
  };

  return (
    <Backdrop className="user-menu-backdrop" onClick={closeModal}>
      <div className="modal-container">
        <div className="user-menu-modal">
          <Btn type="button" className="theme-toggle" onClick={toggleTheme}>
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
