import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const ExperienceSection = styled.section`
  width: 100%;
  margin-top: 7rem;
  display: flex;
  gap: 1.5rem;
  padding-bottom: 8rem;
  border-bottom: 3px solid ${({ theme }) => theme.primary};
  @media (max-width: 1000px) {
    gap: 1rem;
  }
  @media (max-width: 700px) {
    flex-direction: column;
    margin-top: 5rem;
    gap: 2rem;
  }
`;

export const ExperienceContainer = styled.div`
  &:nth-child(even) {
    margin-top: 4rem;
  }
  @media (max-width: 700px) {
    &:nth-child(even) {
      margin-top: 0;
    }
  }
`;
export const ExperienceDiv = styled.div`
  background: ${({ theme }) => theme.gradient};
  padding: 1rem;
  padding-top: 2.5rem;
  height: 20rem;
  max-width: 19rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  transition: 0.5s;
  &:hover {
    filter: brightness(1.3);
    transform: translateY(-20px);
  }
  @media (max-width: 1000px) {
    height: 15rem;
    padding-top: 1.5rem;
  }
  @media (max-width: 700px) {
    height: auto;
    padding: 2rem;
    max-width: 100%;
    &:hover {
      transform: translateY(0);
    }
  }
`;

export const Year = styled.h1`
  color: ${({ theme }) => theme.primary};
  font-size: 2rem;
  margin-bottom: 1.5rem;
  @media (max-width: 1000px) {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
  @media (max-width: 700px) {
    font-size: 2rem;
  }
`;
export const Function = styled.h2`
  color: ${({ theme }) => theme.secondary};
  font-size: 1.5rem;
  font-weight: 300;
  margin-bottom: 1rem;
  @media (max-width: 1000px) {
    font-size: 1rem;
  }
  @media (max-width: 700px) {
    font-size: 1.5rem;
  }
`;
export const Description = styled.p`
  color: ${({ theme }) => theme.textLight};
  font-size: 1rem;
  font-weight: 300;
  @media (max-width: 1000px) {
    font-size: 0.9rem;
  }
  @media (max-width: 700px) {
    font-size: 1rem;
  }
`;
