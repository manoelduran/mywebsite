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
      <SectionTitle title="Last Projects" />
      <SectionContainer>
        {projects.slice(0, 4).map(project => (
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
        <Link href="/Projects">
          <a>See all projects</a>
        </Link>
      </ProjectsButton>
    </Container>
  );
}
