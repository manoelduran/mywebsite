import React from 'react';
import { SiTypescript } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { SectionTitle } from '../SectionTItle';
import { KnowledgeItem } from './KnowledgeItem';
import { Container, SectionKnowledge } from './styles';

export function Knowledges() {
  return (
    <Container>
      <SectionTitle title="Knowledge" />
      <SectionKnowledge>
        <KnowledgeItem title="JAVASCRIPT" icon={<IoLogoJavascript />} />
        <KnowledgeItem title="TYPESCRIPT" icon={<SiTypescript />} />
        <KnowledgeItem title="REACT" icon={<FaReact />} />
        <KnowledgeItem title="REACT NATIVE" icon={<FaReact />} />
      </SectionKnowledge>
    </Container>
  );
}
