import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  display: flex;
  gap: 2rem;
  margin-top: 5rem;
  align-items: center;
  justify-content: center;
  > img {
    width: 40rem;
    flex: 1;
  }
  @media (max-width: 1450px) {
    > img {
      width: 30rem;
    }
  }
  @media (max-width: 1000px) {
    > img {
      width: 22rem;
    }
  }
  @media (max-width: 700px) {
    flex-direction: column-reverse;
  }
`;
export const InfoContainer = styled.div`
  flex: 4;
  @media (max-width: 1450px) {
    flex: 1;
  }
  @media (max-width: 700px) {
    width: 100%;
  }
`;
export const InfoText = styled.section`
  width: 100%;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
`;
export const Pleasure = styled.text`
  font-size: 8rem;
  color: ${({ theme }) => theme.primary};
  @media (max-width: 1450px) {
    font-size: 5rem;
  }
  @media (max-width: 1000px) {
    font-size: 3rem;
  }
`;
export const PleasureName = styled.text`
  font-size: 3rem;
  font-weight: 400;
  color: ${({ theme }) => theme.secondary};
  @media (max-width: 1450px) {
    font-size: 2rem;
  }
  @media (max-width: 1000px) {
    font-size: 1.5rem;
  }
`;

export const InfoCards = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
