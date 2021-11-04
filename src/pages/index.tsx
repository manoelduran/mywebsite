/* eslint-disable no-console */
import { GetStaticProps } from 'next';
import React from 'react';
import Prismic from '@prismicio/client';
import { ContactUs } from '../components/ContactUs';
import { Experiences } from '../components/Experiences';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { HomeHero } from '../components/HomeHero';
import { Knowledges } from '../components/Knowledges';
import { Projects } from '../components/Projects';
import { getPrismicClient } from '../services/prismic';
import { HomeContainer } from '../styles/styles';

interface IProjects {
  slug: string;
  title: string;
  description: string;
  type: string;
  link: string;
  thumbnail: string;
}

interface HomeProps {
  projects: IProjects[];
}

export default function Home({ projects }: HomeProps) {
  return (
    <HomeContainer>
      <Header />
      <main className="container">
        <HomeHero />
        <Experiences />
        <Projects projects={projects} />
        <Knowledges />
        <ContactUs />
      </main>
      <Footer />
    </HomeContainer>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();
  const projectsResponse = await prismic.query(
    [Prismic.predicates.at('document.type', 'projects')],
    {
      orderings: '[document.first_publication_date desc]'
    }
  );
  console.log(projectsResponse.results);

  const projects = projectsResponse.results.map(project => ({
    slug: project.uid,
    title: project.data.title,
    description: project.data.description,
    type: project.data.type,
    link: project.data.link.url,
    thumbnail: project.data.thumbnail.url
  }));

  return {
    props: {
      projects
    },
    revalidate: 86400
  };
};
