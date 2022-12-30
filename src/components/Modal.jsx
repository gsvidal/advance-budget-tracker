import closeButton from '../assets/icons/close_icon.svg';

export const Modal = ({
  setIsModalOpen,
  isModalAnimate,
  setIsModalAnimate,
}) => {
  const hideModal = () => {
    setIsModalAnimate(false);
    setTimeout(() => {
      setIsModalOpen(false);
    }, 500);
  };

  return (
    <div className="modal">
      <div className="close-modal">
        <img src={closeButton} alt="Close Modal" onClick={hideModal} />
      </div>

      <form
        action=""
        className={`form ${isModalAnimate ? 'animate' : 'close'}`}
      >
        <legend>New Expense</legend>
      </form>
    </div>
  );
};
