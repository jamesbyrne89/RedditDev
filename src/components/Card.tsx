import * as React from 'react';
import styled from 'styled-components';
import { constants } from '../styles/constants';
import {
  mapSubsToColours,
  getHostname,
  numCommentsText,
  getTimeAgo,
  debounce,
} from '../lib/utils';

const StyledCard = styled.article`
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
    font-size: 1.25rem;
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

const AddToFavouritesButton = styled.button`
  cursor: pointer;
  height: 16px;
  line-height: 1;
  display: flex;
  align-items: center;
`;

const Bar = styled.span`
font-size: 0.875em;
`;

type Props = {
  subName: string,
  title: string,
  url: string,
  permalink: string,
  num_comments: number,
  created_utc: number,
  onAddToFavourites: Function,
  isFavourite: boolean,
};

type State = { isAnimated: boolean };

class Card extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.cardRef = React.createRef();
    this.state = { isAnimated: false };
  }
  checkVisible = (e: any) => {
    if (this.state.isAnimated) {
      return false;
    }
    const card = this.cardRef.current;
    let scrollInAt;
    window.scrollY < 0
      ? scrollInAt = window.innerHeight
      : scrollInAt = window.scrollY + window.innerHeight -
        window.innerHeight * 0.1;
    const isShowing = scrollInAt > card.offsetTop;
    const isNotShowing = window.scrollY < scrollInAt;
    if (isShowing && isNotShowing && !this.state.isAnimated) {
      this.setState({ isAnimated: true });
      window.removeEventListener('scroll', this.onWindowScroll);
    }
  };

  componentDidMount() {
    this.onWindowScroll();
    window.addEventListener('scroll', this.onWindowScroll);
  }

  componentDidUpdate() {
    this.onWindowScroll();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onWindowScroll);
  }

  addToFavourites = () => {
    const {
      subName: subreddit_name_prefixed,
      title,
      url,
      permalink,
      num_comments,
      created_utc,
    } = this.props;
    const postData = {
      data: {
        subreddit_name_prefixed,
        title,
        url,
        permalink,
        num_comments,
        created_utc,
      },
    };

    this.props.onAddToFavourites(postData);
  };

  onWindowScroll = debounce(e => this.checkVisible(e), 150);
  render() {
    const {
      subName,
      title,
      url,
      permalink,
      num_comments,
      created_utc,
      isFavourite,
    } = this.props;

    const { isAnimated } = this.state;
    return (
      <StyledCard ref={this.cardRef} isAnimated={isAnimated}>
        <header className="card-header">
          <SubRedditName colour={mapSubsToColours(subName)}>
            {subName}
          </SubRedditName>
          <AddToFavouritesButton onClick={this.addToFavourites}>
            {isFavourite ? (
                  <svg
                    shapeRendering="geometricPrecision"
                    textRendering="geometricPrecision"
                    imageRendering="optimizeQuality"
                    viewBox="0 0 6.82666 8.533325000000001"
                    x="0px"
                    y="0px"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    height="20px"
                  >
                    <defs></defs><g>
                      <path
                        d="M3.41333 1.70208c0.371594,-0.557594 0.851559,-0.770898 1.29613,-0.740787 0.23215,0.0157244 0.453988,0.0985315 0.645429,0.234012 0.189815,0.134331 0.349358,0.320457 0.458709,0.544079 0.260024,0.531764 0.238177,1.276 -0.33728,2.03498l0.000397638 0.000299213c-0.00423228,0.00557874 -0.00890945,0.0106181 -0.013937,0.015122l-1.97276 2.0456 -0.0766654 -0.073752 0.0767795 0.0740472c-0.0408937,0.0424016 -0.108425,0.043626 -0.150827,0.00273228 -0.00284646,-0.00274409 -0.00550394,-0.00561417 -0.00797638,-0.00858268l-1.97295 -2.04576 -0.000208661 0.000200787c-0.00567323,-0.00588189 -0.0105315,-0.012252 -0.0145866,-0.0189646 -0.568776,-0.755831 -0.5895,-1.49626 -0.330512,-2.02591 0.109343,-0.223622 0.26889,-0.409748 0.458705,-0.544079 0.191441,-0.13548 0.41328,-0.218287 0.645425,-0.234012 0.444575,-0.0301142 0.924539,0.183193 1.29613,0.74078z"
                      />
                    </g><rect fill="none" width="6.82666" height="6.82666" />
                  </svg>
                ) : (
                  <svg
                    shapeRendering="geometricPrecision"
                    textRendering="geometricPrecision"
                    imageRendering="optimizeQuality"
                    viewBox="0 0 6.82666 8.533325000000001"
                    x="0px"
                    y="0px"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    height="20px"
                  >
                    <defs></defs><g>
                      <path
                        d="M3.41333 1.70208c0.371594,-0.557594 0.851559,-0.770898 1.29613,-0.740787 0.23215,0.0157244 0.453988,0.0985315 0.645429,0.234012 0.189815,0.134331 0.349358,0.320457 0.458709,0.544079 0.260024,0.531764 0.238177,1.276 -0.33728,2.03498l0.000397638 0.000299213c-0.00423228,0.00557874 -0.00890945,0.0106181 -0.013937,0.015122l-1.97276 2.0456 -0.0766654 -0.073752 0.0767795 0.0740472c-0.0408937,0.0424016 -0.108425,0.043626 -0.150827,0.00273228 -0.00284646,-0.00274409 -0.00550394,-0.00561417 -0.00797638,-0.00858268l-1.97295 -2.04576 -0.000208661 0.000200787c-0.00567323,-0.00588189 -0.0105315,-0.012252 -0.0145866,-0.0189646 -0.568776,-0.755831 -0.5895,-1.49626 -0.330512,-2.02591 0.109343,-0.223622 0.26889,-0.409748 0.458705,-0.544079 0.191441,-0.13548 0.41328,-0.218287 0.645425,-0.234012 0.444575,-0.0301142 0.924539,0.183193 1.29613,0.74078zm1.28196 -0.528283c-0.405449,-0.0274606 -0.85111,0.194484 -1.18585,0.777067 -0.00905118,0.0188425 -0.0237126,0.0352283 -0.0432402,0.046374 -0.0511614,0.0291969 -0.116315,0.0113898 -0.145512,-0.0397717l0.0926417 -0.0528701 -0.0925 0.0525c-0.335138,-0.58726 -0.782563,-0.810854 -1.18947,-0.783291 -0.193067,0.0130748 -0.377673,0.0820236 -0.537087,0.194839 -0.161035,0.113961 -0.296795,0.272701 -0.390374,0.464079 -0.227772,0.465803 -0.203764,1.1245 0.311051,1.80721l1.89839 1.96845 1.89836 -1.96845c0.514811,-0.682709 0.538823,-1.34141 0.311051,-1.80722 -0.0935827,-0.191378 -0.229343,-0.350118 -0.390378,-0.464079 -0.159413,-0.112815 -0.34402,-0.181764 -0.537091,-0.194839z"
                      />
                    </g><rect fill="none" width="6.82666" height="6.82666" />
                  </svg>
                )}
          </AddToFavouritesButton>
        </header>
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
  }
}

export default Card;
