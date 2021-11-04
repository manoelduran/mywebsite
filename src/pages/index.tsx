import React from 'react';
import { ContactUs } from '../components/ContactUs';
import { Experiences } from '../components/Experiences';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { HomeHero } from '../components/HomeHero';
import { Knowledges } from '../components/Knowledges';
import { Projects } from '../components/Projects';
import { HomeContainer } from '../styles/styles';

export default function Home() {
  return (
    <HomeContainer>
      <Header />
      <main className="container">
        <HomeHero />
        <Experiences />
        <Projects />
        <Knowledges />
        <ContactUs />
      </main>
      <Footer />
    </HomeContainer>
  );
}
