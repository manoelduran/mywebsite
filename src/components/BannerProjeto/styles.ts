import styled from 'styled-components';

interface ContainerProps {
  imgUrl: string;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 26rem;
  position: relative;
  padding: 3rem 5rem;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  background: url(${({ imgUrl }) => imgUrl}) no-repeat center;
  background-size: cover;
  @media (max-width: 700px) {
    padding: 2rem 2.5rem;
    height: 20rem;
  }
`;

export const BannerSection = styled.section`
  z-index: 2;
`;
export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  bottom: 0;
  background: ${({ theme }) => theme.gradient};
  opacity: 0.7;
  transition: 0.5s;
  &:hover {
    opacity: 0.5;
  }
`;
export const Title = styled.h1`
  color: ${({ theme }) => theme.primary};
  font-size: 3rem;
  @media (max-width: 700px) {
    font-size: 1.8rem;
  }
`;
export const Text = styled.h2`
  color: ${({ theme }) => theme.primary};
  font-size: 2rem;
  font-weight: 300;
  @media (max-width: 700px) {
    font-size: 1.2rem;
  }
`;
