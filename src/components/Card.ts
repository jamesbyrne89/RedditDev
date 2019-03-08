import * as React from 'react';
import styled from 'styled-components';
import { constants } from '../styles/constants';
import {
  mapSubsToColours,
  getHostname,
  numCommentsText,
  getTimeAgo,
} from '../lib/utils';

type Props = {
  subName: string,
  title: string,
  url: string,
  permalink: string,
  num_comments: number,
};

const StyledCard = styled.article`
    margin: 0 0 1.25em 0;
    width: 100%;
    background: white;
    break-inside: avoid;
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
`;

const SubRedditName = styled.h3`
    font-family: ${constants.sansSerif};
    padding: 0.5em 0.75em;
    margin: 0;
    display: inline-block;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 0.75rem;
    color: #fff;
    letter-spacing: 1px;
  background: ${props => constants[`subreddit_colour_${props.colour}`]};
   
`;

const PostTitle = styled.h2`
    padding: 1.5em 0;
    font-size: 1.5rem;
    margin: 0;
    -webkit-transition: all 0.15s;
    transition: all 0.15s;
    text-align: left;
    a {
        font-family: 'Tiempos Headline', georgia, serif;
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

const CardFooter = styled.footer`
    font-weight: 400;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    font-size: 0.75rem;
    letter-spacing: 0.02em;
    color: ${constants.text_grey_mid_two};
.post-comments {
    font-family: ${constants.sansSerif};
    display: block;
    text-align: left;
    white-space: nowrap;
    padding: 0 0.75em;
    -webkit-transition: all 0.15s;
    transition: all 0.15s;
    a {
        -webkit-transition: all 0.15s;
        transition: all 0.15s;
        cursor: pointer;
    }
    a:hover {
        color: ${constants.nearBlack} !important;
        padding-bottom: 0.125em;
        border-bottom: solid 1px;
        -webkit-transition: all 0.1s;
        transition: all 0.1s;
    }
}
.post-comments, .short-url, .timestamp {
  padding: 0 0.25em;
}
`;

const Bar = styled.span`
font-size: 0.875em;
`;

const Card: React.FunctionComponent<Props> = (
  { subName, title, url, permalink, num_comments, created_utc },
) => (
  <StyledCard>
    <SubRedditName colour={mapSubsToColours(subName)}>
      {subName}
    </SubRedditName>
    <PostTitle>
      <a href={url} target="blank">
        {title}
      </a>
    </PostTitle>
    <CardFooter>
      <span className="short-url">{getHostname(url)}</span><Bar>|</Bar>
      <time className="timestamp">{getTimeAgo(created_utc)}</time>
      <Bar>|</Bar>
      <span className="post-comments">
        <a href={`https://reddit.com${permalink}`} target="blank">
          {numCommentsText(num_comments)}
        </a>
      </span>
    </CardFooter>
  </StyledCard>
);

export default Card;
