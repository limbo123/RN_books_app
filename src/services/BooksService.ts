import { fetchRemoteConfig } from './firebase';

export interface Book {
  id: string;
  title: string;
  author: string;
  image: string;
  genre: string;
}

export const fetchBooks = async (): Promise<Book[]> => {
  const data = await fetchRemoteConfig();
  return data ? data.books : [];
};
