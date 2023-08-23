import PropTypes from 'prop-types';
import { Li, Img } from './imageGalleryItem.styled';

const ImageGalleryItem = ({
  imageWebURL,
  imageLargeURL,
  descr,
  handleClick,
}) => {
  return (
    <Li
      onClick={() => {
        handleClick(imageLargeURL, descr);
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
  handleClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
