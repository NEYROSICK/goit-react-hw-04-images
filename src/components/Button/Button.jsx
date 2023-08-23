import PropTypes from 'prop-types';
import { ButtonEl, ButtonContainer } from './button.styled';

const Button = ({ fetchImages }) => {
  return (
    <ButtonContainer>
      <ButtonEl onClick={fetchImages}>Load more</ButtonEl>
    </ButtonContainer>
  );
};

Button.propTypes = {
  fetchImages: PropTypes.func.isRequired,
};

export default Button;
