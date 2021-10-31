import { lighten } from 'polished';
import styled from 'styled-components';

interface NavLinkContainerProps {
  isActive: boolean;
}
export const Container = styled.header`
  width: 100%;
  height: 4rem;
  background: ${({ theme }) => theme.background};
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid ${({ theme }) => theme.backgroundLight};
`;

export const PagesList = styled.ul`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

export const NavLinkContainer = styled.li<NavLinkContainerProps>`
  a {
    text-transform: uppercase;
    color: ${({ theme, isActive }) =>
      isActive ? theme.primary : theme.textHighlight};
    transition: 0.5s;
    &:hover {
      color: ${({ theme, isActive }) =>
        isActive
          ? lighten(0.2, theme.primary)
          : lighten(0.2, theme.textHighlight)};
    }
  }
`;
