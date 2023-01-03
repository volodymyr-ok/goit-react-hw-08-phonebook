const closeMenu = e => {
  const modals = document.querySelectorAll('.additional-menu');
  const btns = document.querySelectorAll('.additional-menu-btn');

  for (const btn of btns) {
    if (e.target === btn) {
      return;
    }
  }

  modals.forEach(modal => {
    modal.classList.remove('opened');
  });
};
export default closeMenu;
