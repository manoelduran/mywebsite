import React from 'react';
import { SectionTitle } from '../SectionTItle';
import { ExperienceItem } from './ExperienceItem';
import { Container, ExperienceSection } from './styles';

export function Experiences() {
  return (
    <Container>
      <SectionTitle title="01 ano" description="de experiência" />
      <ExperienceSection>
        <ExperienceItem
          year="2021"
          title="Dev Front-End"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum laborum maiores aliquam ratione ab earum omnis ducimus eligendi nobis possimus dolore eius necessitatibus consequatur, sunt voluptates quibusdam? Dolore, omnis ad?"
        />
        <ExperienceItem
          year="2021"
          title="Dev Front-End"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum laborum maiores aliquam ratione ab earum omnis ducimus eligendi nobis possimus dolore eius necessitatibus consequatur, sunt voluptates quibusdam? Dolore, omnis ad?"
        />
        <ExperienceItem
          year="2021"
          title="Dev Front-End"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum laborum maiores aliquam ratione ab earum omnis ducimus eligendi nobis possimus dolore eius necessitatibus consequatur, sunt voluptates quibusdam? Dolore, omnis ad?"
        />
        <ExperienceItem
          year="2021"
          title="Dev Front-End"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum laborum maiores aliquam ratione ab earum omnis ducimus eligendi nobis possimus dolore eius necessitatibus consequatur, sunt voluptates quibusdam? Dolore, omnis ad?"
        />
      </ExperienceSection>
    </Container>
  );
}
