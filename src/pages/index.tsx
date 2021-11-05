/* eslint-disable no-console */
import { GetStaticProps } from 'next';
import React, { useEffect } from 'react';
import Prismic from '@prismicio/client';
import Aos from 'aos';
import Head from 'next/head';
import { ContactUs } from '../components/ContactUs';
import { Experiences } from '../components/Experiences';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { HomeHero } from '../components/HomeHero';
import { Knowledges } from '../components/Knowledges';
import { Projects } from '../components/Projects';
import { getPrismicClient } from '../services/prismic';
import { HomeContainer } from '../styles/styles';
import 'aos/dist/aos.css';

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
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <HomeContainer>
      <Head>
        <title>Home | Manoel Duran</title>
        <meta
          name="description"
          content="I'm a software developer. Here you can know about me and see me portfolio!"
        />
        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:image:secure_url" content="/ogimage.png" />
        <meta name="twitter:image" content="/ogimage.png" />
        <meta name="twitter:image:src" content="/ogimage.png" />
        <meta
          property="og:description"
          content="I'm a software developer. Here you can know about me and see me portfolio!"
        />
      </Head>
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
