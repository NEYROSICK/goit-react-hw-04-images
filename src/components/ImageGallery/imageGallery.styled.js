import styled from '@emotion/styled';

export const Ul = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 16px;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const ErrorMsg = styled.p`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const LoaderContainer = styled.div`
  display: flex;
  height: calc(100vh - 120px);
  align-items: center;
`;
