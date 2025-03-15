import create from 'zustand';
import { fetchBooks, Book } from '../services/BooksService';

interface BookState {
  books: Book[];
  fetchBooks: () => Promise<void>;
}

export const useBookStore = create<BookState>((set) => ({
  books: [],
  fetchBooks: async () => {
    const books = await fetchBooks();
    set({ books });
  },
}));
