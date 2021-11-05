import Link from 'next/link';
import { SectionTitle } from '../SectionTItle';
import { ProjectItem } from './ProjectItem';
import { Container, SectionContainer, ProjectsButton } from './styles';

interface IProjects {
  slug: string;
  title: string;
  description: string;
  type: string;
  link: string;
  thumbnail: string;
}

interface ProjectsProps {
  projects: IProjects[];
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <Container>
      <SectionTitle title="Últimos Projetos" />
      <SectionContainer>
        {projects.slice(0, 3).map(project => (
          <ProjectItem
            key={project.slug}
            title={project.title}
            type={project.type}
            slug={project.slug}
            image={project.thumbnail}
          />
        ))}
      </SectionContainer>
      <ProjectsButton type="button">
        <Link href="/MyProjects">
          <a>Ver todos os projetos</a>
        </Link>
      </ProjectsButton>
    </Container>
  );
}
