import ImageGallery from 'components/ImageGallery';
import Searchbar from 'components/Searchbar';
import { useContext } from 'react';
import Modal from 'components/Modal';
import { Context } from 'context/globalContext';

const App = () => {
  const { isModalVisible } = useContext(Context);

  return (
    <>
      <Searchbar />
      <ImageGallery />
      {isModalVisible ? <Modal /> : null}
    </>
  );
};

export default App;
