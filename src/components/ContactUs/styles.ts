import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const Content = styled.div`
  margin-top: 2rem;
  width: 100%;
  background: ${({ theme }) => theme.backgroundLight};
  padding: 3rem;
`;

export const FormInputs = styled.div``;

export const User = styled.div`
  width: 100%;
  display: flex;
`;

export const UserInput = styled.input`
  width: 100%;
  height: 3rem;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.inputBackground};
  border: 1px solid ${({ theme }) => theme.border};
  padding: 1.7rem 1.5rem;
  color: ${({ theme }) => theme.primary};
  font-size: 1.2rem;
  font-weight: 400;
  outline: none;
  resize: none;
  transition: 0.5s;
  &:focus {
    border-color: ${({ theme }) => theme.primary};
  }
  &::placeholder {
    color: ${({ theme }) => theme.primary};
  }
  input + input {
    margin-left: 1rem;
  }
`;

export const FormTextArea = styled.div`
  width: 100%;
  margin-top: 1rem;
`;

export const TextArea = styled.textarea`
  padding: 1rem;
  width: 100%;
  height: 12rem;
  border-radius: 0.5rem;
  font-size: 1.5rem;
  resize: none;
  background: ${({ theme }) => theme.inputBackground};
  border: 1px solid ${({ theme }) => theme.border};
  color: ${({ theme }) => theme.primary};
  font-weight: 400;
  outline: none;
  transition: 0.5s;
  &:focus {
    border-color: ${({ theme }) => theme.primary};
  }
  &::placeholder {
    color: ${({ theme }) => theme.primary};
  }
`;

export const FormButton = styled.button`
  margin-top: 1rem;
  width: fit-content;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  padding: 1rem;
  font-size: 1.5rem;
  font-weight: 400;
  background: ${({ theme }) => theme.primary};
  resize: none;
  transition: 0.5s;
  &:hover {
    background: ${({ theme }) => darken(0.15, theme.primary)};
  }
  @media screen and (max-width: 600px) {
    padding: 0 3rem 0 3rem;
  }
`;
