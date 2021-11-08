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
  function handleScrollTop() {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }
  return (
    <Container>
      <DivContainer className="container">
        <TopButton type="button" onClick={handleScrollTop}>
          Voltar ao topo
        </TopButton>
        <IconLinks>
          <AiOutlineGithub
            onClick={() => handleRedirect('https://github.com/manoelduran')}
          />
          <AiFillLinkedin
            onClick={() =>
              handleRedirect(
                'https://www.linkedin.com/in/manoel-duran-63aaa0105/'
              )
            }
          />
        </IconLinks>
      </DivContainer>
    </Container>
  );
}
