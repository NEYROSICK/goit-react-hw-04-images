import styled from '@emotion/styled';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #0000008a;
  z-index: 100;
`;

export const ModalField = styled.div`
  max-width: 1000px;
  max-height: 1000px;
  padding: 20px;
`;
