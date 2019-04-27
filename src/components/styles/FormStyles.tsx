import styled from 'styled-components';
import { constants } from './constants';

export const FormStyles = styled.form`
  border: solid 2px black;
  padding: 1rem;
  width: 400px;
  margin-top: 20vh;
  background: ${props => props.theme.card_background};
  border: solid 1px ${props => props.theme.border_colour};
`;

export const InputStyles = styled.input`
  margin-top: 1.25rem;
  width: 300px;
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
