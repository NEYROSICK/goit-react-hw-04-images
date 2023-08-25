import { getImages } from 'api/images';
import { useContext, useEffect, useState } from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem';
import Button from 'components/Button';
import Loader from 'components/Loader';
import { Ul, ErrorMsg, LoaderContainer } from './imageGallery.styled';
import { Context } from 'context/globalContext';

const ImageGallery = () => {
  const [images, setImages] = useState([]);
  const [status, setStatus] = useState('resolved');
  const [totalHits, setTotalHits] = useState(0);
  const [isLoaderShown, setLoaderShown] = useState(false);
  const [page, setPage] = useState(1);
  const [error, setError] = useState('');

  const { query } = useContext(Context);

  useEffect(() => {
    if (query) {
      setPage(1);
      setImages([]);
      setStatus('pending');
    }
  }, [query]);

  useEffect(() => {
    if (status === 'pending') {
      fetchImages();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  const fetchImages = async () => {
    try {
      if (status === 'rejected') {
        setStatus('pending');
      } else {
        setLoaderShown(true);
      }

      const { hits: receivedImages, totalHits: totalImages } = await getImages(
        query,
        page
      );

      if (!receivedImages.length) {
        throw new Error('No matches found for your query :(');
      }

      setImages([...images, ...receivedImages]);
      setPage(page + 1);
      setLoaderShown(false);
      setStatus('resolved');
      setTotalHits(totalImages);
    } catch (error) {
      setStatus('rejected');
      setError(error.message);
    }
  };

  const isLoadMoreShown =
    images.length && images.length < totalHits && !isLoaderShown;

  if (status === 'pending') {
    return (
      <LoaderContainer>
        <Loader />
      </LoaderContainer>
    );
  }

  if (status === 'rejected') {
    return <ErrorMsg>{error}</ErrorMsg>;
  }

  if (status === 'resolved') {
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
  }
};

export default ImageGallery;
