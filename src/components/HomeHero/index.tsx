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
    <Container data-aos="fade-up">
      <img src="https://github.com/manoelduran.png" alt="Manoel Duran" />
      <InfoContainer>
        <InfoText>
          <Pleasure> Welcome to</Pleasure>
          <PleasureName>my website!</PleasureName>
        </InfoText>
        <InfoCards>
          <InfoCardOne />
          <InfoCardTwo />
        </InfoCards>
      </InfoContainer>
    </Container>
  );
}
