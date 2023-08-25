import PropTypes from 'prop-types';
import { Li, Img } from './imageGalleryItem.styled';
import { useContext } from 'react';
import { Context } from 'context/globalContext';

const ImageGalleryItem = ({ imageWebURL, imageLargeURL, descr }) => {
  const { setModalVisible, setImageObj } = useContext(Context);

  const onImageClick = (url, descr) => {
    setModalVisible(true);
    setImageObj({ url, descr });
  };

  return (
    <Li
      onClick={() => {
        onImageClick(imageLargeURL, descr);
      }}
      className="gallery-item"
    >
      <Img width="200" src={imageWebURL} alt={descr} />
    </Li>
  );
};

ImageGalleryItem.propTypes = {
  imageWebURL: PropTypes.string.isRequired,
  imageLargeURL: PropTypes.string.isRequired,
  descr: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
