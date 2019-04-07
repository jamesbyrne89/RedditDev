interface IConstants {
  sansSerif: string,
  serif: string,
  /* Colours */
  nearBlack: string,
  highlightColourOne: string,
  background_grey: string,
  text_grey_dark: string,
  text_grey_mid_one: string,
  text_grey_mid_two: string,
  subreddit_colour_one: string,
  subreddit_colour_two: string,
  subreddit_colour_three: string,
  subreddit_colour_four: string,
  subreddit_colour_five: string,
  subreddit_colour_six: string,
  subreddit_colour_seven: string,
  subreddit_colour_eight: string,
  subreddit_colour_nine: string,
  subreddit_colour_ten: string,
}

interface ISizes {
  desktop_lg: number,
  desktop_md: number,
  desktop_sm: number,
  tablet: number,
  mobile: number,
}

interface ITheme {}

export const constants: IConstants = {
  /* Typography */
  sansSerif: `'space mono',
helvetica,
arial,
sans-serif;`,
  serif: `'Tiempos Headline',
georgia,
serif`,
  /* Colours */
  nearBlack: '#24292e',
  highlightColourOne: '#fdf522',
  background_grey: '#eceef1',
  text_grey_dark: '#302F2F',
  text_grey_dark_two: '#2d303a',
  text_grey_mid_one: '#c9c9c9',
  text_grey_mid_two: '#ccc',
  subreddit_colour_one: '#CAD3C8',
  subreddit_colour_two: '#3B3B98',
  subreddit_colour_three: '#EAB543',
  subreddit_colour_four: '#FEA47F',
  subreddit_colour_five: '#ff6b81',
  subreddit_colour_six: '#55E6C1',
  subreddit_colour_seven: '#D6A2E8',
  subreddit_colour_eight: '#25CCF7',
  subreddit_colour_nine: '#006266',
  subreddit_colour_ten: '#535c68',
};

export const sizes: ISizes = {
  desktop_lg: 1600,
  desktop_md: 1376,
  desktop_sm: 1024,
  tablet: 768,
  mobile: 576,
};

export const lightTheme: ITheme = {
  header_background: '#fff',
  main_background: constants.background_grey,
  font_colour_primary: constants.nearBlack,
  card_background: '#fff',
  button_colour: constants.nearBlack,
};
export const darkTheme: ITheme = {
  header_background: constants.nearBlack,
  font_colour_primary: '#fff',
  main_background: constants.text_grey_dark_two,
  card_background: constants.text_grey_dark_two,
  button_colour: '#fff',
};
