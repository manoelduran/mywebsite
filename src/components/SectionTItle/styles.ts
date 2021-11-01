import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.primary};
  font-size: 4.5rem;
  @media (max-width: 1000px) {
    font-size: 2.5rem;
  }
  @media (max-width: 500px) {
    font-size: 1.8rem;
  }
`;
export const Description = styled.h2`
  color: ${({ theme }) => theme.secondary};
  font-weight: 300;
  font-size: 3.5rem;
  @media (max-width: 1000px) {
    font-size: 1.8rem;
  }
  @media (max-width: 500px) {
    font-size: 1.2rem;
  }
`;
