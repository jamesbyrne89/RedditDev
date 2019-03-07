import * as React from 'react';
import styled from 'styled-components';

type Props = { subName: string };

const StyledCard = styled.article`
    margin: 0 0 1.25em 0;
    width: 100%;
    background: white;
    break-inside: avoid;
    overflow: hidden;
    position: relative;
    top: 0;
    overflow-wrap: break-word;
    padding: 1em 0.75em;
    -webkit-transform: translateY(200px) scale(0.9);
    transform: translateY(200px) scale(0.9);
    /* opacity: 0; */
    -webkit-transition: opacity 1s ease-in-out 0s, -webkit-transform 0.7s cubic-bezier(0.165, 0.84, 0.44, 1) 0s;
    transition: opacity 1s ease-in-out 0s, -webkit-transform 0.7s cubic-bezier(0.165, 0.84, 0.44, 1) 0s;
    transition: transform 0.7s cubic-bezier(0.165, 0.84, 0.44, 1) 0s, opacity 1s ease-in-out 0s;
    transition: transform 0.7s cubic-bezier(0.165, 0.84, 0.44, 1) 0s, opacity 1s ease-in-out 0s, -webkit-transform 0.7s cubic-bezier(0.165, 0.84, 0.44, 1) 0s;
    -webkit-column-break-inside: avoid;
    break-inside: avoid;
`;

const Card: React.FunctionComponent<Props> = ({ subName, title }) => {
  //   console.log(props);
  return (
    <StyledCard>
      <h2>{title}</h2>>
    </StyledCard>
  );
};

export default Card;
