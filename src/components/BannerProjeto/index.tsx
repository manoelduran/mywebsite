import { Container, BannerSection, Overlay, Title, Text } from './styles';

interface BannerProjetoProps {
  title: string;
  type: string;
  imgUrl: string;
}

export function BannerProjeto({ title, imgUrl, type }: BannerProjetoProps) {
  return (
    <Container imgUrl={imgUrl}>
      <Overlay />
      <BannerSection>
        <Title>{title}</Title>
        <Text>{type}</Text>
      </BannerSection>
    </Container>
  );
}
