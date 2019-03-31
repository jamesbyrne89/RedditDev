import styled from 'styled-components';
import { constants, sizes } from './constants';

export const CardStyles = styled.article`
    margin: 0 0 1.25em 0;
    width: 100%;
    background: white;
    break-inside: avoid;
    overflow-wrap: break-word;
    padding: 1em 0.75em;
    -webkit-transform: translateY(200px) scale(0.9);
    transform: translateY(200px) scale(0.9);
    opacity: 0;
    -webkit-transition: opacity 1s ease-in-out 0s, -webkit-transform 0.7s cubic-bezier(0.165, 0.84, 0.44, 1) 0s;
    transition: opacity 1s ease-in-out 0s, -webkit-transform 0.7s cubic-bezier(0.165, 0.84, 0.44, 1) 0s;
    transition: transform 0.7s cubic-bezier(0.165, 0.84, 0.44, 1) 0s, opacity 1s ease-in-out 0s;
    transition: transform 0.7s cubic-bezier(0.165, 0.84, 0.44, 1) 0s, opacity 1s ease-in-out 0s, -webkit-transform 0.7s cubic-bezier(0.165, 0.84, 0.44, 1) 0s;
    -webkit-column-break-inside: avoid;
    ${({ isAnimated }) => isAnimated && `transform: translateY(0) scale(1);
      opacity: 1;`}
      .card-header {
        width: 100%;
        display: flex;
        justify-content: space-between;
      }
`;

export const SubRedditNameStyles = styled.h3`
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

export const PostTitleStyles = styled.h2`
    padding: 1.5em 0;
    font-size: 1.25rem;
    margin: 0;
    -webkit-transition: all 0.15s;
    transition: all 0.15s;
    text-align: left;
    @media (max-width: ${sizes.tablet}px) {
      padding: 0.75em 0;
    }
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

export const CardFooterStyles = styled.footer`
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

.card__bar {
  font-size: 0.875em;
}`;

export const AddToFavouritesButtonStyles = styled.button`
  cursor: pointer;
  height: 20px;
  width: auto;
  line-height: 1;
  display: flex;
  align-items: center;
  @media (max-width: ${sizes.tablet}px) {
      height: 24px;
    }
`;
