import * as React from 'react';
import {
  CardStyles,
  CardFooterStyles,
  AddToFavouritesButtonStyles,
  SubRedditNameStyles,
  PostTitleStyles,
} from './styles/CardStyles';
import {
  mapSubsToColours,
  getHostname,
  numCommentsText,
  getTimeAgo,
  debounce,
} from '../lib/utils';

type Props = {
  subName: string,
  title: string,
  url: string,
  id: string,
  permalink: string,
  num_comments: number,
  created_utc: number,
  onAddToFavourites: Function,
  isFavourite: boolean,
  doc_id?: string,
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
    if (!this.cardRef.current) {
      return;
    }
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
      id,
      doc_id,
    } = this.props;
    console.log({ doc_id });
    const postData = {
      ...(doc_id && { doc_id: doc_id }),
      data: {
        subreddit_name_prefixed,
        title,
        url,
        permalink,
        num_comments,
        created_utc,
        id,
      },
    };
    console.log({ postData });
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
      <CardStyles ref={this.cardRef} isAnimated={isAnimated}>
        <header className="card-header">
          <SubRedditNameStyles colour={mapSubsToColours(subName)}>
            <a href={`https://reddit.com/${subName}`}>{subName}</a>
          </SubRedditNameStyles>
          <AddToFavouritesButtonStyles onClick={this.addToFavourites}>
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
                    height="100%"
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
                    height="100%"
                  >
                    <defs></defs><g>
                      <path
                        d="M3.41333 1.70208c0.371594,-0.557594 0.851559,-0.770898 1.29613,-0.740787 0.23215,0.0157244 0.453988,0.0985315 0.645429,0.234012 0.189815,0.134331 0.349358,0.320457 0.458709,0.544079 0.260024,0.531764 0.238177,1.276 -0.33728,2.03498l0.000397638 0.000299213c-0.00423228,0.00557874 -0.00890945,0.0106181 -0.013937,0.015122l-1.97276 2.0456 -0.0766654 -0.073752 0.0767795 0.0740472c-0.0408937,0.0424016 -0.108425,0.043626 -0.150827,0.00273228 -0.00284646,-0.00274409 -0.00550394,-0.00561417 -0.00797638,-0.00858268l-1.97295 -2.04576 -0.000208661 0.000200787c-0.00567323,-0.00588189 -0.0105315,-0.012252 -0.0145866,-0.0189646 -0.568776,-0.755831 -0.5895,-1.49626 -0.330512,-2.02591 0.109343,-0.223622 0.26889,-0.409748 0.458705,-0.544079 0.191441,-0.13548 0.41328,-0.218287 0.645425,-0.234012 0.444575,-0.0301142 0.924539,0.183193 1.29613,0.74078zm1.28196 -0.528283c-0.405449,-0.0274606 -0.85111,0.194484 -1.18585,0.777067 -0.00905118,0.0188425 -0.0237126,0.0352283 -0.0432402,0.046374 -0.0511614,0.0291969 -0.116315,0.0113898 -0.145512,-0.0397717l0.0926417 -0.0528701 -0.0925 0.0525c-0.335138,-0.58726 -0.782563,-0.810854 -1.18947,-0.783291 -0.193067,0.0130748 -0.377673,0.0820236 -0.537087,0.194839 -0.161035,0.113961 -0.296795,0.272701 -0.390374,0.464079 -0.227772,0.465803 -0.203764,1.1245 0.311051,1.80721l1.89839 1.96845 1.89836 -1.96845c0.514811,-0.682709 0.538823,-1.34141 0.311051,-1.80722 -0.0935827,-0.191378 -0.229343,-0.350118 -0.390378,-0.464079 -0.159413,-0.112815 -0.34402,-0.181764 -0.537091,-0.194839z"
                      />
                    </g><rect fill="none" width="6.82666" height="6.82666" />
                  </svg>
                )}
          </AddToFavouritesButtonStyles>
        </header>
        <PostTitleStyles>
          <a href={url} target="blank">
            {title}
          </a>
        </PostTitleStyles>
        <CardFooterStyles>
          <span className="short-url">{getHostname(url)}</span><span
            className="card__bar"
          >
            |
          </span>
          <time className="timestamp">{getTimeAgo(created_utc)}</time>
          <span className="card__bar">|</span>
          <span className="post-comments">
            <a href={`https://reddit.com${permalink}`} target="blank">
              {numCommentsText(num_comments)}
            </a>
          </span>
        </CardFooterStyles>
      </CardStyles>
    );
  }
}

export default Card;
