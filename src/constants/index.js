export const API_BASE_URL = 'http://localhost:9191';
export const OAUTH2_REDIRECT_URI = 'http://localhost:3000/oauth2/redirect'

export const GOOGLE_AUTH_URL = API_BASE_URL + '/uaa/oauth2/authorize/google?redirect_uri=' + OAUTH2_REDIRECT_URI;
export const FACEBOOK_AUTH_URL = API_BASE_URL + '/uaa/oauth2/authorize/facebook?redirect_uri=' + OAUTH2_REDIRECT_URI;
