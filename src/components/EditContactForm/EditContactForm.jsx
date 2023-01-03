import { Btn } from 'utils/commonStyles';
import { Backdrop } from './EditContactForm.styled';

export const EditContactFrom = () => {
  const closeModal = e => {
    console.log(e.target);
    if (e.target !== e.currentTarget) {
      return;
    }
    const modal = document.querySelector('.edit-contact-modal');
    modal.classList.remove('opened');
  };

  return (
    <Backdrop className="edit-contact-modal" onClick={closeModal}>
      <form className="edit-contact-form">
        <label htmlFor="name-changer">Name</label>
        <input type="text" name="name" id="name-changer" required />

        <label htmlFor="num-changer">Number</label>
        <input type="text" name="number" id="num-changer" required />

        <div className="btns-wrapper">
          <Btn type="submit">Save</Btn>

          <Btn type="button" onClick={closeModal}>
            Cancel
          </Btn>
        </div>
      </form>
    </Backdrop>
  );
};
