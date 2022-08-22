export const MOBILE_BREAK_POINT = 577
export const TABLET_BREAK_POINT = 769
export const LAPTOP_BREAK_POINT = 1025

export const colors = {
  shadowDarkGrey: 'rgba(24, 39, 75, 0.12)',
  shadowLightGrey: 'rgba(24, 39, 75, 0.08)',
}

// e.g. @media screen (min-width: ${media.tablet})
// base mobile width is >= 320px
export const media = {
  mobile: '576px',
  tablet: '768px',
  laptop: '1024px',
  desktopSm: '1200px',
  desktopLg: '1400px',
  maxPageWidth: '1680px',
}

export const breakpoint = {
  mobile: '@media (max-width: 576px)',
  tablet: '@media (max-width: 768px)',
  laptop: '@media (max-width: 1024px)',
  desktopSm: '@media (max-width: 1200px)',
  desktopLg: '@media (max-width: 1400px)',
  maxPageWidth: '@media (max-width: 1680px)',
}

export const mediaLargerThan = {
  mobile: '@media (min-width: 577px)',
  tablet: '@media (min-width: 769px)',
  laptop: '@media (min-width: 1025px)',
  desktopSm: '@media (min-width: 1201px)',
  desktopLg: '@media (min-width: 1401px)',
  maxPageWidth: '@media (min-width: 1681px)',
}
