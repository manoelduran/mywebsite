import Link from 'next/link';
import { Container, Overlay, SectionDiv, Title, Type } from './styles';

interface MyProjectItemProps {
  slug: string;
  title: string;
  type: string;
  imgUrl: string;
}

export function MyProjectItem({
  title,
  slug,
  type,
  imgUrl
}: MyProjectItemProps) {
  return (
    <Container imgUrl={imgUrl} data-aos="zoom-in">
      <Link href={`/Projects/${slug}`}>
        <a>
          <Overlay />
          <SectionDiv>
            <Title>{title}</Title>
            <Type>{type}</Type>
          </SectionDiv>
        </a>
      </Link>
    </Container>
  );
}
