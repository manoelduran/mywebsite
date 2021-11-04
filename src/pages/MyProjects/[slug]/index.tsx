import React from 'react';
import { BannerProjeto } from '../../../components/BannerProjeto';
import { Header } from '../../../components/Header';

import { MyProjectContainer, Text, ProjectButton } from '../styles';

export default function MyProject() {
  return (
    <MyProjectContainer>
      <Header />
      <BannerProjeto
        imgUrl="https://github.com/manoelduran.png"
        title="Projeto 01"
        type="Website"
      />
      <main>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
          quidem doloribus. Fugiat ipsam optio excepturi. Dolorem voluptatum
          illo temporibus porro quis rerum, fuga doloribus, a asperiores
          dolores, iusto molestiae. Quasi, magnam aliquid possimus provident
          rerum cum consequuntur aperiam. Non porro aliquam hic vel explicabo
          harum distinctio perspiciatis, quidem doloribus voluptatum esse, fugit
          asperiores mollitia quasi cum iure maiores ratione voluptatibus
          tenetur. Id modi dolorem expedita commodi beatae numquam quasi
          cupiditate deserunt dicta. Pariatur quo ullam magnam voluptatem autem
          neque repellat.
        </Text>
        <ProjectButton type="button">
          <a href="#">Ver projeto online</a>
        </ProjectButton>
      </main>
    </MyProjectContainer>
  );
}
