import {
  ExperienceContainer,
  ExperienceDiv,
  Year,
  Function,
  Description
} from './styles';

interface ExperienceItemProps {
  year: string;
  title: string;
  description?: string;
}

export function ExperienceItem({
  year,
  title,
  description
}: ExperienceItemProps) {
  return (
    <ExperienceContainer data-aos="fade-up">
      <ExperienceDiv>
        <Year>{year}</Year>
        <Function>{title}</Function>
        {description && <Description>{description}</Description>}
      </ExperienceDiv>
    </ExperienceContainer>
  );
}
