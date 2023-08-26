import ImageGallery from 'components/ImageGallery';
import Searchbar from 'components/Searchbar';
import Modal from 'components/Modal';
import { useContext, useEffect } from 'react';
import { Context } from 'context/globalContext';
import { getImages } from 'api/images';
import {
  ErrorMsg,
  LoaderContainer,
} from 'components/ImageGallery/imageGallery.styled';
import Loader from 'components/Loader';

const App = () => {
  const {
    isModalVisible,
    query,
    page,
    setPage,
    images,
    setImages,
    status,
    setStatus,
    setLoaderShown,
    setTotalHits,
    setError,
    error,
  } = useContext(Context);

  useEffect(() => {
    if (query) {
      setPage(1);
      setImages([]);
      setStatus('pending');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  return (
    <>
      <Searchbar />
      {status === 'pending' ? (
        <LoaderContainer>
          <Loader />
        </LoaderContainer>
      ) : null}

      {status === 'rejected' ? <ErrorMsg>{error}</ErrorMsg> : null}

      {status === 'resolved' ? (
        <ImageGallery fetchImages={fetchImages} />
      ) : null}

      {isModalVisible ? <Modal /> : null}
    </>
  );
};

export default App;
