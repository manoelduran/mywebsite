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
            Thinking of <br />
            developing some software?
          </>
        }
        description={
          <>
            Send me and <br /> I will return your message!
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
                placeholder="Name"
                value={name}
                onChange={event => setName(event.target.value)}
              />
              <UserInput
                type="email"
                name="email"
                required
                placeholder="Email"
                value={email}
                onChange={event => setEmail(event.target.value)}
              />
            </User>
          </FormInputs>
          <FormTextArea>
            <TextArea
              name="message"
              required
              placeholder="Message"
              value={message}
              onChange={event => setMessage(event.target.value)}
            />
          </FormTextArea>
          <FormButton type="submit">Send</FormButton>
        </form>
      </Content>
    </Container>
  );
}
