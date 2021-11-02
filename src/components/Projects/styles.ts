import { darken } from 'polished';
import styled from 'styled-components';

interface ProjectItemContainerProps {
  imgUrl: string;
}

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
`;
export const ProjectsButton = styled.button`
  background: ${({ theme }) => theme.primary};
  padding: 0.8rem 3rem;
  border-radius: 0.5rem;
  border: none;
  transition: 0.5s;
  &:hover {
    background: ${({ theme }) => darken(0.05, theme.primary)};
  }
  a {
    text-transform: uppercase;
    color: #fff;
    font-size: 1.5rem;
    font-weight: 300;
  }
  @media (max-width: 500px) {
    padding: 1rem;
    a {
      font-size: 1rem;
    }
  }
`;

export const SectionContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  @media (max-width: 1000px) {
    gap: 2rem;
  }
`;

// ProjectItem //

export const ProjectItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 25rem;
  align-items: flex-end;
  position: relative;
  &:hover {
    > section {
      > div.text {
        right: -12rem;
      }
      > div.overlay {
        opacity: 0.4;
      }
    }
    > button a {
      color: ${({ theme }) => theme.primary};
    }
  }
  &:nth-child(even) {
    flex-direction: row-reverse;
    > button {
      margin: 3rem 5rem 0 0;
    }
    > section > div.text {
      text-align: right;
      right: 0;
      left: -10rem;
    }
    &:hover {
      > section > div.text {
        left: -12rem;
      }
    }
  }
  @media (max-width: 1000px) {
    &:nth-child(even) {
      flex-direction: row;
      > section {
        width: 100%;
        > div.text {
          left: 1rem;
          top: 1rem;
          text-align: left;
        }
      }
      > button {
        position: absolute;
        bottom: 1rem;
        right: 1rem;
        margin: 0;
      }
      &:hover {
        > section > div.text {
          left: 1rem;
        }
      }
    }
  }
  @media (max-width: 700px) {
    height: 17rem;
  }
`;

export const ProjectItemSection = styled.section<ProjectItemContainerProps>`
  width: 50rem;
  height: 100%;
  background: url(${({ imgUrl }) => imgUrl}) no-repeat center;
  background-size: cover;
  position: relative;
  @media (max-width: 1450px) {
    width: 40rem;
  }
  @media (max-width: 1000px) {
    width: 100%;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.gradient};
  opacity: 0.75;
  transition: 0.5s;
`;

export const Content = styled.div`
  position: absolute;
  top: 3rem;
  right: -10rem;
  transition: 0.5s;
  width: fit-content;
  @media (max-width: 1000px) {
    left: 1rem;
    top: 1rem;
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.primary};
  font-size: 2.5rem;
  text-shadow: -4px 5px 22px #11172b;
  @media (max-width: 450px) {
    font-size: 1.5rem;
  }
`;

export const Type = styled.h2`
  color: ${({ theme }) => theme.secondary};
  font-size: 2rem;
  font-weight: 300;
  text-shadow: -4px 5px 22px #11172b;
  @media (max-width: 450px) {
    font-size: 1rem;
  }
`;

export const ProjectItemButton = styled.button`
  height: 4rem;
  margin: 0 0 3rem 5rem;
  background: none;
  border: none;

  > a {
    color: #fff;
    font-size: 2rem;
    font-weight: 300;
    display: flex;
    align-items: center;
    gap: 0.8rem;
    transition: 0.5s;
  }
  @media (max-width: 1000px) {
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    margin: 0;
  }
  @media (max-width: 450px) {
    height: auto;
    a {
      font-size: 1.5rem;
      gap: 0.8rem;
    }
  }
`;
