import React from 'react';
import { Header } from '../../components/Header';
import { MyProjectItem } from '../../components/MyProjectItem';
import { Container } from './styles';

export default function MyProjects() {
  return (
    <Container>
      <Header />
      <main className="container">
        <MyProjectItem
          type="Website"
          title="Projeto 01"
          slug="teste"
          imgUrl="https://github.com/manoelduran.png"
        />
        <MyProjectItem
          type="Website"
          title="Projeto 01"
          slug="teste2"
          imgUrl="https://github.com/manoelduran.png"
        />
        <MyProjectItem
          type="Website"
          title="Projeto 01"
          slug="teste3"
          imgUrl="https://github.com/manoelduran.png"
        />
        <MyProjectItem
          type="Website"
          title="Projeto 01"
          slug="teste4"
          imgUrl="https://github.com/manoelduran.png"
        />
      </main>
    </Container>
  );
}
