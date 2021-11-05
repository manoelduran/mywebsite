import React, { ReactNode } from 'react';
import { KnowledgeItemContainer, Name } from './styles';

interface KnowledgeItemProps {
  title: string;
  icon: ReactNode;
}

export function KnowledgeItem({ title, icon }: KnowledgeItemProps) {
  return (
    <KnowledgeItemContainer data-aos="fade-up">
      <Name>{title}</Name>
      {icon}
    </KnowledgeItemContainer>
  );
}
