import { ReactNode } from 'react';
import { Container, Title, Description } from './styles';

interface SectionTitleProps {
  title: string | ReactNode;
  description?: string | ReactNode;
}

export function SectionTitle({ title, description }: SectionTitleProps) {
  return (
    <Container data-aos="fade-right">
      <Title>#{title}</Title>
      {description && <Description>{description}</Description>}
    </Container>
  );
}
