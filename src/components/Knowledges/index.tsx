import React from 'react';
import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { SectionTitle } from '../SectionTItle';
import { KnowledgeItem } from './KnowledgeItem';
import { Container, SectionKnowledge } from './styles';

export function Knowledges() {
  return (
    <Container>
      <SectionTitle title="Conhecimentos" />
      <SectionKnowledge>
        <KnowledgeItem title="HTML5" icon={<AiFillHtml5 />} />
        <KnowledgeItem title="CSS" icon={<FaCss3Alt />} />
        <KnowledgeItem title="JAVASCRIPT" icon={<IoLogoJavascript />} />
        <KnowledgeItem title="REACT" icon={<FaReact />} />
      </SectionKnowledge>
    </Container>
  );
}
