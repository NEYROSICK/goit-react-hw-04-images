import { useContext } from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem';
import { Ul } from 'components/ImageGallery/imageGallery.styled';
import { Context } from 'context/globalContext';
import Button from 'components/Button';
import Loader from 'components/Loader';

const ImageGallery = ({ fetchImages }) => {
  const { images, totalHits, isLoaderShown } = useContext(Context);

  const isLoadMoreShown =
    images.length && images.length < totalHits && !isLoaderShown;

  return (
    <>
      <Ul>
        {images.map(image => {
          return (
            <ImageGalleryItem
              key={image.id}
              imageWebURL={image.webformatURL}
              imageLargeURL={image.largeImageURL}
              descr={image.tags}
            />
          );
        })}
      </Ul>

      {isLoaderShown ? <Loader /> : null}
      {isLoadMoreShown ? <Button fetchImages={fetchImages} /> : null}
    </>
  );
};

export default ImageGallery;
