import {
  AiOutlineTwitter,
  AiOutlineGithub,
  AiFillLinkedin
} from 'react-icons/ai';
import { Container, DivContainer, TopButton, IconLinks } from './styles';

export function Footer() {
  function handleRedirect(url: string) {
    window.open(url);
  }
  return (
    <Container>
      <DivContainer>
        <TopButton type="button">Voltar ao topo</TopButton>
        <IconLinks>
          <AiOutlineTwitter
            onClick={() => handleRedirect('https://twitter.com')}
          />
          <AiOutlineGithub
            onClick={() => handleRedirect('https://github.com')}
          />
          <AiFillLinkedin
            onClick={() => handleRedirect('https://linkedin.com')}
          />
        </IconLinks>
      </DivContainer>
    </Container>
  );
}
