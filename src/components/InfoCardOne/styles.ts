import styled from 'styled-components';

export const Card = styled.pre`
  background: ${({ theme }) => theme.gradient};
  padding: 2rem;
  font-family: 'JetBrains Mono', monospace;
  font-weight: 300;
  color: #fff;
  width: 24rem;
  align-self: flex-start;
  transition: 1s !important;
  &:hover {
    filter: brightness(1.2);
  }
  @media (max-width: 1450px) {
    width: 18rem;
    padding: 1.5rem;
    font-size: 0.8rem;
  }
  @media (max-width: 1000px) {
    width: 100%;
  }
`;
export const CardText = styled.span`
  color: ${({ theme }) => theme.text};
  margin-bottom: 1rem;
  display: block;
`;
export const Info = styled.span`
  color: #c38cda;
`;
export const UserCardInfos = styled.div`
  margin: 0.2rem 0;
  margin-left: 1rem;
`;
export const UserName = styled.span`
  color: #7ac7e3;
`;
export const UserLastName = styled.span`
  color: #7ac7e3;
`;
