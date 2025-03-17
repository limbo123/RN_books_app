import {fetchRemoteConfig} from './firebase';

export interface Book {
  id: number;
  name: string;
  author: string;
  summary: string;
  genre: string;
  cover_url: string;
  views: string;
  likes: string;
  quotes: string;
}

export interface TopBannerSlide {
  id: number;
  book_id: number;
  cover: string;
}

export type YouWillLikeSectionBookId = number;

export interface BooksWithCategories {
  name: string;
  books: Book[];
}

export const fetchBooks = async (): Promise<Book[]> => {
  const data = await fetchRemoteConfig('json_data');
  return data ? data.books : [];
};

export const fetchBooksWithCategories = async (): Promise<
  BooksWithCategories[]
> => {
  const books = await fetchBooks();
  const booksCategories = books.reduce<{[key: string]: Book[]}>((acc, curr) => {
    if (!acc[curr.genre]) acc[curr.genre] = [];
    acc[curr.genre].push(curr);
    return acc;
  }, {});
  return Object.keys(booksCategories).map(genre => ({
    name: genre,
    books: booksCategories[genre],
  }));
};

export const fetchBookById = async (
  bookId: number,
): Promise<Book | undefined> => {
  const books = await fetchBooks();
  return books.find(book => book.id === bookId);
};

export const fetchTopBannerSlides = async (): Promise<TopBannerSlide[]> => {
  const data = await fetchRemoteConfig('json_data');
  return data ? data.top_banner_slides : [];
};

export const fetchYouWillLikeSection = async (): Promise<Book[]> => {
  const books = await fetchBooks();
  const data = await fetchRemoteConfig('json_data');
  const youWillLikeSection: number[] = data ? data.you_will_like_section : [];
  return youWillLikeSection.map(
    bookId => books.find(book => book.id === bookId) || ({} as Book),
  );
};

export const fetchDetailsCarouselBooks = async (): Promise<Book[]> => {
  const data = await fetchRemoteConfig('details_carousel');
  return data ? data.books : [];
};
