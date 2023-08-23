import { Dna } from 'react-loader-spinner';
import { Icon } from './loader.styled';

const Loader = () => {
  return (
    <Icon>
      <Dna
        visible={true}
        height="100"
        width="100"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </Icon>
  );
};

export default Loader;
