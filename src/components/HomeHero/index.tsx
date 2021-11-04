/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import { InfoCardOne } from '../InfoCardOne';
import { InfoCardTwo } from '../InfoCardTwo';
import {
  Container,
  InfoContainer,
  InfoText,
  Pleasure,
  PleasureName,
  InfoCards
} from './styles';
// import picture from '../../assets'; //

export function HomeHero() {
  return (
    <Container>
      <img src="https://github.com/manoelduran.png" alt="Manoel Duran" />
      <InfoContainer>
        <InfoText>
          <Pleasure>Bem vindo,</Pleasure>
          <PleasureName>ao meu Website!</PleasureName>
        </InfoText>
        <InfoCards>
          <InfoCardOne />
          <InfoCardTwo />
        </InfoCards>
      </InfoContainer>
    </Container>
  );
}
