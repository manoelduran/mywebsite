import Link from 'next/link';
import { SectionTitle } from '../SectionTItle';
import { ProjectItem } from './ProjectItem';
import { Container, SectionContainer, ProjectsButton } from './styles';

export function Projects() {
  return (
    <Container>
      <SectionTitle title="Last Projects" />
      <SectionContainer>
        <ProjectItem
          title="Projeto 1"
          type="Website"
          slug="/"
          image="https://github.com/manoelduran.png"
        />
        <ProjectItem
          title="Projeto 1"
          type="Website"
          slug="/"
          image="https://github.com/manoelduran.png"
        />
        <ProjectItem
          title="Projeto 1"
          type="Website"
          slug="/"
          image="https://github.com/manoelduran.png"
        />
      </SectionContainer>
      <ProjectsButton type="button">
        <Link href="/projetos">
          <a>Ver todos os projetos</a>
        </Link>
      </ProjectsButton>
    </Container>
  );
}
