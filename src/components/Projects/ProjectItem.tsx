import Link from 'next/link';
import { AiOutlineRightCircle } from 'react-icons/ai';
import {
  ProjectItemContainer,
  ProjectItemSection,
  ProjectItemButton,
  Overlay,
  Content,
  Title,
  Type
} from './styles';

interface ProjectItemProps {
  title: string;
  type: string;
  slug: string;
  image: string;
}

export function ProjectItem({ title, type, slug, image }: ProjectItemProps) {
  return (
    <ProjectItemContainer>
      <ProjectItemSection imgUrl={image}>
        <Overlay className="overlay" />
        <Content className="text">
          <Title># {title}</Title>
          <Type>- {type}</Type>
        </Content>
      </ProjectItemSection>
      <ProjectItemButton type="button">
        <Link href={`/projetos/${slug}`}>
          <a>
            Ver mais
            <AiOutlineRightCircle />
          </a>
        </Link>
      </ProjectItemButton>
    </ProjectItemContainer>
  );
}
