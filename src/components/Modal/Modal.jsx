import PropTypes from 'prop-types';
import { Backdrop, ModalField } from './modal.styled';
import { Component } from 'react';

class Modal extends Component {
  componentDidMount = () => {
    document.addEventListener('keydown', this.props.onEscClose);
  };

  componentWillUnmount = () => {
    document.removeEventListener('keydown', this.props.onEscClose);
  };

  render() {
    const { imageURL, descr, handleClick } = this.props;
    return (
      <Backdrop onClick={handleClick}>
        <ModalField>
          <img src={imageURL} alt={descr} />
        </ModalField>
      </Backdrop>
    );
  }
}

Modal.propTypes = {
  imageURL: PropTypes.string.isRequired,
  descr: PropTypes.string.isRequired,
};

export default Modal;
