const REFRESH_TOKEN_KEY = 'refreshToken';
const ACCESS_TOKEN_KEY = 'accessToken';

export function getAccessToken(): string {
  return localStorage.getItem(ACCESS_TOKEN_KEY) ?? '';
}

export function getRefreshToken(): string {
  return localStorage.getItem(REFRESH_TOKEN_KEY) ?? '';
}

export function isTokensEmpty(): boolean {
  return !getRefreshToken() && !getAccessToken();
}

export function setToLocalStorage(key: string, data?: string | object): void {
  if (!data) {
    localStorage.removeItem(key);
    return;
  }
  localStorage.setItem(key, typeof data === 'string' ? data : JSON.stringify(data));
}

export function setAccessToken(token?: string): void {
  setToLocalStorage(ACCESS_TOKEN_KEY, token);
}

export function setRefreshToken(token?: string): void {
  setToLocalStorage(REFRESH_TOKEN_KEY, token);
}

export function setTokens(data?: { refreshToken: string; accessToken: string }): void {
  setAccessToken(data?.accessToken);
  setRefreshToken(data?.refreshToken);
}
