export const dataSelector = (text: string): string => `[data-test=${text}]`;

const API_URL = 'https://norma.nomoreparties.space/api';
export const apiUrl = (url): string => `${API_URL}${url}`;
