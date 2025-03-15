import React, {useEffect} from 'react';
import {Text} from 'react-native';
import {useBookStore} from '../../store/useBookStore';

const BooksLibrary = () => {
  const {books, fetchBooks} = useBookStore();

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  console.log(books);

  return <Text>BooksLibrary</Text>;
};

export default BooksLibrary;
