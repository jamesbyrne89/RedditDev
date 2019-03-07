import * as React from 'react';
import styled from 'styled-components';
import { constants } from '../styles/constants';

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

const SubRedditName = styled.h3`
    font-family: ${constants.sansSerif};
    padding: 0.5em 0.75em;
    margin-left: 0em;
    display: inline-block;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 0.75rem;
    color: #fff;
    letter-spacing: 1px;
  background: ${props => constants[`subreddit_colour_${props.colour}`]};
    padding: 1em;
   
`;

const PostTitle = styled.h2`
    padding: 1.5em 0;
    width: 100%;
    -webkit-transition: all 0.15s;
    transition: all 0.15s;
    background: #fff;
    text-align: left;
    a {
        font-family: 'Tiempos Headline', georgia, serif;
        font-size: 1.25rem;
        font-weight: 700;
        color: ${constants.text_grey_dark};
        text-decoration: none;
        line-height: 1.3;
        max-width: 100%;
        -webkit-box-decoration-break: clone;
        box-decoration-break: clone;
        -webkit-transition: all 0.15s;
        transition: all 0.15s;
    }
    a:hover {
        color: #000 !important;
        border-bottom: solid 1px #000;
    }
`;

function mapSubsToColours(sub) {
  console.log(sub.replace('r/', ''));
  switch (sub.replace('r/', '').toLowerCase()) {
    case 'css':
      return 'one';
    case 'webdev':
      return 'two';
    case 'web_design':
      return 'three';

    case 'javascript':
      return 'five';
    case 'frontend':
      return 'six';
    case 'graphql':
      return 'seven';
    case 'reactjs':
      return 'eight';
    case 'nodejs':
      return 'nine';
    default:
      return 'one';
  }
}

const Card: React.FunctionComponent<Props> = ({ subName, title, url }) => {
  //   console.log(props);
  return (
    <StyledCard>
      <SubRedditName colour={mapSubsToColours(subName)}>
        {subName}
      </SubRedditName>
      <PostTitle>
        <a href="${url}" target="blank">
           ${title}
        </a>
      </PostTitle>
    </StyledCard>
  );
};

export default Card;
