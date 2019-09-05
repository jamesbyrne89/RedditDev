import styled from 'styled-components';
import { constants } from './constants';

export const FormStyles = styled.form`
  border: solid 2px black;
  padding: 2rem 2.5rem;
  width: 380px;
  margin: auto;
  margin-top: 20vh;
  background: ${props => props.theme.card_background};
  border: solid 1px ${props => props.theme.border_colour};
  h2 {
    font-family: ${constants.serif};
    margin-top: 0;
  }
`;

export const InputStyles = styled.input`
  margin-top: 1.25rem;
  line-height: 1.5;
  display: block;
  font-family: ${constants.sansSerif};
  font-size: 1rem;
  padding: 0.25em 0.75em;
  border: none;
  height: 2.75em;
  background: ${props => props.theme.main_background};
  border-radius: 6px;
  width: 100%;
  color: inherit;
  &:focus {
    &::placeholder {
      opacity: 0;
    }
  }
`;

export const FormSubmitButtonStyles = styled.button`
  display: flex;
  align-items: center;
  position: relative;
  background: none;
  border: 0;
  cursor: pointer;
  transition: all 0.2s ease-out;
  padding: 0 1em;
  line-height: 2.4;
  color: ${props => props.theme.button_colour};
  border: solid 2px ${props => props.theme.button_colour};
  margin-top: 1.5rem;
  &:hover {
    /* // text-decoration: underline; */
    color: ${props => props.theme.button_hover_colour};
    background: ${props => props.theme.button_colour};
  }
`;

export const ErrorMessageStyles = styled.span`
  display: block;
  font-family: ${constants.sansSerif};
  color: red;
  margin-top: 0.5rem;
  font-size: 0.875rem;
  min-height: 2.5em;
  line-height: 1.2;
`;
