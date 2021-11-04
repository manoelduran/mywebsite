import React from 'react';
import Prismic from '@prismicio/client';
import { GetStaticPaths, GetStaticProps } from 'next';
import { BannerProjeto } from '../../../components/BannerProjeto';
import { Header } from '../../../components/Header';
import { getPrismicClient } from '../../../services/prismic';

import { MyProjectContainer, Text, ProjectButton } from '../styles';

interface IProjects {
  slug: string;
  title: string;
  description: string;
  type: string;
  link: string;
  thumbnail: string;
}

interface MyProjectProps {
  projects: IProjects;
}

export default function MyProject({ projects }: MyProjectProps) {
  return (
    <MyProjectContainer>
      <Header />
      <BannerProjeto
        imgUrl={projects.thumbnail}
        title={projects.title}
        type={projects.type}
      />
      <main>
        <Text>{projects.description}</Text>
        <ProjectButton type="button">
          <a href={projects.link}>Ver projeto online</a>
        </ProjectButton>
      </main>
    </MyProjectContainer>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const prismic = getPrismicClient();
  const projects = await prismic.query([
    Prismic.predicates.at('document.type', 'projects')
  ]);
  const paths = projects.results.map(project => ({
    params: {
      slug: project.uid
    }
  }));
  return {
    paths,
    fallback: true
  };
};

export const getStaticProps: GetStaticProps = async context => {
  const prismic = getPrismicClient();
  const { slug } = context.params;
  const response = await prismic.getByUID('projects', String(slug), {});

  const projects = {
    slug: response.uid,
    title: response.data.title,
    description: response.data.description,
    type: response.data.type,
    link: response.data.link.url,
    thumbnail: response.data.thumbnail.url
  };

  return {
    props: {
      projects
    },
    revalidate: 86400
  };
};
