import PropTypes from 'prop-types';
import { getImages } from 'api/images';
import { PureComponent } from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem';
import Button from 'components/Button';
import Loader from 'components/Loader';
import { Ul, ErrorMsg, LoaderContainer } from './imageGallery.styled';

class ImageGallery extends PureComponent {
  state = {
    images: [],
    status: 'resolved',
    totalHits: 0,
    isLoaderShown: false,
  };

  #page = 1;
  #errorMessage = '';

  componentDidUpdate(prevProps) {
    if (prevProps.query !== this.props.query) {
      this.#page = 1;
      this.setState({
        images: [],
        isLoadMoreShown: false,
        status: 'pending',
      });
      this.fetchImages();
    }
  }

  fetchImages = async () => {
    try {
      if (this.state.status === 'rejected') {
        this.setState({ status: 'pending' });
      } else {
        this.setState({ isLoaderShown: true });
      }

      const { hits: images, totalHits } = await getImages(
        this.props.query,
        this.#page
      );

      if (!images.length) {
        throw new Error('No matches found for your query :(');
      }

      this.setState(prevState => ({
        images: [...prevState.images, ...images],
        isLoaderShown: false,
        status: 'resolved',
        totalHits,
      }));

      this.#page += 1;
    } catch (error) {
      this.setState({ status: 'rejected' });
      this.#errorMessage = error.message;
    }
  };

  render() {
    const { images, status, totalHits, isLoaderShown } = this.state;
    const { onImageClick } = this.props;
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
      return <ErrorMsg>{this.#errorMessage}</ErrorMsg>;
    }

    if (status === 'resolved') {
      return (
        <>
          <Ul>
            {images.map(image => {
              return (
                <ImageGalleryItem
                  handleClick={onImageClick}
                  key={image.id}
                  imageWebURL={image.webformatURL}
                  imageLargeURL={image.largeImageURL}
                  descr={image.tags}
                />
              );
            })}
          </Ul>

          {isLoaderShown ? <Loader /> : null}
          {isLoadMoreShown ? <Button fetchImages={this.fetchImages} /> : null}
        </>
      );
    }
  }
}

ImageGallery.propTypes = {
  query: PropTypes.string.isRequired,
  onImageClick: PropTypes.func.isRequired,
};

export default ImageGallery;
