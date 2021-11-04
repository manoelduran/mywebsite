import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
`;

export const SectionKnowledge = styled.section`
  margin-top: 8rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8rem;
  @media (max-width: 1000px) {
    gap: 5rem;
  }
  @media (max-width: 700px) {
    gap: 3rem;
    flex-wrap: wrap;
    margin-top: 5rem;
  }
`;

export const KnowledgeItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  align-items: center;
  justify-content: center;
  svg {
    width: 6.5rem;
    height: 6.5rem;
    color: ${({ theme }) => theme.secondary};
    transition: 0.3s;
    &:hover {
      color: ${({ theme }) => theme.primary};
      transform: scale(1.2);
    }
  }
  @media (max-width: 1000px) {
    svg {
      width: 5rem;
      height: 5rem;
    }
  }
`;

export const Name = styled.p`
  color: ${({ theme }) => theme.primary};
  font-size: 1.3rem;
  font-weight: 300;
  text-transform: uppercase;
  @media (max-width: 1000px) {
    font-size: 1rem;
  }
`;
