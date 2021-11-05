import { useState } from 'react';
import { SectionTitle } from '../SectionTItle';
import {
  Container,
  Content,
  FormInputs,
  User,
  UserInput,
  FormTextArea,
  TextArea,
  FormButton
} from './styles';

export function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  async function handleFormSubmit(event) {
    event.preventDefault();
    await fetch('/api/mail', {
      method: 'post',
      body: JSON.stringify({ name, email, message })
    });
    setName('');
    setEmail('');
    setMessage('');
  }
  return (
    <Container>
      <SectionTitle
        title={
          <>
            Precisa dos <br />
            meus serviços?
          </>
        }
        description={
          <>
            o formulário abaixo que
            <br /> irei retornar em breve
          </>
        }
      />
      <Content data-aos="fade-up">
        <form method="post" onSubmit={handleFormSubmit}>
          <FormInputs>
            <User>
              <UserInput
                type="name"
                name="name"
                min="1"
                max="30"
                required
                placeholder="Nome"
                value={name}
                onChange={event => setName(event.target.value)}
              />
              <UserInput
                type="email"
                name="email"
                required
                placeholder="E-mail"
                value={email}
                onChange={event => setEmail(event.target.value)}
              />
            </User>
          </FormInputs>
          <FormTextArea>
            <TextArea
              name="message"
              required
              placeholder="Mensagem"
              value={message}
              onChange={event => setMessage(event.target.value)}
            />
          </FormTextArea>
          <FormButton type="submit">Enviar</FormButton>
        </form>
      </Content>
    </Container>
  );
}
