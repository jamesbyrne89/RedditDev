interface Iendpoints {
  [key: string]: string,
  webdev: string,
  web_design: string,
  frontend: string,
  css: string,
  javascript: string,
  react_js: string,
  graphql: string,
  nodejs: string,
}

export const endpoints: Iendpoints = {
  webdev: 'https://www.reddit.com/r/webdev.json?',
  web_design: 'https://www.reddit.com/r/web_design.json?',
  frontend: 'https://www.reddit.com/r/frontend.json?',
  css: 'https://www.reddit.com/r/css.json?',
  javascript: 'https://www.reddit.com/r/javascript.json?',
  react_js: 'https://www.reddit.com/r/reactjs.json?',
  graphql: 'https://www.reddit.com/r/graphql.json?',
  nodejs: 'https://www.reddit.com/r/nodejs.json?',
};
