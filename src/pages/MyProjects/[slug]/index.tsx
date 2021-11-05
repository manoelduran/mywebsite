import React from 'react';
import Prismic from '@prismicio/client';
import Head from 'next/head';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { BannerProjeto } from '../../../components/BannerProjeto';
import { Header } from '../../../components/Header';
import { getPrismicClient } from '../../../services/prismic';

import { MyProjectContainer, Text, ProjectButton } from '../styles';
import { LoadingScreen } from '../../../components/LoadingScreen';

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
  const router = useRouter();
  if (router.isFallback) {
    return <LoadingScreen />;
  }
  return (
    <MyProjectContainer>
      <Head>
        <title>{projects.title} | Manoel Duran</title>
        <meta name="description" content={projects.description} />
        <meta property="og:image" content={projects.thumbnail} />
        <meta property="og:image:secure_url" content={projects.thumbnail} />
        <meta name="twitter:image" content={projects.thumbnail} />
        <meta name="twitter:image:src" content={projects.thumbnail} />
        <meta property="og:description" content={projects.description} />
      </Head>
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
