import React from 'react';
import { SectionTitle } from '../SectionTItle';
import { ExperienceItem } from './ExperienceItem';
import { Container, ExperienceSection } from './styles';

export function Experiences() {
  return (
    <Container>
      <SectionTitle title="01 ano" description="de experiência" />
      <ExperienceSection>
        <ExperienceItem year="2021" title="Dev Front-End" description="." />
        <ExperienceItem year="2021" title="Dev Front-End" description="." />
        <ExperienceItem year="2021" title="Dev Front-End" description="." />
        <ExperienceItem year="2021" title="Dev Front-End" description="." />
      </ExperienceSection>
    </Container>
  );
}
