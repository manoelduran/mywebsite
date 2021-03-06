import React, { useEffect } from 'react';
import Prismic from '@prismicio/client';
import Head from 'next/head';
import Aos from 'aos';
import { GetStaticProps } from 'next';
import { Header } from '../../components/Header';
import { MyProjectItem } from '../../components/MyProjectItem';
import { getPrismicClient } from '../../services/prismic';
import { Container } from '../../styles/MyProjectStyles';
import 'aos/dist/aos.css';

interface IProjects {
  slug: string;
  title: string;
  description: string;
  type: string;
  link: string;
  thumbnail: string;
}

interface ProjectsProps {
  projects: IProjects[];
}

export default function Projects({ projects }: ProjectsProps) {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <Container>
      <Head>
        <title>Projects | Manoel Duran</title>
        <meta name="description" content="Here is my portfolio!" />
        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:image:secure_url" content="/ogimage.png" />
        <meta name="twitter:image" content="/ogimage.png" />
        <meta name="twitter:image:src" content="/ogimage.png" />
        <meta property="og:description" content="Here is my portfolio!" />
      </Head>
      <Header />
      <main className="container">
        {projects.map(project => (
          <MyProjectItem
            key={project.slug}
            type={project.type}
            title={project.title}
            slug={project.slug}
            imgUrl={project.thumbnail}
          />
        ))}
      </main>
    </Container>
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
