import React from 'react';
import Prismic from '@prismicio/client';
import { GetStaticProps } from 'next';
import { Header } from '../../components/Header';
import { MyProjectItem } from '../../components/MyProjectItem';
import { getPrismicClient } from '../../services/prismic';
import { Container } from './styles';

interface IProjects {
  slug: string;
  title: string;
  description: string;
  type: string;
  link: string;
  thumbnail: string;
}

interface MyProjectsProps {
  projects: IProjects[];
}

export default function MyProjects({ projects }: MyProjectsProps) {
  return (
    <Container>
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
