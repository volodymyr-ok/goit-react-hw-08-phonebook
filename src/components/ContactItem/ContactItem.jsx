import PropTypes from 'prop-types';
import { StyledLI } from './ContactItem.styled';
import { RxDotsVertical } from 'react-icons/rx';
import { AdditionalMenu } from 'components/AdditionalMenu/AdditionalMenu';
import { Btn } from 'utils/commonStyles';
import { useSelector } from 'react-redux';
import { selectTheme } from 'redux/selectors';

export const ContactItem = ({
  id,
  name,
  number,
  changeName,
  changeNumber,
  changeId,
}) => {
  const theme = useSelector(selectTheme);

  const words = name.split(' ');
  const leters = [];
  words.forEach(word => leters.push(word[0]));
  const fisrtLetters = leters.join('');

  const getRandomColor = () => {
    const opacity = theme === 'dark' ? 0.1 : 0.6;

    const randomBetween = (min, max) =>
      min + Math.floor(Math.random() * (max - min + 1));
    const r = randomBetween(0, 255);
    const g = randomBetween(0, 255);
    const b = randomBetween(0, 255);
    const rgb = `rgba(${r},${g},${b}, ${opacity})`;

    return rgb;
  };

  const toggleAdditionalMenu = ({ target }) => {
    const modals = document.querySelectorAll('.additional-menu');
    modals.forEach(modal => {
      if (target.ariaLabel === modal.id) {
        modal.classList.toggle('opened');
      } else {
        modal.classList.remove('opened');
      }
    });
  };

  return (
    <>
      <StyledLI>
        <div
          className="fisrtLetters"
          style={{ backgroundColor: `${getRandomColor()}` }}
        >
          {fisrtLetters}
        </div>
        <div className="contact-data">
          <h3 className="name">{name}</h3>
          <p className="number">{number}</p>
        </div>

        <Btn
          type="button"
          className="additional-menu-btn"
          aria-label={name}
          onClick={toggleAdditionalMenu}
        >
          <RxDotsVertical size={30} />
        </Btn>
        <AdditionalMenu
          id={id}
          name={name}
          number={number}
          changeName={changeName}
          changeNumber={changeNumber}
          changeId={changeId}
        />
      </StyledLI>
    </>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
