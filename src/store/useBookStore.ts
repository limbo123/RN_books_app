import {create} from 'zustand';
import {
  fetchBooks,
  Book,
  TopBannerSlide,
  fetchTopBannerSlides,
  fetchYouWillLikeSection,
  BooksWithCategories,
  fetchBooksWithCategories,
} from 'src/services/BooksService';

interface BookState {
  books: Book[];
  topBannerSlides: TopBannerSlide[];
  youWillLikeSection: Book[];
  booksWithCategories: BooksWithCategories[];
  fetchBooks: () => Promise<void>;
  fetchTopBannerSlides: () => Promise<void>;
  fetchYouWillLikeSection: () => Promise<void>;
  fetchBooksWithCategories: () => Promise<void>;
}

export const useBookStore = create<BookState>(set => ({
  books: [],
  fetchBooks: async () => {
    const books = await fetchBooks();
    set({books});
  },
  topBannerSlides: [],
  fetchTopBannerSlides: async () => {
    const topBannerSlides = await fetchTopBannerSlides();
    set({topBannerSlides});
  },
  youWillLikeSection: [],
  fetchYouWillLikeSection: async () => {
    const youWillLikeSection = await fetchYouWillLikeSection();
    set({youWillLikeSection});
  },
  booksWithCategories: [],
  fetchBooksWithCategories: async () => {
    const booksWithCategories = await fetchBooksWithCategories();
    set({booksWithCategories});
  },
}));
