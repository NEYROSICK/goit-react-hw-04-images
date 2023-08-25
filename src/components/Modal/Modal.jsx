import { Backdrop, ModalField } from './modal.styled';
import { useContext, useEffect } from 'react';
import { Context } from 'context/globalContext';

const Modal = () => {
  const {
    setModalVisible,
    imageObj: { url: imageURL, descr },
    setImageObj,
  } = useContext(Context);

  useEffect(() => {
    document.addEventListener('keydown', handleClose);
    return () => {
      document.removeEventListener('keydown', handleClose);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClose = e => {
    if (e.key === 'Escape' || e.target === e.currentTarget) {
      setModalVisible(false);
      setImageObj({});
    }
  };

  return (
    <Backdrop onClick={handleClose}>
      <ModalField>
        <img src={imageURL} alt={descr} />
      </ModalField>
    </Backdrop>
  );
};

export default Modal;
