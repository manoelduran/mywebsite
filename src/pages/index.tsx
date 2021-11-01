import React from 'react';
import { Experiences } from '../components/Experiences';
import { Header } from '../components/Header';
import { HomeHero } from '../components/HomeHero';
import { HomeContainer } from '../styles/styles';

export default function Home() {
  return (
    <HomeContainer>
      <Header />
      <main className="container">
        <HomeHero />
        <Experiences />
      </main>
    </HomeContainer>
  );
}
