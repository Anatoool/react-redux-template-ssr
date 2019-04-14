const {
  API_DOMAIN,
} = process.env;

export const API_URL = process.env.NODE_ENV === 'production' ? `${API_DOMAIN}/api` : `/api`;

export const API_CONTROLLERS = {
  IDEAS: '/ideas',
};

export const CLIENT_PAGES = {
  HOME: '/',
  ABOUT: '/about',
  IDEAS: '/ideas',
  LICENSE: '/license',
  PRIVACY: '/privacy',
  TERMS: '/terms',
  UI_KIT: '/ui-kit',
  SEARCH: '/search',
};
