import closeButton from '../assets/icons/close_icon.svg';

export const Modal = ({ setIsModalOpen }) => {
  const hideModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="modal">
      <div className="close-modal">
        <img src={closeButton} alt="Close Modal" onClick={hideModal} />
      </div>
    </div>
  );
};
