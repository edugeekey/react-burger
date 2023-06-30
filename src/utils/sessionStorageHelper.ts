const REDIRECTED_FROM_ROUTE_KEY = 'redirectedFromRoute';

export function setToSessionStorage(key: string, data?: string | object): void {
  if (!data) {
    sessionStorage.removeItem(key);
    return;
  }
  sessionStorage.setItem(key, typeof data === 'string' ? data : JSON.stringify(data));
}

export function getRedirectedFromRoute(): string | null {
  return sessionStorage.getItem(REDIRECTED_FROM_ROUTE_KEY);
}

export function setRedirectedFromRoute(route: string): void {
  setToSessionStorage(REDIRECTED_FROM_ROUTE_KEY, route);
}

export function removeRedirectedFromRoute(): void {
  setToSessionStorage(REDIRECTED_FROM_ROUTE_KEY);
}
