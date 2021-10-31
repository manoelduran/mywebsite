import React from 'react';
import { NavLink } from './NavLink';
import { Container, PagesList } from './styles';

export function Header() {
  return (
    <Container>
      <PagesList>
        <NavLink title="Home" path="/" />
        <NavLink title="Projetos" path="/32" />
      </PagesList>
    </Container>
  );
}
