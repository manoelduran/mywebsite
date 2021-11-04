import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  margin-top: 10rem;
  border-top: 1px solid ${({ theme }) => theme.backgroundLight};
  height: 5rem;
`;

export const DivContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const IconLinks = styled.section`
  display: flex;
  align-items: center;
  gap: 1rem;
  svg {
    width: 2rem;
    height: 2rem;
    color: ${({ theme }) => theme.text};
    transition: 0.5s;
    cursor: pointer;
    &:hover {
      color: ${({ theme }) => theme.primary};
    }
  }
  @media (max-width: 450px) {
    gap: 0.5rem;
    svg {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
`;

export const TopButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.secondary};
  font-weight: 300;
  font-size: 1.2rem;
  @media (max-width: 450px) {
    font-size: 0.9rem;
  }
`;
